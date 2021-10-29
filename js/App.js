import RecipeBuilder from "./RecipeBuilder.js";

// display select ingredients
const displayFilter = () => {
  const selects = document.querySelectorAll('.select');
  selects.forEach((select) => {
    select.addEventListener("click", (e) => {
      select.classList.toggle('active');
      const list = select.querySelector("ul");
      const icon = select.querySelector("i");
      icon.classList.contains("fa-chevron-down")
        ? icon.classList.replace("fa-chevron-down", "fa-chevron-up")
        : icon.classList.replace("fa-chevron-up", "fa-chevron-down");
      list.style.display === "flex" ? list.style.display = "none" : list.style.display = "flex";

    })
  })
}

// Main 
displayFilter();
const builder = new RecipeBuilder(recipes);
builder.initCards();
builder.initCategories();

