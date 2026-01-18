import express from 'express';
import upload from '../utils/upload.js';
import { uploadFile, getFile } from '../controller/file-controller.js';

// Create Express router instance
const router = express.Router();

// Route for file upload - accepts multipart/form-data with 'file' field
router.post('/upload', upload.single('file'), uploadFile);

// Route for file download - requires fileId parameter in URL
router.get('/file/:fileId', getFile);

export default router;
