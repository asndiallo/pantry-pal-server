import express from 'express';
import errorHandler from '../utils/errorHandlers.js';
import chatController from '../controllers/chatController.js';

const router = express.Router();

router.post('/', chatController);
router.use(errorHandler);

export default router;
