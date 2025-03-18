import React, { useState } from "react";
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
          <Col md={6}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 verifmail">
                <label for="verificationCode" className="form-label">Entrez le nouveau mot de passe</label>
                <input 
                  type="password" 
                  className="form-control textB" 
                  id="verificationCode" 
                  placeholder="Nouveau mot de passe" 
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)} 
                />
              </div>
            </form>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 verifmail">
                <label for="verificationCode" className="form-label">Entrez de nouveau le mot de passe</label>
                <input 
                  type="password" 
                  className="form-control textB" 
                  id="verificationCode" 
                  placeholder="Nouveau mot de passe" 
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)} 
                />
              </div>
              <button type="submit" className="btn btn-primary buttonC"><Link to="/">Mettre à jour</Link></button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChangementMDP;
