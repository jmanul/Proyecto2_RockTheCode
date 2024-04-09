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

const itenNavVar = [

  {
    name: 'Ayuda',
    icon: 'bi bi-headset',
    URL: '#'
  },
  {
    name: 'Habituales',
    icon: 'bi bi-bag-heart',
    URL: '#'
  },
  {
    name: 'Marca PH',
    icon: 'bi bi-patch-check-fill',
    URL: '#'
  },
  {
    name: 'Cuenta',
    icon: 'bi bi-person',
    URL: '#'
  },
  {
    name: 'Cesta',
    icon: 'bi bi-cart2',
    URL: '#'
  }
]

const itenRss = [

  {
    name: '',
    icon: 'bi bi-facebook',
    URL: '#'
  },
  {
    name: '',
    icon: 'bi bi-instagram',
    URL: '#'
  },
  {
    name: '',
    icon: 'bi bi-linkedin',
    URL: '#'
  },
  {
    name: '',
    icon: 'bi bi-twitter-x',
    URL: '#'
  },
  {
    name: '',
    icon: 'bi bi-youtube',
    URL: '#'
  },
  {
    name: '',
    icon: 'bi bi-tiktok',
    URL: '#'
  }
  
]


const productSection = document.querySelector('section.products');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');


const divLogoHeader = document.createElement('div');
divLogoHeader.className = 'divLogoHeader';
header.append(divLogoHeader);

const h1LogoHeader = document.createElement('h1');
divLogoHeader.append(h1LogoHeader);

const logoHeader = document.createElement('img');
logoHeader.className = 'logoHeader';
logoHeader.src = 'assets/full-logo.svg'
h1LogoHeader.append(logoHeader);

const filterSearchDiv = document.createElement('div');
filterSearchDiv.classList.add('filterSearchDiv', 'flex-container');
header.append(filterSearchDiv);

const filterSearchInput = document.createElement('input');
filterSearchInput.id = 'filterSearchInput';
filterSearchInput.type = 'search';
filterSearchInput.placeholder = 'Buscar';
filterSearchDiv.append(filterSearchInput);

const filterSearchButton = document.createElement('button');
filterSearchButton.id = 'filterSearchButton';
filterSearchButton.type = 'submit';
filterSearchDiv.append(filterSearchButton);

const filterSearchIcon = document.createElement('i');
filterSearchIcon.className = 'bi bi-search';
filterSearchButton.append(filterSearchIcon);

const divTitleProducts = document.createElement('div');
divTitleProducts.classList.add('flex-container' , 'divTitleProducts');
divTitleProducts.innerHTML = `      <h2>DESCUBRE NUESTRA MARCA</h2>
      <h3 class='flex-container'>   <div><img src="assets/miniatura.png" alt="logo de planeta huerto"></div> PLANETA HUERTO</h3>`;
main.append(divTitleProducts);

const createList = (list, section) => {

  const ulList = document.createElement('ul');
  ulList.className = 'flex-container';
  section.append(ulList);
  
  for (let i = 0; i < list.length; i++) {
      
    const iten = list[i]

    const liList = document.createElement('li');
    ulList.append(liList);

    const aList = document.createElement('a');
    aList.href = iten.URL;
    liList.append(aList);

    const divList = document.createElement('div');
    divList.className = 'divList';
    aList.append(divList);

    const iconList = document.createElement('i');
    iconList.className = iten.icon;
    divList.append(iconList);
    const nameList = document.createElement('p');
    nameList.innerText = iten.name;
    divList.append(nameList);

  }
}

createList(itenNavVar, header);
createList(itenRss, footer);



const createArticle = (list) => {
  for (let i = 0; i < list.length; i++) {

    const product = list[i]
 
    const productArticle = document.createElement('article');
    productSection.append(productArticle);

    const productA = document.createElement('a');
    productA.href = '#';
    productArticle.append(productA);

    const productDivImage = document.createElement('div');
    productDivImage.classList.add('divImage', 'flex-container');
    productA.append(productDivImage);

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productDivImage.append(productImage);

    const productDivHeart = document.createElement('div');
    productDivHeart.className = 'divHeart';
    productDivImage.append(productDivHeart);

    const productHeart = document.createElement('i');
    productHeart.classList = 'bi bi-heart';
    productDivHeart.append(productHeart);

    const productHeartHover = document.createElement('i');
    productHeartHover.className = 'bi bi-heart-fill';
    productDivHeart.append(productHeartHover);

    const productSeller = document.createElement('p');
    productSeller.id = 'seller';
    productSeller.innerText = product.seller;
    productA.append(productSeller);

    const productName = document.createElement('p');
    productName.id = 'name';
    productName.innerText = product.name;
    productA.append(productName);

    const productDivPrice = document.createElement('div');
    productDivPrice.classList.add('flex-container', 'price');
    productArticle.append(productDivPrice);

    const productPrice = document.createElement('p');
    productPrice.id = 'price';
    productPrice.innerText = product.price;
    productDivPrice.append(productPrice);

    const productDivStars = document.createElement('div');
    productDivStars.classList.add('flex-container', 'stars');
    productDivPrice.append(productDivStars);

    const productSpanStars = document.createElement('span');
    productSpanStars.className = 'bi bi-star-fill';
    productDivStars.append(productSpanStars);

    const productStars = document.createElement('p');
    productStars.innerText = product.stars;
    productDivStars.append(productStars);

    const productDivReviewed = document.createElement('div');
    productDivReviewed.classList.add('flex-container', 'reviewed');
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
};

createArticle(products);



const filterSection = document.querySelector('section.filter');

const filterSelectSeller = document.createElement('select');
filterSelectSeller.name = 'filterSeller';
filterSelectSeller.id = 'filterSeller';
filterSection.append(filterSelectSeller);

const filterOptionSeller = document.createElement('option');
filterOptionSeller.value = '';
filterOptionSeller.innerText = 'Marcas';
filterSelectSeller.append(filterOptionSeller);

const optionSellerCreate = (clave, list) => {
  
  const listItem = [];

  for (const item of list) {

    for (const i in item) {

      if (!listItem.includes(item[i]) && i === clave) {
        
        const filterOptionSeller = document.createElement('option');
        filterOptionSeller.value = item[i];
        filterOptionSeller.innerText = item[i];
        filterSelectSeller.append(filterOptionSeller);
        listItem.push(item[i]);

      }
 
    }  

  };
};

optionSellerCreate('seller', products);

const filterPriceDiv = document.createElement('div');
filterPriceDiv.classList.add('filterPriceDiv','flex-container');
filterSection.append(filterPriceDiv);


const filterPriceInput = document.createElement('input');
filterPriceInput.id = 'filterPrice';
filterPriceInput.type = 'number';
filterPriceInput.placeholder = 'Precio hasta';
filterPriceDiv.append(filterPriceInput);

const filterPriceButton = document.createElement('button');
filterPriceButton.id = 'filterPriceButton';
filterPriceButton.type = 'submit';
filterPriceButton.innerText = 'Buscar';
filterPriceDiv.append(filterPriceButton);

const filterResetButton = document.createElement('button');
filterResetButton.id = 'filterResetButton';
filterResetButton.type = 'reset';
filterResetButton.innerText = 'Limpiar Filtros';
filterSection.append(filterResetButton);


// todo copiado de array


let filterSearchAll = [{
  name: 'juanito',
  icon: 'bi bi-facebook',
  URL: '#'
},
  {
    name: 'juanito',
    icon: 'bi bi-facebook',
    URL: '#'
  }
];
let filterPriceAll = [{
  name: 'juanito',
  icon: 'bi bi-facebook',
  URL: '#'
}];
let filterSellerAll = [{
  name: '',
  icon: 'bi bi-facebook',
  URL: '#'
}];
let filterAllCopy = [];
let filterAll = [];


//! union de filtros activos

const unionFilterList = (list1, list2) => {

  for (let i = 0; i < list1.length; i++) {
    const element1 = list1[i];
      
    for (let j = 0; j < list2.length; j++) {
      const element2 = list2[j];

      if (element1.name === element2.name) {

        filterAll = list2.slice(j, j + 1);
      
      }
    }
  }
}

unionFilterList(filterPriceAll, filterSearchAll);


//! seleccion de lista de inicio de filtro



const selecList = () => {

  
  if (filterAllCopy.length == 0) {

    filterAll = products.slice();


  } else {

    filterAll = filterAllCopy.slice();
    console.log(filterAll);

  }
        
}

selecList()


//* filtrado por vendedor

const searchOptionSeller = (e) => {

  const searchOptionSellerList = productsCopy.slice();

  productSection.innerHTML = ``;

  
  for (let i = 0; i < searchOptionSellerList.length; i++) {
    
    let product = searchOptionSellerList[i];
   
    if ((e.target.value !== product.seller && searchOptionSellerList.length == 1)) {
      
      searchOptionSellerList.splice(i, 1);
     

      productSection.innerHTML = `<div class="info">
             <p>No hay resultados</p>
          </div>`;
        
      productSection.style.height = '100vh';
      
    }  else if (e.target.value === '') {
      
      createArticle(productsCopy);
      return;
      
    } else if (e.target.value !== product.seller) {

 
      searchOptionSellerList.splice(i, 1);
      i--;
    }

  
  }

  for (const product of searchOptionSellerList) { 

    searchOptionListAll.push(product); 
    
  }


  console.log(searchOptionListAll);

  createArticle(searchOptionSellerList);


}


const searchOptionPrice = () => { 

  console.log(searchOptionListAll);
  let count = 0;
  productSection.innerHTML = ``;


  for (let i = 0; i < searchOptionListAll.length; i++) {
 
    let product = searchOptionListAll[i];

    if (filterPriceInput.value < product.price && searchOptionListAll.length == 1) {

      searchOptionListAll.splice(i, 1);

      productSection.innerHTML = `<div class="info">
             <p>No hay resultados</p>
          </div>`;
      
      productSection.style.height = '100vh';

      

    } else if (filterPriceInput.value < product.price) {

      searchOptionListAll.splice(i, 1);

      i--;
     
    } 
  }
    
  createArticle(searchOptionListAll);
 
}



const resetOption = () => { 

  productSection.innerHTML = ``;
  createArticle(products);
  filterPriceInput.value = 0;
  filterSelectSeller.value = '';
  filterSearchInput.value = '';


}

const searchOptionName = () => {

  const searchOptionNameList = [];

  productSection.innerHTML = ``;

  for (const product of products) {   
   const nameProductNormalize = product.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
   
   const valueInputNormalize = filterSearchInput.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  

    if (nameProductNormalize.toLocaleUpperCase().includes(valueInputNormalize.toLocaleUpperCase())) {
     
      searchOptionNameList.push(product);
    

    } else if (filterSearchInput.value === '') {
      
    
      createArticle(products);
      return;
    } else {
      
      productSection.innerHTML = `<div class="info">
        <p>No hay resultados</p>
      </div>`;

      productSection.style.height = '100vh';
      
     }

  }
   createArticle(searchOptionNameList);  

}



filterSelectSeller.addEventListener('change', searchOptionSeller);
filterPriceButton.onclick = searchOptionPrice;
filterResetButton.onclick = resetOption;
filterSearchButton.onclick = searchOptionName;

footer.classList.add('flex-container');
const footerMaking = document.createElement('div');
footerMaking.classList.add('flex-container', 'making');
footer.append(footerMaking);
footerMaking.innerHTML = `<span class="flex-container"><strong>Hecho por José Manuel Sánchez</strong><div class="pasttri-logo"><img src="https://res.cloudinary.com/dn6utw1rl/image/upload/v1710357027/pasttri_gstn60.webp" alt="logo pasttri"></div></span>`;


// const searchOptionSeller = (e) => {

//   const searchOptionSellerList = [];

//   productSection.innerHTML = ``;

//   for (const product of products) {

//     if (e.target.value === product.seller) {

//       searchOptionSellerList.push(product);

//     } else if (e.target.value === '') {

//       createArticle(products);
//       return;
//     }
//   }

//   createArticle(searchOptionSellerList);
// }

// const searchOptionPrice = () => {

//   const searchOptionPriceList = [];

//   productSection.innerHTML = ``;

//   for (const product of products) {


//     if (filterPriceInput.value > product.price) {

//       searchOptionPriceList.push(product);
//     }

//   }
//   createArticle(searchOptionPriceList);
// }

// const resetOption = () => {

//   productSection.innerHTML = ``;
//   createArticle(products);
//   filterPriceInput.value = 0;
//   filterSelectSeller.value = '';
//   filterSearchInput.value = '';

// }

// const searchOptionName = () => {

//   const searchOptionNameList = [];

//   productSection.innerHTML = ``;

//   for (const product of products) {
//     const nameProductNormalize = product.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//     const valueInputNormalize = filterSearchInput.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");


//     if (nameProductNormalize.toLocaleUpperCase().includes(valueInputNormalize.toLocaleUpperCase())) {

//       searchOptionNameList.push(product);


//     } else if (filterSearchInput.value === '') {


//       createArticle(products);
//       return;
//     }

//   }
//   createArticle(searchOptionNameList);

// }
