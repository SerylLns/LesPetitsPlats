export function displayRecipe(recipes) {
  const recipesList = document.querySelector(".cards-container");
  recipesList.innerHTML = "";
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    let ingredients = [];
    for (let index = 0; index < recipe.ingredients.length; index++) {
      const ingredient = recipe.ingredients[index];
      if (ingredient.quantity === undefined) {
        ingredients.push(`<li>${ingredient.ingredient}</li>`);
      } else {
        ingredients.push(
          `<li>${ingredient.ingredient}: <span>${ingredient.quantity} ${
            ingredient.unit === undefined ? "" : ingredient.unit
          }</span></li>`
        );
      }
    }
    let cardTemplate = createTemplate(recipe, ingredients);
    recipesList.insertAdjacentHTML("beforeend", cardTemplate);
  }
}

export function displayDropdown(recipes) {
  // const recipesList = document.querySelector(".cards-container");
  // recipesList.innerHTML = "";
  let ingredients = [];
  let ustensils = [];
  let appareils = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    ustensils.push(`<li>${recipe.ustensil}</li>`);
    appareils.push(`<li>${recipe.appliance}</li>`);
    for (let index = 0; index < recipe.ustensils.length; index++) {
      const ustensil = recipe.ustensils[index];
      if (ustensil != undefined){
        ustensils.push(`<li>${ustensil}</li>`);
      }
    }
    for (let index = 0; index < recipe.ingredients.length; index++) {
      const ingredient = recipe.ingredients[index];
      ingredients.push(`<li>${ingredient.ingredient}</li>`);
    }
  }
  displayDropdownIngredients(ingredients);
  displayDropdownUstensils(ustensils);
  displayDropdownAppliances(appareils);
}

export function displayDropdownIngredients(ingredients) {
  const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.innerHTML = "";
  for (let i = 0; i < ingredients.length; i++) {
    if(i < 29) {
      const ingredient = ingredients[i];
      ingredientsList.insertAdjacentHTML("beforeend", ingredient);
    }

  }
}
export function displayDropdownUstensils(ustensils) {
  const ustensilsList = document.querySelector("#ustensils");
  ustensilsList.innerHTML = "";
  for (let i = 0; i < ustensils.length; i++) {
    const ustensil = ustensils[i];
    if (ustensil != "<li>undefined</li>"){
      ustensilsList.insertAdjacentHTML("beforeend", ustensil);
    };
  }
}

export function displayDropdownAppliances(appliances) {
  const appliancesList = document.querySelector("#appliances");
  appliancesList.innerHTML = "";
  for (let i = 0; i < appliances.length; i++) {
    const appliance = appliances[i];
    if (appliance != "<li>undefined</li>") {
      appliancesList.insertAdjacentHTML("beforeend", appliance);
    }
  }
}

function createTemplate(recipe, ingredients) {
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
  return cardTemplate;
}
