
export function displayTag(tagName, color) {
  const tagList = document.querySelector(".tags-list");
  const tagElem = tagBuilder(tagName, color)
  tagList.insertAdjacentHTML("beforeend", tagElem);
}

function tagBuilder(tagName, color) {
  return `<div class="tag ${color}" data-name="${tagName}">
            <span>${tagName}</span>
            <i class="far fa-times-circle"></i>
          </div`;
}
