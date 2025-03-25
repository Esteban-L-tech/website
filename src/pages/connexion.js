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
          <Col md={6} style={{ margin: '2% auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-check connexion">
                <label for="exampleInputEmail1" className="form-label"></label>
                <input
                  type="email"
                  className="form-control textB"
                  id="exampleInputEmail1"
                  placeholder="Pseudo"
                  aria-describedby="emailHelp"
                  value={email}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check connexion">
                <label for="exampleInputPassword1" className="form-label"></label>
                <input
                  type="password"
                  className="form-control textB"
                  placeholder="🔒︎ Mot de passe"
                  id="exampleInputPassword1"
                  value={password}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check" style={{ margin: '0% 32%' }}>
                <Button as={Link} to="/recupmdp" type="button" className="forgotPassword">Mot de passe oublié?</Button>
              </div>
              <div className="buttonRow">
                <Row>
                  <Col md={2}>
                    <button type="submit" className="btn btn-primary buttonCconnexion" style={{ margin: '5% 250%' }}>Connexion</button>
                  </Col>
                </Row>
              </div>
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
