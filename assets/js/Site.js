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

window.addEventListener("mousemove", function (e) {
    // Create new loader container
    var parent_div = document.createElement('div');
    parent_div.className = "loader-container";

    // Create the inner loader (circle)
    var inner_div = document.createElement('div');
    inner_div.className = "loader";
    parent_div.appendChild(inner_div);

    // Append the loader container to the body
    document.body.appendChild(parent_div);

    // Set position based on mouse coordinates
    parent_div.style.left = (e.clientX - 50) + 'px';
    parent_div.style.top = (e.clientY - 50) + 'px';

    // Limit the number of loader elements to 50
    if (document.getElementsByClassName('loader-container').length > 50) {
        var to_remove = document.getElementsByClassName('loader-container')[0];
        document.body.removeChild(to_remove); // Remove the first loader container
    }
});


