import Search from "../Search.js";
import RecipeBuilder from "./RecipeBuilder.js";
import { displayTag } from "./Tag.js";
import {displayFilter} from './Filter.js'
// Main
// build recipes
let allRecipes = recipes;
// build select input
displayFilter();
// init all recipes and catégories
const builder = new RecipeBuilder(allRecipes);
builder.initCards();
builder.initCategories();
// tags
let tagSelected = [];
// searchBar
const inputSearch = document.querySelector("#searchbar");
let inputText = ""; 

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
      allRecipes = search.filterRecipe(tag, allRecipes);
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
    e.currentTarget.parentNode.querySelector("input").value = "";
    displayTag(e.target.dataset.name, e.target.dataset.color);
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
