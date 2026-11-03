const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', nav.classList.contains('open'));
  menuButton.textContent = nav.classList.contains('open') ? '✕' : '☰';
});
document.querySelectorAll('#nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.textContent = '☰'; menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
