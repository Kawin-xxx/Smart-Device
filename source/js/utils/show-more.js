let buttonOpen = document.querySelector('.about__button');
let blockHidden = document.querySelector('.about__more');
let textHidden = blockHidden.querySelector('p');


let showMoreInfo = () => {
  buttonOpen.addEventListener('click', () => {
    if (blockHidden.classList.contains('close')) {
      blockHidden.classList.remove('close');
      buttonOpen.textContent = 'Скрыть';
      textHidden.classList.remove('visually-hidden');
    } else {
      blockHidden.classList.add('close');
      buttonOpen.textContent = 'Подробнее';
      textHidden.classList.add('visually-hidden');
    }
  });
};

export {showMoreInfo};
