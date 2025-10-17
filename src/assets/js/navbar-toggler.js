const btntoggler = document.querySelector('#btntoggler');

export function toggler(event) {
  const list = document.querySelector('#list');
  const items = [...list.querySelectorAll('li')];

  btntoggler.addEventListener('click', (event) => {

    if(list.classList.contains("nav-hidden")) {
      event.target.textContent = 'X';
      list.classList.remove('nav-hidden');
      list.classList.add('nav-open');
      document.querySelector('#themeToggle').style.display = 'none';
    }else {
      event.target.textContent = '☰';
      list.classList.remove('nav-open');
      list.classList.add('nav-hidden');
      document.querySelector('#themeToggle').style.display = 'block';
    }
  })
  // link clicado
    items.forEach(el => el.addEventListener('click', () =>{
      btntoggler.textContent = '☰';
      list.classList.remove('nav-open');
      list.classList.add('nav-hidden');
    }))
}
