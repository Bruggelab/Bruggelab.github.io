document.addEventListener('DOMContentLoaded', function() {
    // Selecteer alle afbeeldingscontainers
    const imageContainers = document.querySelectorAll('.image-container');
    
    // Voor elke container, start de rotatie
    imageContainers.forEach(container => {
        rotateImages(container);
    });
    
    // Functie om afbeeldingen te roteren
    function rotateImages(container) {
        const slides = container.querySelectorAll('.image-slide');
        let currentIndex = 0;
        
        // Zoek de huidige actieve slide
        slides.forEach((slide, index) => {
            if (slide.classList.contains('active')) {
                currentIndex = index;
            }
        });
        
        // Stel de interval in voor het wisselen van afbeeldingen
        setInterval(() => {
            // Verwijder de active class van de huidige slide
            slides[currentIndex].classList.remove('active');
            
            // Ga naar de volgende slide of terug naar de eerste als we aan het einde zijn
            currentIndex = (currentIndex + 1) % slides.length;
            
            // Voeg de active class toe aan de nieuwe huidige slide
            slides[currentIndex].classList.add('active');
        }, 30000); // Wissel elke 5 seconden van afbeelding
    }
});
