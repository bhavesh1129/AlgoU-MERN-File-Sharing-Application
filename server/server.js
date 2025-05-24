import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create Express application instance
const app = express();

// Enable Cross-Origin Resource Sharing for all routes
app.use(cors());

// Parse URL-encoded data with extended syntax
app.use(express.urlencoded({ extended: true }));

// Parse JSON payloads
app.use(express.json());

// Use router for all routes
app.use('/', router);

// Get port from environment variables or use default port 8000
const PORT = process.env.PORT || 8000;

// Connect to MongoDB database
DBConnection();

// Start server and listen on specified port
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));