document.addEventListener('DOMContentLoaded', () => {
    const catButtons = document.querySelectorAll('.cat-btn');
    catButtons.forEach(button => {
        button.addEventListener('click', () => {
            catButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            console.log(`Выбрана категория: ${button.getAttribute('data-type')}`);
        });
    });

    const alertButtons = document.querySelectorAll('.alert-btn');
    alertButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            alert(`Вы нажали на кнопку: "${e.target.textContent}". В учебной версии бэкенд не предусмотрен!`);
        });
    });

    const regionBtn = document.getElementById('regionBtn');
    const regionDropdown = document.getElementById('regionDropdown');

    if (regionBtn && regionDropdown) {
        regionBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            regionDropdown.classList.toggle('show');
        });

        const dropdownItems = regionDropdown.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const selectedCity = e.target.textContent;
                
                regionBtn.textContent = selectedCity + ' ▾';
                
                regionDropdown.classList.remove('show');
                console.log(`Выбран город: ${selectedCity}`);
            });
        });

        document.addEventListener('click', () => {
            regionDropdown.classList.remove('show');
        });
    }

    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchBar.value.trim() !== '') {
                alert(`Поиск по запросу: "${searchBar.value}"...`);
                searchBar.value = '';
            }
        });
    }
});