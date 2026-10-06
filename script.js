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


// =====================================================
// VIDEO BUTTON
// =====================================================

const playButton = document.querySelector("#play-button");


playButton.addEventListener("click", function () {

    alert("ویدئوی استخر در این قسمت پخش می‌شود.");

});