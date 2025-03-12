import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import React from "react";
let VerticalBanner = './asset/image/bande_img.jpg'

function Connexion() {
  return (
    <>
    <div className='container'>
      <div className='row'>
      <h1>Se connecter</h1>
      <h2>Vous tenter d’accéder à un contenu qui nécessite d’être connecté</h2>
      </div>
      </div>

      <div className="container">
    <div className="connexion">
      <div className="row">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
              <button type="submit" className="btn">Mot de passe oublié?</button>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-6 text-i">
          <p className="inscrit">Si vous n'avez pas encore de compte, cliquez sur le bouton ci-dessous, c'est gratuit.</p>
          <button type="submit" className="btn btn-primary button-2">Inscription</button>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Connexion;