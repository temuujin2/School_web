// img_btn.addEventListener('click', getRandomImg);

// function getRandomImg() {
//     fetch('https://random.dog/woof.json')
//         .then(res => res.json())
//         .then(data => {
//             picture_result.innerHTML = `<img src="${data.url}"/>`;
//         });
// }

// img_btn1.addEventListener('click', getRandomImg1);




var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-container");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// ============================== Shopping cart heseg ============================================
const products = [{
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
            rate: 2.1,
            count: 430,
        },
    },
];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))


let cart = [];
let cartTotal = 0;
const cartDom = document.querySelector(".cart");
const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');
const countItem = document.getElementById("count");

addtocartbtnDom.forEach(addtocartbtnDom => {
    addtocartbtnDom.addEventListener("click", () => {

        const productDom = addtocartbtnDom.parentNode.parentNode;
        const product = {
            img: productDom.querySelector(".product-img").getAttribute("src"),
            name: productDom.querySelector(".product-name").innerText,
            price: productDom.querySelector(".product-price").innerText,
            quantity: 1
        };

        const IsinCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;
        if (IsinCart === false) {
            cartDom.insertAdjacentHTML("beforeend", `
            <div class="flex_row card cart-items animated">
              <div class="card-top">
                  <img src="${product.img}" alt="${product.name}" style="max-width: 50px;"/>
              </div>
              <div class="card-top text-items">
                  <p class="text-info cart_item_name">${product.name}</p>
            
                  <p class="text-success cart_item_price">${product.price}</p>
              </div>
              <div class="card-top">
                  <button class="btn badge badge-secondary" type="button" data-action="increase-item">&plus;
              </div>
              <div class="card-top">
                <p class="text-success cart_item_quantity">${product.quantity}</p>
              </div>
              <div class="card-top">
                <button class="btn badge badge-info" type="button" data-action="decrease-item">&minus;
              </div>
              <div class="card-top">
                <button class="btn badge badge-cancel" type="button" data-action="remove-item">&times;
              </div>
            </div> `);

            if (document.querySelector('.cart-footer') === null) {
                cartDom.insertAdjacentHTML("afterend", `
            <div class="price-box card cart-footer animated ">
              <div class="card-top">

                <button class="btn badge-danger" type="button" data-action="clear-cart">
                <i class="fa-regular fa-square-minus"></i> Сагс хоослох
              </div>
              <div class="card-top">
                <button class="btn badge-dark" type="button" data-action="check-out">
                <i class="fa-solid fa-credit-card"></i> Төлөх нийт дүн <span class="pay"></span> 

              </div>
            </div>`);
            }

            addtocartbtnDom.innerText = "Сагсанд орсон";
            addtocartbtnDom.disabled = true;
            cart.push(product);

            const cartItemsDom = cartDom.querySelectorAll(".cart-items");
            cartItemsDom.forEach(cartItemDom => {



                countItem.textContent = cartItemsDom.length;
                console.log(countItem);




                if (cartItemDom.querySelector(".cart_item_name").innerText === product.name) {

                    cartTotal += parseInt(cartItemDom.querySelector(".cart_item_quantity").innerText) *
                        parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
                    document.querySelector('.pay').innerText = cartTotal + " Төг";


                    cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
                        cart.forEach(cartItem => {
                            if (cartItem.name === product.name) {
                                cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
                                cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                                    parseInt(cartItem.price) + " Төг";
                                cartTotal += parseInt(cartItem.price)
                                document.querySelector('.pay').innerText = cartTotal + " Төг";
                            }
                        });
                    });


                    cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
                        cart.forEach(cartItem => {
                            if (cartItem.name === product.name) {
                                if (cartItem.quantity > 1) {
                                    cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
                                    cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                                        parseInt(cartItem.price) + " Төг";
                                    cartTotal -= parseInt(cartItem.price)
                                    document.querySelector('.pay').innerText = cartTotal + " Төг";
                                }
                            }
                        });
                    });


                    cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => {
                        cart.forEach(cartItem => {
                            if (cartItem.name === product.name) {
                                cartTotal -= parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
                                document.querySelector('.pay').innerText = cartTotal + " Төг ";
                                countItem.textContent -= cartItemsDom.length % 3 != -1;
                                cartItemDom.remove();




                                cart = cart.filter(cartItem => cartItem.name !== product.name);
                                addtocartbtnDom.innerText = "Сагсанд нэмэх";
                                addtocartbtnDom.disabled = false;
                            }
                            if (cart.length < 1) {
                                document.querySelector('.cart-footer').remove();


                            }

                        });
                    });

                    document.querySelector('[data-action="clear-cart"]').addEventListener("click", () => {

                        cartItemDom.remove();
                        cart = [];
                        cartTotal = 0;

                        if (document.querySelector('.cart-footer') !== null) {
                            document.querySelector('.cart-footer').remove();
                            countItem.textContent = cartItemsDom.length - 1;



                        }
                        addtocartbtnDom.innerText = "Сагсанд нэмэх";
                        addtocartbtnDom.disabled = false;
                    });

                    document.querySelector('[data-action="check-out"]').addEventListener("click", () => {
                        if (document.getElementById('paypal-form') === null) {
                            checkOut();
                        }
                    });
                }
            });
        }
    });
});

function animateImg(img) {
    img.classList.add("animated", "shake");
}

function normalImg(img) {
    img.classList.remove("animated", "shake");
}