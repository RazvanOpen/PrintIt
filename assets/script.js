let currentSlide = 0;

const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


// Créer les points de navigation
const dotsContainer = document.querySelector('.dots');
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.onclick = () => showSlide(index); // Change la diapositive au clic
    dotsContainer.appendChild(dot);
});

// Mettre à jour les points de navigation
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentSlide);
    });
}

function showSlide(index) {
    const bannerImg = document.querySelector('.banner-img');
    const tagline = document.querySelector('.tagline');
    
    currentSlide = (index + slides.length) % slides.length; // Pour faire un carrousel infini
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    tagline.innerHTML = slides[currentSlide].tagLine; // Met à jour le texte de la balise <p>

    
    updateDots(); // Met à jour l'état des points
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialiser le carrousel
showSlide(currentSlide);
