import './style.css'


const products = [
  {
    name: 'Azúcar moreno de caña ECO Planeta Huerto',
    price: 4.95,
    stars: 4.7,
    reviews: 8,
    seller: 'Planeta Huerto',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/160465/160465_1.png?fit=crop&w=184&h=184&fm=webp&q=100&v=10'
  },
  {
    name: 'Panecillos multicereales ecológicos Smileat 60g',
    price: 3.13,
    stars: 4.6,
    reviews: 27,
    seller: 'Smileat',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/100788/100788_1.png?fit=crop&w=184&h=184&fm=webp&q=100&v=4'
  },
  {
    name: 'Aceite de Masaje antiestrías Weleda, 100ml',
    price: 20.29,
    stars: 4.6,
    reviews: 25,
    seller: 'weleda',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/2355/2355_1.jpg?fit=crop&w=184&h=184&fm=webp&q=100&v=4'
  },
  {
    name: 'PROMO 3x Tarrito BIO Guisito de alubias Smileat 230g',
    price: 7.2,
    stars: 4.8,
    reviews: 16,
    seller: 'Smileat',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/110921/110921_1.png?fit=crop&w=184&h=184&fm=webp&q=100&v=12'
  },
  {
    name: 'Smilitos, gusanitos de maíz ecológico Smileat, 38g',
    price: 1.78,
    stars: 4.8,
    reviews: 60,
    seller: 'Smileat',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/67938/67938_1.jpg?fit=crop&w=184&h=184&fm=webp&q=100&v=9'
  },
  {
    name: 'Freidora de aire Aigostar Window Box 4L con ventana',
    price: 49.99,
    stars: 4.5,
    reviews: 31,
    seller: 'Aigostar',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/173713/173713_1.jpg?fit=crop&w=184&h=184&fm=webp&q=100&v=1'
  },
  {
    name: 'Bonsái Carmona microphylla 5 años',
    price: 12.9,
    stars: 4.7,
    reviews: 250,
    seller: 'Planeta Huerto',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/959/959_1.jpg?fit=crop&w=184&h=184&fm=webp&q=100'
  },
  {
    name: 'Conjunto de armario JLine Alto+Bajo',
    price: 108,
    stars: 4.2,
    reviews: 13,
    seller: 'jobgar',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/129768/129768_1.png?fit=crop&w=184&h=184&fm=webp&q=100&v=2'
  },
  {
    name: 'Kit Terrarium Suculentas',
    price: 17.05,
    stars: 4.8,
    reviews: 8,
    seller: 'Aigostar',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/71388/71388_1.jpg?fit=crop&w=184&h=184&fm=webp&q=100&v=3'
  },
  {
    name: 'Robot de Cocina MK8121 Maxichef Advanced Moulinex',
    price: 163,
    stars: 3.5,
    reviews: 7,
    seller: 'weleda',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/123554/123554_1.jpg?fit=crop&w=184&h=184&fm=webp&q=100&v=1'
  },
  {
    name: 'Conjunto de armario JLine Alto+Bajo',
    price: 128,
    stars: 4,
    reviews: 3,
    seller: 'jobgar',
    image: 'https://cdn2.planetahuerto.es/estaticos/imagenes/ficha/89075/89075_1.jpg?fit=crop&w=184&h=184&fm=webp&q=100&v=1'
  }
];

const productSection = document.querySelector('section.products');

for (let i = 0; i < products.length; i++) {

  const product = products[i]
 
  const productArticle = document.createElement('article');
  productSection.append(productArticle);

  const productA = document.createElement('a');
  productA.href = '#';
  productArticle.append(productA);

  const productDivImage = document.createElement('div');
  productDivImage.classList.add('divImage' , 'flex-container');
  productA.append(productDivImage);

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productDivImage.append(productImage);

  const productHeart = document.createElement('i');
  productHeart.className = 'bi bi-heart';
  productDivImage.append(productHeart);

  const productSeller = document.createElement('p');
  productSeller.id = 'seller';
  productSeller.innerText = product.seller;
  productA.append(productSeller);

  const productName = document.createElement('p');
  productName.id = 'name';
  productName.innerText = product.name;
  productA.append(productName);

  const productDivPrice = document.createElement('div');
  productDivPrice.classList.add('flex-container' , 'price');
  productArticle.append(productDivPrice);

  const productPrice = document.createElement('p');
  productPrice.id = 'price';
  productPrice.innerText = product.price;
  productDivPrice.append(productPrice);

  const productDivStars = document.createElement('div');
  productDivStars.classList.add('flex-container' , 'stars');
  productDivPrice.append(productDivStars);

  const productSpanStars = document.createElement('span');
  productSpanStars.className = 'bi bi-star-fill';
  productDivStars.append(productSpanStars);

  const productStars = document.createElement('p');
  productStars.innerText = product.stars;
  productDivStars.append(productStars);  

  const productDivReviewed = document.createElement('div');
  productDivReviewed.classList.add( 'flex-container','reviewed');
  productDivStars.append(productDivReviewed);

  const productReviews = document.createElement('p');
  productReviews.innerText = product.reviews;
  productDivReviewed.append(productReviews);

  const productSpanReviews = document.createElement('span');
  productSpanReviews.className = 'bi bi-chat';
  productDivReviewed.append(productSpanReviews);

  const productInput = document.createElement('input');
  productInput.type = 'button';
  productInput.value = 'Añadir a carrito';
  productArticle.append(productInput);

 

};