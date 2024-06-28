
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
          link.style.color = 'red'; // Change to your desired hover color
      });

      link.addEventListener('mouseout', () => {
          link.style.color = 'white'; // Change back to the original color
     });
});
});


