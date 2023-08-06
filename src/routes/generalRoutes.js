import express from 'express';
import errorHandler from '../utils/errorHandlers.js';
import generalController from '../controllers/generalController.js';

const router = express.Router();

router.post('/', generalController);
router.use(errorHandler);

export default router;
