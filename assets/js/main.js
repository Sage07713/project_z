/* ==============================
   ZIPI Innovation Main Script
============================== */

console.log("ZIPI Innovation site loaded");

/* ------------------------------
   Smooth scroll navigation
------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId.length > 1) {
            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


/* ------------------------------
   Navbar shadow on scroll
------------------------------ */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
});


/* ------------------------------
   Active nav link highlight
------------------------------ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "";

        if (link.getAttribute("href") === `#${current}`) {
            link.style.color = "#22d3ee";
        }
    });
});


/* ------------------------------
   Button click console tracking
------------------------------ */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Button clicked:", btn.innerText);
    });
});
