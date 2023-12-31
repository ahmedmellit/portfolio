/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});
const typewriterElement = document.getElementById("typewriter");
const jobTitles = [
    " Data Scientist",
    " Data Analyst",
    "n AI Developer",
    " Blogger",
];
let currentTitleIndex = 0;
let index = 0;
          
function typeJobTitle() {
    if (index < jobTitles[currentTitleIndex].length) {
    typewriterElement.textContent += jobTitles[currentTitleIndex].charAt(index);
    index++;
    setTimeout(typeJobTitle, 100); // Adjust typing speed (milliseconds)
    } else {
    setTimeout(eraseJobTitle, 1000); // Delay before erasing (milliseconds)
    }
}
          
function eraseJobTitle() {
    if (index > 0) {
    typewriterElement.textContent = jobTitles[currentTitleIndex].substr(0, index - 1);
    index--;
    setTimeout(eraseJobTitle, 50); // Adjust erasing speed (milliseconds)
    } else {
    currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
    setTimeout(typeJobTitle, 500); // Delay before typing next title (milliseconds)
    }
}

(function() {
    emailjs.init("user_your_emailjs_user_id"); // Replace with your Email.js user ID

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Replace with your Email.js template ID
        var templateParams = {
            to_email: "ahmed.mellit@esi.ac.ma", // Your email address
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_your_service_id", "template_your_template_id", templateParams)
            .then(function(response) {
                alert("Email sent successfully!");
            }, function(error) {
                alert("Error sending email. Please try again later.");
            });
    });
})();

typeJobTitle(); // Start the looped typing animation

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
