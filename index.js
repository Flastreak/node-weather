var request = require("request");
var yargs = require("yargs");
var api = "4c0d8946ba8ec98eb36006c86d1ac281";
var city = yargs.c || "Chennai";
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api}`
request(url, function(error, res, body){
    if(error){
        console.log("error:"+error)
    }else{
        var weather = JSON.parse(body);
        var msg = `It's ${weather.main.temp} degrees in ${weather.name}`;
        console.log(msg);
    }
});