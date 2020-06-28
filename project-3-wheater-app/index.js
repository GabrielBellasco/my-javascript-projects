const inputValue = document.querySelector("input[id=input]")
const inputCity = document.querySelector("input[id=city]")
const temp = document.querySelector("input[id=temp]")
const tempMax = document.querySelector("input[id=maxTemp]")
const tempMin = document.querySelector("input[id=minTemp]")
const wind = document.querySelector("input[id=wind]")
const description = document.querySelector("input[id=weatherDescription]")
const humidity = document.querySelector("input[id=humidity]")
const divWeather = document.getElementById("weather")
const weatherIcon = document.getElementById("img")
const buttonSubmit = document.querySelector("button[id=submit]")
buttonSubmit.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value+'&appid=9ec47f200231ea858dcfbf4efd1e580c')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        inputCity.value = data['name'] + ", "+data['sys']['country']
        weatherIcon.setAttribute('src', './img/'+data['weather']['0']['icon']+'.png')
        $(divWeather).toggleClass("hide");
        var tempCelcius = data['main']['temp'] - 273.15
        var tempFahrenheit = (data['main']['temp'] -273.15) * 9/5 + 32
        temp.value = Number.parseInt(tempCelcius) + "ºC  |  " + Number.parseInt(tempFahrenheit) + "ºF"
        description.value = 'Weather: '+ data['weather']['0']['description']
        humidity.value = 'Humidity: ' + data['main']['humidity']+'%'
        wind.value = 'Wind speed: ' + data['wind']['speed']
    })
    .catch(err => alert("Nome de Cidade Inválido"))
})