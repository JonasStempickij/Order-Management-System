import express from 'express';
const router = express.Router();
import { uploadFile } from '../controllers/fileController.js';

router.route('/').post(uploadFile);

export default router;
