import './style.scss';

// Show menu //

const showMenu = (toggleID: string, navID: string): void => {
  const toggle = document.getElementById(toggleID);
  const nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu');

// Remove mobile menu //

const navLink = document.querySelectorAll('.nav__link');

const linkAction = (): void => {
  const navMenu = document.getElementById('nav-menu');
  navMenu?.classList.remove('show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction));

// Scroll sections active link //

// const sections = document.querySelectorAll('section[id]');
// console.log(sections, 'sections');
// const scrollActive = () => {
//   const scrollY = window.pageYOffset;

//   sections.forEach(el => {
//     console.log(el, 'el');
//     const sectionHeight = (el as HTMLElement).offsetHeight;
//     const sectionTop = (el as HTMLElement).offsetTop - 50;
//     const sectionId = el.getAttribute('id') as string;

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       (document.querySelector('nav__menu a[href*=' + sectionId + ']') as HTMLElement).classList.add('active-link');
//     } else {
//       (document.querySelector('nav__menu a[href*=' + sectionId + ']') as HTMLElement).classList.remove('active-link');
//     }
//   })
// }

// window.addEventListener('scroll', scrollActive);

// Show scroll top //
const scrollTop = () => {
  const scrollTop = document.getElementById('scroll-top') as HTMLElement;
  if (window.scrollY >= 560) {
    scrollTop.classList.add('show-scroll')
  } else {
    scrollTop.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollTop);

// Dark / Light themes // 
const themeButton = document.getElementById('theme-button') as HTMLElement;
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedTheme === 'bx-moon' ? 'add' : 'remove'](iconTheme);
  (selectedTheme === 'dark') ? document.documentElement.setAttribute('theme', 'dark') : document.documentElement.setAttribute('theme', 'light');
}

themeButton.addEventListener('click', () => {
  if (document.documentElement.getAttribute('theme') == 'dark') {
    console.log('ye')
    document.documentElement.setAttribute('theme', 'light');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
  }
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})