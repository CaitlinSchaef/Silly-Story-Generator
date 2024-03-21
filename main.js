//These are the complete variable and function definitions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//insterting provided raw string into text, added them as constants 
{
const $storyText = "It was 94 fahrenheit outside, so :$insertX: went for a walk. When they got to :$insertY:, they stared in horror for a few moments, then :$insertZ:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const $insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const $insertY = ["the soup kitchen", "Disneyland", "the White House"]
const $insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]
}

//These are the event listener and partial function definitions
randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}

//adjust as necessary to insert java into html