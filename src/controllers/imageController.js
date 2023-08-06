import openai from '../services/openAiService.js';

/**
 * Handles incoming requests and generates an image using OpenAI's API based on the provided prompt.
 * The generated image URL is then sent back as a response to the client.
 *
 * @param {Object} req - The incoming request object containing the prompt in the request body.
 * @param {Object} res - The response object to send back to the client.
 * @returns {Object} - JSON response containing the URL of the generated image.
 */
export default async function imageController(req, res) {
  const { prompt } = req.body;
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: '512x512',
  });
  const image_url = response.data.data[0].url;
  res.json({ url: image_url });
}
