// ------------------------------------------ Imports ------------------------------------------ //
const weather = require('weather-js')
const chalk = require("chalk");
const { underline } = require('chalk');



// ------------------------------------------ Weather Module ------------------------------------------ //
//NOTE: This is a async function
const getWeather = (location, callback) =>
{
    var temp = undefined
    var errorMessage = undefined
    weather.find({search: location, degreeType: 'C'}, function(err, result) 
    {
        //If there is an error
        if(err || result.length == 0)
        {
            errorMessage = "Unable to retrieve Weather information at this moment, please try again!"
            console.log(chalk.red(errorMessage))
            callback(-111 , errorMessage) //Since this is a async function, need to use callback
        }
        else
        {
            //If no error, return the weather
            console.log(chalk.blue("Current Temperature in " + location + " is " + result[0].current.temperature  + " degrees Celsius"))
            temp = result[0].current.temperature
            callback(temp) //Since this is a async function, need to use callback
        }
    });

}





// ------------------------------------------ Files to Export ------------------------------------------ //
module.exports = getWeather
