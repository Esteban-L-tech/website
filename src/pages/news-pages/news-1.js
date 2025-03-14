import React from "react";
import { Container, Col } from "react-bootstrap";



function News1() {

    return (
        <>
            <Container className="text-center">
                <img className="imgArticle" src="/assets/images/img1.jpg" />
                <h4>HTML5 : Nouveaux éléments de section, article, header, footer, aside, nav</h4>
                <h5>Les éléments de section HTML5, une nouvelle façon de penser</h5>
                <h6>Les éléments de section (section, article, nav, aside, header, footer) segmentent des portions du document ou de l'application web, qui possèdent une valeur sémantique particulière ; contrairement à des éléments génériques comme span ou div qui ont un rôle totalement neutre, et ne servent qu'à regrouper d'autres éléments HTML pour leur affecter un style CSS commun, voire pour interagir avec eux via le DOM... Il ne s'agit donc pas de nouveaux éléments avec des noms génériques : c'est bien plus que ça !

                    HTML5 inclut la majorité des éléments HTML4 pour assurer une rétro-compatibilité avec les navigateurs. Au-delà de ce critère, les groupes de travail qui ont élaboré HTML5 ont su analyser les usages courants et s'adapter aux tendances du web avec (entre autres) les nouvelles façons de trier l'information sur une page web. Des statistiques ont été élaborées sur les attributs id les plus fréquemment attribués aux grands découpages de pages HTML.
                </h6>

                <h6>Par exemple, une majorité des sites contiennent des informations supplémentaires relatives ou non au contenu principal (que l'on nomme sidebar ou barre latérale). Cette information est alors placée dans un élément dédié - qui permet d'affecter des propriétés de styles CSS - mais n'a aucune signification particulière pour un navigateur ou un moteur d'indexation. C'est le cas de tous les autres div. Le même principe peut être appliqué pour baliser les différents articles d'un site d'information : pourquoi ne pas prévoir un élément article plutôt que de segmenter tout le contenu avec des div class="article" ? Ceci en facilitera autant l'extraction d'information, la syndication de contenu, et la structuration du code source.

                    Liste récapitulative des éléments de sec
                </h6>
                <h5>Liste récapitulative des éléments de section HTML5</h5>
                <h6>Le tableau suivant récapitule les nouveaux éléments de section et leur usage le plus commun, tel que décrit par la spécification.</h6>
            </Container>

            <div className="container">
                <div className="connexion">
                    <div className="row">
                        <div className="col-6">
                            <form>
                                <div className="mb-3 commitExemple">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor</p>
                                </div>

                                <div className="mb-3 commitExemple">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor</p>
                                </div>

                                <div className="mb-3 commitExemple">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor</p>
                                </div>

                                <div className="mb-3 commitExemple">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor</p>
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="comentaire" className="form-control" id="exampleInputEmail1" aria-describedby="commentaireWhrite" />
                                </div>
                                <div className="mb-3">
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

        </>
    )
}

export default News1;