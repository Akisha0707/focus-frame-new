// const { throttle } = require('lodash');

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

// focus
const getfocus = document.querySelector('.element-form-footer');
function getFocus(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  console.log('this input have focus');
}
getfocus.addEventListener('focus', getFocus);

//кнопка
const btn = document.querySelector('.button-form-footer');
function getbtn(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.currentTarget);
}
btn.addEventListener('click', getbtn);
console.log(getfocus.nodeName); //перевиряе який елемент

//первірка чи підключеня бібліотека lodash
const result = _.add(2, 3);
console.log(result); // 5

//throttle and debounce
document.addEventListener(
  'scroll',
  _.throttle(() => {
    console.log('Scroll handler call every 300ms');
  }, 300)
);

document.addEventListener(
  'scroll',
  _.debounce(() => {
    console.log('Scroll handler call after 300ms pause');
  }, 300)
);
