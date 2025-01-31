let isLightTheme = false; // Temanın durumu için bir bayrak

document.getElementById('light-theme-button').addEventListener('click', function() {
    const allElements = document.querySelectorAll('*'); // Tüm etiketleri seç

    if (!isLightTheme) {
        allElements.forEach(element => {
            element.classList.add('light-theme'); // Yeni sınıf ekle    
        });
        isLightTheme = true; // Tema açık hale getirildi
    } else {
        allElements.forEach(element => {
            element.classList.remove('light-theme'); // Sınıfı kaldır
        });
        isLightTheme = false; // Tema koyu hale getirildi
    }
});