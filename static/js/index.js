new Gallery(document.getElementById("gallery"), { margin: 10 });


const BURGER_MENU_OPENED = 'burger-menu_opened',
      SPACE_COVER_VISIBLE = 'space-cover_visible',
      MAIN_NAV_LINK_ACTIVE = 'main-nav__link_active',
      menu = document.querySelector('.burger-menu'),
      nav_menu_links = document.querySelectorAll('.main-nav__link'),
      control = document.querySelector('.burger-menu__control'),
      cover = document.querySelector('.space-cover');

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
};

const menu_close = () => {
  menu.classList.remove(BURGER_MENU_OPENED);
  cover.classList.remove(SPACE_COVER_VISIBLE);
};