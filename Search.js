export default class Search {


  filterRecipe(searchWord, articlesData) {
    if (searchWord.length < 3) return articlesData;
    const test = new RegExp(searchWord.toLowerCase());
    let filterArticles = [];

    articlesData.forEach((article) => {
      if (
        article.name.toLowerCase().match(test) ||
        article.description.toLowerCase().match(test) ||
        article.appliance.toLowerCase().match(test)
      ) {
        filterArticles.push(article);
        // continue;
      }
      article.ustensils.forEach((ustensil) => {
        if (ustensil.toLowerCase().match(test)) {
          filterArticles.push(article);
        }
      });
    });
    return filterArticles;
  }

  filterIngredient(searchWord, articlesData) {
    let ingredients = [];
    articlesData.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (
          !ingredients.includes(ingredient.ingredient) &&
          ingredient.ingredient.toLowerCase().match(searchWord.toLowerCase())
        ) {
          ingredients.push(ingredient.ingredient);
        }
      });
    });
    return ingredients;
  }

  filterAppareil(searchWord, articlesData) {
    let appareils = [];
    articlesData.forEach((recipe) => {
      if (
        !appareils.includes(recipe.appliance) &&
        recipe.appliance.toLowerCase().match(searchWord.toLowerCase())
      ) {
        appareils.push(recipe.appliance);
      }
    });
    return appareils;
  }

  filterUstensil(searchWord, articlesData) {
    let ustensils = [];
    articlesData.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        if(!ustensils.includes(ustensil) && ustensil.toLowerCase().match(searchWord.toLowerCase()) ){
          ustensils.push(ustensil);
        }
      });
    });
    return ustensils;
  }
}
