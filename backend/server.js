const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/color-picker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Palette = require('./models/Palette');
const User = require('./models/User');

app.post('/api/palettes', async (req, res) => {
  try {
    const palette = new Palette(req.body);
    await palette.save();
    res.status(201).send(palette);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/palettes', async (req, res) => {
  try {
    const palettes = await Palette.find();
    res.status(200).send(palettes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/api/collaborate', async (req, res) => {
  // Collaboration feature implementation
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
