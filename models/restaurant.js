import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  city: String,
  address: String,
  cuisine: String,
  rating: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
