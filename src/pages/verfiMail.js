import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état local du formulaire.
import { Link } from "react-router-dom"; // Importation de Link de React Router pour gérer la navigation entre les pages sans rechargement.
import Row from 'react-bootstrap/Row'; // Importation du composant Row de React Bootstrap pour la gestion des lignes dans la grille.
import Col from 'react-bootstrap/Col'; // Importation du composant Col de React Bootstrap pour la gestion des colonnes dans la grille.
import Container from 'react-bootstrap/Container'; // Importation du composant Container de React Bootstrap pour le conteneur principal.
import { Button } from "react-bootstrap"; // Importation du composant Button de React Bootstrap pour les boutons.

function Verifmail() {
  // Déclaration de l'état pour gérer la valeur du code de vérification
  const [verificationCode, setVerificationCode] = useState(''); // Valeur initiale vide pour le code de vérification

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
  };

  return (
    <>
      {/* Conteneur principal de la page */}
      <Container>
        <Row>
          {/* Titre de la page et sous-titre */}
          <h1>Vérification compte</h1>
          <h3>Un code vous a été envoyé par mail</h3>
        </Row>
      </Container>

      {/* Conteneur du formulaire de vérification */}
      <Container>
        <Row>
          {/* Colonne contenant le formulaire de vérification */}
          <Col md={6} style={{ margin: '3% auto' }}>
            {/* Formulaire de saisie du code de vérification */}
            <form onSubmit={handleSubmit}>
              {/* Champ pour entrer le code de vérification */}
              <div className="mb-3 verifmail">
                <label for="verificationCode" className="form-label">Vérifiez le code reçus par mail</label>
                <input
                  type="text" // Type de champ : texte
                  className="form-control textBverif"
                  id="verificationCode" // Identifiant unique pour le champ
                  placeholder="Entrez votre code" // Texte d'exemple dans le champ
                  value={verificationCode} // La valeur du champ est contrôlée par l'état verificationCode
                  style={{ margin: '0 auto' }}
                  // Mise à jour de l'état verificationCode à chaque saisie de l'utilisateur
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>

              {/* Bouton pour soumettre le formulaire et rediriger vers la page de connexion */}
              <Button as={Link} to="/connexion" type="submit" className="btn btn-primary buttonCverifmail" style={{ margin: '3% 25%' }}>
                Vérifier
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Verifmail; // Exportation du composant Verifmail pour qu'il puisse être utilisé ailleurs dans l'application
