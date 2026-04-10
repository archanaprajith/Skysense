const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const contentArea = document.getElementById('content-area');

// Embedded API Key for extreme simplicity (no backend required)
const API_KEY = '1c6a04c80cf4468e48e197286f2fb0bc';

async function fetchWeather(city) {
    if (!city.trim()) {
        renderError('Please enter a city name.');
        return;
    }
    
    renderLoading();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod !== 200) {
            renderError(data.message || 'Something went wrong.');
        } else {
            renderWeather(data);
        }
    } catch (err) {
        renderError('Failed to fetch weather data. Check your connection.');
    }
}

function renderLoading() {
    contentArea.innerHTML = `<div class="loading-spinner"></div>`;
}

function renderError(message) {
    contentArea.innerHTML = `<p class="error-message">${message}</p>`;
}

function renderWeather(data) {
    const adviceButtonId = 'advice-button-' + Math.random().toString(36).substring(7);

    contentArea.innerHTML = `
        <div class="weather-info">
            <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="Weather icon">
            <div class="temp">${Math.round(data.main.temp)}°C</div>
            <div class="city-name">${data.name}</div>
            
            <div class="details-grid">
                <div class="detail-card">
                    <span class="detail-icon" role="img" aria-label="Humidity">💧</span>
                    <div class="detail-text">Humidity</div>
                    <div class="detail-value">${data.main.humidity}%</div>
                </div>
                <div class="detail-card">
                    <span class="detail-icon" role="img" aria-label="Wind speed">💨</span>
                    <div class="detail-text">Wind Speed</div>
                    <div class="detail-value">${data.wind.speed} m/s</div>
                </div>
            </div>
            
            <button id="${adviceButtonId}" class="advice-button">⚡ Get Weather Advice</button>
        </div>
    `;
    
    const adviceButton = document.getElementById(adviceButtonId);
    adviceButton.addEventListener('click', () => renderAdvice(data));
}

function renderAdvice(data) {
    // Prevent duplicate advice boxes
    let existingAdvice = document.querySelector('.advice-box');
    if (existingAdvice) {
        existingAdvice.remove();
    }

    const main = data.weather[0].main.toLowerCase();
    const temp = data.main.temp;
    let generatedAdvice = "The weather is changing. Be prepared for anything! A versatile jacket is always a good idea.";

    if (main.includes('rain')) {
        generatedAdvice = "It's rainy! Don't forget your umbrella and a waterproof jacket.";
    } else if (main.includes('clear')) {
        if (temp > 25) {
            generatedAdvice = "It's a hot, clear day. Remember to stay hydrated and wear sunscreen!";
        } else {
            generatedAdvice = "It's a clear day. Enjoy the weather! A light jacket might be a good idea.";
        }
    } else if (main.includes('cloud')) {
        generatedAdvice = "It's cloudy out. A great day for a walk. The clouds will provide some shade.";
    }

    const adviceBox = document.createElement('div');
    adviceBox.className = 'advice-box';
    adviceBox.innerHTML = `<p>${generatedAdvice}</p>`;
    contentArea.appendChild(adviceBox);
}

searchButton.addEventListener('click', () => {
    fetchWeather(cityInput.value);
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchWeather(cityInput.value);
    }
});
