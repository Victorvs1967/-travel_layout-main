new Gallery(document.getElementById("gallery"), { margin: 10 });

const BURGER_MENU_OPENED = 'burger-menu_opened',
      SPACE_COVER_VISIBLE = 'space-cover_visible',
      MAIN_NAV_LINK_ACTIVE = 'main-nav__link_active',
      HEADER_SCROLLED = 'header_scrolled',
      BURGER_MENU_SCROLLED = 'burger-menu__control_scrolled',
      STICKY_START_SCROLL = 20;

const logo = document.querySelector('.logo'),
      menu = document.querySelector('.burger-menu'),
      nav_menu_links = document.querySelectorAll('.main-nav__link'),
      control = document.querySelector('.burger-menu__control'),
      cover = document.querySelector('.space-cover'),
      header = document.querySelector('.header'),
      scroll_action = document.getElementById('scroll-action'),
      scroll_to = document.getElementById('scroll-to');

control.addEventListener('click', () => {
  menu_toggle();
});

cover.addEventListener('click', () => {
  menu_close();
});

nav_menu_links.forEach(link => {
  link.addEventListener('click', () => {
    nav_menu_links.forEach(link => link.classList.remove(MAIN_NAV_LINK_ACTIVE));
    link.classList.add(MAIN_NAV_LINK_ACTIVE);
    menu_close();
  });
}); 

const menu_toggle = () => {
  menu.classList.toggle(BURGER_MENU_OPENED);
  cover.classList.toggle(SPACE_COVER_VISIBLE);
  logo.style = menu.classList.contains(BURGER_MENU_OPENED) ? 'transform: translate3d(-70vw, 0, 0);' : '';
};

const menu_close = () => {
  logo.style = '';
  menu.classList.remove(BURGER_MENU_OPENED);
  cover.classList.remove(SPACE_COVER_VISIBLE);
};

/* Sticky Header */
const sticky_toggle = () => {
  if (
    window.scrollY >= STICKY_START_SCROLL
    && !header.classList.contains(HEADER_SCROLLED)
  ) {
    header.classList.add(HEADER_SCROLLED);
    control.classList.add(BURGER_MENU_SCROLLED);
  } else if (
    window.scrollY < STICKY_START_SCROLL
    && header.classList.contains(HEADER_SCROLLED)
  ) {
    header.classList.remove(HEADER_SCROLLED);
    control.classList.remove(BURGER_MENU_SCROLLED);
  }
};

sticky_toggle();
window.addEventListener('scroll', () => {
  sticky_toggle();
});

/* Scroll to */
let currentScroll = window.scrollY;
let scrollAnimationId;

const startAnimationScroll = (newScrollY) => {
  const deltaScroll = newScrollY - currentScroll;
  currentScroll += deltaScroll * 0.15;
  window.scrollTo(0, currentScroll);

  if (Math.abs(deltaScroll) > 1) {
    scrollAnimationId = window.requestAnimationFrame(() => startAnimationScroll(newScrollY));
  } // ---------- ?????
};

scroll_action.addEventListener('click', (event) => {
  event.preventDefault();
  
  stopAnimationScroll();

  currentScroll = window.scrollY;
  startAnimationScroll(scroll_to.offsetTop);
});