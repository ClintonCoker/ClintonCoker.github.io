const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const imageAltText = [
  'Closeup of a blue human eye',
  'Rock formation in the desert',
  'Red and yellow rock formation',
  'Purple gemstone with clear facets',
  'Snowy mountain peak at sunset',
];

/* Looping through images */

imageFilenames.forEach((filename, index) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', imageAltText[index]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
});

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  if (btn.classList.contains('dark')) {
    btn.classList.remove('dark');
    btn.classList.add('light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  } else {
    btn.classList.remove('light');
    btn.classList.add('dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  }
});