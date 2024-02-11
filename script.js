// Perbuatan Variabel
const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

// Code agar search bar muncul ketika tombol search diklik, namun fungsi search belum dapat difungsikan
searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

// code agar menu navigasi dapat muncul dari samping kiri dilayar hp ketika tombol humberger diklik
navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});

// code agar menu list search muncul dan dapat diklik
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const menuItems = {
    Origini: "origini",
    Sukiyaki: "sukiyaki",
    Shoba: "shoba",
    Sushi: "sushi",
    Teriyaki: "teriyaki",
    Udon: "udon",
    Omurice: "omurice",
    Ramen: "ramenMenu",
    ChickenKatsu: "chickenKatsu",
    Okonomiyaki: "okonomiyaki",
    Mochi: "mochi",
    Takoyaki: "takoyaki",
    Matcha: "matcha",
    TehSakura: "tehSakura",
    Genmaicha: "genmaicha",
    Aojiru: "aojiru",
    RoyalMilkTea: "royaltea",
    Uroncha: "uroncha"
};

searchInput.addEventListener("input", function () {
    const inputValue = this.value.toLowerCase();
    let matches = Object.keys(menuItems).filter(item =>
        item.toLowerCase().includes(inputValue)
    );

    if (inputValue === "") {
        matches = [];
    }

    displayMatches(matches);
});

function displayMatches(matches) {
    const html = matches.map(match => `<li>${match}</li>`).join("");
    searchResults.innerHTML = html;

    const listItems = searchResults.querySelectorAll("li");
    listItems.forEach(item => {
        item.addEventListener("click", function () {
            const selectedItem = this.textContent;
            const targetDivId = menuItems[selectedItem];
            const targetDiv = document.getElementById(targetDivId);
            if (targetDiv) {
                targetDiv.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                targetDiv.classList.add("hover-effect");
                targetDiv.addEventListener("mouseleave", function () {
                    targetDiv.classList.remove("hover-effect");
                });
            }
        });
    });
}

// code agar background navbar berubah saat scroll
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbarTag");
    var homeSection = document.getElementById("home");

    var scrollPercentage = (window.scrollY / homeSection.offsetHeight) * 100;

    if (scrollPercentage >= 90) {
        navbar.classList.add("nav-black");
    } else {
        navbar.classList.remove("nav-black");
    }
});

// code agar div target link berada di tengah layar
const navLinks = document.querySelectorAll(".nav-links li a");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href"); // Mendapatkan nilai href dari link
        const targetNavDiv = document.querySelector(targetId);

        // Menangani hanya untuk link internal (menuju ke div di halaman)
        if (targetNavDiv && !targetId.startsWith("http")) {
            // Memeriksa apakah link bukan link eksternal
            event.preventDefault(); // Mencegah perilaku default link

            const navHeight = document.querySelector(".nav").offsetHeight;
            // Mendapatkan tinggi navbar

            // Menyesuaikan offset untuk posisi scroll
            const scrollPosition = targetNavDiv.offsetTop - navHeight - 20; // Offset 10px ke atas

            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            });
        }
    });
});
