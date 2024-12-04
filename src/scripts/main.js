'use strict';

const largeImage = document.getElementById('largeImg');
const thumbnails = document.querySelectorAll('.gallery__img');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    event.preventDefault(); // Запобігаємо стандартній дії посилання

    const newSrc = thumbnail.src; // Отримуємо шлях до картинки

    // Змінюємо джерело великої картинки
    largeImage.src = newSrc;
  });
});
