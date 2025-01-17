document.addEventListener('DOMContentLoaded', function() {
    // Функция для загрузки контента через Fetch API
    function loadContent(page) {
        fetch(`${page}.html`) // Загружаем соответствующий HTML-файл
            .then(response => response.text())  // Преобразуем ответ в текст
            .then(data => {
                document.getElementById('content').innerHTML = data; // Вставляем в основной контейнер
            })
            .catch(error => {
                console.error('Ошибка при загрузке контента:', error);
            });
    }

    // Слушатели событий для каждой ссылки
    document.getElementById('home-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('home'); // Загружаем контент из home.html
    });

    document.getElementById('about-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('about'); // Загружаем контент из about.html
    });

    document.getElementById('contact-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('contact'); // Загружаем контент из contact.html
    });

    document.getElementById('appointment-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('appointment'); // Загружаем контент из appointment.html
    });

    // Загружаем главную страницу по умолчанию
    loadContent('home');
});
