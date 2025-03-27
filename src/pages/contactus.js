import React from "react"; // Importation de React pour pouvoir créer un composant fonctionnel.
import { Container, FormLabel, Col, Row } from "react-bootstrap"; // Importation de composants de React-Bootstrap pour la mise en page.
import Form from 'react-bootstrap/Form'; // Importation du composant Form pour créer des éléments de formulaire.
import Button from "react-bootstrap/Button"; // Importation du bouton pour soumettre le formulaire.
import InputGroup from 'react-bootstrap/InputGroup'; // Importation du composant InputGroup pour gérer des champs d'entrée avec des labels personnalisés.

function Contact() {
    return (
        <>
            {/* Conteneur principal pour le formulaire de contact */}
            <Container className="contactContainer text-color-2">
                {/* Formulaire de contact */}
                <Form>
                    <h1 className="text-color-2 mb-5">Nous contacter</h1> {/* Titre du formulaire */}
                    
                    {/* Label et champ pour entrer le nom de l'utilisateur */}
                    <FormLabel>Entrer votre nom et prénom</FormLabel>
                    
                    {/* Ligne contenant deux colonnes pour le nom et le prénom */}
                    <Row className="align-items-center">
                        {/* Colonne pour le champ du nom */}
                        <Col xs={12} md={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Nom</InputGroup.Text> {/* Label du champ Nom */}
                                <Form.Control aria-label="First name" /> {/* Champ de saisie pour le nom */}
                            </InputGroup>
                        </Col>
                        {/* Colonne pour le champ du prénom */}
                        <Col xs={12} md={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Prénom</InputGroup.Text> {/* Label du champ Prénom */}
                                <Form.Control aria-label="Last name" /> {/* Champ de saisie pour le prénom */}
                            </InputGroup>
                        </Col>
                    </Row>

                    {/* Champ pour insérer une pièce jointe */}
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Insérer une pièce jointe</Form.Label> {/* Label pour le champ fichier */}
                        <Form.Control type="file" /> {/* Champ de type fichier pour télécharger un fichier */}
                    </Form.Group>

                    {/* Champ pour entrer l'adresse email */}
                    <Form.Group className="mb-3" controlId="formContact">
                        <Form.Label>Entrer votre adresse email</Form.Label> {/* Label pour l'email */}
                        <Form.Control type="email" placeholder="name@example.com" /> {/* Champ de saisie pour l'email avec un placeholder */}
                    </Form.Group>

                    {/* Champ pour entrer le message de l'utilisateur */}
                    <Form.Group className="mb-3" controlId="formContact">
                        <Form.Label>Entrer votre message</Form.Label> {/* Label pour le message */}
                        <Form.Control as="textarea" rows={5} /> {/* Champ de texte pour le message, permettant de saisir plusieurs lignes */}
                    </Form.Group>

                    {/* Case à cocher pour certifier la véracité des informations */}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Je certifie que les données renseignées sont exactes" /> {/* Case à cocher pour l'acceptation */}
                    </Form.Group>

                    {/* Bouton pour soumettre le formulaire */}
                    <Button className="custom-color text-color-2" variant="primary" type="submit">
                        Envoyer {/* Texte du bouton pour soumettre le formulaire */}
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Contact; // Exportation du composant Contact pour qu'il puisse être utilisé ailleurs dans l'application.
