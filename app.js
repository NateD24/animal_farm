'use strict';

// TODO: assign `catButton` a value by selecting the button labeled `Make Cat` from the DOM
  // TODO: assign `newCat a value by creating a new list item DOM element
  // TODO: assign the list item's text to be 'Cat' or the name of a cat you know.
const catButton = document.getElementById('make-cat');
catButton.addEventListener('click', function(catButton){
  const newCat = document.createElement('li');
   newCat.textContent = 'cat';
  const cats = document.getElementById('cats');
  cats.appendChild(newCat);
});
// TODO: assign `dogs` a value by selecting the second unordered list by its id
  // TODO: append the newly created list item to the dogs list
const dogButton = document.getElementById('make-dog');
dogButton.addEventListener('click', function () {
  const newDog = document.createElement('li');
  newDog.textContent = 'dog';
 const dogs =  document.getElementById('dogs');

  dogs.appendChild(newDog);
});

const sheepButton = document.getElementById('make-sheep');
sheepButton.addEventListener('click', handleMakingSheep);
// TODO: add an event listener to the sheepButton that calls `handleMakingSheep` when clicked

function handleMakingSheep(){
  // TODO: make a new list item, assign its text content to `Sheep` or the name of a sheep you know, and append it to the third unordered list.
  const newSheep = document.createElement('li');
  newSheep.textContent = 'sheep';
  const sheeps =document.getElementById('sheeps');
  sheeps.appendChild(newSheep);
};

// TODO: create an event listener for the `Make Horse` Button that calls a function named `handleMakingHorse`
const horseButton = document.getElementById('make-horse');
horseButton.addEventListener('click', handleMakingHorse );
function handleMakingHorse(){
    const newHorse = document.createElement('li');
    newHorse.textContent = 'horse';
    const horses = document.getElementById('horses');
    horses.appendChild(newHorse);
}
// TODO: write a function called `handleMakingHorse that makes a new list item, assigns its text content to `Horse` or the name of a horse you know, and append it to the fourth unordered list
