/* 
DATA (object) to test UI changes. This will avoid unnecessary calls to the API. 
Since the data is a huge object, stored in a separate file. Blah blah blah...
*/

// Current Weather
const currentWeatherTestData = {
    coord: {
        lon: 80.1686,
        lat: 12.9577,
    },
    weather: [
        {
            id: 212,
            main: "Thunderstorm",
            description: "heavy thunderstorm",
            icon: "50d",
        },
    ],
    base: "stations",
    main: {
        temp: 302.12,
        feels_like: 306.57,
        temp_min: 302.12,
        temp_max: 302.55,
        pressure: 1010,
        humidity: 74,
    },
    visibility: 5000,
    wind: {
        speed: 6.69,
        deg: 90,
    },
    clouds: {
        all: 40,
    },
    dt: 1639393830,
    sys: {
        type: 1,
        id: 9218,
        country: "CN",
        sunrise: 1639356744,
        sunset: 1639397682,
    },
    timezone: 19800,
    id: 1260692,
    name: "City Name",
    cod: 200,
};

// Forecast Weather
const forecastWeatherTestData = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
        {
            dt: 1639407600,
            main: {
                temp: 301.02,
                feels_like: 303.95,
                temp_min: 298.83,
                temp_max: 301.02,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1012,
                humidity: 73,
                temp_kf: 2.19,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 34,
            },
            wind: {
                speed: 5.97,
                deg: 50,
                gust: 9.18,
            },
            visibility: 10000,
            pop: 0.64,
            rain: {
                "3h": 0.75,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-13 15:00:00",
        },
        {
            dt: 1639418400,
            main: {
                temp: 299.67,
                feels_like: 299.67,
                temp_min: 298.44,
                temp_max: 299.67,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1011,
                humidity: 76,
                temp_kf: 1.23,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 26,
            },
            wind: {
                speed: 5.86,
                deg: 40,
                gust: 9.22,
            },
            visibility: 10000,
            pop: 0.43,
            rain: {
                "3h": 0.5,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-13 18:00:00",
        },
        {
            dt: 1639429200,
            main: {
                temp: 298.19,
                feels_like: 298.84,
                temp_min: 298.19,
                temp_max: 298.19,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 1009,
                humidity: 80,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 38,
            },
            wind: {
                speed: 5.55,
                deg: 42,
                gust: 8.88,
            },
            visibility: 10000,
            pop: 0.31,
            rain: {
                "3h": 0.29,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-13 21:00:00",
        },
        {
            dt: 1639440000,
            main: {
                temp: 298.25,
                feels_like: 298.88,
                temp_min: 298.25,
                temp_max: 298.25,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 1010,
                humidity: 79,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n",
                },
            ],
            clouds: {
                all: 69,
            },
            wind: {
                speed: 5.75,
                deg: 45,
                gust: 9.02,
            },
            visibility: 10000,
            pop: 0.39,
            rain: {
                "3h": 0.48,
            },
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-14 00:00:00",
        },
        {
            dt: 1639450800,
            main: {
                temp: 300.08,
                feels_like: 302.05,
                temp_min: 300.08,
                temp_max: 300.08,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1012,
                humidity: 72,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 6.26,
                deg: 51,
                gust: 8.82,
            },
            visibility: 10000,
            pop: 0.43,
            rain: {
                "3h": 0.29,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-14 03:00:00",
        },
        {
            dt: 1639461600,
            main: {
                temp: 301.63,
                feels_like: 303.74,
                temp_min: 301.63,
                temp_max: 301.63,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1012,
                humidity: 63,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 7.49,
                deg: 46,
                gust: 8.28,
            },
            visibility: 10000,
            pop: 0.35,
            rain: {
                "3h": 0.1,
            },
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-14 06:00:00",
        },
        {
            dt: 1639472400,
            main: {
                temp: 301.03,
                feels_like: 302.86,
                temp_min: 301.03,
                temp_max: 301.03,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 1009,
                humidity: 64,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 96,
            },
            wind: {
                speed: 7.82,
                deg: 44,
                gust: 8.05,
            },
            visibility: 10000,
            pop: 0.22,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-14 09:00:00",
        },
        {
            dt: 1639483200,
            main: {
                temp: 299.4,
                feels_like: 299.4,
                temp_min: 299.4,
                temp_max: 299.4,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 1009,
                humidity: 71,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 69,
            },
            wind: {
                speed: 6.86,
                deg: 38,
                gust: 9.07,
            },
            visibility: 10000,
            pop: 0.1,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-14 12:00:00",
        },
        {
            dt: 1639494000,
            main: {
                temp: 298.8,
                feels_like: 299.35,
                temp_min: 298.8,
                temp_max: 298.8,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1012,
                humidity: 74,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 76,
            },
            wind: {
                speed: 5.95,
                deg: 40,
                gust: 8.89,
            },
            visibility: 10000,
            pop: 0.02,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-14 15:00:00",
        },
        {
            dt: 1639504800,
            main: {
                temp: 298.31,
                feels_like: 298.81,
                temp_min: 298.31,
                temp_max: 298.31,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1012,
                humidity: 74,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 85,
            },
            wind: {
                speed: 5.56,
                deg: 37,
                gust: 8.23,
            },
            visibility: 10000,
            pop: 0.02,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-14 18:00:00",
        },
        {
            dt: 1639515600,
            main: {
                temp: 297.78,
                feels_like: 298.26,
                temp_min: 297.78,
                temp_max: 297.78,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1010,
                humidity: 75,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 96,
            },
            wind: {
                speed: 5.15,
                deg: 29,
                gust: 7.51,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-14 21:00:00",
        },
        {
            dt: 1639526400,
            main: {
                temp: 297.25,
                feels_like: 297.7,
                temp_min: 297.25,
                temp_max: 297.25,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1011,
                humidity: 76,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 97,
            },
            wind: {
                speed: 4.68,
                deg: 20,
                gust: 6.93,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-15 00:00:00",
        },
        {
            dt: 1639537200,
            main: {
                temp: 298.88,
                feels_like: 299.34,
                temp_min: 298.88,
                temp_max: 298.88,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1013,
                humidity: 70,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 5.9,
                deg: 23,
                gust: 8.2,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-15 03:00:00",
        },
        {
            dt: 1639548000,
            main: {
                temp: 300.58,
                feels_like: 301.97,
                temp_min: 300.58,
                temp_max: 300.58,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1012,
                humidity: 62,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 7.21,
                deg: 31,
                gust: 7.99,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-15 06:00:00",
        },
        {
            dt: 1639558800,
            main: {
                temp: 300.75,
                feels_like: 302.12,
                temp_min: 300.75,
                temp_max: 300.75,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 1010,
                humidity: 61,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 7.24,
                deg: 30,
                gust: 7.75,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-15 09:00:00",
        },
        {
            dt: 1639569600,
            main: {
                temp: 298.83,
                feels_like: 299.26,
                temp_min: 298.83,
                temp_max: 298.83,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1010,
                humidity: 69,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 6.38,
                deg: 27,
                gust: 8.57,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-15 12:00:00",
        },
        {
            dt: 1639580400,
            main: {
                temp: 298.16,
                feels_like: 298.6,
                temp_min: 298.16,
                temp_max: 298.16,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1013,
                humidity: 72,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 100,
            },
            wind: {
                speed: 6.07,
                deg: 24,
                gust: 9.17,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-15 15:00:00",
        },
        {
            dt: 1639591200,
            main: {
                temp: 298.01,
                feels_like: 298.46,
                temp_min: 298.01,
                temp_max: 298.01,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1012,
                humidity: 73,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 99,
            },
            wind: {
                speed: 5.56,
                deg: 29,
                gust: 8.19,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-15 18:00:00",
        },
        {
            dt: 1639602000,
            main: {
                temp: 297.41,
                feels_like: 297.82,
                temp_min: 297.41,
                temp_max: 297.41,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1010,
                humidity: 74,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 99,
            },
            wind: {
                speed: 4.92,
                deg: 23,
                gust: 7.27,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-15 21:00:00",
        },
        {
            dt: 1639612800,
            main: {
                temp: 297.07,
                feels_like: 297.5,
                temp_min: 297.07,
                temp_max: 297.07,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1011,
                humidity: 76,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 95,
            },
            wind: {
                speed: 4.27,
                deg: 19,
                gust: 6.36,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-16 00:00:00",
        },
        {
            dt: 1639623600,
            main: {
                temp: 299.08,
                feels_like: 299.56,
                temp_min: 299.08,
                temp_max: 299.08,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1014,
                humidity: 70,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 63,
            },
            wind: {
                speed: 5.73,
                deg: 18,
                gust: 7.76,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-16 03:00:00",
        },
        {
            dt: 1639634400,
            main: {
                temp: 301.21,
                feels_like: 302.58,
                temp_min: 301.21,
                temp_max: 301.21,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1013,
                humidity: 59,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 73,
            },
            wind: {
                speed: 6.94,
                deg: 34,
                gust: 7.46,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-16 06:00:00",
        },
        {
            dt: 1639645200,
            main: {
                temp: 301.14,
                feels_like: 302.59,
                temp_min: 301.14,
                temp_max: 301.14,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1010,
                humidity: 60,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 52,
            },
            wind: {
                speed: 7.14,
                deg: 34,
                gust: 7.22,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-16 09:00:00",
        },
        {
            dt: 1639656000,
            main: {
                temp: 299.16,
                feels_like: 299.16,
                temp_min: 299.16,
                temp_max: 299.16,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1011,
                humidity: 69,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d",
                },
            ],
            clouds: {
                all: 39,
            },
            wind: {
                speed: 5.87,
                deg: 31,
                gust: 7.81,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-16 12:00:00",
        },
        {
            dt: 1639666800,
            main: {
                temp: 298.39,
                feels_like: 298.85,
                temp_min: 298.39,
                temp_max: 298.39,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1013,
                humidity: 72,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                },
            ],
            clouds: {
                all: 50,
            },
            wind: {
                speed: 4.53,
                deg: 26,
                gust: 6.98,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-16 15:00:00",
        },
        {
            dt: 1639677600,
            main: {
                temp: 297.94,
                feels_like: 298.35,
                temp_min: 297.94,
                temp_max: 297.94,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1013,
                humidity: 72,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                },
            ],
            clouds: {
                all: 44,
            },
            wind: {
                speed: 4.53,
                deg: 24,
                gust: 6.77,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-16 18:00:00",
        },
        {
            dt: 1639688400,
            main: {
                temp: 297.52,
                feels_like: 297.89,
                temp_min: 297.52,
                temp_max: 297.52,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1011,
                humidity: 72,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 71,
            },
            wind: {
                speed: 4.5,
                deg: 19,
                gust: 6.62,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-16 21:00:00",
        },
        {
            dt: 1639699200,
            main: {
                temp: 296.96,
                feels_like: 297.35,
                temp_min: 296.96,
                temp_max: 296.96,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1012,
                humidity: 75,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 67,
            },
            wind: {
                speed: 4.41,
                deg: 10,
                gust: 6.81,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-17 00:00:00",
        },
        {
            dt: 1639710000,
            main: {
                temp: 298.74,
                feels_like: 299.18,
                temp_min: 298.74,
                temp_max: 298.74,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 1014,
                humidity: 70,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 58,
            },
            wind: {
                speed: 5.74,
                deg: 17,
                gust: 7.57,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-17 03:00:00",
        },
        {
            dt: 1639720800,
            main: {
                temp: 301,
                feels_like: 302.28,
                temp_min: 301,
                temp_max: 301,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1013,
                humidity: 59,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 64,
            },
            wind: {
                speed: 6.62,
                deg: 39,
                gust: 6.81,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-17 06:00:00",
        },
        {
            dt: 1639731600,
            main: {
                temp: 300.87,
                feels_like: 302,
                temp_min: 300.87,
                temp_max: 300.87,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1010,
                humidity: 58,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 80,
            },
            wind: {
                speed: 6.33,
                deg: 44,
                gust: 6.27,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-17 09:00:00",
        },
        {
            dt: 1639742400,
            main: {
                temp: 298.98,
                feels_like: 299.32,
                temp_min: 298.98,
                temp_max: 298.98,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1011,
                humidity: 65,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 64,
            },
            wind: {
                speed: 4.64,
                deg: 33,
                gust: 6.18,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-17 12:00:00",
        },
        {
            dt: 1639753200,
            main: {
                temp: 297.93,
                feels_like: 298.27,
                temp_min: 297.93,
                temp_max: 297.93,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1014,
                humidity: 69,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 62,
            },
            wind: {
                speed: 4.44,
                deg: 26,
                gust: 5.97,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-17 15:00:00",
        },
        {
            dt: 1639764000,
            main: {
                temp: 297.26,
                feels_like: 297.61,
                temp_min: 297.26,
                temp_max: 297.26,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1013,
                humidity: 72,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                },
            ],
            clouds: {
                all: 45,
            },
            wind: {
                speed: 4.23,
                deg: 21,
                gust: 5.93,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-17 18:00:00",
        },
        {
            dt: 1639774800,
            main: {
                temp: 296.54,
                feels_like: 296.87,
                temp_min: 296.54,
                temp_max: 296.54,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1011,
                humidity: 74,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 81,
            },
            wind: {
                speed: 4.06,
                deg: 14,
                gust: 5.99,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-17 21:00:00",
        },
        {
            dt: 1639785600,
            main: {
                temp: 296.18,
                feels_like: 296.5,
                temp_min: 296.18,
                temp_max: 296.18,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1011,
                humidity: 75,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n",
                },
            ],
            clouds: {
                all: 75,
            },
            wind: {
                speed: 3.55,
                deg: 7,
                gust: 5.03,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "n",
            },
            dt_txt: "2021-12-18 00:00:00",
        },
        {
            dt: 1639796400,
            main: {
                temp: 297.9,
                feels_like: 298.26,
                temp_min: 297.9,
                temp_max: 297.9,
                pressure: 1015,
                sea_level: 1015,
                grnd_level: 1013,
                humidity: 70,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 94,
            },
            wind: {
                speed: 4.75,
                deg: 3,
                gust: 6.46,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-18 03:00:00",
        },
        {
            dt: 1639807200,
            main: {
                temp: 300.36,
                feels_like: 301.42,
                temp_min: 300.36,
                temp_max: 300.36,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1013,
                humidity: 59,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 88,
            },
            wind: {
                speed: 5.48,
                deg: 36,
                gust: 5.87,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-18 06:00:00",
        },
        {
            dt: 1639818000,
            main: {
                temp: 300.59,
                feels_like: 301.38,
                temp_min: 300.59,
                temp_max: 300.59,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1010,
                humidity: 55,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 73,
            },
            wind: {
                speed: 5.99,
                deg: 41,
                gust: 6.05,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-18 09:00:00",
        },
        {
            dt: 1639828800,
            main: {
                temp: 298.5,
                feels_like: 298.79,
                temp_min: 298.5,
                temp_max: 298.5,
                pressure: 1013,
                sea_level: 1013,
                grnd_level: 1011,
                humidity: 65,
                temp_kf: 0,
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                },
            ],
            clouds: {
                all: 84,
            },
            wind: {
                speed: 5.23,
                deg: 30,
                gust: 7.1,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: "d",
            },
            dt_txt: "2021-12-18 12:00:00",
        },
    ],
    city: {
        id: 1260692,
        name: "City Name",
        coord: {
            lat: 12.9577,
            lon: 80.1686,
        },
        country: "CN",
        population: 157145,
        timezone: 19800,
        sunrise: 1639356744,
        sunset: 1639397682,
    },
};

export { currentWeatherTestData, forecastWeatherTestData };
