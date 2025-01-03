const Server = require('./models/serverModel');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedServerInfo = async () => {
  try {
    // Clear existing data (optional)
    await Server.deleteMany();

    // Add initial data
    const server = new Server({
      region: "Europe - DE",
      punkbuster: true,
      fairfight: true,
      password: false,
      preset: "Normal",
      minimap: true,
      team_balance: true,
      vehicle_spawn_delay: 25,
      tickets: 400,
      kick_after_tk: 5,
      player_health: 100,
      player_respawn_time: 100,
      kick_after_idle: 300,
      ban_after_kicks: 3,
    });

    await server.save();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedServerInfo();
