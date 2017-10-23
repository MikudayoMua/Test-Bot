const Client = require('discord.js').Client;
const BOT = require('./BOT.json');

const music = require('../');

// Create a new client.
const client = new Client();

// Apply the music plugin.
music(client, {
	prefix: '-',     // Prefix of '-'.
	global: false,   // Server-specific queues.
	maxQueueSize: 10 // Maximum queue size of 10.
});

// Login.
client.loginWithToken(BOT_TOKEN);
