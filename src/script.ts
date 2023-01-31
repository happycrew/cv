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
//     const sectionHeight = el.offsetHeight;
//     const sectionTop = el.offsetTop - 50;
//     const sectionId = el.getAttribute('id') as string;

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       (document.querySelector('nav__menu a[href*=' + sectionId + ']') as HTMLElement).classList.add('active-link');
//     } else {
//       (document.querySelector('nav__menu a[href*=' + sectionId + ']') as HTMLElement).classList.remove('active-link');
//     }
//   })
// }

// window.addEventListener('scroll', scrollActive);