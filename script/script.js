function showMenu(){
  let menuElement = document.querySelector('.js-menu-obtainer');
  if (menuElement.classList.contains('menu')){
    menuElement.classList.remove('menu')
    menuElement.classList.add('menu-hidden')
  } else if (menuElement.classList.contains('menu-hidden')) {
    menuElement.classList.remove('menu-hidden')
    menuElement.classList.add('menu')
  }
}