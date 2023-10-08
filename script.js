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
    const darkModeButton = document.getElementById('darkmode');
    let isDarkMode = false; // Initialisation à "Jour"

    darkModeButton.addEventListener('click', () => {
        if (isDarkMode) {
            // Passer en mode "Jour"
            darkModeButton.style.backgroundImage="url('img/darkmode.png')";

            titre.style.color = '#000';
            isDarkMode = false;
        } else {
            // Passer en mode "Nuit"
            darkModeButton.style.backgroundImage="url('img/lightmode.png')";
            document.body.style.backgroundColor = '#013281'; 
            document.querySelectorAll("p").style.color="#000";
            isDarkMode = true;
        }
    });