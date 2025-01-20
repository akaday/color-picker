const mongoose = require('mongoose');

const paletteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Palette = mongoose.model('Palette', paletteSchema);

module.exports = Palette;
