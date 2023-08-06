import openai from '../services/openAiService.js';
import errorHandler from '../utils/errorHandlers.js';

export default async function chatController(req, res) {
  res.json({ message: 'Hello World! Recipe Controller here 🚀' });
}
