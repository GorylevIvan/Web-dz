document.getElementById('theme').addEventListener('click', function() {
    const root = document.documentElement;
    if (root.style.getPropertyValue('--bg-color') === '#171616') {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--font-color', '#000000');
        root.style.setProperty('--footer-color', '#f0f0f0');
        root.style.setProperty('--button-color', '#e0e0e0');
    } else {
        root.style.setProperty('--bg-color', '#171616');
        root.style.setProperty('--font-color', '#ffffff');
        root.style.setProperty('--footer-color', '#333333');
        root.style.setProperty('--button-color', '#252121');
    }
});


const slider = document.querySelector('.slider');
let isDragging = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        slider.style.cursor = 'grab';
    }
});

slider.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        slider.style.cursor = 'grab';
    }
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Увеличиваем скорость прокрутки
    slider.scrollLeft = scrollLeft - walk;
});

// Добавляем поддержку touch-событий для мобильных устройств
slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDragging = false;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Увеличиваем скорость прокрутки
    slider.scrollLeft = scrollLeft - walk;
});


