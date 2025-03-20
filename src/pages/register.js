import React, { useState } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Row>
          <h1>Créer son compte</h1>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={6} style={{ margin: '3% auto' }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 register">
                <label For="firstName" className="form-label">Prénom</label>
                <input
                  type="text"
                  className="form-control textBregister"
                  id="firstName"
                  placeholder="Prénom"
                  value={firstName}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-3 register">
                <label for="lastName" className="form-label">Nom</label>
                <input
                  type="text"
                  className="form-control textBregister"
                  id="lastName"
                  placeholder="Nom"
                  value={lastName}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-3 register">
                <label for="email" className="form-label">Adresse mail</label>
                <input
                  type="email"
                  className="form-control textBregister"
                  id="email"
                  placeholder="Adresse mail"
                  value={email}
                  style={{ margin: '0 auto' }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3 register">
                <label for="password" className="form-label">Mot de passe</label>
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
                <label for="confirmPassword" className="form-label">Confirmation mot de passe</label>
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

              <button type="submit" className="btn btn-primary buttonC" style={{ margin: '2% 0%' }}><Link to="/verifmail">Inscription</Link></button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
