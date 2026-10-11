// =====================================================
// MOBILE MENU
// =====================================================

const menuButton = document.querySelector("#menu-button");

const nav = document.querySelector(".nav");


menuButton.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// =====================================================
// CLOSE MOBILE MENU AFTER CLICK
// =====================================================

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


// =====================================================
// TICKET BUTTONS
// =====================================================

const ticketButtons = document.querySelectorAll(".ticket-button");


ticketButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("برای ادامه رزرو، سانس مورد نظر را انتخاب کنید.");

    });

});



document.querySelectorAll(".video-card video").forEach((video) => {
    const card = video.closest(".video-card");

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // کامپیوتر: با ورود ماوس پخش شود
    card.addEventListener("mouseenter", () => {
        video.play().catch(console.error);
    });

    // با خروج ماوس متوقف شود
    card.addEventListener("mouseleave", () => {
        video.pause();
    });

    // گوشی: با دیده شدن ویدئو پخش شود
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                video.play().catch(console.error);
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(video);
});



