const express = require("express");
const https = require("https");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to the API");
});

// // Handling the /api/hello Route
// app.get("/api/hello", async (req, res) => {
// 	const guestName = req.query.visitor_name || "Guest";
// 	const guestIp =
// 		req.headers["x-forwarded-for"] || req.connection.remoteAddress;

// 	try {
// 		const weatherApiKey = process.env.WEATHER_API_KEY;

// 		console.log(
// 			`Fetching weather data for IP: ${guestIp} with API key: ${weatherApiKey}`
// 		);
// 		const weatherResponse = await getWeatherAndLocation(guestIp, weatherApiKey);

// 		if (!weatherResponse.location || !weatherResponse.current) {
// 			throw new Error("Invalid response from WeatherAPI");
// 		}
// 		const location = `${weatherResponse.location.name},${weatherResponse.location.country}`;
// 		const temperature = `${weatherResponse.current.temp_c.toFixed(
// 			1
// 		)} degrees Celsius`;

// 		const responseObj = {
// 			client_ip: guestIp,
// 			location: location,
// 			greeting: `Hello, ${guestName}! The temperature is ${temperature} in ${location}`,
// 		};
// 		res.json(responseObj);
// 	} catch (error) {
// 		console.error(`Error fetching data: ${error.message}`);
// 		res.status(500).json({ error: "Failed to fetch data" });
// 	}
// });

// // Fetching Weather Data using WeatherAPI
// function getWeatherAndLocation(ip, apiKey) {
// 	return new Promise((resolve, reject) => {
// 		const apiLocator = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ip}`;
// 		https
// 			.get(apiLocator, (resp) => {
// 				let data = "";
// 				resp.on("data", (chunk) => {
// 					data += chunk;
// 				});
// 				resp.on("end", () => {
// 					try {
// 						const weatherData = JSON.parse(data);
// 						resolve(weatherData);
// 					} catch (error) {
// 						reject(new Error(`Failed to parse weather data: ${error.message}`));
// 					}
// 				});
// 			})
// 			.on("error", (error) => {
// 				reject(new Error(`HTTP request error: ${error.message}`));
// 			});
// 	});
// }

// Starting the Server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
