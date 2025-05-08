// Contenido dinámico
const ayudaData = [
    {
        img: 'ayuda-0.png',
        desc: 'Te damos menús adaptados a tu estilo de vida, gustos y necesidades nutricionales.'
    },
    {
        img: 'ayuda-1.png',
        desc: 'Evaluamos tu estado físico para ofrecerte el mejor plan posible.'
    },
    {
        img: 'ayuda-2.png',
        desc: 'Te ofrecemos planes de alimentación ajustados a tus metas personales.'
    },
    {
        img: 'ayuda-3.png',
        desc: 'Recetas fáciles de seguir, con ingredientes y pasos detallados.'
    },
    {
        img: 'ayuda-4.png',
        desc: 'Incorporamos las recomendaciones médicas en tus menús personalizados.'
    }
];

const items = document.querySelectorAll('.ayuda__item');
const img = document.querySelector('.ayuda__img');
const desc = document.querySelector('.ayuda__desc');

let currentIndex = 0;
let intervalId = null;

// Función para actualizar el panel
function updatePanel(index) {
    const { img: imgName, desc: text } = ayudaData[index];
    img.src = `assets/img/${imgName}`;
    desc.textContent = text;

    // Actualizar clases activas
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
    currentIndex = index;
}

// Autoplay
function startAutoplay() {
    intervalId = setInterval(() => {
        const next = (currentIndex + 1) % ayudaData.length;
        updatePanel(next);
    }, 5000); // cada 5 segundos
}

function stopAutoplay() {
    clearInterval(intervalId);
}

// Iniciar
updatePanel(0);
startAutoplay();

// Eventos
items.forEach(item => {
    item.addEventListener('mouseover', () => {
        const index = parseInt(item.getAttribute('data-id'));
        updatePanel(index);
        stopAutoplay(); // Pausa mientras interactúa
    });

    item.addEventListener('mouseleave', () => {
        startAutoplay(); // Retoma autoplay
    });
});

// También pausa autoplay si el mouse entra al panel
document.querySelector('.ayuda__panel').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.ayuda__panel').addEventListener('mouseleave', startAutoplay);
