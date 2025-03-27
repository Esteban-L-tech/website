import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état local.
import { Link } from "react-router-dom"; // Importation de Link pour la gestion des redirections via React Router.
import Row from 'react-bootstrap/Row'; // Importation du composant Row de React Bootstrap pour la gestion des lignes.
import Col from 'react-bootstrap/Col'; // Importation du composant Col de React Bootstrap pour la gestion des colonnes.
import Container from 'react-bootstrap/Container'; // Importation du composant Container de React Bootstrap pour la mise en page.
import { Button } from "react-bootstrap"; // Importation du composant Button de React Bootstrap pour les boutons.

let VerticalBanner = './asset/image/bande_img.jpg'; // Définition d'une variable pour une image de bannière verticale (non utilisée ici).

// Définition du composant Connexion
function Connexion() {
  // Déclaration des états locaux pour gérer l'email et le mot de passe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire.
  };

  return (
    <>
      {/* Conteneur principal pour le titre et le sous-titre */}
      <Container>
        <Row>
          {/* Titre principal de la page */}
          <h1>Se connecter</h1>
          {/* Sous-titre expliquant la nécessité de se connecter */}
          <h2>Vous tentez d’accéder à un contenu qui nécessite d’être connecté</h2>
        </Row>
      </Container>

      <div className="mb-3 form-check" />
      {/* Conteneur pour le formulaire de connexion */}
      <Container>
        <Row>
          {/* Colonne pour le formulaire de connexion */}
          <Col md={6} style={{ margin: '2% auto' }}>
            {/* Formulaire de connexion */}
            <form onSubmit={handleSubmit}>
              {/* Champ pour entrer l'email (ou pseudo) */}
              <div className="mb-3 form-check connexion">
                <label for="exampleInputEmail1" className="form-label"></label>
                <input
                  type="email" // Type de champ : email
                  className="form-control textB"
                  id="exampleInputEmail1"
                  placeholder="Pseudo"  // Texte d'exemple pour l'input
                  aria-describedby="emailHelp"
                  value={email}  // Valeur liée à l'état email
                  style={{ margin: '0 auto' }}
                  // Fonction pour mettre à jour l'email lors de la saisie
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Champ pour entrer le mot de passe */}
              <div className="mb-3 form-check connexion">
                <label for="exampleInputPassword1" className="form-label"></label>
                <input
                  type="password"  // Type de champ : mot de passe (caché)
                  className="form-control textB"
                  placeholder="🔒︎ Mot de passe"  // Texte d'exemple pour le mot de passe
                  id="exampleInputPassword1"
                  value={password}  // Valeur liée à l'état password
                  style={{ margin: '0 auto' }}
                  // Fonction pour mettre à jour le mot de passe lors de la saisie
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Lien pour récupérer le mot de passe oublié, qui redirige vers la page "/recupmdp" */}
              <div className="mb-3 form-check" style={{ margin: '0% 32%' }}>
                <Button as={Link} to="/recupmdp" type="button" className="forgotPassword">
                  Mot de passe oublié?
                </Button>
              </div>
              {/* Bouton de soumission pour se connecter */}
              <div className="buttonRow">
                <Row>
                  <Col md={2}>
                    <Button as={Link} to="/" type="submit" className="btn btn-primary buttonCconnexion" style={{ margin: '5% 250%' }}>
                      Connexion
                    </Button>
                  </Col>
                </Row>
              </div>
            </form>
          </Col>

          {/* Colonne avec un texte incitant à l'inscription si l'utilisateur n'a pas encore de compte */}
          <Col md={6} className="text-i" style={{ margin: '3% auto' }}>
            <p className="inscrit">Si vous n'avez pas encore de compte, cliquez sur le bouton ci-dessous, c'est gratuit.</p>
            {/* Bouton pour rediriger l'utilisateur vers la page d'inscription */}
            <Button as={Link} to="/register" type="button" className="btn btn-primary buttonC">
              Inscription
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// Exportation du composant Connexion pour l'utiliser ailleurs dans l'application
export default Connexion;
