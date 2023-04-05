let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let mainHeader = document.querySelector('.main-header--nojs');
let mainLink =  document.querySelector('.main-header__link--nojs');
let storeLocation =  document.querySelector('.store-location__map--nojs');

navMain.classList.remove('main-nav--nojs');
mainHeader.classList.remove('main-header--nojs');
mainLink.classList.remove('main-header__link--nojs');
storeLocation.classList.remove('store-location__map--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
