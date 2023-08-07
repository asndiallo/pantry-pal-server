import errorHandler from '../../utils/errorHandlers';

// Mock console.error
jest.spyOn(console, 'error').mockImplementation(() => { });

// Mock HTTP response object
const mockResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe('errorHandler', () => {
  test('should log error stack and respond with a 500 status code and error message', () => {
    const mockError = new Error('Test error');

    errorHandler(mockError, mockResponse);

    // Check if console.error is called with the error stack
    expect(console.error).toHaveBeenCalledWith(mockError.stack);

    // Check if res.status and res.json are called with the correct arguments
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Something went wrong!' });
  });
});