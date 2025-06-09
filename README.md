<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <div class="container">
    <h1>City Companion App 🌆☀️📰</h1>
    <p>
      A modern full-stack web application that provides real-time weather updates and the latest news for any city you search — all powered by Node.js, Express, MongoDB, and external APIs.
    </p><hr/>
    <h2>🚀 Features</h2>
    <ul>
      <li>🔍 Search for <strong>any city</strong> to get up-to-date weather information and recent news headlines.</li>
      <li>🌦️ Displays weather details such as temperature, condition, humidity, and wind speed.</li>
      <li>🗞️ Shows latest news articles related to the searched city with clickable links.</li>
      <li>💾 Stores search results in <strong>MongoDB</strong> for persistence and potential analytics.</li>
      <li>⚡ Fast and responsive UI built with clean HTML, CSS, and JavaScript.</li>
      <li>🧩 Modular architecture separating routes, services, and models for maintainability.</li>
    </ul>
    <hr />
    <h2>🛠️ Technologies Used</h2>
    <table>
      <thead>
        <tr>
          <th>Technology</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Node.js</td><td>Backend runtime</td></tr>
        <tr><td>Express.js</td><td>Web framework</td></tr>
        <tr><td>MongoDB</td><td>NoSQL database for data storage</td></tr>
        <tr><td>Mongoose</td><td>MongoDB ODM for schema modeling</td></tr>
        <tr><td>Axios</td><td>HTTP client for calling external APIs</td></tr>
        <tr><td>WeatherAPI</td><td>Real-time weather data provider</td></tr>
        <tr><td>NewsAPI</td><td>Latest news headlines provider</td></tr>
        <tr><td>HTML/CSS/JS</td><td>Frontend user interface</td></tr>
      </tbody>
    </table>
    <hr />
    <h2>💡 How It Works</h2>
    <ol>
      <li>User enters a city name in the search box.</li>
      <li>The app calls WeatherAPI and NewsAPI to fetch current weather and news data.</li>
      <li>Results are stored in MongoDB using Mongoose schemas.</li>
      <li>Frontend dynamically displays the weather and news in styled cards.</li>
      <li>User can search repeatedly for different cities without refreshing.</li>
    </ol>
    <hr />
    <h2>🖥️ Setup & Installation</h2>
    <p>Clone the repo and install dependencies:</p>
    <pre><code>git clone https://github.com/souravangre/NodeJs_city_companion.git
cd NodeJs_city_companion
npm install
</code></pre>
    <p>Configure your API keys in <code>services/services.js</code> (replace <code>YOUR_WEATHER_API_KEY</code> and <code>YOUR_NEWS_API_KEY</code> with your actual keys).</p>
    <p>Ensure MongoDB is running locally or update connection string in <code>db/connectDB.js</code> for your MongoDB Atlas cluster.</p>
    <p>Start the app:</p>
    <pre><code>npm start
</code></pre>
    <p>Open <a href="http://localhost:5000" target="_blank" rel="noopener noreferrer">http://localhost:5000</a> in your browser.</p>
    <hr />
    <!--<h2>📸 Screenshots</h2>
    <p><em>Add screenshots here to showcase your app’s UI.</em></p>
    <hr /> -->
    <h2>📝 Future Improvements</h2>
    <ul>
      <li>Add user authentication to save favorite cities.</li>
      <li>Implement caching for faster API responses.</li>
      <li>Add dark mode toggle and theme customizations.</li>
      <li>Support more APIs like air quality and local events.</li>
    </ul>
    <hr />
  </div>
</body>
</html>
