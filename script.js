/*
link javascript file to html
get access to the input field
get access to button

create function to fetch API data when button is clicked

*/

var inputField = document.querySelector('#city')
var button = document.querySelector('#get-weather')
function fetchData(){
    var cityName = inputField.value
    var apiKey = 'df9350967b23dd28552df540966d900e'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey    
    
    fetch(requestUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(weatherData){
            console.log(weatherData)
        })

}

button.addEventListener('click', fetchData);
