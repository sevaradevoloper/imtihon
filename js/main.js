function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
}

function closeNavbar() {
    
    document.getElementById("navbar-responsive").style.left = "-100%";
}
 

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);


const navLinks = document.querySelectorAll('#navbar-responsive a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', closeNavbar);
});


let navbar = document.getElementById("navbar");
function shrink() {
    
    if (window.scrollY > 80) { 
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}



let backtop = document.getElementById("backtop");
function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backtop.style.bottom = "20px"; 
    } else {
      backtop.style.bottom = "-80px";
    }
}
 

window.addEventListener("scroll", function () {
    shrink();
    toggleBacktop();
});

document.addEventListener("DOMContentLoaded", shrink);







const counterElements = document.querySelectorAll('.counter');
const aboutSection = document.getElementById('about');
let hasCounted = false;

function formatNumber(num, format) {
    if (format === 'K') {
        return (num / 1000).toFixed(1).replace('.0', '') + 'K';
    }
    if (format === '+') {
        return num + '+';
    }
    return num.toLocaleString('en-US');
}

function startCounter() {
    if (!aboutSection || hasCounted) {
        return;
    }

    const rect = aboutSection.getBoundingClientRect();
    const isVisible = rect.top < (window.innerHeight - 100);

    if (isVisible) {
        hasCounted = true; 
        
        counterElements.forEach(element => {
            const target = parseInt(element.getAttribute('data-target'));
            const format = element.getAttribute('data-format');
            const duration = 2000;
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentCount = Math.floor(progress * target);
                
                element.textContent = formatNumber(currentCount, format);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    element.textContent = formatNumber(target, format);
                }
            };

            requestAnimationFrame(updateCount);
        });
        
        window.removeEventListener('scroll', startCounter);
    }
}

window.addEventListener('scroll', startCounter);
window.addEventListener('load', startCounter);