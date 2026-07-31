// Complete variable definitions and random function

const customName = document.querySelector("#custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

const characters = ["Willy the Goblin", "Big Daddy Horse", "Super Lizard"];

const places = [
  "in a hole in the ground",
  "at the bottom of a staircase",
  "on top of a very tall mountain",
];

const events = [
  "scored a loud, brutal warcry",
  "became the king of Wall Street",
  "saved the world",
];

// Partial return random string function

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  const storyText = `It was 94 fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob had walked 300 pounds worth of walking that day.`;

  return storyText;
}

// Event listener and generate function

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    newStory = newStory.replaceAll("Bob", customName.value);
  }

  if (document.querySelector("#uk").checked) {
    const weight = Math.round(300 * 0.0714286) + " stone";
    const temperature = Math.round(((94 - 32) * 5) / 9) + " Celsius";

    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
}