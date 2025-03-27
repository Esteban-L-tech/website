import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état local du composant
import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom pour la navigation entre les pages
import Row from 'react-bootstrap/Row'; // Importation du composant Row de React-Bootstrap pour la mise en page en lignes
import Col from 'react-bootstrap/Col'; // Importation du composant Col de React-Bootstrap pour la mise en page en colonnes
import Container from 'react-bootstrap/Container'; // Importation du composant Container de React-Bootstrap pour définir des conteneurs responsives
import { Button } from "react-bootstrap"; // Importation du composant Button de React-Bootstrap pour afficher un bouton

// Déclaration du composant fonctionnel ChangementMDP
function ChangementMDP() {
  // Déclaration de l'état 'verificationCode' qui gère la valeur saisie dans les champs de mot de passe
  const [verificationCode, setVerificationCode] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire (rechargement de la page)
  };

  return (
    <>
      <Container>
        {/* Section de titre principal de la page */}
        <Row>
          <h1>Changement mot de passe</h1> {/* Affichage du titre principal "Changement mot de passe" */}
        </Row>
      </Container>

      <Container>
        <Row>
          {/* Colonne centrée (sur les écrans de taille moyenne et plus) pour contenir le formulaire */}
          <Col md={6} style={{ margin: '0 auto' }}>
            {/* Formulaire pour la saisie du mot de passe */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3 verifmail">
                <label for="verificationCode" className="form-label">Saisir votre nouveau mot de passe</label>
                {/* Champ de saisie du nouveau mot de passe */}
                <input 
                  type="password" 
                  className="form-control textBchgmdp" // Classes CSS pour la mise en forme
                  id="verificationCode" // ID unique pour ce champ
                  placeholder="🔒︎ Nouveau mot de passe" // Texte d'exemple dans le champ
                  value={verificationCode} // La valeur du champ correspond à l'état 'verificationCode'
                  style={{ margin: '0 auto' }} // Centrer le champ sur la page
                  onChange={(e) => setVerificationCode(e.target.value)} // Mise à jour de l'état 'verificationCode' à chaque changement dans le champ
                />
              </div>
            </form>

            {/* Formulaire pour la confirmation du mot de passe */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3 verifmail">
                <label for="verificationCode" className="form-label">Confirmez votre nouveau mot de passe</label>
                {/* Champ de saisie pour confirmer le mot de passe */}
                <input 
                  type="password" 
                  className="form-control textBchgmdp" // Classes CSS pour la mise en forme
                  id="verificationCode" // ID unique pour ce champ
                  placeholder="🔒︎ Nouveau mot de passe" // Texte d'exemple dans le champ
                  value={verificationCode} // La valeur du champ correspond à l'état 'verificationCode'
                  style={{ margin: '0 auto' }} // Centrer le champ sur la page
                  onChange={(e) => setVerificationCode(e.target.value)} // Mise à jour de l'état 'verificationCode' à chaque changement
                />
              </div>
              {/* Bouton pour soumettre le formulaire et rediriger l'utilisateur vers la page de connexion */}
              <Button as={Link} to="/connexion" type="submit" className="btn btn-primary buttonCchgmdp" style={{ margin: '2% 25%' }}>
                Mettre à jour
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChangementMDP; // Exportation du composant pour l'utiliser dans d'autres fichiers
