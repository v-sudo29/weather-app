function resetInput() {
  const input = document.querySelector('input');
  input.value = '';
}

function temperatureToDOM(temp) {
  const temperatureF = document.querySelector('.F-number');
  temperatureF.innerHTML = `${temp}`;
}

// Get API data
async function displayWeather(location) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=195a41abfc9646189e9174955231704&q=${location}&aqi=no`, { mode: 'cors' });
    const result = await response.json();
    const temperatureNumber = result.current.feelslike_f;
    
    temperatureToDOM(temperatureNumber);
  } catch(error) {
    console.log(error);
  }
}

// Button event listener
const getForecastBtn = document.querySelector('.forecast-btn');
getForecastBtn.addEventListener('click', () => {
  const inputValue = document.querySelector('input').value;
  if (inputValue === '') {
    alert('Please enter location');
  }
  resetInput();
  displayWeather(inputValue);
});