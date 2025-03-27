import React from "react"; // Importation de React pour créer un composant fonctionnel.
import { Container, Row } from "react-bootstrap"; // Importation des composants Container et Row de React-Bootstrap pour la mise en page.

function Informations() {
    return (
        <>
            {/* Conteneur principal qui contient toutes les informations légales du site */}
            <Container className="text-color-2 informations">
                {/* Section des mentions légales */}
                <Row>
                    <h2 className="mb-5" id="mentions">MENTIONS LEGALES</h2> {/* Titre principal de la section */}
                    <h3 className="mb-3">Editeur du site</h3> {/* Sous-titre pour l'éditeur du site */}
                    <p className="mb-5"> 
                        {/* Informations sur l'éditeur du site, y compris le nom, le type de site, le responsable de la publication, l'email de contact et l'hébergeur */}
                        Nom du site : Via Commu<br/>
                        Type de site : Blog<br/>
                        Responsable de la publication : [Nom ou pseudonyme]<br/>
                        Email de contact : <a className="mailto" href="mailto:contact@viacommu.com.">contact@viacommu.com.</a><br/>
                        Hébergement : [Nom de l'hébergeur] - [Adresse de l'hébergeur]
                    </p>
                </Row>

                {/* Section des conditions d'utilisation */}
                <Row>
                    <h3 className="mb-3" id="cgu">Conditions d'utilisation</h3> {/* Titre pour la section des conditions d'utilisation */}
                    <p className="mb-5">
                        {/* Paragraphe expliquant que l'utilisation du site implique l'acceptation des conditions générales d'utilisation */}
                        L'utilisation du site Via Commu implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. 
                        Ces conditions sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter régulièrement.
                    </p>
                </Row>

                {/* Section sur la politique de confidentialité */}
                <Row>
                    <h3 className="mb-3" id="confident">Politique de confidentialité</h3> {/* Titre pour la section de confidentialité */}
                    <p className="mb-5">
                        {/* Paragraphe indiquant l'engagement du site à protéger la confidentialité des données personnelles des utilisateurs */}
                        Via Commu s'engage à protéger la confidentialité des données personnelles des utilisateurs
                    </p>
                </Row>

                {/* Section sur les données collectées */}
                <Row>
                    <h3 className="mb-3">Données collectées</h3> {/* Titre pour la section des données collectées */}
                    <ul className="mb-5">
                        {/* Liste des données collectées à travers le formulaire de contact et l'inscription au site */}
                        <li className="tabbed">Le formulaire de contact (nom, email, message)</li>
                        <li className="tabbed">L'inscription au site (nom, prénom, email)</li>
                    </ul>
                </Row>

                {/* Section sur la finalité des données */}
                <Row>
                    <h3 className="mb-3">Finalité des données</h3> {/* Titre pour la section sur la finalité des données */}
                    <p className="mb-5">
                        {/* Paragraphe expliquant que les données collectées sont utilisées uniquement dans le cadre du fonctionnement du site et ne sont pas revendues */}
                        Les données collectées sont utilisées uniquement dans le cadre du fonctionnement du site et ne sont pas revendues à des tiers.
                    </p>
                </Row>

                {/* Section sur les droits des utilisateurs */}
                <Row>
                    <h3 className="mb-3">Droits des utilisateurs</h3> {/* Titre pour la section des droits des utilisateurs */}
                    <p className="mb-5">
                        {/* Paragraphe expliquant les droits des utilisateurs conformément au RGPD (accès, rectification, suppression des données) */}
                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. 
                        Pour toute demande, contactez-nous à <a className="mailto" href="mailto:contact@viacommu.com.">contact@viacommu.com.</a>
                    </p>
                </Row>
            </Container>
        </>
    )
}

export default Informations; // Exportation du composant Informations pour qu'il puisse être utilisé ailleurs dans l'application.
