let mainTitle = document.querySelector('h1');
let elcontprofile = document.querySelector('.cont-profile');
let elcontaboutme = document.querySelector('.cont-introduce');
let elcontproject = document.querySelector('.cont-project');
let elcontskill = document.querySelector('.cont-skill');
let elcontawards = document.querySelector('.cont-awards');
let elconeducation = document.querySelector('.cont-education');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  console.log('scrollY', value);

  if (value > 250) {
    mainTitle.style.animation = 'disappear 1s ease-out forwards';
    elcontprofile.style.animation = 'disappear 1s ease-out forwards';
  } else {
    mainTitle.style.animation = `slide 1s ease-out`;
    elcontprofile.style.animation = `slide 1s ease-out`;
  }

  if (value > 500) {
    elcontproject.style.animation = `slide 1s ease-out`;
  } else {
    elcontproject.style.animation = 'disappear 1s ease-out forwards';
  }

  if (value > 1500) {
    elcontskill.style.animation = `slide 1s ease-out`;
  } else {
    elcontskill.style.animation = 'disappear 1s ease-out forwards';
  }

  if (value > 1800) {
    elcontawards.style.animation = `slide 1s ease-out`;
  } else {
    elcontawards.style.animation = 'disappear 1s ease-out forwards';
  }

  if (value > 1850) {
    elconeducation.style.animation = `slide 1s ease-out`;
  } else {
    elconeducation.style.animation = 'disappear 1s ease-out forwards';
  }
});
