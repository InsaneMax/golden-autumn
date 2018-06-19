var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var peninoMap = document.querySelector('.map--penino');
var orlovkaMap = document.querySelector('.map--orlovka');

var peninoLinkFirst = document.querySelector('.marker-penino');
var orlovkaLinkFirst = document.querySelector('.marker-orlovka');
var peninoLinkSecond = document.querySelector('.address__link--penino');
var orlovkaLinkSecond = document.querySelector('.address__link--orlovka');
var peninoLinkThird = document.querySelector('.address__penino');
var orlovkaLinkThird = document.querySelector('.address__orlovka');
var peninoLinkFourth = document.querySelector('.info__penino--link');
var orlovkaLinkFourth = document.querySelector('.info__orlovka--link');
var closeButtonPenino = document.querySelector('.map .map__close--penino');
var closeButtonOrlovka = document.querySelector('.map .map__close--orlovka');

// var onMapEscPress = function (evt) {
//   if (evt.keyCode === ESC_KEYCODE) {
//     closeMapPenino() || closeMapOrlovka();
//   }
// };

// var showMapPenino = function () {
//   peninoMap.classList.remove('hidden');
//   document.addEventListener('keydown', onMapEscPress);
// }

// var showMapOrlovka = function () {
//   orlovkaMap.classList.remove('hidden');
//   document.addEventListener('keydown', onMapEscPress);
// }

// var closeMapPenino = function () {
//   peninoMap.classList.add('hidden');
//   document.removeEventListener('keydown', onMapEscPress);
// }

// var closeMapOrlovka = function () {
//   orlovkaMap.classList.add('hidden');
//   document.removeEventListener('keydown', onMapEscPress);
// }

// peninoLinkFirst.addEventListener('click', function () {
//   showMapPenino();
// });

// orlovkaLinkFirst.addEventListener('click', function () {
//   showMapOrlovka();
// });

// peninoLinkSecond.addEventListener('click', function () {
//   showMapPenino();
// });

// orlovkaLinkSecond.addEventListener('click', function () {
//   showMapOrlovka();
// });

// peninoLinkThird.addEventListener('click', function () {
//   showMapPenino();
// });

// orlovkaLinkThird.addEventListener('click', function () {
//   showMapOrlovka();
// });

// peninoLinkFourth.addEventListener('click', function () {
//   showMapPenino();
// });

// orlovkaLinkFourth.addEventListener('click', function () {
//   showMapOrlovka();
// });

// closeButtonPenino.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   closeMapPenino();
// });

// closeButtonOrlovka.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   closeMapOrlovka();
// });

var submitButton = document.querySelector('.contacts__submit-btn');
var thanksPopup = document.querySelector('.popup');

submitButton.addEventListener('click', function() {
  thanksPopup.classList.remove('hidden');
})

var galleryItemPenino = document.querySelector('.gallery .gallery__item--penino');
var galleryItemOrlovka = document.querySelector('.gallery .gallery__item--orlovka');
var sliderPenino = document.querySelector('.swip--penino');
var sliderOrlovka = document.querySelector('.swip--orlovka');

console.log(galleryItemPenino);
console.log(galleryItemOrlovka);

galleryItemPenino.addEventListener('click', function() {
  console.log('click penino');
  sliderPenino.classList.remove('hidden');
  sliderOrlovka.classList.add('hidden');
});

galleryItemOrlovka.addEventListener('click', function() {
  console.log('click orlovka')
  sliderOrlovka.classList.remove('hidden');
  sliderPenino.classList.add('hidden');
});


