const btnToggler = document.querySelector('#themeToggle');

export function togglerTheme() {
  const classItems = [...document.querySelectorAll(".t-light")];
  const iconTheme = document.querySelector('#icon-theme')
  const savedTheme = localStorage.getItem('theme') || 'light';

  if(savedTheme === 'dark') {
    classItems.forEach(el => {
      el.classList.remove('t-light');
      el.classList.add('t-dark');
    })
    iconTheme.setAttribute('src', './img/icons/sun.svg');
  }else {
    classItems.forEach(el => {
      el.classList.remove('t-dark');
      el.classList.add('t-light');
    })
    iconTheme.setAttribute('src', './img/icons/moon.svg');
  }

  btnToggler.addEventListener('click', () => {
    classItems.forEach((el) => {
      if(el.classList.contains('t-light')) {
        el.classList.remove('t-light');
        el.classList.add('t-dark');
        iconTheme.setAttribute('src', './img/icons/sun.svg');
        localStorage.setItem('theme','dark')
      }else {
        el.classList.remove('t-dark');
        el.classList.add('t-light');
        iconTheme.setAttribute('src', './img/icons/moon.svg');
        localStorage.setItem('theme',"light")
      }
    })
  })
}
