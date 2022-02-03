// const allTags = document.querySelectorAll(".tag");
import Search from "../Search.js";
import RecipeBuilder from "./RecipeBuilder.js";

const search = new Search();
const builder = new RecipeBuilder();

export function initTags() {
  const tagList = document.querySelector(".tags-list");
  tagList.innerHTML = "";
}

export function displayTag(tagName, color) {
  const tagList = document.querySelector(".tags-list");
  console.log(tagName);
  const tagElem = tagBuilder(tagName, color)
  tagList.insertAdjacentHTML("beforeend", tagElem);
}

function tagBuilder(tagName, color) {
  return `<div class="tag ${color}" data-name="${tagName}">
      <span>${tagName}</span>
      <i class="far fa-times-circle"></i>
    </div`;
}
