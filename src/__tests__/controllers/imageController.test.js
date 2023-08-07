import imageController from '../../controllers/imageController';
import openai from '../../services/openAiService';

// Mock the openai service
jest.mock('./src/services/openAiService');

describe('imageController', () => {
  test('should generate an image and respond with the URL', async () => {
    const mockResponse = {
      data: {
        data: [{ url: 'https://example.com/image.jpg' }],
      },
    };

    // Mock the createImage function with a custom implementation
    openai.createImage = jest.fn().mockResolvedValue(mockResponse);

    const mockReq = {
      body: {
        prompt: 'Generate an image of a cat.',
      },
    };

    const mockRes = {
      json: jest.fn(),
    };

    await imageController(mockReq, mockRes);

    // Check if openai.createImage is called with the correct arguments
    expect(openai.createImage).toHaveBeenCalledWith({
      prompt: 'Generate an image of a cat.',
      n: 1,
      size: '512x512',
    });

    // Check if res.json is called with the correct response
    expect(mockRes.json).toHaveBeenCalledWith({ url: 'https://example.com/image.jpg' });
  });
});
