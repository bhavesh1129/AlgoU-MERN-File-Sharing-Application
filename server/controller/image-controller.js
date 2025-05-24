import File from '../models/file.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Handles file upload requests
 * Creates a new file record in the database and returns a download link
 */
export const uploadImage = async (request, response) => {
    // Check if file was uploaded
    if (!request.file) {
        return response.status(400).json({ error: 'No file uploaded' });
    }

    // Create file object with path and original name
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    
    try {
        // Save file metadata to database
        const file = await File.create(fileObj);
        
        // Return download link with file ID
        response.status(200).json({ 
            path: `http://localhost:${process.env.PORT}/file/${file._id}`,
            message: 'File uploaded successfully'
        });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

/**
 * Handles file download requests
 * Increments download count and serves the file
 */
export const getImage = async (request, response) => {
    try {   
        // Find file by ID from URL parameters
        const file = await File.findById(request.params.fileId);
        
        // Check if file exists
        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }

        // Increment download counter
        file.downloadCount++;
        await file.save();

        // Send file to client for download
        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}