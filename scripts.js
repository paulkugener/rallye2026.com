document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const checkbox = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !checkbox || !links) return;

  const updateAria = () => {
    toggle.setAttribute('aria-expanded', String(checkbox.checked));
  };

  checkbox.addEventListener('change', updateAria);
  updateAria();

  // Close menu when a link is clicked (mobile)
  links.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      checkbox.checked = false;
      updateAria();
    }
  });
});
