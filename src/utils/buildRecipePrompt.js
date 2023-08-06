/**
 * Prompts the openAI's GPT LLM for a recipe based on a list of ingredients provided in the markup.
 *
 * @param {string} ingredients - The list of ingredients defined in the markup.
 * @param {string} recipe - The sample recipe enclosed in ***.
 * @returns {string|object} - The prompt for the openAI's GPT LLM to input a recipe or the recipe found in JSON format.
 */
const buildRecipePrompt = (ingredients, recipe) => {
  // Check if the ingredients are empty or not provided
  if (!ingredients) {
    return 'false';
  }

  // Prompt the openAI's GPT LLM for a recipe with the list of ingredients
  const prompt = `Give me a recipe with the list of ingredients defined in the markup
    <ingredients>${ingredients}</ingredients>
    You can take for granted other basic ingredients, such as salt, pepper and other condiments we usually find in a kitchen.  
    If the input is empty or you can't find a list of ingredients for a recipe, just answer with the lowercase string "false" with no other characters.
    If you've found a recipe for the ingredients, send the output in JSON format as the sample enclosed in ***.
    If one step's description has a time declaration like 'for 30 minutes', add the timer property with the value in minutes as in '"timer": 30'.
    ***
    ${recipe}
    ***`;

  return prompt;
};

export default buildRecipePrompt;
