// ЗАДАЧА БЕЗ ПОДДЕРЖКИ

// Прописать JavaScript к каунтеру. Так, чтобы:
// increase - увеличивает на 1
// decrease - уменьшает на 1
// reset - обнуляет
// Цвет числа меняется: положительное - зеленое, отрицательное - красное, ноль - черный.
// Значение каунтера должно записываться в localStorage. При перезагрузке страницы должны видеть последнее значение.

// Задача выполняется:
// командой из 3 студентов
// 20 минут в сессионном зале
// кто-то один демонстрирует экран и записывать решение







// СЦЕНАРИЙ РЕШЕНИЯ

// 1. Объвите переменную count с изначальным значением

// 2. Возьмите под контроль значение каунтера на странице и кнопки. Используйте getElementById или querySelector.


// 3. Добавьте слушатели событий к кнопкам addEventListener. Пропишите изменение каунтера при нажатии на каждую кнопку через стрелочную функцию () => {}.


// 4. Пропишите условия: если каунтер положительный, то цифры зеленые, если отрицательный, то цифры красные.

// 5. Добавьте в код запись значение count в localStorage. Пропишите условие, если существует запись в localStorage, то count равно этому значению.

// 6. Сохраните в localStorage цвет, который нужно применить к числу.







// ЗАДАЧА НА ЗАВЕРШЕНИЕ

// Дан код работы каунтера. Пропишите запись значения каунтера в localStorage и последующее использование для изначального значения на странице. Запишите в localStorage также цвет, который должен применяться к отображению числа.

let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    let style = e.currentTarget.classList;
    if (style.contains('decrease')) {
      count--;
    } else if (style.contains('increase')) {
      count++;
    } else if (style.contains('reset')) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else if (count === 0) {
      value.style.color = 'black';
    }

    value.textContent = count;
  })
})
