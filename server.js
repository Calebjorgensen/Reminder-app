require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const reminderRoutes = require('./backend/routes/reminderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB using .env
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/reminders', reminderRoutes);

// Serve Angular app
app.use(express.static(path.join(__dirname, '../reminder-app/dist/reminder-app/browser')));

app.get('*splat', (req, res) => {
  res.sendFile(path.join(__dirname, '../reminder-app/dist/reminder-app/browser/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
