import React, { useState } from "react";
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";

function ChangementMDP() {
  const [verificationCode, setVerificationCode] = useState('');

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <h1>Changement mot de passe</h1>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={6} style={{ margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 verifmail">
                <label for="verificationCode" className="form-label">Saisir votre nouveau mot de passe</label>
                <input 
                  type="password" 
                  className="form-control textBchgmdp" 
                  id="verificationCode" 
                  placeholder="🔒︎ Nouveau mot de passe" 
                  value={verificationCode}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setVerificationCode(e.target.value)} 
                />
              </div>
            </form>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 verifmail">
                <label for="verificationCode" className="form-label">Confirmez votre nouveau mot de passe</label>
                <input 
                  type="password" 
                  className="form-control textBchgmdp" 
                  id="verificationCode" 
                  placeholder="🔒︎ Nouveau mot de passe" 
                  value={verificationCode}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setVerificationCode(e.target.value)} 
                />
              </div>
              <Button as={Link} to="/connexion" type="submit" className="btn btn-primary buttonCchgmdp" style={{ margin: '2% 25%' }}>Mettre à jour</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChangementMDP;
