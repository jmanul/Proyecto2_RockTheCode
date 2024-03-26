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


