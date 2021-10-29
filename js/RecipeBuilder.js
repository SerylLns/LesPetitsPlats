export default class RecipeBuilder {
  init(recipes) {
    const recipesList = document.querySelector(".cards-container");
    recipes.forEach((recipe) => {
      let ingredients = recipe.ingredients.map((ingredient) => {
        return `<li>${ingredient.ingredient}: <span>${ingredient.quantity} ${
          ingredient.unit === undefined ? "" : ingredient.unit
        }</span></li>`;
      });
      console.log(ingredients);
      let cardTemplate = `
        <div class="card" data-id="${recipe.id}">
          <div class="card-img" src="" alt=""></div>
          <div class="card-description">
            <div class="card-description-header">
              <h4>${recipe.name}</h4>
              <div class="time">
                <i class="far fa-clock"></i>
                <span>${recipe.time} min</span>
              </div>
            </div>
            <div class="card-ingredients">
              <ul class="ingredients">
                ${ingredients.join(' ')}
              </ul>
              <p class="recipe">
                ${recipe.description}
              </p>
            </div>
          </div>
        </div>  
      `;
      recipesList.insertAdjacentHTML("beforeend", cardTemplate);
    });
  }
}
