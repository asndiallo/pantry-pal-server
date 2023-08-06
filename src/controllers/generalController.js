import openai from '../services/openAiService.js';

/**
 * Handles incoming requests and generates responses using the OpenAI API.
 *
 * @param {Object} req - The incoming request object.
 * @param {Object} res - The outgoing response object.
 * @returns {Object} - A JSON object containing the response message generated by the OpenAI API.
 */
export default async function generalController(req, res) {
  const { prompt } = req.body;
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  res.json(completion.data.choices[0].message.content);
}
