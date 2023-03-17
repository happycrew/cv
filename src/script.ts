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
  (selectedTheme === 'dark') 
  ? document.documentElement.setAttribute('theme', 'dark') 
  : document.documentElement.setAttribute('theme', 'light');
}

themeButton.addEventListener('click', () => {
  if (document.documentElement.getAttribute('theme') == 'dark') {
    console.log('ye')
    document.documentElement.setAttribute('theme', 'light');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
  }
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})


