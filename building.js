const buildingsData = {
    luch: {
        title: "ЖК «Луч»",
        district: "Харьковская гора",
        image: "image/1lych.png",
        description: "ЖК «Луч» — это высотный флагман современной архитектуры Белгорода. Расположенный на престижной Харьковской горе, комплекс предлагает панорамные виды на город, закрытую охраняемую территорию, дизайнерские подъезды и подземный паркинг. Вся инфраструктура находится в шаговой доступности.",
        lots: [
            { type: "2-комнатная квартира", space: "64.0 м²", floor: "11/17", price: "6 200 000 ₽" },
            { type: "3-комнатная квартира", space: "88.2 м²", floor: "8/17", price: "8 950 000 ₽" }
        ]
    },
    privilegiya: {
        title: "ЖК «Привилегия»",
        district: "Центральный район",
        image: "image/2privelegiya.png",
        description: "Жилой комплекс премиум-класса «Привилегия» создан для тех, кто ценит тишину исторического центра в сочетании с абсолютным комфортом. Малоэтажная застройка, премиальные материалы отделки фасадов, высокие потолки (3.1м) и индивидуальное отопление делают этот объект жемчужиной белгородской недвижимости.",
        lots: [
            { type: "Студия", space: "31.2 м²", floor: "2/5", price: "3 900 000 ₽" },
            { type: "2-комнатная квартира", space: "71.5 м²", floor: "4/5", price: "8 100 000 ₽" }
        ]
    },
    parkoviy: {
        title: "ЖК «Парковый»",
        district: "Район парка Ленина",
        image: "image/3parkoviy.png",
        description: "Экологически чистый и зеленый квартал «Парковый» прилегает прямо к центральному парку культуры и отдыха. Идеальное место для семейной жизни: променады для прогулок, детские игровые хабы нового поколения, отсутствие машин во дворе и чистый воздух прямо в самом сердце Белгорода.",
        lots: [
            { type: "1-комнатная квартира", space: "45.0 м²", floor: "6/10", price: "4 700 000 ₽" },
            { type: "3-комнатная квартира", space: "92.1 м²", floor: "3/10", price: "9 400 000 ₽" }
        ]
    },
    grand_park: {
        title: "ЖК «Гранд Парк»",
        district: "Район парка Ленина",
        image: "image/4grandpark.png",
        description: "Величественный архитектурный ансамбль «Гранд Парк» совмещает в себе монументальный классический стиль и передовые технологии «Умный дом». Собственная управляющая компания, консьерж-сервис 24/7, закрытый фитнес-зал для резидентов и роскошная зона лобби.",
        lots: [
            { type: "2-комнатная квартира", space: "68.4 м²", floor: "14/22", price: "7 500 000 ₽" },
            { type: "4-комнатная квартира", space: "124.0 м²", floor: "20/22", price: "14 200 000 ₽" }
        ]
    },
    belye_gory: {
        title: "ЖК «Белые Горы»",
        district: "Исторический микрорайон",
        image: "image/5beliegori.png",
        description: "Концептуальный жилой комплекс «Белые Горы» вдохновлен знаменитыми меловыми ландшафтами Белгородской области. Белоснежная отделка фасадов со стильной ночной подсветкой. Из окон открывается потрясающий вид на пойму реки. Комплекс оборудован собственными террасами на крыше для отдыха жильцов.",
        lots: [
            { type: "1-комнатная квартира", space: "39.8 м²", floor: "5/12", price: "4 100 000 ₽" },
            { type: "2-комнатная квартира", space: "61.2 м²", floor: "9/12", price: "5 990 000 ₽" }
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const currentId = urlParams.get('id');

const currentJk = buildingsData[currentId];

if (currentJk) {
    document.getElementById('jk-title').innerText = currentJk.title;
    document.getElementById('jk-district').innerText = currentJk.district;
    document.getElementById('jk-description').innerText = currentJk.description;
    
    const imgElement = document.getElementById('jk-image');
    imgElement.src = currentJk.image;
    imgElement.alt = currentJk.title;

    const lotsContainer = document.getElementById('lots-container');
    lotsContainer.innerHTML = ""; 

    currentJk.lots.forEach(lot => {
        const row = document.createElement('tr');
        
        const orderDetails = encodeURIComponent(`${currentJk.title}, ${lot.type} (${lot.space})`);
        
        row.innerHTML = `
            <td><strong>${lot.type}</strong></td>
            <td>${lot.space}</td>
            <td>${lot.floor}</td>
            <td style="color: #ff6f00; font-weight: bold;">${lot.price}</td>
            <td>
                <a href="contact.html?object=${orderDetails}" class="buy-btn-jk">Оставить заявку</a>
            </td>
        `;
        lotsContainer.appendChild(row);
    });

} else {
    document.querySelector('.container-jk').innerHTML = `
        <a href="index.html" class="back-btn-jk">← Вернуться на главную</a>
        <h1 style="color: #ff6f00; margin-top: 40px;">Объект недвижимости не найден!</h1>
    `;
}