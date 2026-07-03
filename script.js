// ===============================
// COOLEN GROUP
// Main JavaScript
// ===============================

// ---------- NAVBAR SCROLL ----------

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ---------- FADE IN ANIMATIONS ----------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});

// ---------- ACTIVE PAGE ----------

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (
        href === currentPage ||
        (currentPage === "" && href === "index.html")
    ) {
        link.style.color = "#2563eb";
        link.style.fontWeight = "700";
    }

});

// ---------- BUTTON RIPPLE EFFECT ----------

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left =
            e.clientX -
            this.getBoundingClientRect().left -
            diameter/2 + "px";

        circle.style.top =
            e.clientY -
            this.getBoundingClientRect().top -
            diameter/2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if(ripple){
            ripple.remove();
        }

        this.appendChild(circle);

    });

});

// ---------- SMOOTH SCROLL ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
