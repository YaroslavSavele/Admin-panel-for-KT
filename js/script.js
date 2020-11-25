//Burger script
const burger = document.querySelector('.burger');
const menu = document.querySelector('.aside-nav');
const buttonClose = document.querySelector('.close');
const activePage= document.querySelector('.active');



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

   for (let chek of checkboxes) {
      chek.addEventListener('change', () => {
         let address = chek.previousElementSibling;
         address.classList.toggle('bright');
        
      });
   }