// if recipe match return this
export function searchRecipe(searchWord) {
  let matchRecipe = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    if (
      recipe.name.toLowerCase().match(searchWord) &&
      !matchRecipe.includes(recipe)
    ) {
      matchRecipe.push(recipe);
    }
    if (
      recipe.description.toLowerCase().match(searchWord) &&
      !matchRecipe.includes(recipe)
    ) {
      matchRecipe.push(recipe);
    }
    for (let e = 0; e < recipe.ingredients.length; e++) {
      const ingredient = recipe.ingredients[e];
      if (
        ingredient.ingredient.toLowerCase().match(searchWord) &&
        !matchRecipe.includes(recipe)
      ) {
        matchRecipe.push(recipe);
      }
    }
  }
  return matchRecipe;
}

