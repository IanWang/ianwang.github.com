;(function() {
var next = document.querySelector('._next');
var prev = document.querySelector('._prev');
var slides = document.querySelector('.project_slides');
var _dist = 0;
var moves = 5; // projects - 1
var isFirst = true;
var isEnd = false;

var goNext = function() {
  if(isEnd) return;
  _dist -= 100;
  slides.style.marginLeft = _dist + '%';
  navCheck();
};

var goPrev = function() {
  if(isFirst) return;
  _dist += 100;
  slides.style.marginLeft = _dist + '%';
  navCheck();
};

var navCheck = function() {
  if(_dist == moves * -100) { 
    isEnd = true;
    next.classList.add('_disabled');
  } else if (_dist == 0) {
    isFirst = true;
    prev.classList.add('_disabled');
  } else {
    isFirst = false;
    isEnd = false;
    next.classList.remove('_disabled');
    prev.classList.remove('_disabled');
  }
  invokeLazy();
};

function invokeLazy() {
  setTimeout(function() {
    window.scrollBy(0, 1);
  }, 250)
};

next.addEventListener('click', goNext, false);
prev.addEventListener('click', goPrev, false);


var bLazy = new Blazy({
  container: '.project_slides'
});

})();
