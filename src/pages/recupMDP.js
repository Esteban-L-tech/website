import React, { useState } from "react";
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";

function RecupMDP() {
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
                <label for="verificationCode" className="form-label">Renseignez le mail utilisé lors de la création du compte</label>
                <input 
                  type="text" 
                  className="form-control textBrecupmdp" 
                  id="verificationCode" 
                  placeholder="Adresse mail" 
                  value={verificationCode}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setVerificationCode(e.target.value)} 
                />
              </div>
              <Button as={Link} to="/changementmdp" type="submit" className="btn btn-primary buttonCrecupmdp" style={{ margin: '2% 25%' }}>Vérifier</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RecupMDP;
