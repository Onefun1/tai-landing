 function burger() {
     const burgerItem = document.querySelector('.burger');
     const menu = document.querySelector('.header__info');
     const infoLinks = document.querySelectorAll('.header__item');

     for (let i = 0; i < infoLinks.length; i++) {
         infoLinks[i].addEventListener('click', () => {
             menu.classList.remove('header__info-active');
         });
     }

     //  const menuCloseItem = document.querySelector('.header__info-close');
     burgerItem.addEventListener('click', () => {
         menu.classList.toggle('header__info-active');
     });

     //  menuCloseItem.addEventListener('click', () => {
     //      menu.classList.remove('header__info-active');
     //  });
 };


 export default burger