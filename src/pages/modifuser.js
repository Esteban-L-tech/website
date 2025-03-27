import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";

function Modifuser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const Avatar = "/assets/images/bg.jpg";

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <h1>Modification information personnelles</h1>
        </Row>
      </Container>

      <Container>
        <Row style={{ margin: '10% auto' }}>
        <img src={Avatar} alt='User' style={{ margin: '5% auto' }} className='rounded-circle item-center userprofil' />
          <Col md={6} style={{ margin: '3% auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 register">
                <label For="pseudo" className="form-label">Nouveau pseudo</label>
                <input
                  type="text"
                  className="form-control textBregister"
                  id="firstName"
                  placeholder="Pseudo"
                  value={firstName}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-3 register">
                <label for="password" className="form-label">Nouveau mot de passe</label>
                <input
                  type="password"
                  className="form-control textBregister"
                  id="password"
                  placeholder="Mot de passe"
                  value={password}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 register">
                <label for="confirmPassword" className="form-label">Confirmation nouveau mot de passe</label>
                <input
                  type="password"
                  className="form-control textBregister"
                  id="confirmPassword"
                  placeholder="Confirmation mot de passe"
                  value={confirmPassword}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <Button as={Link} to="/user" type="submit" className="btn btn-primary buttonC" style={{ margin: '2% 0%' }}>Enregistrement</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Modifuser;
