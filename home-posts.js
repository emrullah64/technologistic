for (let i = 1; i <= 50; i++) {
    document.write(`
        <div class="news-card">
            <img src="news${i}.jpg" alt="Haber ${i}">
            <h2>Başlık ${i}</h2>
            <p>Kısa açıklama buraya gelecek.</p>
            <a href="#">Devamını oku</a>
        </div>
    `);
}