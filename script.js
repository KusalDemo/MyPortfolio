const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
        /*Character message*/
        const message = $(entry.target).data('message');
        console.log(entry.target);
        $('#dynamic-message').text(message);
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1)=>observer.observe(e1));

function toggleMobileMenu() {
    var x = document.getElementById("navigation-bar");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}
// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Typed animation
var typed = new Typed('#about-me-typed', {
    strings: ['Full Stack Developer', '&amp; Software Engineer', '&amp; Programmer','&amp; Web Developer','&amp; Welcome To My Portfolio'],
    typeSpeed: 100,
    backSpeed: 100,});




