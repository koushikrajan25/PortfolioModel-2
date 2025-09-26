const contactBtn = document.getElementById('contactBtn');
const contactBox = document.getElementById('contactBox');

contactBtn.addEventListener('click', () => {
  contactBox.style.display = contactBox.style.display === 'none' ? 'block' : 'none';
});
