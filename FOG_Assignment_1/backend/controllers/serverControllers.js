const Server = require('../models/serverModel');

// Fetch server settings
const getServerInfo = async (req, res) => {
  try {
    const serverInfo = await Server.findOne(); // Adjust for multiple servers if needed
    res.status(200).json(serverInfo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = { getServerInfo };
