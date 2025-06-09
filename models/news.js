import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: String,
  source: String,
  url: String,
  city: String,
  publishedAt: Date,
});

const News = mongoose.model('News', newsSchema);
export default News;
