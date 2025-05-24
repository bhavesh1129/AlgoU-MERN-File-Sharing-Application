import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

// Create Express router instance
const router = express.Router();

// Route for file upload - accepts multipart/form-data with 'file' field
router.post('/upload', upload.single('file'), uploadImage);

// Route for file download - requires fileId parameter in URL
router.get('/file/:fileId', getImage);

export default router;