// let count = 0;

// const value = document.getElementById('value');
// const btns = document.querySelectorAll('.btn');

// btns.forEach(btn => {
//   btn.addEventListener('click', e => {
//     let style = e.currentTarget.classList;
//     if (style.contains('decrease')) {
//       count--;
//     } else if (style.contains('increase')) {
//       count++;
//     } else if (style.contains('reset')) {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = 'green';
//     } else if (count < 0) {
//       value.style.color = 'red';
//     } else if (count === 0) {
//       value.style.color = 'black';
//     }

//     value.textContent = count;
//   })
// })


// // Second option

// let count = 0;

// const value = document.getElementById('value');
// const btnIncrease = document.querySelector('.increase');
// const btnDecrease = document.querySelector('.decrease');
// const btnReset = document.querySelector('.reset');

// btnIncrease.addEventListener('click', () => {
//   count++;
//   value.textContent = count
//   colorNum()
// })

// btnDecrease.addEventListener('click', () => {
//   count--;
//   value.textContent = count
//   colorNum()
// })

// btnReset.addEventListener('click', () => {
//   count = 0;
//   value.textContent = count
//   colorNum()
// })

// function colorNum() {
//   if (count > 0) {
//     value.style.color = 'green';
//   } else if (count < 0) {
//     value.style.color = 'red';
//   } else if (count === 0) {
//     value.style.color = 'black';
//   }
// }


let count = 0;

if (localStorage.getItem('count')) {
  count = parseInt(localStorage.getItem('count'), 10);
}

const value = document.getElementById('value');
const btnIncrease = document.querySelector('.increase');
const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');

value.textContent = count;
colorNum();

btnIncrease.addEventListener('click', () => {
  count++;
  updateCountAndColor();
});

btnDecrease.addEventListener('click', () => {
  count--;
  updateCountAndColor();
});

btnReset.addEventListener('click', () => {
  count = 0;
  updateCountAndColor();
});

function updateCountAndColor() {
  value.textContent = count;
  colorNum();
  localStorage.setItem('count', count.toString());
}

function colorNum() {
  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  } else {
    value.style.color = 'black';
  }
}
