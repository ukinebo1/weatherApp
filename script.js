async function weatherInformation (){
  try {
      const name = document.querySelector('#name').value;
      const location = document.getElementById('location').value;

      const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?${location}&appid=74ae31218625639a241dda9d0f745d8d`)
      const weatherResult = await weatherRes.json()


      displayWeatherInformation(name, location, weatherResult);
  } catch (error) {
      console.log("Error 404")
  }
}

function displayWeatherInformation(name, location, weatherResult){
  const weatherData = document.querySelector('#weatherData')
  weatherData.innerHTML =`
  <li>Hello, ${name}!</li>
    <li>Location: ${location}</li>
    <li>Temperature: ${weatherResult.temperature}°C</li>
    <li>Condition: ${weatherResult.condition}</li>
  `
}

let button = document.querySelector("#btn")
button.addEventListener('click', weatherInformation)

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={74ae31218625639a241dda9d0f745d8d}

// `https://api.openweathermap.org/data/2.5/weather?location=${location}&appid=74ae31218625639a241dda9d0f745d8d`