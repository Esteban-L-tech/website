import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import React from "react";
let VerticalBanner = './asset/image/bande_img.jpg'

function Register() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1>Créer son compte</h1>
        </div>
      </div>

      <div className="container">
          <div className="row">
            <div className="col-6">
              <form>
                <div className="mb-3 register">
                  <label for="exampleInputEmail1" className="form-label">Prénom</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div className="mb-3 form-check"/>
                  <label for="exampleInputEmail1" className="form-label">Nom</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div className="mb-3 form-check"/>
                    <label for="exampleInputEmail1" className="form-label">Adresse mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div className="mb-3 form-check"/>
                    <label for="exampleInputEmail1" className="form-label">Mot de passe</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div className="mb-3 form-check"/>
                    <label for="exampleInputEmail1" className="form-label">Confirmation mot de passe</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Inscription</button>
              </form>
            </div>
          </div>
        </div>

    </>
  )
}

export default Register;