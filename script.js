
function weatherInformation() {
      const apiKey = '74ae31218625639a241dda9d0f745d8d';
      const userName = document.querySelector('#name').value;
      const locationInput = document.getElementById('location').value;
      const weatherDetailsContainer = document.getElementById('weatherDetails');
  
      // Check if location is provided
      if (!location) {
          alert('Please enter a location in order to grant your request');
          return;
      }
  
      // Construct the API URL
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}`;
  
      // Make the API request
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // Display weather details
              const weatherDetails = `
              <h1>Hello ${userName}</h1>
                  <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                  <p>Temperature: ${data.main.temp} &deg;C</p>
                  <p>Weather: ${data.weather[0].description}</p>
              `;
              weatherDetailsContainer.innerHTML = weatherDetails;
          })
          .catch(error => {
              console.error('Error fetching weather data:', error);
              weatherDetailsContainer.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
          });
  }

  let button = document.querySelector("#btn")
button.addEventListener('click', weatherInformation)
  

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={74ae31218625639a241dda9d0f745d8d}

// `https://api.openweathermap.org/data/2.5/weather?location=${location}&appid=74ae31218625639a241dda9d0f745d8d`