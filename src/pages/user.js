import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état local du composant.
import { Link } from "react-router-dom"; // Importation de Link de React Router pour la gestion de la navigation entre les pages sans rechargement.
import Row from 'react-bootstrap/Row'; // Importation du composant Row de React Bootstrap pour la gestion des lignes dans la grille.
import Col from 'react-bootstrap/Col'; // Importation du composant Col de React Bootstrap pour la gestion des colonnes dans la grille.
import Container from 'react-bootstrap/Container'; // Importation du composant Container de React Bootstrap pour la gestion du conteneur principal.
import { Button } from "react-bootstrap"; // Importation du composant Button de React Bootstrap pour les boutons stylisés.

function User() {
  // Déclaration de l'état pour gérer le code de vérification (non utilisé dans ce composant)
  const [verificationCode, setVerificationCode] = useState(''); 

  // Définition du chemin de l'image de l'avatar de l'utilisateur
  const Avatar = "/assets/images/bg.jpg"; // Chemin de l'image à afficher comme avatar de l'utilisateur

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut (rechargement de la page) lors de la soumission du formulaire
  };

  return (
    <>
      {/* Conteneur principal de la page */}
      <Container>
        <Row>
          {/* Titre principal de la page */}
          <h1 style={{ margin: '5% auto' }}>Votre profil</h1>

          {/* Image de l'avatar de l'utilisateur, affichée comme une image ronde */}
          <img src={Avatar} alt='User' style={{ margin: '5% auto' }} className='rounded-circle item-center userprofil' />

          {/* Sous-titre "A propos de vous" */}
          <h3>A propos de vous</h3>
        </Row>
      </Container>

      {/* Conteneur de la section des informations du profil */}
      <Container>
        <Row>
          {/* Colonne pour afficher les informations utilisateur */}
          <Col md={6} style={{ margin: '0 auto' }}>
            {/* Formulaire de présentation des informations utilisateur */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3 user">
                {/* Affichage des informations du profil de l'utilisateur */}
                <h6>Pseudo: (nom du profil)</h6>
                <h6>Adresse mail: (adresse mail du profil)</h6>
                <h6>Date création du compte:</h6>
              </div>

              {/* Bouton pour accéder à la page de modification du profil */}
              <Button as={Link} to="/modifuser" type="submit" className="btn btn-primary buttonCrecupmdp" style={{ margin: '2% 25%' }}>
                Modification
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User; // Exportation du composant User pour pouvoir l'utiliser ailleurs dans l'application
