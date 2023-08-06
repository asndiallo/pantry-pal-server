import openai from '../services/openAiService.js';

/**
 * Handles incoming requests and sends them to the OpenAI API for processing.
 * Returns the response from the API to the client.
 *
 * @param {Object} req - The incoming request object.
 * @param {Object} res - The response object to send back to the client.
 * @returns {Object} - The response message from the OpenAI API.
 */
export default async function chatController(req, res) {
  const { text } = req.body;
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: text,
      },
    ],
  });

  res.json({ message: response.data.choices[0].message.content });
}
