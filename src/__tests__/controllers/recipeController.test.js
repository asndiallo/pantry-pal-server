import recipeController from '../../controllers/recipeController';
import openai from '../../services/openAiService';
import recipeConfig from '../../../config/recipeConfig';

// Mock the openai service
jest.mock('./src/services/openAiService');

describe('recipeController', () => {
  test('should generate a recipe recommendation based on ingredients', async () => {
    const mockResponse = {
      data: {
        choices: [
          {
            message: {
              content: 'This is a generated recipe recommendation.',
            },
          },
        ],
      },
    };

    // Mock the createChatCompletion function with a custom implementation
    openai.createChatCompletion = jest.fn().mockResolvedValue(mockResponse);

    const mockReq = {
      body: {
        ingredients: 'ingredient1, ingredient2',
      },
    };

    const mockRes = {
      json: jest.fn(),
    };

    await recipeController(mockReq, mockRes);

    const expectedPrompt = `Give me a recipe with the list of ingredients defined in the markup
    <ingredients>ingredient1, ingredient2</ingredients>
    You can take for granted other basic ingredients, such as salt, pepper and other condiments we usually find in a kitchen.  
    If the input is empty or you can't find a list of ingredients for a recipe, just answer with the lowercase string "false" with no other characters.
    If you've found a recipe for the ingredients, send the output in JSON format as the sample enclosed in ***.
    If one step's description has a time declaration like 'for 30 minutes', add the timer property with the value in minutes as in '"timer": 30'.
    ***
    ${recipeConfig}
    ***`;

    // Then, in your test:
    expect(openai.createChatCompletion).toHaveBeenCalledWith({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a professional chef who recommends recipes based on ingredients',
        },
        {
          role: 'user',
          content: expectedPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
    });


    // Check if res.json is called with the correct response
    expect(mockRes.json).toHaveBeenCalledWith({ "content": "This is a generated recipe recommendation." });
  });
});

