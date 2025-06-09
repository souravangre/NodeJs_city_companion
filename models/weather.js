import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  condition: String,
  icon: String,
  fetchedAt: { type: Date, default: Date.now },
});

const Weather = mongoose.model('Weather', weatherSchema);
export default Weather;
