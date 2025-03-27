import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état local.
import { Link } from "react-router-dom"; // Importation de Link de 'react-router-dom' pour naviguer entre les pages.
import Row from 'react-bootstrap/Row'; // Importation du composant Row de React-Bootstrap pour la mise en page en lignes.
import Col from 'react-bootstrap/Col'; // Importation du composant Col de React-Bootstrap pour la mise en page en colonnes.
import Container from 'react-bootstrap/Container'; // Importation du composant Container de React-Bootstrap pour structurer la mise en page.
import { Button } from "react-bootstrap"; // Importation du composant Button de React-Bootstrap pour afficher un bouton.

function Modifuser() {
  // Déclaration des états locaux pour les informations personnelles de l'utilisateur.
  const [firstName, setFirstName] = useState(''); // État pour le prénom
  const [lastName, setLastName] = useState(''); // État pour le nom de famille (actuellement non utilisé)
  const [email, setEmail] = useState(''); // État pour l'email (actuellement non utilisé)
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const [confirmPassword, setConfirmPassword] = useState(''); // État pour la confirmation du mot de passe
  const Avatar = "/assets/images/bg.jpg"; // Définition du chemin de l'image d'avatar de l'utilisateur.

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire.
  };

  return (
    <>
      {/* Conteneur principal pour l'interface de modification des informations personnelles */}
      <Container>
        <Row>
          <h1>Modification information personnelles</h1> {/* Titre de la page de modification */}
        </Row>
      </Container>

      <Container>
        <Row style={{ margin: '10% auto' }}>
          {/* Affichage de l'image de l'avatar de l'utilisateur */}
          <img src={Avatar} alt='User' style={{ margin: '5% auto' }} className='rounded-circle item-center userprofil' />
          <Col md={6} style={{ margin: '3% auto' }}>
            {/* Formulaire pour modifier les informations personnelles */}
            <form onSubmit={handleSubmit}>
              {/* Champ pour modifier le pseudo */}
              <div className="mb-3 register">
                <label For="pseudo" className="form-label">Nouveau pseudo</label>
                <input
                  type="text"
                  className="form-control textBregister"
                  id="firstName"
                  placeholder="Pseudo"
                  value={firstName} // Utilisation de la variable d'état 'firstName' pour le pseudo
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setFirstName(e.target.value)} // Mise à jour de 'firstName' lors de la saisie de l'utilisateur
                />
              </div>

              {/* Champ pour modifier le mot de passe */}
              <div className="mb-3 register">
                <label for="password" className="form-label">Nouveau mot de passe</label>
                <input
                  type="password"
                  className="form-control textBregister"
                  id="password"
                  placeholder="Mot de passe"
                  value={password} // Utilisation de la variable d'état 'password' pour le mot de passe
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setPassword(e.target.value)} // Mise à jour de 'password' lors de la saisie de l'utilisateur
                />
              </div>

              {/* Champ pour confirmer le mot de passe */}
              <div className="mb-3 register">
                <label for="confirmPassword" className="form-label">Confirmation nouveau mot de passe</label>
                <input
                  type="password"
                  className="form-control textBregister"
                  id="confirmPassword"
                  placeholder="Confirmation mot de passe"
                  value={confirmPassword} // Utilisation de la variable d'état 'confirmPassword' pour la confirmation
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Mise à jour de 'confirmPassword' lors de la saisie de l'utilisateur
                />
              </div>

              {/* Bouton pour soumettre le formulaire et enregistrer les modifications */}
              <Button as={Link} to="/user" type="submit" className="btn btn-primary buttonC" style={{ margin: '2% 0%' }}>
                Enregistrement
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Modifuser; // Exportation du composant 'Modifuser' pour qu'il puisse être utilisé ailleurs dans l'application.
