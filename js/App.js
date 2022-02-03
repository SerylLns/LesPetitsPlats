import { displayRecipe, displayDropdown } from "./recipesBuilder.js";
import { searchRecipe } from "./search.js";

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

// display all recipes
displayRecipe(recipes);
displayDropdown(recipes);
const inputSearch = document.querySelector("#searchbar");
inputSearch.addEventListener("keyup", (e) => {
  let inputText = e.target.value;
  if (inputText.length > 2) {
    var startTime = performance.now();
    const newRecipes = searchRecipe(inputText.toLowerCase());
    displayRecipe(newRecipes);
    displayDropdown(newRecipes)
    var endTime = performance.now();
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
  } else {
    displayRecipe(recipes);
    displayDropdown(recipes);
  }
});

displayFilter();


