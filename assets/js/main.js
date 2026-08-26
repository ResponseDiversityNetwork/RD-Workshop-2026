const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (button && nav) {
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
