// تعريف المتغيرات
let menuBtn = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");

// إضافة حدث النقر على زر القائمة
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

// تعريف المتغيرات للتنقل
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".links a");

// دالة التمرير (scroll) التي تجمع كل الوظائف
window.onscroll = () => {
    // إزالة القائمة عند التمرير
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");

    // إضافة/إزالة الكلاس header-active عند التمرير
    if (window.scrollY > 30) {
        document.querySelector("header").classList.add("header-active");
    } else {
        document.querySelector("header").classList.remove("header-active");
    }

    // تحديث الروابط النشطة بناءً على موقع التمرير
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // إزالة الكلاس active من جميع الروابط
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            // إضافة الكلاس active للرابط المناسب
            document.querySelector(`header .navbar a[href*="${id}"]`).classList.add("active");
        }
    });
};

// تحديث السنة في الفوتر
let year = new Date().getFullYear();
let footerYear = document.querySelector(".credit").lastElementChild;
footerYear.innerHTML = year;