// // Smooth scrolling for nav links
// document.querySelectorAll('.nav-links a').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetID = this.getAttribute('href').substring(1);
//     const targetSection = document.getElementById(targetID);

//     if(targetSection) {
//       window.scrollTo({
//         top: targetSection.offsetTop - 70, // adjust for navbar height
//         behavior: 'smooth'
//       });
//     }
//   });
// });

// // Optional: Change navbar background on scroll
// window.addEventListener('scroll', () => {
//   const navbar = document.querySelector('.navbar');
//   if(window.scrollY > 50) {
//     navbar.style.backgroundColor = '#004a99'; // darker blue on scroll
//     navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
//   } else {
//     navbar.style.backgroundColor = '#1e90ff'; // original blue
//     navbar.style.boxShadow = 'none';
//   }
// });
// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    if(targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 50) {
    navbar.style.backgroundColor = '#004a99';
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  } else {
    navbar.style.backgroundColor = '#1e90ff';
    navbar.style.boxShadow = 'none';
  }
});

// Show alert on contact form submit
document.querySelector('.contact-section form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ Message sent successfully!');
  this.reset();
});

