import express from 'express';
const router = express.Router();
import { uploadFile, downloadFile } from '../controllers/fileController.js';

router.route('/').post(uploadFile);
router.route('/').get(downloadFile);

export default router;
