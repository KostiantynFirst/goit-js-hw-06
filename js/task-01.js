
const categoriesList = document.querySelector('ul#categories');
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

const category1 = categoriesList.firstElementChild;
const category2 = category1.nextElementSibling;
const category3 = categoriesList.lastElementChild;

console.log(`Category: ${category1.querySelector('h2').textContent}
Elements: ${category1.querySelectorAll('li').length}`);

console.log(`Category: ${category2.querySelector('h2').textContent}
Elements: ${category2.querySelectorAll('li').length}`);

console.log(`Category: ${category3.querySelector('h2').textContent}
Elements: ${category3.querySelectorAll('li').length}`);
