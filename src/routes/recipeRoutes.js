import express from 'express';
import errorHandler from '../utils/errorHandlers.js';
import recipeController from '../controllers/recipeController.js';

const router = express.Router();

router.post('/', recipeController);
router.use(errorHandler);

export default router;
