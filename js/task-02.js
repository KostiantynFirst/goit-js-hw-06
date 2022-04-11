const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(ingredient => {
 const el = document.createElement('li');
  el.textContent = ingredient;
  el.classList.add('item');
  return el;
});

const ingredientsList = document.querySelector('ul#ingredients');
ingredientsList.append(...ingredientsEl);


// console.log(el[0].classList.add('item'));


// el1 = ingredientsEl.classList.add('item');
// console.log(el1);


// ingredientsEl.classList.add(item);
// console.log(ingredientsEl);
