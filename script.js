var isNavVisible = true; // Variable pour suivre l'état de la barre de navigation

// Options de l'Intersection Observer
var options = {
    threshold: 0, // Le callback sera déclenché dès que l'élément devient partiellement visible
};

// Créez l'Intersection Observer
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (!entry.isIntersecting) {
            if (isNavVisible) {
                // L'élément n'est plus visible à l'écran, déclenchez votre fonction ici
                maFonctionDeDeclenchement();
                isNavVisible = false; // Mettez à jour l'état
            }
        } else {
            if (!isNavVisible) {
                // L'élément est visible à nouveau, rétablissez l'état initial si nécessaire
                maFonctionDeRetablissement();
                isNavVisible = true; // Mettez à jour l'état
            }
        }
    });
}, options);



function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);

    if (targetElement) {
        // Scroll jusqu'à l'élément cible
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',  // Ajuste la position en haut de la fenêtre
            inline: 'end'
        });
    }
}


// Sélectionnez la barre de navigation par le nom de la balise "nav"
var barreDeNavigation = document.querySelector("nav");
var h1=document.querySelector("h1");

// Observez la barre de navigation
observer.observe(h1);

// Fonction de déclenchement lorsque la barre sort de la vue
function maFonctionDeDeclenchement() {
    barreDeNavigation.classList.add("retracte"); 
}

function maFonctionDeRetablissement() {
    barreDeNavigation.classList.remove("retracte")
}

//
//
//
document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById('darkmode');
    let isDarkMode = false; // Initialisation à "Jour"
    const containerElements = document.getElementsByClassName('container1');
        darkModeButton.addEventListener('click', () => {
        if (isDarkMode) {
            // Passer en mode "Jour"
            darkModeButton.style.backgroundImage = "url('img/darkmode.png')";
            document.body.style.backgroundColor = '#c8c0fc'; // Couleur de fond du corps en mode jour
            for (let i = 0; i < containerElements.length; i++) {
                containerElements[i].style.backgroundColor = '#ffffff'; // Remplacez par la couleur de votre choix
            }

            isDarkMode = false;
        } else {
            // Passer en mode "Nuit"
            isDarkMode = true;
            darkModeButton.style.backgroundImage = "url('img/lightmode.png')";
            document.body.style.backgroundColor = '#38306b'; // Couleur de fond du corps en mode nuit
            for (let i = 0; i < containerElements.length; i++) {
                containerElements[i].style.backgroundColor = '#a5a4a4'; // Remplacez par la couleur de votre choix
            }

        };
    });
});


