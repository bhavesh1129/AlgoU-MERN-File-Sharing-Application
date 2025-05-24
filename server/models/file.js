import mongoose from "mongoose";

/**
 * MongoDB schema for file metadata
 * Stores information about uploaded files including path, name, and download statistics
 */
const FileSchema = new mongoose.Schema({
    // File system path where the uploaded file is stored
    path: {
        type: String,
        required: true
    },
    // Original filename as uploaded by the user
    name: {
        type: String,
        required: true
    },
    // Number of times this file has been downloaded
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
});

// Create and export the File model based on the schema
const File = mongoose.model('file', FileSchema);

export default File;