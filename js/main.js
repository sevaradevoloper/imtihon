function openNavbar() {
    // Mobil menyuni ochish (CSS da left: 0 ga o'tkazadi)
    document.getElementById("navbar-responsive").style.left = "0";
}

function closeNavbar() {
    // Mobil menyuni yopish (CSS da left: -100% ga o'tkazadi)
    document.getElementById("navbar-responsive").style.left = "-100%";
}
 
// Tugmalarga event listener'lar biriktirish
document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

// Navigatsiya linklarini bosganda ham menyuni yopish
const navLinks = document.querySelectorAll('#navbar-responsive a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', closeNavbar);
});


// Navbarni skroll qilganda kichraytirish (shrink)
let navbar = document.getElementById("navbar");
function shrink() {
    // scrollY o'rniga window.scrollY ishlatish tavsiya etiladi
    if (window.scrollY > 80) { // O'lcham 100 dan 80 ga o'zgartirildi, chunki header balandligi 80px atrofida
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}


// Back to Top tugmasini ko'rsatish/yashirish
let backtop = document.getElementById("backtop");
function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backtop.style.bottom = "20px"; // Kichikroq qiymat berildi
    } else {
      backtop.style.bottom = "-80px";
    }
}
 
// Barcha scroll event'larini bitta joyga birlashtirish
window.addEventListener("scroll", function () {
    shrink();
    toggleBacktop();
});

// sahifa yuklanganda shrink funksiyasini bir marta chaqirish
document.addEventListener("DOMContentLoaded", shrink);