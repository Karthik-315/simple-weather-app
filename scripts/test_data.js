/* 
DATA (object) to test UI changes. This will avoid unnecessary calls to the API. 
Since the data is a huge object, stored in a separate file. Blah blah blah...
*/

// Current Weather
const currentWeatherTestData = {
	"coord": {
		"lon": 80.1987,
		"lat": 12.9719,
	},
	"weather": [
		{
			"id": 522,
			"main": "Rain",
			"description": "heavy intensity shower rain",
			"icon": "10d",
		},
		{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d",
		},
	],
	"base": "stations",
	"main": {
		"temp": 299.16,
		"feels_like": 299.16,
		"temp_min": 298.72,
		"temp_max": 299.16,
		"pressure": 1008,
		"humidity": 94,
	},
	"visibility": 2500,
	"wind": {
		"speed": 0,
		"deg": 0,
	},
	"rain": {
		"1h": 3.45,
	},
	"clouds": {
		"all": 75,
	},
	"dt": 1636943870,
	"sys": {
		"type": 1,
		"id": 9218,
		"country": "IN",
		"sunrise": 1636936677,
		"sunset": 1636978190,
	},
	"timezone": 19800,
	"id": 1465825,
	"name": "Madipakkam",
	"cod": 200,
};

// Forecast Weather
const forecastWeatherTestData = {
	"cod": "200",
	"message": 0,
	"cnt": 40,
	"list": [
		{
			"dt": 1636945200,
			"main": {
				"temp": 299.16,
				"feels_like": 299.16,
				"temp_min": 299.16,
				"temp_max": 300.55,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 1008,
				"humidity": 94,
				"temp_kf": -1.39,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 75,
			},
			"wind": {
				"speed": 2.39,
				"deg": 346,
				"gust": 2.4,
			},
			"visibility": 10000,
			"pop": 0.53,
			"rain": {
				"3h": 0.39,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-15 03:00:00",
		},
		{
			"dt": 1636956000,
			"main": {
				"temp": 300.36,
				"feels_like": 303.91,
				"temp_min": 300.36,
				"temp_max": 302.75,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 1006,
				"humidity": 85,
				"temp_kf": -2.39,
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 62,
			},
			"wind": {
				"speed": 3.31,
				"deg": 37,
				"gust": 2.98,
			},
			"visibility": 10000,
			"pop": 0.29,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-15 06:00:00",
		},
		{
			"dt": 1636966800,
			"main": {
				"temp": 301.15,
				"feels_like": 305.1,
				"temp_min": 301.15,
				"temp_max": 302.14,
				"pressure": 1005,
				"sea_level": 1005,
				"grnd_level": 1003,
				"humidity": 79,
				"temp_kf": -0.99,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 53,
			},
			"wind": {
				"speed": 5.19,
				"deg": 57,
				"gust": 4.95,
			},
			"visibility": 10000,
			"pop": 0.38,
			"rain": {
				"3h": 0.13,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-15 09:00:00",
		},
		{
			"dt": 1636977600,
			"main": {
				"temp": 300.76,
				"feels_like": 303.91,
				"temp_min": 300.76,
				"temp_max": 300.76,
				"pressure": 1004,
				"sea_level": 1004,
				"grnd_level": 1003,
				"humidity": 77,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03d",
				},
			],
			"clouds": {
				"all": 38,
			},
			"wind": {
				"speed": 4.11,
				"deg": 70,
				"gust": 5.07,
			},
			"visibility": 10000,
			"pop": 0.36,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-15 12:00:00",
		},
		{
			"dt": 1636988400,
			"main": {
				"temp": 300.43,
				"feels_like": 303.52,
				"temp_min": 300.43,
				"temp_max": 300.43,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 80,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n",
				},
			],
			"clouds": {
				"all": 99,
			},
			"wind": {
				"speed": 3.35,
				"deg": 81,
				"gust": 4.07,
			},
			"visibility": 10000,
			"pop": 0.08,
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-15 15:00:00",
		},
		{
			"dt": 1636999200,
			"main": {
				"temp": 300.04,
				"feels_like": 302.83,
				"temp_min": 300.04,
				"temp_max": 300.04,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 1005,
				"humidity": 82,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 98,
			},
			"wind": {
				"speed": 2.12,
				"deg": 98,
				"gust": 2.6,
			},
			"visibility": 10000,
			"pop": 0.33,
			"rain": {
				"3h": 0.15,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-15 18:00:00",
		},
		{
			"dt": 1637010000,
			"main": {
				"temp": 299.23,
				"feels_like": 299.23,
				"temp_min": 299.23,
				"temp_max": 299.23,
				"pressure": 1005,
				"sea_level": 1005,
				"grnd_level": 1004,
				"humidity": 85,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 0.71,
				"deg": 319,
				"gust": 0.76,
			},
			"visibility": 10000,
			"pop": 0.71,
			"rain": {
				"3h": 1.66,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-15 21:00:00",
		},
		{
			"dt": 1637020800,
			"main": {
				"temp": 298.8,
				"feels_like": 299.69,
				"temp_min": 298.8,
				"temp_max": 298.8,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 1005,
				"humidity": 87,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 1.77,
				"deg": 343,
				"gust": 1.85,
			},
			"visibility": 10000,
			"pop": 0.78,
			"rain": {
				"3h": 0.46,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-16 00:00:00",
		},
		{
			"dt": 1637031600,
			"main": {
				"temp": 300.68,
				"feels_like": 303.98,
				"temp_min": 300.68,
				"temp_max": 300.68,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 1007,
				"humidity": 79,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 1.89,
				"deg": 8,
				"gust": 1.89,
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-16 03:00:00",
		},
		{
			"dt": 1637042400,
			"main": {
				"temp": 302.46,
				"feels_like": 306.37,
				"temp_min": 302.46,
				"temp_max": 302.46,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 69,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 3.01,
				"deg": 64,
				"gust": 2.61,
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-16 06:00:00",
		},
		{
			"dt": 1637053200,
			"main": {
				"temp": 302.37,
				"feels_like": 306.17,
				"temp_min": 302.37,
				"temp_max": 302.37,
				"pressure": 1004,
				"sea_level": 1004,
				"grnd_level": 1004,
				"humidity": 69,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 4.48,
				"deg": 74,
				"gust": 4.2,
			},
			"visibility": 10000,
			"pop": 0.45,
			"rain": {
				"3h": 0.13,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-16 09:00:00",
		},
		{
			"dt": 1637064000,
			"main": {
				"temp": 301.03,
				"feels_like": 304.66,
				"temp_min": 301.03,
				"temp_max": 301.03,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 1005,
				"humidity": 78,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 3.96,
				"deg": 64,
				"gust": 5.08,
			},
			"visibility": 10000,
			"pop": 0.44,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-16 12:00:00",
		},
		{
			"dt": 1637074800,
			"main": {
				"temp": 300.65,
				"feels_like": 304.41,
				"temp_min": 300.65,
				"temp_max": 300.65,
				"pressure": 1009,
				"sea_level": 1009,
				"grnd_level": 1008,
				"humidity": 83,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n",
				},
			],
			"clouds": {
				"all": 98,
			},
			"wind": {
				"speed": 3.84,
				"deg": 72,
				"gust": 5.43,
			},
			"visibility": 10000,
			"pop": 0.13,
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-16 15:00:00",
		},
		{
			"dt": 1637085600,
			"main": {
				"temp": 299.92,
				"feels_like": 302.8,
				"temp_min": 299.92,
				"temp_max": 299.92,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 1007,
				"humidity": 85,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 99,
			},
			"wind": {
				"speed": 2.49,
				"deg": 84,
				"gust": 3.17,
			},
			"visibility": 10000,
			"pop": 0.36,
			"rain": {
				"3h": 0.94,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-16 18:00:00",
		},
		{
			"dt": 1637096400,
			"main": {
				"temp": 299.52,
				"feels_like": 299.52,
				"temp_min": 299.52,
				"temp_max": 299.52,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 1006,
				"humidity": 86,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 1.07,
				"deg": 59,
				"gust": 1.62,
			},
			"visibility": 10000,
			"pop": 0.64,
			"rain": {
				"3h": 2.91,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-16 21:00:00",
		},
		{
			"dt": 1637107200,
			"main": {
				"temp": 298.97,
				"feels_like": 299.91,
				"temp_min": 298.97,
				"temp_max": 298.97,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 88,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 99,
			},
			"wind": {
				"speed": 2.14,
				"deg": 322,
				"gust": 2.23,
			},
			"visibility": 10000,
			"pop": 0.64,
			"rain": {
				"3h": 0.54,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-17 00:00:00",
		},
		{
			"dt": 1637118000,
			"main": {
				"temp": 300.63,
				"feels_like": 304.11,
				"temp_min": 300.63,
				"temp_max": 300.63,
				"pressure": 1010,
				"sea_level": 1010,
				"grnd_level": 1009,
				"humidity": 81,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 98,
			},
			"wind": {
				"speed": 2.89,
				"deg": 8,
				"gust": 3.26,
			},
			"visibility": 10000,
			"pop": 0.6,
			"rain": {
				"3h": 0.74,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-17 03:00:00",
		},
		{
			"dt": 1637128800,
			"main": {
				"temp": 302.86,
				"feels_like": 307.05,
				"temp_min": 302.86,
				"temp_max": 302.86,
				"pressure": 1009,
				"sea_level": 1009,
				"grnd_level": 1008,
				"humidity": 68,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 84,
			},
			"wind": {
				"speed": 3.96,
				"deg": 49,
				"gust": 4.1,
			},
			"visibility": 10000,
			"pop": 0.61,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-17 06:00:00",
		},
		{
			"dt": 1637139600,
			"main": {
				"temp": 301.96,
				"feels_like": 306.01,
				"temp_min": 301.96,
				"temp_max": 301.96,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 73,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 95,
			},
			"wind": {
				"speed": 6.3,
				"deg": 54,
				"gust": 7.22,
			},
			"visibility": 10000,
			"pop": 0.69,
			"rain": {
				"3h": 0.44,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-17 09:00:00",
		},
		{
			"dt": 1637150400,
			"main": {
				"temp": 300.48,
				"feels_like": 303.52,
				"temp_min": 300.48,
				"temp_max": 300.48,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 1007,
				"humidity": 79,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 97,
			},
			"wind": {
				"speed": 7.31,
				"deg": 61,
				"gust": 9.35,
			},
			"visibility": 10000,
			"pop": 0.75,
			"rain": {
				"3h": 0.68,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-17 12:00:00",
		},
		{
			"dt": 1637161200,
			"main": {
				"temp": 299.64,
				"feels_like": 299.64,
				"temp_min": 299.64,
				"temp_max": 299.64,
				"pressure": 1010,
				"sea_level": 1010,
				"grnd_level": 1009,
				"humidity": 83,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 5.3,
				"deg": 47,
				"gust": 7.64,
			},
			"visibility": 10000,
			"pop": 0.22,
			"rain": {
				"3h": 0.25,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-17 15:00:00",
		},
		{
			"dt": 1637172000,
			"main": {
				"temp": 299.41,
				"feels_like": 299.41,
				"temp_min": 299.41,
				"temp_max": 299.41,
				"pressure": 1009,
				"sea_level": 1009,
				"grnd_level": 1008,
				"humidity": 85,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 5.9,
				"deg": 47,
				"gust": 8.57,
			},
			"visibility": 9906,
			"pop": 0.62,
			"rain": {
				"3h": 2.06,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-17 18:00:00",
		},
		{
			"dt": 1637182800,
			"main": {
				"temp": 298.6,
				"feels_like": 299.42,
				"temp_min": 298.6,
				"temp_max": 298.6,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 85,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 7.46,
				"deg": 41,
				"gust": 11.49,
			},
			"visibility": 10000,
			"pop": 1,
			"rain": {
				"3h": 2.91,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-17 21:00:00",
		},
		{
			"dt": 1637193600,
			"main": {
				"temp": 298.81,
				"feels_like": 299.62,
				"temp_min": 298.81,
				"temp_max": 298.81,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 84,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 7.5,
				"deg": 6,
				"gust": 10.84,
			},
			"visibility": 10000,
			"pop": 1,
			"rain": {
				"3h": 0.83,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-18 00:00:00",
		},
		{
			"dt": 1637204400,
			"main": {
				"temp": 299.04,
				"feels_like": 299.96,
				"temp_min": 299.04,
				"temp_max": 299.04,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 1008,
				"humidity": 87,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 7.43,
				"deg": 359,
				"gust": 11.24,
			},
			"visibility": 8731,
			"pop": 0.8,
			"rain": {
				"3h": 2.15,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-18 03:00:00",
		},
		{
			"dt": 1637215200,
			"main": {
				"temp": 298.37,
				"feels_like": 299.38,
				"temp_min": 298.37,
				"temp_max": 298.37,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 93,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 501,
					"main": "Rain",
					"description": "moderate rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 6.52,
				"deg": 352,
				"gust": 10.36,
			},
			"visibility": 5412,
			"pop": 0.98,
			"rain": {
				"3h": 6.39,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-18 06:00:00",
		},
		{
			"dt": 1637226000,
			"main": {
				"temp": 298.1,
				"feels_like": 299.05,
				"temp_min": 298.1,
				"temp_max": 298.1,
				"pressure": 1004,
				"sea_level": 1004,
				"grnd_level": 1004,
				"humidity": 92,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 501,
					"main": "Rain",
					"description": "moderate rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 8.46,
				"deg": 341,
				"gust": 12.58,
			},
			"visibility": 6523,
			"pop": 1,
			"rain": {
				"3h": 6.36,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-18 09:00:00",
		},
		{
			"dt": 1637236800,
			"main": {
				"temp": 296.72,
				"feels_like": 297.61,
				"temp_min": 296.72,
				"temp_max": 296.72,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 1005,
				"humidity": 95,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 501,
					"main": "Rain",
					"description": "moderate rain",
					"icon": "10d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 8.36,
				"deg": 325,
				"gust": 13.91,
			},
			"visibility": 5024,
			"pop": 1,
			"rain": {
				"3h": 6.45,
			},
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-18 12:00:00",
		},
		{
			"dt": 1637247600,
			"main": {
				"temp": 296.54,
				"feels_like": 297.44,
				"temp_min": 296.54,
				"temp_max": 296.54,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 96,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 502,
					"main": "Rain",
					"description": "heavy intensity rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 8.08,
				"deg": 328,
				"gust": 12.75,
			},
			"visibility": 3662,
			"pop": 1,
			"rain": {
				"3h": 13.6,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-18 15:00:00",
		},
		{
			"dt": 1637258400,
			"main": {
				"temp": 296.46,
				"feels_like": 297.33,
				"temp_min": 296.46,
				"temp_max": 296.46,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 95,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 501,
					"main": "Rain",
					"description": "moderate rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 5.03,
				"deg": 334,
				"gust": 8.32,
			},
			"visibility": 5425,
			"pop": 1,
			"rain": {
				"3h": 10.34,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-18 18:00:00",
		},
		{
			"dt": 1637269200,
			"main": {
				"temp": 296.33,
				"feels_like": 297.16,
				"temp_min": 296.33,
				"temp_max": 296.33,
				"pressure": 1005,
				"sea_level": 1005,
				"grnd_level": 1004,
				"humidity": 94,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 5.75,
				"deg": 311,
				"gust": 9.33,
			},
			"visibility": 10000,
			"pop": 0.61,
			"rain": {
				"3h": 2.95,
			},
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-18 21:00:00",
		},
		{
			"dt": 1637280000,
			"main": {
				"temp": 296.71,
				"feels_like": 297.5,
				"temp_min": 296.71,
				"temp_max": 296.71,
				"pressure": 1005,
				"sea_level": 1005,
				"grnd_level": 1004,
				"humidity": 91,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 5.25,
				"deg": 319,
				"gust": 8.49,
			},
			"visibility": 10000,
			"pop": 0.65,
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-19 00:00:00",
		},
		{
			"dt": 1637290800,
			"main": {
				"temp": 297.61,
				"feels_like": 298.36,
				"temp_min": 297.61,
				"temp_max": 297.61,
				"pressure": 1008,
				"sea_level": 1008,
				"grnd_level": 1007,
				"humidity": 86,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 4.75,
				"deg": 307,
				"gust": 6.93,
			},
			"visibility": 10000,
			"pop": 0.22,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-19 03:00:00",
		},
		{
			"dt": 1637301600,
			"main": {
				"temp": 299.33,
				"feels_like": 299.33,
				"temp_min": 299.33,
				"temp_max": 299.33,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 1006,
				"humidity": 80,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 4.79,
				"deg": 322,
				"gust": 5.42,
			},
			"visibility": 10000,
			"pop": 0.09,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-19 06:00:00",
		},
		{
			"dt": 1637312400,
			"main": {
				"temp": 300.5,
				"feels_like": 303.24,
				"temp_min": 300.5,
				"temp_max": 300.5,
				"pressure": 1003,
				"sea_level": 1003,
				"grnd_level": 1002,
				"humidity": 76,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 5.57,
				"deg": 328,
				"gust": 6.05,
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-19 09:00:00",
		},
		{
			"dt": 1637323200,
			"main": {
				"temp": 298.57,
				"feels_like": 299.33,
				"temp_min": 298.57,
				"temp_max": 298.57,
				"pressure": 1004,
				"sea_level": 1004,
				"grnd_level": 1003,
				"humidity": 83,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 5.28,
				"deg": 338,
				"gust": 7.74,
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d",
			},
			"dt_txt": "2021-11-19 12:00:00",
		},
		{
			"dt": 1637334000,
			"main": {
				"temp": 298.43,
				"feels_like": 299.18,
				"temp_min": 298.43,
				"temp_max": 298.43,
				"pressure": 1007,
				"sea_level": 1007,
				"grnd_level": 1006,
				"humidity": 83,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 4.47,
				"deg": 328,
				"gust": 7.4,
			},
			"visibility": 10000,
			"pop": 0.04,
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-19 15:00:00",
		},
		{
			"dt": 1637344800,
			"main": {
				"temp": 298.12,
				"feels_like": 298.87,
				"temp_min": 298.12,
				"temp_max": 298.12,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 1005,
				"humidity": 84,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 4.85,
				"deg": 324,
				"gust": 7.59,
			},
			"visibility": 10000,
			"pop": 0.08,
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-19 18:00:00",
		},
		{
			"dt": 1637355600,
			"main": {
				"temp": 297.93,
				"feels_like": 298.68,
				"temp_min": 297.93,
				"temp_max": 297.93,
				"pressure": 1005,
				"sea_level": 1005,
				"grnd_level": 1004,
				"humidity": 85,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 3.79,
				"deg": 325,
				"gust": 6.09,
			},
			"visibility": 10000,
			"pop": 0.01,
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-19 21:00:00",
		},
		{
			"dt": 1637366400,
			"main": {
				"temp": 297.94,
				"feels_like": 298.69,
				"temp_min": 297.94,
				"temp_max": 297.94,
				"pressure": 1006,
				"sea_level": 1006,
				"grnd_level": 1005,
				"humidity": 85,
				"temp_kf": 0,
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n",
				},
			],
			"clouds": {
				"all": 100,
			},
			"wind": {
				"speed": 3.54,
				"deg": 330,
				"gust": 5.57,
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n",
			},
			"dt_txt": "2021-11-20 00:00:00",
		},
	],
	"city": {
		"id": 1465825,
		"name": "Madipakkam",
		"coord": {
			"lat": 12.9719,
			"lon": 80.1987,
		},
		"country": "IN",
		"population": 16396,
		"timezone": 19800,
		"sunrise": 1636936677,
		"sunset": 1636978190,
	},
};

export { currentWeatherTestData, forecastWeatherTestData };
