export default class RecipeBuilder {
  constructor(recipes) {
    this.recipes = recipes;
  }
  initCategories() {
    let ingredients = [];
    let appliances = [];
    let ustensils = [];
    // get sort ingredients, appliances and ustensils
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach((ingredient) => {
        if (!ingredients.includes(ingredient.ingredient)) {
          ingredients.push(ingredient.ingredient);
        }
      });
      recipe.ustensils.forEach((ustensil) => {
        if (!ustensils.includes(ustensil)) {
          ustensils.push(ustensil);
        }
      });
      if (!appliances.includes(recipe.appliance)) {
        appliances.push(recipe.appliance);
      }
    });
    this.displayDropdown(ingredients,ustensils,appliances)
  }

  displayDropdown(ingredients, ustensils, appliances) {
    const ingredientsSelect = document.getElementById("ingredients");
    const ustensilsSelect = document.getElementById("ustensils");
    const appliancesSelect = document.getElementById("appliances");
    appliances.forEach((appliance) => {
      appliancesSelect.insertAdjacentHTML("beforeend", `<li data-name="${appliance}">${appliance}</li>`)
    });

    ustensils.forEach((ustensil) => {
      // if(ustensil.length > )
      ustensilsSelect.insertAdjacentHTML(
        "beforeend",
        `<li data-name="${ustensil}">${ustensil}</li>`
      );
    });
    for (let i = 0; i < 30; i++) {
      ingredientsSelect.insertAdjacentHTML(
        "beforeend",
        `<li data-name="${ingredients[i]}">${ingredients[i]}</li>`
      );
      
    }

  }
  // display recipes cards
  initCards() {
    const recipesList = document.querySelector(".cards-container");
    recipes.forEach((recipe) => {
      let ingredients = recipe.ingredients.map((ingredient) => {
        if (ingredient.quantity === undefined) {
          return `<li>${ingredient.ingredient}</li>`;
        } else {
          return `<li>${ingredient.ingredient}: <span>${ingredient.quantity} ${
            ingredient.unit === undefined ? "" : ingredient.unit
          }</span></li>`;
        }
      });
      let cardTemplate = `
        <div class="card" data-id="${recipe.id}">
          <div class="card-img" src="" alt=""></div>
          <div class="card-description">
            <div class="card-description-header">
              <h4>${recipe.name}</h4>
              <div class="time">
                <i class="far fa-clock"></i>
                <span>${recipe.time}min</span>
              </div>
            </div>
            <div class="card-ingredients">
              <ul class="ingredients">
                ${ingredients.join(" ")}
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
