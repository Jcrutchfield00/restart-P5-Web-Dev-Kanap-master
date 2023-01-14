function getCartStorage() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (!cartItems) {
        var cartItems = [];
        console.log('nothing in cart');
    } else {

        console.log(cartItems);
        //below maybe atleast i know cartItems[i].color works in console
        for (i = 0; i < cartItems.length; i++) {
            // var newArticle = document.createElement("article");
            var productColor = cartItems[i].color;
            console.log(productColor);
            var productQuantity = cartItems[i].quantity;
            console.log(productQuantity);
            var productId = cartItems[i].id;
            console.log(productId);
            var productName = cartItems[i].title;
            console.log(productName);
            var productPrice = cartItems[i].price;
            console.log(productPrice);
            var productImg = cartItems[i].src;
            console.log(productImg);
            var productImgAlt = cartItems[i].alt;
            console.log(productImgAlt);
            //below trying to add total quantity 
            const totalQuantity = document.getElementById("totalQuantity");
            totalQuantity.innerHTML = +productQuantity;
            //below trying to add total price
            const totalPrice = document.getElementById("totalPrice");
            totalPrice.innerHTML = productPrice;

            var newArticle = document.createElement("article");
            //below is img block
            var cartItemImgDiv = document.createElement("div");
            var newImage = document.createElement("img");
            var cartItemsID = document.getElementById("cart__items");
            newArticle.classList.add("cart__item");
            newArticle.setAttribute("data-id", productId);
            console.log(productId);
            newArticle.setAttribute("data-color", productColor);
            console.log(productColor);
            cartItemImgDiv.classList.add("cart__item__img");
            cartItemsID.appendChild(newArticle);
            newArticle.appendChild(cartItemImgDiv);
            cartItemImgDiv.appendChild(newImage);
            newImage.setAttribute("src", productImg);
            newImage.setAttribute("alt", productImgAlt);

            //below is the code for cart item content block 1
            var cartItemContentDiv = document.createElement("div");
            var cartItemContentDescription = document.createElement("div");
            var newHeading = document.createElement("h2");
            var newParagraphColor = document.createElement("p");
            var newParagraphPrice = document.createElement("p");
            cartItemContentDiv.classList.add("cart__item__content");
            cartItemContentDescription.classList.add("cart__item__content__description");

            newArticle.appendChild(cartItemContentDiv);
            cartItemContentDiv.appendChild(cartItemContentDescription);
            cartItemContentDescription.appendChild(newHeading);
            cartItemContentDescription.appendChild(newParagraphColor);
            cartItemContentDescription.appendChild(newParagraphPrice);
            newHeading.innerHTML = productName;
            newParagraphColor.innerHTML = productColor;
            newParagraphPrice.innerHTML = "€" + productPrice;

            //below is the code for the cart item content settings block 2

            var cartItemContentSettings = document.createElement("div");
            var cartItemContentSettingsQuantity = document.createElement("div");
            var newParagraphQty = document.createElement("p");

            cartItemContentSettings.classList.add("cart__item__content__settings");
            cartItemContentSettingsQuantity.classList.add("cart__item__content__settings__quantity");

            cartItemContentDiv.appendChild(cartItemContentSettings);
            cartItemContentSettings.appendChild(cartItemContentSettingsQuantity);
            cartItemContentSettingsQuantity.appendChild(newParagraphQty);
            newParagraphQty.innerHTML = "Quantity:";

            var input = document.createElement("input");
            cartItemContentSettingsQuantity.appendChild(input);
            cartItemContentSettingsQuantity.appendChild(input);
            input.setAttribute("type", "number");
            input.classList.add("itemQuantity");
            input.setAttribute("name", "itemQuantity");
            input.min = 1;
            input.max = 100;
            input.setAttribute("value", productQuantity);

            //below is the code for the fourth block of section id=cart__items
            var cartItemContentSettingsDelete = document.createElement("div");
            var newParagraphDelete = document.createElement("p");
            cartItemContentSettingsDelete.classList.add("cart__item__content__settings__delete");
            newParagraphDelete.classList.add("deleteItem");
            cartItemContentSettings.appendChild(cartItemContentSettingsDelete);
            cartItemContentSettingsDelete.appendChild(newParagraphDelete);

            newParagraphDelete.innerHTML = "DELETE";
            newParagraphDelete.addEventListener("click", clickHandler);
        };
    };
};

function updateCart() {

};
function clickHandler(event) {
//eventlistener function needs to be written
console.log("deleted");
};

getCartStorage();

//below start on input fields since i cant figure out qty 9/29 
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");
const order = document.getElementById("order");
const orderForm = document.getElementsByClassName("cart__order__form");
order.addEventListener("click", ($event) => {
    $event.preventDefault();
    console.log("Hi there, " + firstName.value + " " + lastName.value + " " + "your order was submitted!");
    // orderForm.reset();
});
const firstNameErrorMessage = document.getElementById("firstNameErrorMsg");
//firstNameErrorMessage.addEventListener("click","error message");
firstNameErrorMessage.innerHTML = "required";
const lastNameErrorMessage = document.getElementById("lastNameErrorMsg");
//firstNameErrorMessage.addEventListener("click","error message");
lastNameErrorMessage.innerHTML = "required";
const addressErrorMsg = document.getElementById("addressErrorMsg");
addressErrorMsg.innerHTML = "required";
const emailErrorMsg = document.getElementById("emailErrorMsg");
emailErrorMsg.innerHTML = "required";
const cityErrorMsg = document.getElementById("cityErrorMsg");
cityErrorMsg.innerHTML = "required";
//below a possible choise for the submit button but currently not doing anything
// order.addEventListener("submit", function(event) {
//     event.preventDefault();
//     //need this submit button to pop up a new conifrmation window/html page
//     //window.alert("Hi there, " + firstName.value + " " + lastName.value + " " + "your order was submitted!");
//     console.log("Hi there, " + firstName.value + " " + lastName.value + " " + "your order was submitted!");
//     // orderForm.reset();
// });