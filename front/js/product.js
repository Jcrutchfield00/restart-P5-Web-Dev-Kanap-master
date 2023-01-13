console.log("I'm READY!");

const api_url = "http://localhost:3000/api/products/";
console.log(api_url);

var str = window.location.href;
console.log(str);

var url = new URL(str);
console.log(url);

var productId = url.searchParams.get("id");
console.log(productId);


  
    fetch("http://localhost:3000/api/products/" + productId)
    .then((data) => {
        return data.json();
    })
    .then(async function (resultAPI) {
    var data = await resultAPI;
    console.log(data);
        if (data){
            getOneProduct(data);
        }
     
    });
   
    function getOneProduct (data) {
    var productPrice = document.getElementById('price');
    var productTitle = document.getElementById('title');
   var productDescription = document.getElementById('description');
    var productImage = document.createElement('img');
    var parentDiv = document.querySelector('div.item__img');
    parentDiv.appendChild(productImage);
    //below create the color option for dropdown menu
    var select = document.getElementById("colors"); 
    var colorOption = data.colors; 
    console.log(colorOption);
    

    for(i = 0; i < colorOption.length; i++) {
        var colors = colorOption[i];
        var optionElement = document.createElement("option");
        optionElement.textContent = colors;
        optionElement.value = colors;
        select.appendChild(optionElement);
    }
    //above code ends dropdown menu
    productImage.classList.add("productImage");
     productImage.setAttribute('src', data.imageUrl);
    productImage.setAttribute('alt', data.altTxt);
productTitle.innerHTML = data.name;
  productDescription.innerHTML = data.description;
    productPrice.innerHTML = data.price;
};


//below is the code for the cart storage
const cartItems = [] || JSON.parse(localStorage.getItem('cartItems'));
function updateCart(){
    console.log(cartItems);
    const selectPrice = document.getElementById("price").innerText;
     console.log(selectPrice);
     const selectName = document.getElementById("title").innerText;
     console.log(selectName);
     const selectColor = document.getElementById("colors").value;
     console.log(selectColor);
     const selectQuantity = document.getElementById("quantity").value;
     console.log(selectQuantity);
      const selectImg = document.getElementsByClassName("productImage");
     //this is how i got the img to process hopefully it works
      console.log(selectImg[0].src);
      const alt = selectImg[0].alt;
      const src = selectImg[0].src;
      console.log(src);
      console.log(alt);
    if(!cartItems){
        console.log('not working!');
        // cartItems = [];
        var item = {'item' : []};
        console.log(item);
    }else{
        console.log('working');
        const inputValues = Object.assign({ }, getOneProduct, { 
            id: productId, 
            quantity: selectQuantity,
            color: selectColor,
            price: selectPrice,
            title: selectName,
            src: src,
            alt: alt
         });
        // cartItems.push({"id" : productId, "color" : selectColor, "quantity" : selectQuantity, "price" : selectPrice, "title" : selectName, "src" : src ,"alt" : alt}) 
        console.log(inputValues);
        cartItems.push(inputValues);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
};

//addtocartbutton isworking but need to figure out howto get it to the cart page
document.getElementById('addToCart').addEventListener("click", clickAddToCart)
function clickAddToCart(){
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    console.log("Hi there");
    console.log(localStorage);
    const selectPrice = document.getElementById("price").innerText;
     console.log(selectPrice);
     const selectName = document.getElementById("title").innerText;
     console.log(selectName);
     const selectColor = document.getElementById("colors").value;
     console.log(selectColor);
     const selectQuantity = document.getElementById("quantity").value;
     console.log(selectQuantity);
//below try this example

     //below code is supposed to add the quantities together i believe
     //or
     //adds them to the cart
     if (selectQuantity > 0) {    
        // let itemIndex = cartItems.findIndex(item => productId && selectColor);
        // console.log(itemIndex);
        // const cartQuantity = +cartItems.item[`${itemIndex}`].quantity;
        // console.log(cartQuantity);
        // const quantityToAdd = +selectQuantity
        //   cartItems.item[`${itemIndex}`].quantity = `${cartQuantity + quantityToAdd}`
        
    }
   //below code means it doesnt add anything to local storage
    if(selectQuantity === "0"){
        console.log("error!")
         localStorage.removeItem("cartItems");
    } 
    //below code means everything checksout good 
    else{
        console.log('yay!')
       // cartItems.push({"id" : productId, "color" : selectColor, "quantity" : selectQuantity, "price" : selectPrice, "title" : selectName})
     console.log(cartItems);
    //  localStorage.setItem("cartItems", JSON.stringify(cartItems));
         updateCart();
    };
};
