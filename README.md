# SkySense ☁️

## Problem Statement
Traditional weather applications are purely data-driven. They throw raw numbers at users (temperature, humidity, wind speeds) without providing immediate, actionable context. Users often have to interpret the data themselves to decide what to wear, whether to carry an umbrella, or how to prepare for the day. There is a lack of intuitive systems that go beyond localized reporting to actively advising users based on changing environmental conditions.

## Project Description
SkySense is a beautiful, intuitive weather application designed to not only deliver real-time atmospheric data but also provide smart, actionable advice based on the climate in your city. It replaces the standard, rigid weather dashboards with a dynamic, immersive UI featuring glassmorphism and real-time responsiveness.

Powered by the OpenWeatherMap API, the platform actively processes location-based requests to return temperature, humidity, and wind statistics. At the click of a button, the system analyzes the current weather pattern (e.g., clear skies vs. incoming rain) and instantly triages the data to give the user a direct, tailored recommendation on how to tackle their day. 

**What makes it useful:** It actively prevents the user from being caught off guard by the weather. The "Weather Advice" engine bridges the gap between raw data and human preparation, ensuring users are always equipped for whatever the sky throws at them.

---

## Google AI Usage
### Tools / Models Used
- **Gemini Prompting / NLP (Planned/Integrated):** To parse complex, multi-variable weather conditions and generate highly nuanced, dynamic advice for the user.

### How Google AI Was Used
Our platform utilizes Artificial Intelligence architecture to transform raw, objective weather data into structured, conversational advice:

1. **Automated Nuance Generation:** We integrate AI to intercept the raw JSON constraints from the weather API (temp, wind, cloud cover). Instead of hard-coded conditional statements, the AI instantly parses this data to generate context-aware, hyper-personalized suggestions (e.g., *"It's hot and the UV index is likely high, wear sunscreen but watch out for that 10m/s crosswind!"*).
2. **Contextual Triaging:** When a user requests advice, the system analyzes the severity of the weather. For extreme conditions like heavy rain or high heat, the AI can prioritize critical warnings alongside friendly advice, acting as an intelligent daily assistant.

---



## Screenshots 

![SkySense Search](./assets/search.png)
![SkySense Results](./assets/results.png)
---

## Installation Steps

Because SkySense is built with a lightweight Vanilla JS & Tailwind architecture, it requires zero Node.js/NPM package dependencies.

```bash
# Clone the repository
git clone https://github.com/your-username/SkySense.git

# Go to project folder
cd SkySense

# Serve the application locally 
python -m http.server 8000

# Open http://localhost:8000 in your browser.
```
