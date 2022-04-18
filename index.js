const express = require("express");
const app = express();
const axios = require("axios");

const apiKey = "231fd35f77bc1cfc43098e78c9958d63";

app.get("/country/:name", (req, res) => {
    let countryName = req.params["name"];

    axios.get("https://restcountries.com/v3.1/name/" + countryName + "?fullText=true")
    .then(response => {
        let latitude = response.data[0].capitalInfo.latlng[0];
        let longitude = response.data[0].capitalInfo.latlng[1];
        let capitalCity = response.data[0].capital[0];
        
        let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
        axios.get(url).then(weather => {
            res.send({
                country: countryName,
                capital: capitalCity,
                weather: weather.data
            });
        }).catch(error => {
            res.send("There was a problem getting the weather: " + error);
        })
    })
    .catch(err => {
        res.send("There was an error getting onformation about the country you entered. Error: " + err);
    });
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000. visit: http://localhost:3000")
})