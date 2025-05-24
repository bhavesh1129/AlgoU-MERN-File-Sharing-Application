import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * Establishes connection to MongoDB database
 * Uses environment variable MONGODB_URL for connection string
 */
const DBConnection = async () => {
    const MONGO_URI = process.env.MONGODB_URL;
    
    // Check if MongoDB URL is provided
    if (!MONGO_URI) {
        console.error('MONGODB_URL environment variable is not defined');
        process.exit(1);
    }
    
    try {
        // Connect to MongoDB (removed deprecated useNewUrlParser option)
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
        process.exit(1);
    }
}

export default DBConnection;
