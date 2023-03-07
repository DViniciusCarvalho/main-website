var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var menuLinks = document.querySelectorAll('.menu li a');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', function() {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});
