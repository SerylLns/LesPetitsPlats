export default class Search{
  
  filterRecipe(searchWord, articlesData) {
    if (searchWord.length < 3) return;
    const test = new RegExp(searchWord.toLowerCase());
    let filterArticles = [];

    articlesData.forEach((article) => {
      if (
        article.name.toLowerCase().match(test) ||
        article.description.toLowerCase().match(test) ||
        article.appliance.toLowerCase().match(test)
      ) {
        filterArticles.push(article);
        // continue;
      }
      article.ustensils.forEach(ustensil => {
        if (ustensil.toLowerCase().match(test)) {
          filterArticles.push(article);
        }
      });
    })
    return filterArticles
  }
}