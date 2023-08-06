import express from 'express';
import errorHandler from '../utils/errorHandlers.js';
import imageController from '../controllers/imageController.js';

const router = express.Router();

router.post('/', imageController);
router.use(errorHandler);

export default router;
