
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
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


document.addEventListener("DOMContentLoaded", function () {
    // Hide loading screen
    document.querySelector('.loading-screen').style.display = 'none';
    // Show content
    document.getElementById('content').style.display = 'block';
});
