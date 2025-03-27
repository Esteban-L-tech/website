import React from "react"; // Importation de React pour utiliser JSX et les composants React
import { Container } from "react-bootstrap"; // Importation du composant Container de React-Bootstrap pour organiser la mise en page

// Définition du composant fonctionnel NotFound, qui s'affiche lorsque la page n'est pas trouvée (erreur 404)
function NotFound() {
    return (
        <>
            <Container> 
                {/* Conteneur Bootstrap pour centrer et structurer le contenu de la page */}

                <h1 className="text-color-2">Page non disponible</h1>
                {/* Titre affiché pour informer l'utilisateur que la page n'est pas disponible */}

                <img src="/assets/images/404ERROR.webp" alt="Impossible d'afficher la page - Erreur 404" />
                {/* Image représentant l'erreur 404, indique visuellement à l'utilisateur que la page n'existe pas */}
            </Container>
        </>
    );
}

export default NotFound; // Exportation du composant NotFound pour qu'il puisse être utilisé dans d'autres fichiers
