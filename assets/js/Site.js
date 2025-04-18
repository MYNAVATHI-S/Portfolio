let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll =() =>{
let header =document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY >100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};



ScrollReveal({ 
    // reset: true,
distance:'80px',
duration:2000,
delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });

ScrollReveal().reveal('.home-content h1, .about img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


const typed = new Typed('.multiple-text',{
    strings: ['Engineer','Student','Software Developer'],
    typeSpeed:100,
    backSpeed:100,
    delay:1000,
    loop:true
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  const x = e.clientX, y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top  = y + 'px';

  // Trail dot with rainbow fade
  const t = document.createElement('div');
  t.className = 'trail';
  t.style.left = x + 'px';
  t.style.top  = y + 'px';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1200);

  // Sparkle star (40% chance per move for more sparkle)
  if (Math.random() < 0.4) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    // random offset for sparkles
    s.style.left = (x + (Math.random() * 30 - 15)) + 'px';
    s.style.top  = (y + (Math.random() * 30 - 15)) + 'px';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 700);
  }
});

// Click ripple effect
document.addEventListener('click', e => {
  const r = document.createElement('div');
  r.className = 'ripple';
  r.style.left = e.clientX + 'px';
  r.style.top  = e.clientY + 'px';
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 600);
});
