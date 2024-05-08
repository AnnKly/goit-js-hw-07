const categoriesListEL = document.querySelector('#categories');
const categoriesEL = categoriesListEL.querySelectorAll('.item');

console.log('Number of categories:', categoriesEL.length);

categoriesEL.forEach(category => {
const categoryName = category.querySelector('h2').textContent;
const categoryItems = category.querySelectorAll('ul li').length;

console.log(`Category: ${categoryName}`);
console.log(`Elements: ${categoryItems}`);
});