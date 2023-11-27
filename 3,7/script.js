// Завдання з селекторами
$(document).ready(function() {
  // Виберіть всі елементи <p> та змініть їхній текст на "Змінений текст".
  $('p').text('Змінений текст');

  // Виберіть елемент з ідентифікатором task1 та додайте йому клас highlight.
  $('#task1').addClass('highlight');

  // Виберіть всі елементи <li> та додайте їм клас list-item.
  $('li').addClass('list-item');
});

// Завдання зі змінами стилів
$(document).ready(function() {
  // Змініть колір тексту всіх елементів з класом highlight на червоний.
  $('.highlight').css('color', 'red');

  // Змініть фон всіх елементів з класом list-item на світло-сірий.
  $('.list-item').css('background-color', 'lightgrey');
});

// Завдання з анімацією
$(document).ready(function() {
  // Зробіть анімаційний ефект для елементів з класом highlight (наприклад, fadeIn або slideDown).
  $('.highlight').fadeIn(2000); // Час анімації 2000 мілісекунд (2 секунди).
});

// Завдання на зміну вмісту
$(document).ready(function() {
  // Змініть текст останнього елемента <p> у блоку з ідентифікатором task1 на "Новий останній текст".
  $('#task1 p:last-child').text('Новий останній текст');
});

// Додаткове завдання
$(document).ready(function() {
  // Створіть кнопку на сторінці.
  $('<button id="removeListItems">Видалити елементи</button>').appendTo('body');

  // Додайте обробник подій для цієї кнопки, який буде видаляти всі елементи з класом list-item.
  $('#removeListItems').click(function() {
    $('.list-item').remove();
  });
});