// Sayfa kaydırıldığında başlık ve menü kaybolsun
window.onscroll = function() {
    var header = document.querySelector("header");
    var nav = document.querySelector("nav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.top = "-55px"; // Başlık kaybolur
        nav.style.top = "10px"; // Menü yukarı kayar
    } else {
        header.style.top = "0"; // Başlık geri gelir
        nav.style.top = "70px"; // Menü geri eski konumuna döner
    }
};