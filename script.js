document.addEventListener('DOMContentLoaded', () => {
    const catButtons = document.querySelectorAll('.cat-btn');
    
    catButtons.forEach(button => {
        button.addEventListener('click', () => {
            catButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const categoryType = button.getAttribute('data-type') || button.textContent.trim();
            console.log(`Выбрана категория: ${categoryType}`);
        });
    });
});
