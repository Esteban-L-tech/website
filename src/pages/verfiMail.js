import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";

function Verifmail() {
  const [verificationCode, setVerificationCode] = useState('');

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <h1>Vérification compte</h1>
          <h3>Un code vous a été envoyé par mail</h3>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={6} style={{ margin: '3% auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 verifmail">
                <label for="verificationCode" className="form-label">Vérifiez le code reçus par mail</label>
                <input
                  type="text"
                  className="form-control textBverif"
                  id="verificationCode"
                  placeholder="Entrez votre code"
                  value={verificationCode}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              <Button as={Link} to ="/connexion" type="submit" className="btn btn-primary buttonCverifmail" style={{ margin: '3% 25%' }}>verifier</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Verifmail;
