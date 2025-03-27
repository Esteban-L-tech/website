import React, { useState } from "react";
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";

function User() {
  const [verificationCode, setVerificationCode] = useState('');
  const Avatar = "/assets/images/bg.jpg";

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <h1 style={{ margin: '5% auto' }}>Votre profil</h1>
          <img src={Avatar} alt='User' style={{ margin: '5% auto' }} className='rounded-circle item-center userprofil' />
          <h3>A propos de vous</h3>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={6} style={{ margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 user">
                <h6>Pseudo: (nom du profil)</h6>
                <h6>Adresse mail: (adresse mail du profil)</h6>
                <h6>Date création du compte:</h6>
              </div>
              <Button as={Link} to="/modifuser" type="submit" className="btn btn-primary buttonCrecupmdp" style={{ margin: '2% 25%' }}>Modification</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
