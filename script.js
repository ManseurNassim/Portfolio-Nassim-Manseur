let Menu = document.getElementById("menuimg");
let menuElements = document.querySelectorAll('#menu li');
let fullMenu = document.querySelector("#Accueil nav");
let Menuzone = document.getElementById("menu");
function changerCSS() {
    var cssLink = document.getElementById("css-link");
    if (cssLink.href.includes("styles.css")) {
        cssLink.href = "styles1.css";
    } else {
        cssLink.href = "styles.css";
    }
}

// Ajoute un gestionnaire d'événements pour le survol de la souris sur le bouton Menu
Menu.addEventListener('mouseenter', function() {
    // Modifier la largeur de la Menuzone
    Menuzone.style.transition = "width 0.5s ease"; // Ajoute une transition
    Menuzone.style.width = "640px"; // Ajuste la largeur à 100%
});

// Ajoute un gestionnaire d'événements pour le départ de la souris du bouton Menu
Menuzone.addEventListener('mouseleave', function() {
    // Réinitialise la largeur de la Menuzone
    Menuzone.style.transition = "width 0.5s ease"; // Ajoute une transition
    Menuzone.style.width = "8%"; // Ajuste la largeur à sa valeur originale
});

// Parcourir tous les éléments de la liste, sauf le dernier
for (let i = 0; i < menuElements.length - 1; i++) {
    let element = menuElements[i];
    // Ajoute un gestionnaire d'événements pour le survol de la souris sur l'élément Menu
    Menu.addEventListener('mouseenter', function() {
        // Modifier l'opacité de l'élément parcouru actuellement
        element.style.opacity = '1';
    });
    // Ajoute un gestionnaire d'événements pour le départ de la souris de l'élément Menu
    fullMenu.addEventListener('mouseleave', function() {
        // Réinitialiser l'opacité de l'élément parcouru actuellement à 0
        if (element !== Menu) {
            element.style.opacity = '0';
        }
    });
}


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

    darkModeButton.addEventListener('click', () => {
        if (isDarkMode) {
            // Passer en mode "Jour"
            darkModeButton.style.backgroundImage = "url('img/darkmode.png')";
            document.getElementById('roquette').src = "img/darkroquette.png"; // Changer l'image de la roquette en mode jour
            document.documentElement.style.setProperty('--bg-color', '#FCFDF8');
            document.documentElement.style.setProperty('--secondary-color', 'black');
            document.querySelector('header').style.backgroundImage = "url('img/day_background.jpg')"; // Changer l'image de fond du header en mode jour

            isDarkMode = false;
        } else {
            // Passer en mode "Nuit"
            darkModeButton.style.backgroundImage = "url('img/lightmode.png')";
            document.getElementById('roquette').src = "img/roquette.png"; // Changer l'image de la roquette en mode nuit
            document.documentElement.style.setProperty('--bg-color', '#211566'); // Couleur de fond du corps en mode nuit
            document.documentElement.style.setProperty('--secondary-color', '#FCFDF8');
            document.querySelector('header').style.backgroundImage = "url('img/space.png')"; // Changer l'image de fond du header en mode nuit

            isDarkMode = true;
        }
    });
});



