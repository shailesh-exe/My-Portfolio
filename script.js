// Toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar= document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-x") ;
    navbar.classList.toggle("active") ;
}

// Scroll Sections Active link

let sections = document.querySelectorAll("section") ;
let navLinks = document.querySelectorAll("header nav a") ;

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY ;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute("id") ;
        
        if(top>=offset && top < offset+height)
        {
            navLinks.forEach(links => {
                links.classList.remove("active") ;
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active") ;
            });
        }
    });

    // Sticky navbar

    let header = document.querySelector("header") ;
    header.classList.toggle("sticky", window.scrollY > 100) ;

    // Remove Toggle icon and navbar when click navbar link(scroll) 

    menuIcon.classList.remove("fa-x") ;
    navbar.classList.remove("active") ;

}

// Scroll Reveal 

ScrollReveal({ 
    // reset: true ,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });


// Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Good Guy', 'Team leader'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
}) ;

// Email SMTP JS
let btn = document.getElementById("btn") ;
btn.addEventListener("click", function(e){
    e.preventDefault() ;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'shuklashailesh2001@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

})