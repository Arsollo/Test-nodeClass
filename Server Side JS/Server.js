// ------------------------------------------ Imports ------------------------------------------ //
const chalk = require("chalk")
const request = require("request")
const getWeather = require("./API")
const express = require("express")
const path = require("path")



// ------------------------------------------ Setting up the server ------------------------------------------ //
const app = express()

//Linking Express to the HTML & CSS files
const TemplatesDirectoryPath = path.join(__dirname, '../Templates')
const HTMLDirectoryPath = path.join(__dirname, "../Templates/HTML")

app.use(express.static(TemplatesDirectoryPath))

app.set('view engine', 'hbs')
app.set("views", HTMLDirectoryPath)



// ------------------------------------------ Default Route ------------------------------------------ //
app.get('', (req, res) => {
    res.render('index', {
        title: 'My tiiitle',
        name: 'Andrew Mead'
    })
})


// ------------------------------------------ Weather Route ------------------------------------------ //
app.get('/Weather', (req, res) => {

    //Storing the location & the current temperature
    const loc = req.query.Location
    var currentWeather = 5

    //Calling the weather function from API.js which returns temperature for a given location
    getWeather(loc, (temp, errorMessage) =>{
        currentWeather = temp
        res.send({
            Location: loc,
            weather: currentWeather,
            errorMessage
        })
    })
})



// ------------------------------------------ 404 Page Route ------------------------------------------ //
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
}) })



// ------------------------------------------ Starting up the server ------------------------------------------ //
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})






/*request('http://www.google.com', function (error, response) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
});*/




