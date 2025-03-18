import InputGroup from 'react-bootstrap/InputGroup';
import NewCarousel from '../compos/carouselNews';
import { Row, Container } from 'react-bootstrap';
import React from "react";
import NewCarouselNews from '../compos/carouselNews';
let VerticalBanner = './asset/image/bande_img.jpg'

function News() {
  const carouselNews1 = [
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
  ];

  const carouselNews2 = [
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
  ];

  const carouselNews3 = [
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
    { title: 'Titre de l’article', image: '/assets/images/img1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum orci quis diam malesuada, quis pharetra risus elementum. Ut mollis  posuere fermentum. Sed ut sem eu orci blandit rutrum nec vitae lectus.  Suspendisse suscipit et neque in porttitor. ' },
  ];
  return (
    <>

      <div className='test'>
        <p>Actualités</p>
        <p>Dernière news</p>
      </div>
      <Container>
      <NewCarouselNews items={carouselNews1} />
      </Container>
      

      <Container>
      <NewCarouselNews items={carouselNews2} />
      </Container>

      <Container>
      <NewCarouselNews items={carouselNews3} />
      </Container>
    </>
  )
}

export default News;