import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état local des champs du formulaire.
import { Link } from "react-router-dom"; // Importation de Link de React Router pour gérer la navigation entre les pages sans rechargement.
import Row from 'react-bootstrap/Row'; // Importation du composant Row de React Bootstrap pour la gestion des lignes dans la grille.
import Col from 'react-bootstrap/Col'; // Importation du composant Col de React Bootstrap pour la gestion des colonnes dans la grille.
import Container from 'react-bootstrap/Container'; // Importation du composant Container de React Bootstrap pour le conteneur principal.
import { Button } from "react-bootstrap"; // Importation du composant Button de React Bootstrap pour les boutons.

function Register() {
  // Déclaration des états pour gérer les valeurs des champs du formulaire
  const [firstName, setFirstName] = useState(''); // État pour le prénom
  const [lastName, setLastName] = useState(''); // État pour le nom
  const [email, setEmail] = useState(''); // État pour l'adresse e-mail
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const [confirmPassword, setConfirmPassword] = useState(''); // État pour la confirmation du mot de passe

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut, ce qui évite le rechargement de la page
  };

  return (
    <>
      {/* Conteneur principal de la page */}
      <Container>
        <Row>
          {/* Titre de la page */}
          <h1>Créer son compte</h1>
        </Row>
      </Container>

      {/* Conteneur du formulaire d'inscription */}
      <Container>
        <Row>
          {/* Colonne du formulaire d'inscription */}
          <Col md={6} style={{ margin: '3% auto' }}>
            {/* Formulaire de création de compte */}
            <form onSubmit={handleSubmit}>
              {/* Champ pour entrer le prénom */}
              <div className="mb-3 register">
                <label For="firstName" className="form-label">Prénom</label>
                <input
                  type="text" // Type de champ : texte
                  className="form-control textBregister"
                  id="firstName"
                  placeholder="Prénom" // Texte d'exemple dans le champ
                  value={firstName} // Valeur du champ contrôlée par l'état firstName
                  style={{ margin: '0 auto' }}
                  // Mise à jour de l'état firstName à chaque saisie
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* Champ pour entrer le nom */}
              <div className="mb-3 register">
                <label for="lastName" className="form-label">Nom</label>
                <input
                  type="text" // Type de champ : texte
                  className="form-control"
                  id="lastName"
                  placeholder="Nom" // Texte d'exemple dans le champ
                  value={lastName} // Valeur du champ contrôlée par l'état lastName
                  style={{ margin: '0 auto' }}
                  // Mise à jour de l'état lastName à chaque saisie
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* Champ pour entrer le pseudo (erreur : id utilisé est "firstName", cela devrait être "pseudo") */}
              <div className="mb-3 register">
                <label For="pseudo" className="form-label">Nouveau pseudo</label>
                <input
                  type="text" // Type de champ : texte
                  className="form-control textBregister"
                  id="pseudo" // Changement nécessaire ici
                  placeholder="Pseudo" // Texte d'exemple dans le champ
                  value={firstName} // Erreur ici : devrait être lié à un état "pseudo"
                  style={{ margin: '0 auto' }}
                  // Mise à jour de l'état firstName à chaque saisie (erreur)
                  onChange={(e) => setFirstName(e.target.value)} 
                />
              </div>

              {/* Champ pour entrer l'adresse e-mail */}
              <div className="mb-3 register">
                <label for="email" className="form-label">Adresse mail</label>
                <input
                  type="email" // Type de champ : email
                  className="form-control textBregister"
                  id="email"
                  placeholder="Adresse mail" // Texte d'exemple dans le champ
                  value={email} // Valeur du champ contrôlée par l'état email
                  style={{ margin: '0 auto' }}
                  // Mise à jour de l'état email à chaque saisie
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Champ pour entrer le mot de passe */}
              <div className="mb-3 register">
                <label for="password" className="form-label">Mot de passe</label>
                <input
                  type="password" // Type de champ : mot de passe (caché)
                  className="form-control textBregister"
                  id="password"
                  placeholder="Mot de passe" // Texte d'exemple dans le champ
                  value={password} // Valeur du champ contrôlée par l'état password
                  style={{ margin: '0 auto' }}
                  // Mise à jour de l'état password à chaque saisie
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Champ pour confirmer le mot de passe */}
              <div className="mb-3 register">
                <label for="confirmPassword" className="form-label">Confirmation mot de passe</label>
                <input
                  type="password" // Type de champ : mot de passe (caché)
                  className="form-control textBregister"
                  id="confirmPassword"
                  placeholder="Confirmation mot de passe" // Texte d'exemple dans le champ
                  value={confirmPassword} // Valeur du champ contrôlée par l'état confirmPassword
                  style={{ margin: '0 auto' }}
                  // Mise à jour de l'état confirmPassword à chaque saisie
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* Bouton d'inscription, qui soumet le formulaire et redirige vers la page de vérification d'email */}
              <Button as={Link} to="/verifmail" type="submit" className="btn btn-primary buttonC" style={{ margin: '2% 0%' }}>
                Inscription
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register; // Exportation du composant Register pour qu'il puisse être utilisé ailleurs dans l'application
