import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer l'état local dans le composant.
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'; // Importation de composants de React Bootstrap pour la mise en page et les éléments de formulaire.
import CommentLikeButton from '../compos/likebutton'; // Importation du composant CommentLikeButton, qui gère le bouton de like pour chaque commentaire.

function News({ user }) {
    // Définition des données par défaut pour l'utilisateur (si aucun utilisateur n'est passé en prop).
    const defaultUser = {
        name: "Anonyme",
        image: "/assets/images/avatar.svg",
        status: "Connecté",
        role: "Visiteur"
    };

    // Récupération de l'utilisateur courant, ou utilisation de l'utilisateur par défaut s'il n'est pas fourni.
    const currentUser = user || defaultUser;

    // Définition de l'état pour la gestion des commentaires.
    const [comments, setComments] = useState([
        { id: 1, name: "Jean", image: "/assets/images/avatar.svg", text: "Ceci est un faux commentaire", date: "14/03/2025 13:37:34", likes: 0, likedByUser: false, editing: false },
        { id: 2, name: "Marie", image: "/assets/images/avatar.svg", text: "Et celui ci aussi est un faux commentaire", date: "14/03/2025 13:37:32", likes: 0, likedByUser: false, editing: false },
    ]);

    // Définition de l'état pour la gestion du texte du nouveau commentaire.
    const [newComment, setNewComment] = useState("");
    // État pour contrôler le nombre de commentaires visibles.
    const [visibleCount, setVisibleCount] = useState(5);

    // Fonction pour ajouter un commentaire à la liste des commentaires.
    const addComment = () => {
        if (newComment.trim() !== "") {
            const newEntry = {
                id: Date.now(), // Utilisation de la date actuelle pour générer un ID unique pour le commentaire.
                name: currentUser.name,
                image: currentUser.image,
                date: new Date().toLocaleString(), // Ajout de la date de création du commentaire.
                text: newComment,
                likes: 0,
                likedByUser: false,
                editing: false,
            };
            setComments([newEntry, ...comments]); // Ajout du nouveau commentaire à la liste existante.
            setNewComment(""); // Réinitialisation du champ de texte pour un nouveau commentaire.
        }
    };

    // Fonction pour gérer la pression de la touche "Entrée" pour soumettre le commentaire.
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Empêche l'envoi du formulaire par défaut.
            addComment(); // Appel de la fonction pour ajouter un commentaire.
        }
    };

    // Fonction pour afficher plus de commentaires (5 de plus à chaque clic).
    const showMoreComments = () => {
        setVisibleCount(visibleCount + 5);
    };

    // Fonction pour réduire le nombre de commentaires visibles à 5.
    const reduceComments = () => {
        setVisibleCount(5);
    };

    // Fonction pour supprimer un commentaire par son ID.
    const deleteComment = (id) => {
        const filteredComments = comments.filter(comment => comment.id !== id); // Filtrage des commentaires pour exclure celui à supprimer.
        setComments(filteredComments); // Mise à jour de l'état avec les commentaires filtrés.
    };

    // Fonction pour liker un commentaire (ou annuler un like).
    const likeComment = (id) => {
        const updatedComments = comments.map(comment =>
            comment.id === id
                ? {
                    ...comment,
                    likes: comment.likedByUser ? comment.likes - 1 : comment.likes + 1, // Incrémente ou décrémente les likes selon l'état actuel.
                    likedByUser: !comment.likedByUser // Change l'état de like pour cet utilisateur.
                }
                : comment
        );
        setComments(updatedComments); // Mise à jour des commentaires après le changement de like.
    };

    // Fonction pour activer ou désactiver l'édition d'un commentaire.
    const editComment = (id) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, editing: !comment.editing } : comment // Inverse l'état "editing" pour le commentaire concerné.
        );
        setComments(updatedComments); // Mise à jour des commentaires après avoir modifié l'état d'édition.
    };

    // Fonction pour mettre à jour un commentaire avec le texte modifié.
    const updateComment = (id, text) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, text, editing: false } : comment // Met à jour le texte du commentaire et arrête l'édition.
        );
        setComments(updatedComments); // Mise à jour des commentaires après modification.
    };

    return (
        <Container className="newsContainer text-color-2 my-4">
            {/* En-tête de l'article avec l'image et le titre */}
            <header className="text-center mb-4">
                <Image
                    className="imageArticle my-4"
                    src="/assets/images/img1.jpg"
                    alt="Image de l'article"
                    fluid
                    rounded
                />
                <h2 className="newsContainer mt-4">Article sur des lunettes posées sur un ordinateur portable</h2>
            </header>

            {/* Section du contenu de l'article */}
            <section className="content mb-4">
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
                        <p><strong>Publié le 14/03/2025 par Roberto Delavega</strong></p>
                    </Col>
                </Row>
            </section>

            {/* Section des commentaires */}
            <Container className="comments mb-5">
                <h3>Espace Utilisateur</h3>

                {/* Affichage des informations de l'utilisateur courant */}
                <Row className="align-items-center d-flex userImageCol mb-3 mx-5">
                    <Col xs={12} md={3} className="text-center mb-2 mb-md-0">
                        <Image
                            className="userImageComment"
                            src={currentUser.image}
                            alt="Image de l'utilisateur"
                            roundedCircle
                            fluid
                        />
                    </Col>
                    <Col xs={12} md={9} className="text-center text-md-start">
                        <p className="mb-1 role"><strong>{currentUser.role}</strong></p>
                        <p className="mb-1 status">{currentUser.status}</p>
                        <p className="mb-0"><strong>{currentUser.name}</strong></p>
                    </Col>
                </Row>

                {/* Formulaire pour ajouter un nouveau commentaire */}
                <Container>
                    <Form className="mb-3">
                        <Form.Group controlId="newComment">
                            <Form.Control
                                className="commentInput mb-3"
                                type="text"
                                placeholder="Ajoutez votre commentaire..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </Form.Group>
                        <Button className="custom-button-2" onClick={addComment}>
                            Poster
                        </Button>
                    </Form>
                </Container>

                {/* Affichage des commentaires */}
                <h3 className="mb-3">Commentaires</h3>
                <ul className="list-unstyled">
                    {comments.slice(0, visibleCount).map((comment) => (
                        <li key={comment.id} className="mb-3">
                            <Row className="align-items-center comms">
                                <Col className="userImageCommentCol" xs={3}>
                                    <Image
                                        className="userImageComment"
                                        src={comment.image}
                                        alt={`Avatar de ${comment.name}`}
                                        roundedCircle
                                        fluid
                                    />
                                </Col>
                                <Col>
                                    {comment.editing ? (
                                        <Form.Control
                                            type="text"
                                            defaultValue={comment.text}
                                            onBlur={(e) => updateComment(comment.id, e.target.value)}
                                        />
                                    ) : (
                                        <>
                                            <p className="mb-2 commentName">{comment.name}</p>
                                            <p className="mb-2 commentText">{comment.text}</p>
                                            <p className="mb-2 commentDate">{comment.date}</p>
                                        </>
                                    )}
                                </Col>
                                <Col className="buttonInteraction" xs={12} md={4}>
                                    <CommentLikeButton comment={comment} likeComment={likeComment} />
                                    {comment.name === currentUser.name && (
                                        <>
                                            <Button
                                                className='editButton'
                                                size="sm"
                                                onClick={() => editComment(comment.id)}
                                            >
                                                {comment.editing ? 'Enregistrer' : 'Modifier'}
                                            </Button>
                                            <Button
                                                className='deleteButton'
                                                size="sm"
                                                onClick={() => deleteComment(comment.id)}
                                            >
                                                X
                                            </Button>
                                        </>
                                    )}
                                </Col>
                            </Row>
                        </li>
                    ))}
                </ul>

                {/* Boutons pour afficher ou réduire les commentaires */}
                <div className="d-flex justify-content-between">
                    {visibleCount < comments.length && (
                        <Button className="custom-button-2" onClick={showMoreComments}>
                            Afficher plus
                        </Button>
                    )}
                    {visibleCount > 5 && (
                        <Button variant="secondary" onClick={reduceComments}>
                            Réduire
                        </Button>
                    )}
                </div>
            </Container>
        </Container>
    );
}

export default News; // Exportation du composant News pour l'utiliser ailleurs dans l'application.
