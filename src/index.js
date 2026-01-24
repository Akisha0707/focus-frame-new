// add alt for img
const getImg = document.querySelector('.foto-section-reviews');
getImg.setAttribute('alt', 'women');

// push button
const getButton = document.querySelector('.button-section-sign-up');

const handClick = event => {
  event.preventDefault();
  console.log(event);
  console.log('Button was click');
};

getButton.addEventListener('click', handClick);

// push svg
const getNavMenu = document.querySelector('.svg-nav-menu');
const getMobileMenu = document.querySelector('.mobile-menu-landing');

const getSum = event => {
  event.preventDefault();
  getMobileMenu.style.display = 'flex';
  console.log('done');
};
getNavMenu.addEventListener('click', getSum);

// close svg
const closeMobileMenu = document.querySelector('.svg-x');

const closeMobile = event => {
  event.preventDefault();
  getMobileMenu.style.display = 'none';
};

closeMobileMenu.addEventListener('click', closeMobile);

// keydown
const keydownOn = event => {
  event.preventDefault();
  console.log(event);
  if (event.key !== 'Enter') {
    return;
  } else {
    console.log('hello');
  }
};

document.addEventListener('keydown', keydownOn);

// form elements
const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

select.addEventListener('change', setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
