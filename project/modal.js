let button = document.querySelector('.button-contacts');
let modal = document.querySelector('.modal-container');
let modalCloseBtn = document.querySelector('.modal-close-button');

button.addEventListener("click", function () {
    modal.classList.remove('modal-container-close');
    document.body.style.overflow = 'hidden';
});

modalCloseBtn.addEventListener("click", function () {
  modal.classList.add('modal-container-close');
  document.body.style.overflow = '';
});

modal.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add('modal-container-close');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.add('modal-container-close'); //удаляем класс на открытие при взаимодеийдствии с кнопкой клавиатурой
    document.body.style.overflow = '';
  }
});
