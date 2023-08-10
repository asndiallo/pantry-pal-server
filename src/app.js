import express from 'express';
import cors from 'cors';
import serverEnv from '../config/serverConfig.js';
import chatRoutes from './routes/chatRoutes.js';
import generalRoutes from './routes/generalRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/chat', chatRoutes);
app.use('/api/general', generalRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/recipe', recipeRoutes);

const PORT = serverEnv.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
