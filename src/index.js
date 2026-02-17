// import _ from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import axios from 'https://cdn.skypack.dev/axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// add alt for img

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
  // event.preventDefault();
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
// console.log(getFocus.nodeName); //перевиряе який елемент

//перевірка чи підключена бібліотека lodash
// const result = _.add(2, 3);
// console.log(result); // 5

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

//localStorage

const form = document.querySelector('.feedback-form');
const key = 'goit-example-message';

const save = (key, value) => {
  try {
    // event.preventDefault();
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
    console.log(serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

save(key, 'nata');

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remote = key => {
  try {
    const serializedState = localStorage.removeItem(key);
    form.reset();
    console.log(serializedState);
  } catch (error) {
    console.log('Get state error:', error);
  }
};

// export default {
//   save,
//   load,
// };

// асинхрон
const greet = () => {
  console.log('Hello!');
};

const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);

// дата на сьогоднішній момент
const date = new Date(2030, 3, 15, 14, 30, 0);
date.setMinutes(25);
console.log(date.toDateString());

console.log(date.getDay());

//проміси
// const promise = new Promis((resolve, reject) => {}); //створення промісу
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

console.log(promise);

promise.then(
  value => {
    console.log('onResolve call inside promise.then()');
    console.log(value);
  },
  error => {
    console.log('onReject call inside promise.then()');
    console.log(error);
  }
);

console.log(promise);

//запити
fetch('https://jsonplaceholder.typicode.com/users')
  .then(respons => {
    if (!respons.ok) {
      throw new Error(respons.status);
    }
    return respons.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error.text);
  });

//додавання параметрів
const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
//
const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json(console.log(response)))
  .then(post => console.log(post))
  .catch(error => console.log(error));
//homework 11

const searchForm = document.querySelector('.search-form');

const api = 'https://pixabay.com/api/';
const keyApi = '?key=41255636-c4f744f2bee1451fa093ac625';

searchForm.addEventListener('submit', sendForm);

function sendForm(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements['searchQuery'].value;

  // const params = {
  //   q: inputValue,
  //   image_type: photo,
  //   orientation: horizontal,
  //   safesearch: true,
  // };

  const fetchImages = async () => {
    const response = await fetch(
      `${api}${keyApi}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=2`
    );
    const imgRest = await response.json();
    return imgRest;
  };

  fetchImages()
    .then(img =>
      console.log(
        img.hits.map(item => {
          const itemElements = {
            itemId: item.id,
            itemWebformatURL: item.webformatURL,
            itemLargeImageURL: item.largeImageURL,
            itemTags: item.tags,
            itemLikes: item.likes,
            itemViews: item.views,
            itemComments: item.comments,
            itemDownloads: item.downloads,
          };

          console.log(itemElements);
        })
      )
    )
    .catch(error => console.log(error));

  form.reset();
}
