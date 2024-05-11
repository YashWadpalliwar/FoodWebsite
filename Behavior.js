document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  // Add click event listener to the menu icon
  menuIcon.addEventListener('click', function() {
    // Toggle the 'show-menu' class on the parent element
    menuIcon.parentElement.classList.toggle('show-menu');
  });
});