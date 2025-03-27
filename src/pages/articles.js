import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer les états locaux du composant.
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'; // Importation des composants de React-Bootstrap pour la mise en page et les éléments UI.
import CommentLikeButton from '../../compos/likebutton'; // Importation du composant "CommentLikeButton" qui permet d'ajouter un like à un commentaire.

function Article({ user }) {
    // Utilisateur par défaut si aucun utilisateur n'est passé en tant que prop
    const defaultUser = {
        name: "Anonyme", // Nom par défaut
        image: "/assets/images/avatar.svg", // Image par défaut de l'avatar
        status: "Connecté", // Statut par défaut
        role: "Visiteur" // Rôle par défaut
    };

    // Utilisateur actuel, soit passé en prop, soit l'utilisateur par défaut
    const currentUser = user || defaultUser;

    // État pour stocker la liste des commentaires
    const [comments, setComments] = useState([
        { id: 1, name: "Jean", image: "/assets/images/avatar.svg", text: "Ceci est un faux commentaire", date: "14/03/2025 13:37:34", likes: 0, likedByUser: false, editing: false },
        { id: 2, name: "Marie", image: "/assets/images/avatar.svg", text: "Et celui ci aussi est un faux commentaire", date: "14/03/2025 13:37:32", likes: 0, likedByUser: false, editing: false },
    ]);

    // État pour l'entrée du nouveau commentaire
    const [newComment, setNewComment] = useState("");

    // État pour contrôler le nombre de commentaires visibles
    const [visibleCount, setVisibleCount] = useState(5);

    // Fonction pour ajouter un nouveau commentaire
    const addComment = () => {
        if (newComment.trim() !== "") {
            const newEntry = {
                id: Date.now(), // Utilisation de la date actuelle pour générer un ID unique
                name: currentUser.name, // Nom de l'utilisateur actuel
                image: currentUser.image, // Image de l'utilisateur actuel
                date: new Date().toLocaleString(), // Date de publication du commentaire
                text: newComment, // Texte du commentaire
                likes: 0, // Nombre de likes initial
                likedByUser: false, // L'utilisateur n'a pas encore liké ce commentaire
                editing: false, // Le commentaire n'est pas en mode édition
            };
            setComments([newEntry, ...comments]); // Ajout du nouveau commentaire en début de liste
            setNewComment(""); // Réinitialisation du champ de texte pour un nouveau commentaire
        }
    };

    // Fonction pour gérer la pression de la touche "Entrée" afin d'ajouter un commentaire
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Empêche le rechargement de la page
            addComment(); // Appel de la fonction pour ajouter un commentaire
        }
    };

    // Fonction pour afficher plus de commentaires (par défaut, 5 sont affichés)
    const showMoreComments = () => {
        setVisibleCount(visibleCount + 5); // Augmente le nombre de commentaires visibles
    };

    // Fonction pour réduire le nombre de commentaires visibles à 5
    const reduceComments = () => {
        setVisibleCount(5); // Réduit le nombre de commentaires visibles à 5
    };

    // Fonction pour supprimer un commentaire
    const deleteComment = (id) => {
        const filteredComments = comments.filter(comment => comment.id !== id); // Filtre les commentaires en supprimant celui dont l'ID correspond
        setComments(filteredComments); // Mise à jour de l'état des commentaires après suppression
    };

    // Fonction pour gérer l'ajout/retrait d'un "like" sur un commentaire
    const likeComment = (id) => {
        const updatedComments = comments.map(comment =>
            comment.id === id
                ? {
                    ...comment,
                    likes: comment.likedByUser ? comment.likes - 1 : comment.likes + 1, // Incrémente ou décrémente le nombre de likes
                    likedByUser: !comment.likedByUser // Change l'état du like pour l'utilisateur
                }
                : comment
        );
        setComments(updatedComments); // Mise à jour de l'état des commentaires après modification
    };

    // Fonction pour basculer le mode édition d'un commentaire
    const editComment = (id) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, editing: !comment.editing } : comment // Alterne entre édition et vue normale
        );
        setComments(updatedComments); // Mise à jour de l'état des commentaires après changement de mode d'édition
    };

    // Fonction pour mettre à jour un commentaire après modification
    const updateComment = (id, text) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, text, editing: false } : comment // Modifie le texte du commentaire et désactive le mode édition
        );
        setComments(updatedComments); // Mise à jour de l'état des commentaires après modification
    };

    return (
        <Container className="newsContainer text-color-2 my-4">
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

            <section className="content mb-4">
                <Row>
                    <Col>
                        <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</article>
                        <p><strong>Publié le 14/03/2025 par Roberto Delavega</strong></p>
                    </Col>
                </Row>
            </section>

            <Container className="comments mb-5">
                <h3>Espace Utilisateur</h3>
                {/* Affichage des informations de l'utilisateur actuel */}
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

                {/* Formulaire pour ajouter un commentaire */}
                <Container>
                    <Form className="mb-3">
                        <Form.Group controlId="newComment">
                            <Form.Control
                                className="commentInput mb-3"
                                type="text"
                                placeholder="Ajoutez votre commentaire..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyPress={handleKeyPress} // Gestion de la touche "Entrée"
                            />
                        </Form.Group>
                        <Button className="custom-button-2" onClick={addComment}>
                            Poster
                        </Button>
                    </Form>
                </Container>
                <h3 className="mb-3">Commentaires</h3>

                {/* Affichage des commentaires */}
                <ul className="list-unstyled">
                    {comments.slice(0, visibleCount).map((comment) => (
                        <li key={comment.id} className="mb-3">
                            <Row className="align-items-center comms">
                                {/* Avatar de l'utilisateur qui a posté le commentaire */}
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
                                    {/* Affichage du commentaire avec option d'édition */}
                                    {comment.editing ? (
                                        <Form.Control
                                            type="text"
                                            defaultValue={comment.text}
                                            onBlur={(e) => updateComment(comment.id, e.target.value)} // Sauvegarde après modification
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
                                    {/* Bouton pour liker le commentaire */}
                                    <CommentLikeButton comment={comment} likeComment={likeComment} />
                                    {comment.name === currentUser.name && (
                                        <>
                                            {/* Boutons pour modifier ou supprimer le commentaire */}
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

                {/* Affichage des boutons pour afficher plus ou réduire les commentaires */}
                <Container className="d-flex justify-content-between">
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
                </Container>
            </Container>
        </Container>
    );
}

export default Article;
