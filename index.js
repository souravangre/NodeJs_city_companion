import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './db/connectDB.js';
import routes from './routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Custom route to serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

// API routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
