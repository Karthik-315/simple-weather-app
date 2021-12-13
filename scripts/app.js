"use strict";
import { currentWeatherTestData, forecastWeatherTestData } from "./test_data.js";

/* Variables */
// DOM elements
const body = document.querySelector(".body");

const testDataIndicator = document.querySelector(".header__test-data-indicator");
const headerClock = document.querySelector(".header__clock");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const autoRefreshButton = document.querySelector(".nav__link--checkbox");
const themeButton = document.querySelector(".nav__link--theme");
const lightModeIcon = document.querySelector(".nav__theme--light-mode");
const darkModeIcon = document.querySelector(".nav__theme--dark-mode");
const menuSliderButton = document.querySelector(".nav__link--menu");

const mainData = document.querySelector(".section--main-data");
const cityContainer = document.querySelector(".article__city");
const dateContainer = document.querySelector(".article__date-text");
const temperatureContainer = document.querySelector(".article__temperature__degrees");
let temperatureUnitInactive;
let temperatureUnitActive;
const weatherContainer = document.querySelector(".article__status__main");
const weatherIconContainer = document.querySelector(".article__temperature__icon");
const weatherDescContainer = document.querySelector(".article__status__desc");

const otherData = document.querySelector(".section--side-data");
const maxTempContainer = document.querySelector(".text--max-temp");
const minTempContainer = document.querySelector(".text--min-temp");
const sunriseContainer = document.querySelector(".text--sunrise");
const sunsetContainer = document.querySelector(".text--sunset");
const humidityContainer = document.querySelector(".text--humidity");
const pressureContainer = document.querySelector(".text--pressure");

const predictionContainer = document.querySelector(".article__prediction-container");
let predictionSlideLeft = "";
let predictionSlideRight = "";

const testDataModal = document.querySelector(".section--test-data-modal");
const bgBlur = document.querySelector(".blur-overlay");
const closeModal = document.querySelector(".modal__close-button");

const errorMessageSection = document.querySelector(".section--error-message");
const additionalErrorMessage = document.querySelector(".error-message--additional");
const errorCodeText = document.querySelector(".error--status-code");
const errorMessage = document.querySelector(".error--text");
const errorOccurredWhile = document.querySelector(".error--occurred-while");

const lastUpdatedTime = document.querySelector(".article__last-updated-time");
const refreshButton = document.querySelector(".article__refresh-button");
const quoteText = document.querySelector(".article__quote-text");
const quoteAuthor = document.querySelector(".article__quote-author-text");
let predictionDays = "";

/* Other variables */
const RUN_ON_TEST_DATA = true;
let currentTheme;
let navMenuStatus = "hidden";
// prettier-ignore
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// prettier-ignore
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let hasErrors = false;
const APIKey = ``; // Your API key here
const weatherURLPrefix = `https://api.openweathermap.org/data/2.5/weather?`;
const weatherFcURLPrefix = `https://api.openweathermap.org/data/2.5/forecast?`;
let refreshInterval = 30; // In minutes
let refreshWeather = "";
let activeTemperatureUnit = localStorage.getItem("activeTemperatureUnit") || "C";
let inactiveTemperatureUnit = localStorage.getItem("inActiveTemperatureUnit") || "F";
let forecastDateFormat = localStorage.getItem("forecastDateFormat") || "ddmm";
const quoteURL = `https://type.fit/api/quotes`;

/* 
Display current time on header, footer (last updated time), and sunrise and sunset timings
currentTime -> By default, true. Fetches current time if true, or converts inTime to date string.
inTime -> Raw date (unix epoch) to be passed if you want to calculate a specific time.
 */
const fetchReadableTime = function (currentTime = true, inTime = 0) {
    let minutes,
        hours = 0;

    let dateString = currentTime ? new Date() : new Date(inTime * 1000);

    hours = dateString.getHours().toString().padStart(2, 0);
    minutes = dateString.getMinutes().toString().padStart(2, 0);

    if (currentTime) {
        headerClock.innerHTML = `${hours}:${minutes}`;
        lastUpdatedTime.innerHTML = `${hours}:${minutes}`;
    }

    return `${hours}:${minutes}`;
};

// Refresh at a given frequency (refreshInterval)
const startTimer = function () {
    refreshWeather = setInterval(() => {
        fetchReadableTime();
        getWeatherData();
    }, refreshInterval * 60000);
};

const setTheme = function (switchToTheme) {
    if (switchToTheme === "light") {
        currentTheme = "light";

        body.classList.remove("dark-mode");

        lightModeIcon.classList.add("hidden");
        darkModeIcon.classList.remove("hidden");
    } else {
        currentTheme = "dark";

        body.classList.add("dark-mode");

        lightModeIcon.classList.remove("hidden");
        darkModeIcon.classList.add("hidden");
    }

    // Save preffered theme to the browser storage.
    localStorage.setItem("theme", currentTheme);
};

// Current location for weather data.
const getCurrentLocation = function () {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
};

// Displays error message when an exception is encountered.
const displayError = function (errorMsg) {
    mainData.classList.add(`hidden`);
    otherData.classList.add(`hidden`);

    errorMessageSection.classList.remove("hidden");

    errorCodeText.innerHTML = errorMsg.status;
    errorMessage.innerHTML = errorMsg.message;
    errorOccurredWhile.innerHTML = errorMsg.occurredWhile;
    additionalErrorMessage.innerHTML = errorMsg.additional;
};

// Fetch data for current weather and forecast.
const getWeatherData = async function () {
    let currentWeatherData;
    let forecastData;

    // If RUN_ON_TEST_DATA is false, make sure to have a valid API key.
    if (RUN_ON_TEST_DATA) {
        currentWeatherData = currentWeatherTestData;
        forecastData = forecastWeatherTestData;
        testDataIndicator.innerHTML = `Running on test data`;
        testDataIndicator.style.opacity = 1;
    } else {
        const currLoc = await getCurrentLocation();
        const { latitude: lat, longitude: lon } = currLoc.coords;
        const weatherURL = `${weatherURLPrefix}lat=${lat}&lon=${lon}&appid=${APIKey}`;
        // const weatherURL = `https://api.aaaaopenweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
        const weatherFcURL = `${weatherFcURLPrefix}lat=${lat}&lon=${lon}&appid=${APIKey}`;

        testDataIndicator.style.opacity = 0;

        currentWeatherData = await fetch(weatherURL)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    const errorMsg = {
                        status: response.status,
                        message: response.statusText,
                        occurredWhile: `Fetching current weather data`,
                        additional: ``,
                    };

                    errorMsg.status === 401 &&
                        (errorMsg.additional = `Pssst... do you have the correct API key?`);

                    displayError(errorMsg);
                    hasErrors = true;
                }
            })
            .catch((err) => {
                const errorMsg = {
                    status: ``,
                    message: err.message,
                    occurredWhile: `Fetching current weather data`,
                    additional: ``,
                };

                `${err.message}`.includes(`Failed to fetch`) && (errorMsg.status = `NA`),
                    (errorMsg.additional = `Is the API URL correct?`);

                displayError(errorMsg);
                hasErrors = true;
            });

        if (hasErrors) return;

        forecastData = await fetch(weatherFcURL)
            .then((forecastRes) => {
                if (forecastRes.ok) {
                    return forecastRes.json();
                } else {
                    const errorMsg = {
                        status: forecastRes.status,
                        message: forecastRes.statusText,
                        occurredWhile: `Fetching forecast weather data`,
                        additional: ``,
                    };

                    errorMsg.status === 401 &&
                        (errorMsg.additional = `Pssst... do you have the correct API key?`);

                    displayError(errorMsg);
                    hasErrors = true;
                }
            })
            .catch((err) => {
                const errorMsg = {
                    status: ``,
                    message: err.message,
                    occurredWhile: `Fetching forecast weather data`,
                    additional: ``,
                };

                `${err.message}`.includes(`Failed to fetch`) && (errorMsg.status = `NA`),
                    (errorMsg.additional = `Is the API URL correct?`);

                displayError(errorMsg);
                hasErrors = true;
            });

        if (hasErrors) return;
    }
    displayData(currentWeatherData, forecastData);
};

// Convert from Kelvin to preffered unit
const convertTemperature = function (temperature) {
    return activeTemperatureUnit === "C"
        ? (temperature - 273).toFixed(0)
        : ((temperature - 273) * (9 / 5) + 32).toFixed(0);
};

// Add suffix (th, nd, etc) to day
const addSuffix = function (day) {
    const lastDigit = day % 10;
    const lastTowDigits = day % 100;

    if (lastDigit === 1 && lastTowDigits != 11) return `${day}st`;
    if (lastDigit === 2 && lastTowDigits != 12) return `${day}nd`;
    if (lastDigit === 3 && lastTowDigits != 13) return `${day}rd`;

    return `${day}th`;
};

// Get current day, and set it to the UI.
const getCurrDay = function (rawDate) {
    const timeInSecs = rawDate * 1000;
    const dateString = new Date(timeInSecs);
    const day = `${dateString.getDate().toString().padStart(2, 0)}`;
    const formattedDay = addSuffix(day);
    const dayOfTheWeek = `${days[dateString.getDay()]}`;
    // prettier-ignore
    const formattedDate = `${formattedDay} ${months[dateString.getMonth()]}`;

    // Example -> Monday, 15th November
    dateContainer.innerHTML = `${dayOfTheWeek}, ${formattedDate}`;
};

// Get a random inSpiRAtiOnAl quote.
const getQuote = async function () {
    const quoteData = await fetch(quoteURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                const errorMsg = {
                    status: response.status,
                    message: response.statusText,
                    occurredWhile: `Fetching a random quote`,
                    additional: ``,
                };

                errorMsg.status === 401 &&
                    (errorMsg.additional = `Pssst... do you have the correct API key?`);

                displayError(errorMsg);
                hasErrors = true;
            }
        })
        .catch((err) => {
            const errorMsg = {
                status: `NA`,
                message: err.message,
                occurredWhile: `Fetching a random quote`,
                additional: ``,
            };

            `${err.message}`.includes(`Failed to fetch`) && (errorMsg.status = `NA`),
                (errorMsg.additional = `Is the API URL correct?<br/>Make sure it is: https://type.fit/api/quotes`);

            displayError(errorMsg);
            hasErrors = true;
        });

    if (hasErrors) return;

    return quoteData;
};

// Display quote to the UI
const displayQuote = function (quote) {
    quoteAuthor.style.opacity = 1; // Reset the opacity of the author text.

    const numberOfQuotes = quote.length;
    const selectedQuote = Math.floor(Math.random() * numberOfQuotes);

    const text = quote[selectedQuote].text;
    // For some quotes, author is null, in which case, hide the author text.
    const author = quote[selectedQuote].author
        ? `-${quote[selectedQuote].author}`
        : (quoteAuthor.style.opacity = 0);

    quoteText.innerHTML = `${text}`;
    quoteAuthor.innerHTML = author;
};

const displayCurrentWeather = function (weatherData) {
    const { name: cityName } = weatherData;
    const { weather: weatherArr } = weatherData;
    const weather = weatherArr[0];
    const conditionCode = weather.id;
    const temperature = convertTemperature(weatherData?.main?.temp);
    const maxTemperature = convertTemperature(weatherData?.main?.temp_max);
    const minTemperature = convertTemperature(weatherData?.main?.temp_min);

    cityContainer.innerHTML = `
		<span class="city__first-letter">${cityName[0]}</span>${cityName.slice(1)}, 
		<span class="article__country">
			${weatherData?.sys?.country}
		</span>`;
    getCurrDay(weatherData.dt);
    temperatureContainer.innerHTML = `
			${temperature}&deg
			<span class="article__temperature__unit">
				<button class="button temperature-unit temperature-unit--active">${activeTemperatureUnit}</button>
				<span class=" temperature-unit-divider">|</span>
				<button class="button temperature-unit temperature-unit--inactive">${inactiveTemperatureUnit}</button>
			</span>
		`;

    // Set active and inactive buttons
    temperatureUnitInactive = document.querySelector(".temperature-unit--inactive");
    temperatureUnitActive = document.querySelector(".temperature-unit--active");

    // Change temperature preference and save it to the browser.
    temperatureUnitInactive.addEventListener("click", function () {
        if (activeTemperatureUnit === "C") {
            activeTemperatureUnit = "F";
            inactiveTemperatureUnit = "C";
            forecastDateFormat = "mmdd";
        } else {
            activeTemperatureUnit = "C";
            inactiveTemperatureUnit = "F";
            forecastDateFormat = "ddmm";
        }

        temperatureUnitInactive.classList.add("temperature-unit--active");
        temperatureUnitInactive.classList.remove("temperature-unit--inactive");

        temperatureUnitActive.classList.add("temperature-unit--inactive");
        temperatureUnitActive.classList.remove("temperature-unit--active");

        localStorage.setItem("activeTemperatureUnit", activeTemperatureUnit);
        localStorage.setItem("inActiveTemperatureUnit", inactiveTemperatureUnit);
        localStorage.setItem("forecastDateFormat", forecastDateFormat);

        // Refresh UI with the changed temperature unit.
        runProcesses();
    });

    weatherContainer.innerHTML = `
		<span class="article__status__main--first-letter">${
            weather?.main[0]
        }</span>${weather?.main.slice(1)}
	`;

    weatherIconContainer.classList.add(`owf-${conditionCode}`);

    // prettier-ignore
    weatherDescContainer.innerHTML = `${weather?.description[0].toUpperCase()}${weather?.description.slice(1)}`;

    minTempContainer.innerHTML = `<span>${minTemperature}&deg${activeTemperatureUnit}</span>`;
    maxTempContainer.innerHTML = `<span>${maxTemperature}&deg${activeTemperatureUnit}</span>`;

    // prettier-ignore
    sunriseContainer.innerHTML = `<span>${fetchReadableTime(false, weatherData?.sys?.sunrise)}</span>`;
    // prettier-ignore
    sunsetContainer.innerHTML = `<span>${fetchReadableTime(false, weatherData?.sys?.sunset)}</span>`;

    humidityContainer.innerHTML = `<span>${weatherData?.main?.humidity}%</span>`;
    pressureContainer.innerHTML = `<span>${weatherData?.main?.pressure} mb</span>`;
};

// Slide through prediction data
const activateSlides = function () {
    const numberOfSlidesPerTransition = 2; // Number of slides to move per transition, Duh!
    const slideTranslatePercent = numberOfSlidesPerTransition * 25; //25% cuz, there are 4 predictions per slide view
    let translatePercent = 0;
    let translateVector = 0;

    const switchSlides = function (direction) {
        if (direction === `to_left`) {
            // Reset slide container to original position, if it goes beyond 100%, else move the slide to left.
            translatePercent =
                translatePercent <= -100 || translatePercent >= 100
                    ? 0
                    : translatePercent + slideTranslatePercent;
            translateVector = -translatePercent;
        } else {
            translatePercent =
                translatePercent === 0 ? -100 : slideTranslatePercent - translatePercent;
            translateVector = translatePercent;
        }

        // Maintain the percent as positive.
        translatePercent = Math.abs(translatePercent);

        predictionContainer.style.transform = `translateX(${translateVector}%)`;
    };

    predictionSlideLeft.addEventListener("click", () => {
        switchSlides(`to_right`);
    });

    predictionSlideRight.addEventListener("click", () => {
        switchSlides(`to_left`);
    });
};

const displayForecast = function (weatherForecastData) {
    // Get forcasts for the first 8 time segments, in multiples of 4.
    const forecastList = weatherForecastData?.list
        .filter((_, index) => index > 4 && (index - 1) % 4 === 0)
        .slice(0, 8);

    // Clear previous child elements, if any.
    predictionContainer.innerHTML = "";

    forecastList.forEach((currForecast, index) => {
        const dateString = new Date(currForecast?.dt * 1000);
        // Change date format to MM/DD if temperature unit if Farenheit.
        const shortDate =
            forecastDateFormat === "ddmm"
                ? `${dateString.getDate()}/${dateString.getMonth() + 1}`
                : `${dateString.getMonth() + 1}/${dateString.getDate()}`;

        // Converting back to seconds as in fetchReadableTime, it is by default converted to milliseconds.
        const time = fetchReadableTime(false, dateString / 1000);

        const weather = currForecast?.weather.at(0);
        const conditionCode = weather?.id;
        let predictionHTML = `
		<div class="article__prediction-days">
			<p class="article__prediction-day">${shortDate}</p>
			<p class="article__prediction-time">${time}</p>
			<i class="article__prediction-icon prediction-icon--day-${index + 1} owf owf-forecast"></i>
			<p class="article__prediction-temp">${convertTemperature(currForecast?.main?.temp)}&deg
				<span class="article__prediction-unit">${activeTemperatureUnit}</span>
			</p>
		</div>
		`;

        predictionContainer.insertAdjacentHTML("beforeend", predictionHTML);

        const iconHolder = document.querySelector(`.prediction-icon--day-${index + 1}`);
        iconHolder.classList.add(`owf-${conditionCode}`);
    });

    predictionDays = document.querySelectorAll(".article__prediction-days");
    predictionSlideLeft = document.querySelector(".article__slide-button--left");
    predictionSlideRight = document.querySelector(".article__slide-button--right");

    // Activate event listeners for slide buttons, after they are created.
    activateSlides();
};

const displayData = async function (weatherData, weatherForecastData) {
    // Weather UI
    displayCurrentWeather(weatherData);

    // Forecast Data
    displayForecast(weatherForecastData);

    //Quote API
    const quote = await getQuote();
    displayQuote(quote);
};

const toggleModal = function () {
    testDataModal.classList.toggle("hidden");
    bgBlur.classList.toggle("hidden");
};

const runProcesses = function () {
    fetchReadableTime();
    getWeatherData();
    startTimer();
    currentTheme = localStorage.getItem("theme") || "dark";
    setTheme(currentTheme);
};

const initializeApplication = function () {
    // Start the application and do some simple animation.
    setTimeout(() => {
        mainData.style.opacity = 1;
        otherData.style.opacity = 1;
        // Display modal if running on test data.
        RUN_ON_TEST_DATA && toggleModal();
        runProcesses();
    }, 500);

    currentTheme === "dark" && body.classList.add("dark-mode");
    lightModeIcon.classList.remove("hidden");
    darkModeIcon.classList.add("hidden");

    errorMessageSection.classList.add("hidden");
};

initializeApplication();

/* Event Listeners */

// Auto refresh weather data
autoRefreshButton.addEventListener("change", function (event) {
    event.preventDefault();
    autoRefreshButton.checked ? runProcesses() : clearInterval(refreshWeather);
});

// Switch theme
themeButton.addEventListener("click", function (event) {
    event.preventDefault();

    currentTheme === "light" ? setTheme("dark") : setTheme("light");
});

// Manual refresh button.
refreshButton.addEventListener("click", function () {
    clearInterval(refreshWeather);
    runProcesses();

    refreshButton.style.transform = "rotateZ(180deg)";

    setTimeout(() => {
        refreshButton.style.transform = "rotateZ(0deg)";
    }, 300);
});

testDataIndicator.addEventListener("click", toggleModal);

closeModal.addEventListener("click", toggleModal);

bgBlur.addEventListener("click", toggleModal);

document.addEventListener("keydown", function (event) {
    if (event.key === `Escape` && !testDataModal.classList.contains(`hidden`)) {
        toggleModal();
    }
});

// Display nav menu on click
menuSliderButton.addEventListener("click", () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    menuSliderButton.style.pointerEvents = `none`;

    let navMenuClass =
        vw >= 1024 ? `menu-enabled--large-screen` : `menu-enabled--small-screen`;

    if (navMenuStatus === `hidden`) {
        nav.style.overflow = `visible`;
        navLinks.classList.add(navMenuClass);
        menuSliderButton.style.pointerEvents = `auto`;
        navMenuStatus = `visible`;
    } else {
        nav.style.pointerEvents;
        navLinks.classList.remove(navMenuClass);

        navLinks.addEventListener("transitionend", function hideOverflow() {
            nav.style.overflow = `hidden`;
            navLinks.removeEventListener("transitionend", hideOverflow);
            menuSliderButton.style.pointerEvents = `auto`;
        });
        navMenuStatus = `hidden`;
    }
});
