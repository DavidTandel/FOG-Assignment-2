const mongoose = require('mongoose');

const ServerSchema = new mongoose.Schema({
  region: String,
  punkbuster: Boolean,
  fairfight: Boolean,
  password: Boolean,
  preset: String,
  minimap: Boolean,
  team_balance: Boolean,
  vehicle_spawn_delay: Number,
  tickets: Number,
  kick_after_tk: Number,
  player_health: Number,
  player_respawn_time: Number,
  kick_after_idle: Number,
  ban_after_kicks: Number,
});

module.exports = mongoose.model('Server', ServerSchema);
