# PantryPal Server

![PantryPal Logo](link_to_logo.png) (Replace with an actual logo once available)

PantryPal is an intelligent recipe suggestion app that aims to make your cooking experience effortless and delightful. This repository contains the server-side code for the PantryPal app, which is responsible for handling API requests, communicating with the OpenAI API, and providing recipe suggestions based on user-submitted ingredients.

## Features

- **Recipe Suggestions**: Get personalized recipe suggestions based on the ingredients you have at home.
- **AI-Powered**: Powered by the state-of-the-art GPT-3.5 Turbo model from OpenAI for smart and creative recipe recommendations.
- **Easy-to-Use API**: Simple and intuitive API endpoints for seamless integration with your frontend applications.
- **Open Source**: The server code is open-source, allowing community contributions and improvements.

## Getting Started

Follow these instructions to set up the PantryPal Server locally for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version >= 16)
- [npm](https://www.npmjs.com/) (npm comes bundled with Node.js)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/asndiallo/pantry-pal-server.git
   cd pantry-pal-server
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root of the project.
   - Add your OpenAI API key to the `.env` file:

     ```plaintext
     OPENAI_KEY=YOUR_OPENAI_API_KEY
     ```

   - Save the file.

### Usage

Start the server:

```bash
npm run dev
```

The server will run on port 3000 by default. You can change the port by setting the `PORT` environment variable in the `.env` file.

## API Endpoints

### `POST /api/chat`

Endpoint for chat-based recipe suggestions. Provide a JSON object with the `prompt` property as the user input.

```plaintext
{
  "prompt": "Can you suggest a recipe using tomatoes, cheese, and pasta?"
}
```

### `POST /api/general`

Endpoint for general recipe suggestions. Provide a JSON object with the `prompt` property as the user input.

```plaintext
{
  "prompt": "Suggest a dessert recipe with apples"
}
```

### `POST /api/image`

Endpoint for recipe image generation. Provide a JSON object with the `prompt` property as the user input.

```plaintext
{
  "prompt": "A recipe for pasta with tomato sauce and cheese"
}
```

### `POST /api/recipe`

Endpoint for recipe suggestions based on user-submitted ingredients. Provide a JSON object with the `ingredients` property as a comma-separated list of ingredients.

```plaintext
{
  "ingredients": "tomatoes, cheese, pasta"
}
```

## Contributing

Contributions to the PantryPal Server are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b feature/your-feature-name`.
3. Commit your changes and push the branch to your forked repository.
4. Create a pull request to the `main` branch of this repository.

Please ensure that you follow the existing code style and best practices while making contributions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The PantryPal team acknowledges the incredible support of the open-source community and the powerful tools provided by OpenAI for making this project possible.
- Special thanks to all contributors for their valuable contributions.

## Contact

If you have any questions or feedback, feel free to reach out to us:

- Email: contact@pantrypal.com
- Website: https://www.pantrypal.com

---