const fetchy = require('node-fetch');
const axios = require('axios');
const BASEURL = "http://api.weatherstack.com/";
const APIKEY = "b1c7a6b2fe9a321ae70bc865727e4fea";
const defaultLocation = "Regensburg";

const locations = []
process.argv.forEach((val, index) => {
    locations.push(val);
    console.log(`${index}: ${val}`);
});

const getCurrentWeatherDetails = async (location) => {
    try {
        const res = await axios.get(BASEURL + "current?access_key=" + APIKEY + "&query=" + location);
        const details = await res.json();
        //const dodo = await fetch("http://api.weatherstack.com/current?access_key=b1c7a6b2fe9a321ae70bc865727e4fea&query=Regensburg");
        //console.log("details", details);
        return details;
    } catch(err) {
        return "You done fucked up!     "+err.message
    }

}

if (locations === []){
    console.log(defaultLocation, getCurrentWeatherDetails(locations[defaultLocation]));
}

for (const loc of locations){
    console.log(loc, getCurrentWeatherDetails(locations[loc]));
}
