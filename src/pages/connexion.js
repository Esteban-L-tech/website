import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";



let VerticalBanner = './asset/image/bande_img.jpg';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <h1>Se connecter</h1>
          <h2>Vous tentez d’accéder à un contenu qui nécessite d’être connecté</h2>
        </Row>
      </Container>

      <div className="mb-3 form-check" />
      <Container>
        <Row>
          {/*input boite de text pour entrer le pseudo pour la connexion*/}
          <Col md={6} style={{ margin: '2% auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-check connexion">
                <label for="exampleInputEmail1" className="form-label"></label> 
                <input
                  type="email" /*comment l'écriture se comporte dans l'input (comme une adresse mail)*/
                  className="form-control textB" /*la classe de l'input utilisé dans le css*/
                  id="exampleInputEmail1" /*l'id de l'input*/
                  placeholder="Pseudo" /*le text dans l'input*/
                  aria-describedby="emailHelp"
                  value={email} 
                  style={{ margin: '0 auto' }} /*positionner correctement l'input*/
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* FIN input boite de text pour entrer le pseudo pour la connexion*/}
              </div>
              {/*input boite de text pour entrer le mot de passe pour la connexion*/}
              <div className="mb-3 form-check connexion">
                <label for="exampleInputPassword1" className="form-label"></label> 
                <input
                  type="password" /*comment l'écriture se comporte dans l'input (caché comme un mot de passe)*/
                  className="form-control textB" /*la classe de l'input utilisé dans le css*/
                  placeholder="🔒︎ Mot de passe" /*le text dans l'input*/
                  id="exampleInputPassword1" /*l'id de l'input*/
                  value={password} 
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setPassword(e.target.value)}
                /> 
                {/* FIN input boite de text pour entrer le mot de passe pour la connexion*/}
              </div>
              {/*bouton pour réinitialiser son mot de passe*/}
              <div className="mb-3 form-check" style={{ margin: '0% 32%' }}>
                <Button as={Link} to="/recupmdp" type="button" className="forgotPassword">Mot de passe oublié?</Button> {/* bouton cliquable avec un lien qui envoie sur la page /recupmdp avec une écriture "Mot de passe oublié?"*/}
                {/* FIN bouton pour réinitialiser son mot de passe*/}
              </div>
              {/*bouton pour se connecter*/}
              <div className="buttonRow">
                <Row>
                  <Col md={2}>
                    <Button as={Link} to="/" type="submit" className="btn btn-primary buttonCconnexion" style={{ margin: '5% 250%' }}>Connexion</Button> {/* bouton cliquable avec un lien qui envoie sur la page / avec une écriture "Connexion"*/}
                  </Col>
                </Row>
              </div>
              {/* FIN bouton pour se connecter*/}
            </form>
          </Col>
          <Col md={6} className="text-i" style={{ margin: '3% auto' }}>
            <p className="inscrit">Si vous n'avez pas encore de compte, cliquez sur le bouton ci-dessous, c'est gratuit.</p>
            <Button as={Link} to="/register" type="button" className="btn btn-primary buttonC">Inscription</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Connexion;
