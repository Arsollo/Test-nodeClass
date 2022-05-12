console.log("Client side JavaScript is loaded!")

// ------------------------------------------ Weather fetching form ------------------------------------------ //
const weatherForm = document.querySelector(".weather_form")
const weather_input = document.querySelector("#weather_location")
const message = document.querySelector("#message_one")

//Once form is submitted
weatherForm.addEventListener("submit", (e) => 
    {
        //To prevent refreshing the page automatically
        e.preventDefault() 

        const location = weather_input.value

        //Loading...
        message.textContent = "Loading..."

        //Fetching 
        fetch("/weather?Location=" + location).then((response) => { 
        response.json().then((data) =>{
            if(data.errorMessage)
            {
                console.log(data.errorMessage)
                message.textContent = data.errorMessage
            }else{
                console.log(data)
                message.textContent = "The current weather for " + data.Location + " is " + data.weather + " degrees Celsius"
            }
        })    
    })
})