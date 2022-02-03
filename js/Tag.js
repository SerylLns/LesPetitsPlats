// const allTags = document.querySelectorAll(".tag");

export function initTags() {
  const tagList = document.querySelector(".tags-list");
  tagList.innerHTML = "";
  const dropdown = document.querySelectorAll(".select-list");
  dropdown.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      displayTag(e.target.dataset.name, e.target.dataset.color);
    });
  });
}

function displayTag(tagName, color) {
  const tagList = document.querySelector(".tags-list");
  console.log(tagName);
  const tagElem = tagBuilder(tagName, color)
  tagList.insertAdjacentHTML("beforeend", tagElem);
}

function tagBuilder(tagName, color) {
  return `<div class="tag ${color}">
      <span>${tagName}</span>
      <i class="far fa-times-circle"></i>
    </div`;
}
