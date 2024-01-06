'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function call
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  console.log('Butoon clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const escape_key = function (e) {
  // console.log(e.key);
  if (!modal.classList.remove('hidden') && e.key === 'Escape') {
    closeModal();
  }
};
//

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', escape_key);
