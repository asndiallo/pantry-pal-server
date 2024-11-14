# Pantry Pal Server

A Node.js server that suggests recipes based on your available ingredients using OpenAI's GPT-3.5.

## What it does

Give it a list of ingredients, and it'll suggest recipes you can make. It handles:
- Recipe suggestions based on ingredients
- General recipe requests
- Recipe image generation
- Chat-based recipe help

## Setup

1. Install requirements:
   - Node.js 18 or higher
   - npm

2. Get started:
   ```bash
   # Clone and install
   git clone https://github.com/asndiallo/pantry-pal-server.git
   cd pantry-pal-server
   npm install

   # Set up environment
   cp .env.example .env
   # Add your OpenAI API key to .env
   ```

3. Start the server:
   ```bash
   npm start
   ```

## API endpoints

```bash
# Get recipe suggestions
POST /api/recipe
{
  "ingredients": "tomatoes, cheese, pasta"
}

# Chat about recipes
POST /api/chat
{
  "prompt": "What can I make with these ingredients?"
}

# Get recipe images
POST /api/image
{
  "prompt": "pasta with tomato sauce"
}

# General recipe help
POST /api/general
{
  "prompt": "suggest a quick dessert"
}
```

## Want to help?

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

[MIT License](LICENSE)

## Questions?

Email me at asn.diallo@outlook.com
