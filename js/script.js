//Burger script
const burger = document.querySelector('.burger');
const menu = document.querySelector('.aside-nav');
const buttonClose = document.querySelector('.close');
const activePage = document.querySelector('.active');



burger.addEventListener('click', () => {
   menu.classList.add('is-open');
});

const close = function () {
   menu.classList.remove('is-open');
};

buttonClose.addEventListener('click', () => {
   close();
});


activePage.addEventListener('click', (e) => {
   e.preventDefault();
   close();
});

//Checkbox script
const checkboxes = document.querySelectorAll('.checkbox');
let isBuble = false;

for (let chek of checkboxes) {
   chek.addEventListener('change', () => {
      let address = chek.previousElementSibling;
      address.classList.toggle('bright');
      isBuble = true;
   });
   let inp = chek.querySelector('input');
   let address = chek.previousElementSibling;
   if (inp.checked) {
      address.classList.add('bright');
   }
}

// Popup script

const hit = document.querySelector('.popup--success');
const mistake = document.querySelector('.popup--error');

if (response.ok) {
   console.log(isBuble);
   hit.classList.add('emerge');
   setTimeout(() => { hit.classList.remove('emerge') }, 2000);
} else {
   mistake.classList.add('emerge');
   setTimeout(() => { mistake.classList.remove('emerge') }, 2000);
};



