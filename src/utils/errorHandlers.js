/**
 * Handles errors that occur during the execution of a program.
 * Logs the error stack trace and returns an HTTP response with a 500 status code and a JSON object containing an error message.
 *
 * @param {Error} err - The error object that was thrown.
 * @param {Object} res - The HTTP response object that will be sent back to the client.
 * @returns {void}
 */
function errorHandler(err, res) {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
}

export default errorHandler;
