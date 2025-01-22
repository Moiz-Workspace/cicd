// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Typing Effect for Hero Section
  const text = "Full Stack Engineer";
  let i = 0;
  const speed = 100;
  
  function typeWriter() {
    if (i < text.length) {
      document.querySelector('.title').innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  window.onload = () => typeWriter();
  