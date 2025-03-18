import React, { useState } from "react";
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';


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
          <Col md={6} className="connexion">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-check connexion">
                <label for="exampleInputEmail1" className="form-label">Adresse mail</label>
                <input 
                  type="email" 
                  className="form-control textB" 
                  id="exampleInputEmail1" 
                  placeholder="Adresse mail" 
                  aria-describedby="emailHelp" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="mb-3 form-check connexion">
                <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                <input 
                  type="password" 
                  className="form-control textB" 
                  placeholder="Mot de passe" 
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className="mb-3 form-check">
                <button type="button" className="btn"><Link to="/recupmdp">Mot de passe oublié?</Link></button>
              </div>
              <div className="buttonRow">
                <Row>
                  <Col md={2}>
                    <button type="submit" className="btn btn-primary buttonC">Connexion</button>
                  </Col>
                </Row>
              </div>
            </form>
          </Col>
          <Col md={6} className="text-i">
            <p className="inscrit">Si vous n'avez pas encore de compte, cliquez sur le bouton ci-dessous, c'est gratuit.</p>
            <button type="button" className="btn btn-primary buttonC"><Link to="/register">Inscription</Link></button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Connexion;
