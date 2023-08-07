import generalController from '../../controllers/generalController';
import openai from '../../services/openAiService';

// Mock the openai service
jest.mock('./src/services/openAiService');

describe('generalController', () => {
  test('should generate a response and send it as JSON', async () => {
    const mockResponse = {
      data: {
        choices: [
          {
            message: {
              content: 'This is a generated response.',
            },
          },
        ],
      },
    };

    // Mock the createChatCompletion function with a custom implementation
    openai.createChatCompletion = jest.fn().mockResolvedValue(mockResponse);

    const mockReq = {
      body: {
        prompt: 'Tell me a joke.',
      },
    };

    const mockRes = {
      json: jest.fn(),
    };

    await generalController(mockReq, mockRes);

    // Check if openai.createChatCompletion is called with the correct arguments
    expect(openai.createChatCompletion).toHaveBeenCalledWith({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Tell me a joke.' }],
    });

    // Check if res.json is called with the correct response
    expect(mockRes.json).toHaveBeenCalledWith('This is a generated response.');
  });
});
