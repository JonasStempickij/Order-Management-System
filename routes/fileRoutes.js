import express from 'express';
const router = express.Router();
import { uploadFile, downloadFile } from '../controllers/fileController.js';

router.route('/').post(uploadFile);
router.route('/:id').get(downloadFile);

export default router;
