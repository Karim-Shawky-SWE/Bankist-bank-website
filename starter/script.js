'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
// const section = document.querySelectorAll('.section');

// console.log(header, section);

// const section__1 = document.getElementById('section--1');
// const allBtns = document.getElementsByTagName('button');
// console.log(allBtns);

const message = document.createElement('div');
message.classList.add('cookie-message');
// massage.textContent = 'we use cookes for improved functionality and analytics';
message.innerHTML =
  'we use cookes for improved functionality and analytics . <button class="btn btn--close--cookie">Got it</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '80%';
message.style.borderRadius = '20px';
message.style.marginBottom = '20px';
// message.style.padding = '1.2rem';

// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).width);
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).padding);

message.style.height = parseInt(getComputedStyle(message).height) + 20 + 'px';

// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// console.log(logo.getAttribute('designer'));

// logo.alt = 'Beautiful minimalist Logo';
// console.log(logo.alt);

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const twitter = document.querySelector('.twitter-link');
// console.log(twitter.href);
// console.log(twitter.getAttribute('href'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// Data attributes

//////////////////////////////////////////////////
// Button Scrolling

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);
  // console.log(
  //   'height and width of viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });
});

// document.addEventListener('keydown', function (e) {
//   console.log(e);
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! your are reading the heading');

//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// Remove event after certain time

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 2500);
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! your are reading the heading');

// };

// Nav bar links
// const section2 = document.querySelector('#section--2');
// const btnOperations = document.querySelector('#to--section--2');

// btnOperations.addEventListener('click', function () {
//   section2.scrollIntoView({ behavior: 'smooth' });
// });

// const btnFeatures = document.querySelector('#to--section--1');

// btnFeatures.addEventListener('click', function (e) {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1) + min);
// const randomRGB = () =>
//   `rgb(${randomInt(0, 255)} , ${randomInt(0, 255)} , ${randomInt(0, 255)})`;

// const nav = document.querySelector('.nav');
// const nav__links = document.querySelector('.nav__links');
// const nav__link = document.querySelector('.nav__link');

// nav__link.addEventListener('click', function (e) {
//   nav__link.style.backgroundColor = randomRGB();

//   //Stop propagation
//   // e.stopPropagation();
// });
// nav__links.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomRGB();
// });
// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomRGB();
// });
// console.log(randomRGB());

///rgb(38 , 59 , 120)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for loop with timeInterval

// let counter = 0;
// const iterator = setInterval(() => {
//   console.log(counter + 1, randomInt(0, 255));
//   counter++;
//   if (counter >= 100) clearInterval(iterator);
// }, 30);

//////////////////////////////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     console.log(id);
//   });
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log(e.target);
//   e.preventDefault();
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// const h1 = document.querySelector('h1');

// // Downwards

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// h1.firstElementChild.style.color = '#f9f9f9';
// h1.lastElementChild.style.color = 'black';

// // Going upwards

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways : siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentNode.children);

// document
//   .querySelector('.operations__content--1')
//   .classList.remove('operations__content--active');
// document
//   .querySelector('.operations__content--2')
//   .classList.remove('operations__content--active');
// document
//   .querySelector('.operations__content--3')
//   .classList.add('operations__content--active');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// console.log(tabsContent);

// // tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));
// tabsContainer.addEventListener('click', function (e) {
//   const click = e.target.closest('.operations__tab');
//   // Guard clause
//   if (!click) return;

//   tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
//   click.classList.add('operations__tab--active');

//   // Get data-tab
//   tabsContent.forEach(op => op.classList.remove('operations__content--active'));
//   document
//     .querySelector(`.operations__content--${click.dataset.tab}`)
//     .classList.add('operations__content--active');
//   console.log(click);
// });

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

const navHeight = nav.getBoundingClientRect().height;
const obsCallBack = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const header1 = document.querySelector('.header');
const headerObserver = new IntersectionObserver(obsCallBack, obsOptions);
headerObserver.observe(header1);

const logo = document.querySelector('.nav__logo');
logo.style.cursor = 'pointer';
logo.addEventListener('click', function (e) {
  header1.scrollIntoView({ behavior: 'smooth' });
});

// Revaling setions
// const sections = document.querySelectorAll('section');
// sections.forEach(sect => sect.classList.add('section--hidden'));

// const observerFunciton = function (entries, observer) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove('section--hidden');
//     observer.unobserve(entry.target);
//   });
// };

// const sectionObserver = new IntersectionObserver(observerFunciton, {
//   root: null,
//   threshold: 0.2,
// });

// sections.forEach(function (section) {
//   sectionObserver.observe(section);
// });

const allSection = document.querySelectorAll('section');
allSection.forEach(section => section.classList.add('section--hidden'));

const obsfunction = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');

    // If section was observed don't repeat observation
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(obsfunction, {
  root: null,
  threshold: 0.2,
});

// Calling observer  on each section
allSection.forEach(section => sectionObserver.observe(section));

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Lazy loading images

const allImg = document.querySelectorAll('img[data-src]');

// const lazyObserverFn = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//   });

//   observer.unobserve(entry.target);
// };

// const lazyObserver = new IntersectionObserver(lazyObserverFn, {
//   root: null,
//   threshold: 0,
//   rootMargin: '200px',
// });

// imgTargets.forEach(img => lazyObserver.observe(img));

const imgObsFn = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(imgObsFn, {
  root: null,
  rootMargin: '200px',
  threshold: 0,
});

allImg.forEach(img => imgObserver.observe(img));

const allSlides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');

const btnPrev = document.querySelector('.slider__btn--left');
const btnNext = document.querySelector('.slider__btn--right');
// slider.style.transform = `scale(0.3) translateX(-100%)`;
// slider.style.overflow = 'visible';
// // console.log(allSlides);

allSlides.forEach(
  (slide, i) => (slide.style.transform = `translateX(${i * 100}%)`)
);

const clacSlideTransform = function (slideNumber) {
  allSlides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${(i - slideNumber) * 100}%)`)
  );
};

const toNext = function () {
  if (currentSlide === allSlides.length - 1) currentSlide += 0;
  else currentSlide++;
  clacSlideTransform(currentSlide);
  activateDot(currentSlide);
};
const toPrev = function () {
  if (currentSlide > 0) currentSlide--;
  clacSlideTransform(currentSlide);
  activateDot(currentSlide);
};
let currentSlide = 0;
btnNext.closest('button').addEventListener('click', toNext);

btnPrev.closest('button').addEventListener('click', toPrev);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') toNext();
  else if (e.key === 'ArrowLeft') toPrev();
});

const dotContainer = document.querySelector('.dots');

allSlides.forEach((_, i) => {
  dotContainer.insertAdjacentHTML(
    'beforeend',
    `<button class = 'dots__dot' data-slide='${i}'></button>`
  );
});

const allDots = document.querySelectorAll('.dots__dot');

const activateDot = function (slide) {
  allDots.forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide = "${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slideNumber = e.target.dataset.slide;
    console.log(slideNumber);
    clacSlideTransform(slideNumber);
    activateDot(slideNumber);
  }
});
// allSlides.forEach((_, i) => {
//   dotContainer.insertAdjacentHTML(
//     'beforeend',
//     `<button class="dots__dot" data-slide="${i}"></button>`
//   );
// });

// const allDots = document.querySelectorAll('.dots__dot');

// const activateDot = function (slide) {
//   allDots.forEach(dot => dot.classList.remove('dots__dot--active'));
//   document
//     .querySelector(`.dots__dot[data-slide = "${slide}"]`)
//     .classList.add('dots__dot--active');
// };

// activateDot(0);

// dotContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dots__dot')) {
//     currentSlide = Number(e.target.dataset.slide);
//     clacSlideTransform(currentSlide);
//     activateDot(currentSlide);
//   }
// });
