import Search from "../Search.js";
import RecipeBuilder from "./RecipeBuilder.js";
import { initTags } from "./Tag.js";
import { displayTag } from "./Tag.js";
// display dropdowns
const displayFilter = () => {
  const selects = document.querySelectorAll(".select");
  selects.forEach((select) => {
    select.addEventListener("click", (e) => {
      select.classList.toggle("active");
      const list = select.querySelector("ul");
      const icon = select.querySelector("i");
      icon.classList.contains("fa-chevron-down")
        ? icon.classList.replace("fa-chevron-down", "fa-chevron-up")
        : icon.classList.replace("fa-chevron-up", "fa-chevron-down");
      list.style.display === "flex"
        ? (list.style.display = "none")
        : (list.style.display = "flex");
    });
  });
};

// Main
// build select input
displayFilter();
// build recipes
let allRecipes = recipes;
const builder = new RecipeBuilder(allRecipes);
builder.initCards();
builder.initCategories();
// tags
initTags();
let tagSelected = [];
let inputText = "";

const inputSearch = document.querySelector("#searchbar");
const search = new Search();
inputSearch.addEventListener("keyup", (e) => {
  inputText = e.target.value;
  if (inputText.length > 2) {
    allRecipes = search.filterRecipe(inputText, allRecipes);
    builder.filterCards(allRecipes);
  } else {
    inputText = e.target.value;
    allRecipes = recipes;
    tagSelected.forEach((tag) => {
      allRecipes = search.filterRecipe(tag, recipes);
    });
    builder.filterCards(allRecipes);
  }
});

const inputIngredient = document.querySelector("#select-ingredient input");
inputIngredient.addEventListener("keyup", (e) => {
  let inputTextIngredient = e.target.value;
  let ingredientsSelect = search.filterIngredient(
    inputTextIngredient,
    allRecipes
  );
  builder.filterIngredients(ingredientsSelect);
});

const inputAppareil = document.querySelector("#select-appareil input");
inputAppareil.addEventListener("keyup", (e) => {
  let inputTextAppareil = e.target.value;
  let appareilsSelect = search.filterAppareil(inputTextAppareil, allRecipes);
  builder.filterAppliance(appareilsSelect);
});

const inputUstensile = document.querySelector("#select-ustensile input");
inputUstensile.addEventListener("keyup", (e) => {
  let inputTextUstensile = e.target.value;
  let ustensilsSelect = search.filterUstensil(inputTextUstensile, recipes);
  builder.filterUstensil(ustensilsSelect);
});

const dropdown = document.querySelectorAll(".select-list");
dropdown.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    displayTag(e.target.dataset.name, e.target.dataset.color);
    console.log(e.target);
    tagSelected.push(e.target.dataset.name);
    allRecipes = search.filterRecipe(e.target.dataset.name, allRecipes);
    builder.filterCards(allRecipes);
    const allTags = document.querySelectorAll(".tag");
    // delete tags
    allTags.forEach((tag) => {
      tag.addEventListener("click", (el) => {
        tag.parentNode.removeChild(tag);
        tagSelected = tagSelected.filter(
          (tagelem) => tagelem !== tag.dataset.name
        );
        allRecipes = search.filterRecipe(inputText, recipes);
        tagSelected.forEach((tag) => {
          allRecipes = search.filterRecipe(tag, allRecipes);
        });
        builder.filterCards(allRecipes);
      });
    });
  });
});
