const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambMenu = document.querySelector('.menu');       // Hamburguer menu in mobile version
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCart');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close')

// Iteration with account menu in desktop version

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    hideElement(shoppingCart);
    hideElement(productDetail);
    // JuanDC solution
    desktopMenu.classList.toggle('hidden');
}

// Iteration with menu in mobile version

hambMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    hideElement(shoppingCart);
    hideElement(productDetail);
    mobileMenu.classList.toggle('hidden');
}

// Iteration with shopping cart icon
cartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    hideElement(desktopMenu);
    hideElement(mobileMenu);
    hideElement(productDetail);
    shoppingCart.classList.toggle('hidden');
}

function openProductDetail() {
    hideElement(desktopMenu);
    hideElement(mobileMenu);
    hideElement(shoppingCart);
    showElement(productDetail);
}

productDetailClose.addEventListener('click', closeProductDetail);

function closeProductDetail() {
    hideElement(productDetail);
}

// Function to apply the class selector 'hidden' to hide the element
// @element: selector required to be hidden
function hideElement(element) {
    const isHiddenElement = element.classList.contains('hidden');

    if (!isHiddenElement) {
        element.classList.add('hidden');
    }
}

// Function to remove the class selector 'hidden' to show the element
// @element: selector required to be showed
function showElement(element) {
    const isHiddenElement = element.classList.contains('hidden');

    if (isHiddenElement) {
        element.classList.remove('hidden');
    }
}

// Iteration with the product list in section main container

const productList = [];
// Adding object elements to the array with information about product
productList.push( {
    name: "Bike",
    price: 399.99,
    imgURL: "https://assets.specialized.com/i/specialized/98122-31_CREO-SL-EXPERT-CARBON-TLTNT-ABLN_FDSQ?bg=rgb(255,255,255)&w=2500&h=1406&fmt=auto"
} );

productList.push( {
    name: "Helmet",
    price: 224.99,
    imgURL: "https://m.media-amazon.com/images/I/6176YCj7ThL._AC_UX679_.jpg"
} );

productList.push( {
    name: "Cadence sensor",
    price: 39.99,
    imgURL: "https://res.garmin.com/en/products/010-12844-00/g/cf-lg-2882d60f-6503-48ca-969b-84b964a3e933.jpg"
} );

productList.push( {
    name: "GPS",
    price: 299.99,
    imgURL: "https://res.garmin.com/en/products/010-02060-00/v/cf-lg-fa1cc038-7c87-4edc-8c66-20db27c83e21.jpg"
} );

renderProducts(productList);

// Function to render the product list in product section
// @products: object array with the list of products to be rendered. {name, price, imgURL}
function renderProducts(products) {
    
    for (const product of products) {
        // <div class="product-card">
        const productCard = document.createElement('div');  // Create an element in HTML document
        productCard.classList.add('product-card');          // Add a class to the element created as productCard
        // <img src="https://..." alt="">
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imgURL)
        productImg.addEventListener('click', openProductDetail);
        //<div class="product-info">
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        /* <div>
            <p>$120,00</p>
            <p>Bike</p>
           </div> */
        const productInfoDiv = document.createElement('div');
        const productInfoDivPrice = document.createElement('p');
        const productInfoDivName = document.createElement('p');
    
        productInfoDivPrice.innerText = "$ " + product.price;
        productInfoDivName.innerText = product.name;
        
        productInfoDiv.appendChild(productInfoDivPrice);
        productInfoDiv.appendChild(productInfoDivName);
        
        /* <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure */
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImgCart = document.createElement('img');
        
        productInfoFigureImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
        
        productInfoFigure.appendChild(productInfoFigureImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

