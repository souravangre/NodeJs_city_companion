import axios from 'axios';
import Weather from '../models/weather.js';
import News from '../models/news.js';

const WEATHER_API_KEY = 'YOUR_WEATHER_API_KEY';
const NEWS_API_KEY = 'YOUR_NEWS_API_KEY';

export const getWeatherAndSave = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`;
  const { data } = await axios.get(url);

  const savedWeather = new Weather({
    city: data.location.name,
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  });

  await savedWeather.save();
  return savedWeather;
};

export const getNewsAndSave = async (city) => {
  const url = `https://newsapi.org/v2/everything?q=${city}&apiKey=${NEWS_API_KEY}`;
  const { data } = await axios.get(url);

  const newsItems = data.articles.slice(0, 5).map((article) => ({
    title: article.title,
    source: article.source.name,
    url: article.url,
    city: city,
    publishedAt: article.publishedAt,
  }));

  await News.insertMany(newsItems);
  return newsItems;
};
