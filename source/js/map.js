var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var peninoMap = document.querySelector('.map--penino');
var orlovkaMap = document.querySelector('.map--orlovka');

var peninoMarker = document.querySelector('.marker-penino');
var orlovkaMarker = document.querySelector('.marker-orlovka');

var closeButton = document.querySelector('.map .map__close');

var onMapEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeMap();
  }
};

console.log(peninoMarker);
console.log(orlovkaMarker);

var showMapPenino = function () {
  peninoMap.classList.remove('hidden');
  document.addEventListener('keydown', onMapEscPress);
}

var showMapOrlovka = function () {
  orlovkaMap.classList.remove('hidden');
  document.addEventListener('keydown', onMapEscPress);
}

var closeMap = function () {
  peninoMap.classList.add('hidden');
  document.removeEventListener('keydown', onMapEscPress);
}

peninoMarker.addEventListener('click', function() {
  showMapPenino();
});

// orlovkaMarker.addEventListener('click', function() {
//   showMapOrlovka();
// });

closeButton.addEventListener('click', function () {
  closeMap();
});

var submitButton = document.querySelector('.contacts__submit-btn');
var thanksPopup = document.querySelector('.popup');

submitButton.addEventListener('click', function() {
  thanksPopup.classList.remove('hidden');
})

