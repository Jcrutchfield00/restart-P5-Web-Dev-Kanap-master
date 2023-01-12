console.log("I'm READY!");
//fetch array from localhost
fetch("http://localhost:3000/api/products/")
  .then((data) => {
    return data.json();
  })
  .then((products) => {
    insertProducts(products);
  });

// function that pulls the data to set it on the page
function insertProducts(products){
    console.log(products);
    for (let i = 0; i < products.length; i++){
        const product =products[i];
        console.log(product);
        console.log(product._id);
        let aTag = document.createElement('a');
       // aTag.setAttribute = ("href", "/front/html/product.html?id=" + product._id);
         let newArticle = document.createElement('article');
    let newImage = document.createElement('img');
    let newHeading = document.createElement('h3');
    let newParagraph = document.createElement('p');
    newHeading.textContent = product.name;
    newParagraph.textContent = product.description;
    newArticle.appendChild(newImage);
    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);
    newHeading.classList.add('productName');
     newParagraph.classList.add('productDescription');
 

    const items = document.querySelector('section');
    
    items.appendChild(aTag);
aTag.appendChild(newArticle);
aTag.setAttribute("href","./product.html?id=" + product._id)
newImage.setAttribute("src", product.imageUrl);
    newImage.setAttribute("alt", product.altTxt);
    }
};
//ok so i am working yay!
