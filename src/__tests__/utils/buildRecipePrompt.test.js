import buildRecipePrompt from '../../utils/buildRecipePrompt';

describe('buildRecipePrompt', () => {
  // Tests that the function returns a prompt string with the correct format when given a list of ingredients and a sample recipe
  it('should return a prompt string with the correct format when given a list of ingredients and a sample recipe', () => {
    const ingredients = '1 cup flour, 2 eggs, 1/2 cup sugar';
    const recipe =
      'Mix all ingredients together and bake at 350 degrees for 30 minutes.';
    const expectedPrompt = `Give me a recipe with the list of ingredients defined in the markup
    <ingredients>${ingredients}</ingredients>
    You can take for granted other basic ingredients, such as salt, pepper and other condiments we usually find in a kitchen.  
    If the input is empty or you can't find a list of ingredients for a recipe, just answer with the lowercase string "false" with no other characters.
    If you've found a recipe for the ingredients, send the output in JSON format as the sample enclosed in ***.
    If one step's description has a time declaration like 'for 30 minutes', add the timer property with the value in minutes as in '"timer": 30'.
    ***
    ${recipe}
    ***`;
    const result = buildRecipePrompt(ingredients, recipe);
    expect(result).toEqual(expectedPrompt);
  });

  // Tests that the function returns 'false' when ingredients are empty or not provided
  it('should return false when ingredients are empty or not provided', () => {
    const ingredients = '';
    const recipe =
      'Mix all ingredients together and bake at 350 degrees for 30 minutes.';
    const expectedPrompt = 'false';
    const result = buildRecipePrompt(ingredients, recipe);
    expect(result).toEqual(expectedPrompt);
  });

  // Tests that special characters in ingredients are handled correctly
  it('should handle special characters in ingredients correctly', () => {
    const ingredients =
      '1 cup flour, 2 eggs, 1/2 cup sugar, 1 tbsp olive oil, 1/4 tsp salt';
    const recipe =
      'Mix all ingredients together and bake at 350 degrees for 30 minutes.';
    const expectedPrompt = `Give me a recipe with the list of ingredients defined in the markup
    <ingredients>${ingredients}</ingredients>
    You can take for granted other basic ingredients, such as salt, pepper and other condiments we usually find in a kitchen.  
    If the input is empty or you can't find a list of ingredients for a recipe, just answer with the lowercase string "false" with no other characters.
    If you've found a recipe for the ingredients, send the output in JSON format as the sample enclosed in ***.
    If one step's description has a time declaration like 'for 30 minutes', add the timer property with the value in minutes as in '"timer": 30'.
    ***
    ${recipe}
    ***`;
    const result = buildRecipePrompt(ingredients, recipe);
    expect(result).toEqual(expectedPrompt);
  });

  // Tests that the function returns a prompt string with the correct format when given a recipe with a time declaration
  it('should return a prompt string with the correct format when given a recipe with a time declaration', () => {
    const ingredients = '1 cup flour, 2 eggs, 1/2 cup sugar';
    const recipe =
      'Mix all ingredients together and bake at 350 degrees for 30 minutes.';
    const expectedPrompt = `Give me a recipe with the list of ingredients defined in the markup
    <ingredients>${ingredients}</ingredients>
    You can take for granted other basic ingredients, such as salt, pepper and other condiments we usually find in a kitchen.  
    If the input is empty or you can't find a list of ingredients for a recipe, just answer with the lowercase string "false" with no other characters.
    If you've found a recipe for the ingredients, send the output in JSON format as the sample enclosed in ***.
    If one step's description has a time declaration like 'for 30 minutes', add the timer property with the value in minutes as in '"timer": 30'.
    ***
    ${recipe}
    ***`;
    const result = buildRecipePrompt(ingredients, recipe);
    expect(result).toEqual(expectedPrompt);
  });

  // Tests that the function handles recipes with missing time declarations correctly
  it('should not add timer property when recipe has no time declaration', () => {
    const ingredients = '1 cup flour, 2 eggs, 1/2 cup sugar';
    const recipe = 'Mix all ingredients together and bake.';
    const expectedPrompt = `Give me a recipe with the list of ingredients defined in the markup
    <ingredients>${ingredients}</ingredients>
    You can take for granted other basic ingredients, such as salt, pepper and other condiments we usually find in a kitchen.  
    If the input is empty or you can't find a list of ingredients for a recipe, just answer with the lowercase string "false" with no other characters.
    If you've found a recipe for the ingredients, send the output in JSON format as the sample enclosed in ***.
    If one step's description has a time declaration like 'for 30 minutes', add the timer property with the value in minutes as in '"timer": 30'.
    ***
    ${recipe}
    ***`;
    const result = buildRecipePrompt(ingredients, recipe);
    expect(result).toEqual(expectedPrompt);
  });

  // Tests that the function handles recipes with multiple time declarations correctly
  it('should handle recipes with multiple time declarations correctly', () => {
    const ingredients = '1 cup flour, 2 eggs, 1/2 cup sugar';
    const recipe =
      'Mix all ingredients together and bake at 350 degrees for 30 minutes. Then, take out of the oven and let cool for 10 minutes. Finally, serve and enjoy!';
    const expectedPrompt = `Give me a recipe with the list of ingredients defined in the markup
    <ingredients>${ingredients}</ingredients>
    You can take for granted other basic ingredients, such as salt, pepper and other condiments we usually find in a kitchen.  
    If the input is empty or you can't find a list of ingredients for a recipe, just answer with the lowercase string "false" with no other characters.
    If you've found a recipe for the ingredients, send the output in JSON format as the sample enclosed in ***.
    If one step's description has a time declaration like 'for 30 minutes', add the timer property with the value in minutes as in '"timer": 30'.
    ***
    ${recipe}
    ***`;
    const result = buildRecipePrompt(ingredients, recipe);
    expect(result).toEqual(expectedPrompt);
  });

  // Tests that the function returns a prompt string with the correct format when given a list of ingredients and a sample recipe with no time declarations
  it('should return a prompt string with the correct format when given a list of ingredients and a sample recipe with no time declarations', () => {
    const ingredients = '1 cup flour, 2 eggs, 1/2 cup sugar';
    const recipe = 'Mix all ingredients together and bake.';
    const expectedPrompt = `Give me a recipe with the list of ingredients defined in the markup
    <ingredients>${ingredients}</ingredients>
    You can take for granted other basic ingredients, such as salt, pepper and other condiments we usually find in a kitchen.  
    If the input is empty or you can't find a list of ingredients for a recipe, just answer with the lowercase string "false" with no other characters.
    If you've found a recipe for the ingredients, send the output in JSON format as the sample enclosed in ***.
    If one step's description has a time declaration like 'for 30 minutes', add the timer property with the value in minutes as in '"timer": 30'.
    ***
    ${recipe}
    ***`;
    const result = buildRecipePrompt(ingredients, recipe);
    expect(result).toEqual(expectedPrompt);
  });
});
