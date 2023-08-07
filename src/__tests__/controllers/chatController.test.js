import chatController from '../../controllers/chatController';
import openai from '../../services/openAiService';

// Mock the openai service
jest.mock('./src/services/openAiService');

describe('chatController', () => {
  test('should send request to OpenAI and return the response', async () => {
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
        text: 'Tell me about the weather.',
      },
    };

    const mockRes = {
      json: jest.fn(),
    };

    await chatController(mockReq, mockRes);

    // Check if openai.createChatCompletion is called with the correct arguments
    expect(openai.createChatCompletion).toHaveBeenCalledWith({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Tell me about the weather.' }],
    });

    // Check if res.json is called with the correct response
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'This is a generated response.' });
  });
});
