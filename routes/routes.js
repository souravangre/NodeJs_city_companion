import express from 'express';
import { getWeatherAndSave, getNewsAndSave } from '../services/services.js';

const router = express.Router();

router.get('/api/info/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const weather = await getWeatherAndSave(city);
    const news = await getNewsAndSave(city);
    res.json({ weather, news });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data', details: err.message });
  }
});

export default router;
