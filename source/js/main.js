window.onload=function() {

var controls = document.querySelectorAll('.slider_controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slider__item');
var currentSlide = 0;

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slider__showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
  nextSlide();
};
previous.onclick = function(){
  previousSlide();
};

}
