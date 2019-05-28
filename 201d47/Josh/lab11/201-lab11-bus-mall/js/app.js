'use strict';

var img1 = document.getElementById('rand-img1');
var img2 = document.getElementById('rand-img2');
var img3 = document.getElementById('rand-img3');
var allProducts = [];
var lastShown = ['initial', 'place', 'holders'];

function getRandomProductNumber(){
  var randomNumber = Math.floor(Math.random() * allProducts.length);
  return randomNumber;
}
function renderRandomProduct(){
  while(lastShown.length > 6){
    lastShown.shift();
  }

  var firstImage = getRandomProductNumber();
  while(lastShown.includes(firstImage)){
    firstImage = getRandomProductNumber();
  }
  lastShown.push(firstImage);

  var secondImage = getRandomProductNumber();
  while(lastShown.includes(secondImage)){
    secondImage = getRandomProductNumber();
  }
  lastShown.push(secondImage);

  var thirdImage = getRandomProductNumber();
  while(lastShown.includes(thirdImage)){
    thirdImage = getRandomProductNumber();
  }
  lastShown.push(thirdImage);

  img1.src = allProducts[lastShown[3]].picturePath;
//   img1.alt = lastShown[3].description;
  img2.src = allProducts[lastShown[4]].picturePath;
//   img2.alt = lastShown[4].description;
  img3.src = allProducts[lastShown[5]].picturePath;
//   img3.alt = lastShown[5].description;
}

function Product(picturePath, description){

  this.picturePath = picturePath;
  this.description = description;
  allProducts.push(this);
}



new Product('img/bag.jpg', 'a Bag');
new Product('img/banana.jpg', 'a Banana');
new Product('img/bathroom.jpg', 'a bathroom');
new Product('img/boots.jpg', 'some Boots');
new Product('img/breakfast.jpg', 'ummy Breakfast');
new Product('img/bubblegum.jpg', 'a bubblegum');
new Product('img/chair.jpg', 'a chair');
new Product('img/cthulhu.jpg', 'Heed the Call');
new Product('img/dog-duck.jpg', 'quacky');
new Product('img/dragon.jpg', 'a DRAGON!');
new Product('img/pen.jpg', 'una Pluma, guay.');
new Product('img/pet-sweep.jpg', 'its not a vaccum');
new Product('img/scissors.jpg', 'Dont run with these!');
new Product('img/shark.jpg', 'Insert Jews Theme Here');
new Product('img/sweep.png', 'SWIFFER');
new Product('img/tauntaun.jpg', 'And I thought they smelled bad..');
new Product('img/unicorn.jpg', 'Sparkly');
new Product('img/usb.gif', 'Wriggly');
new Product('img/water-can.jpg', 'Yup');
new Product('img/wine-glass.jpg', 'Salut!');



renderRandomProduct();
var counter = 0;

function clickStopCounter(){
  if(counter <= 25){
    renderRandomProduct();
    counter++;
  }
}

var productPictureReference = document.getElementById('image-container');
productPictureReference.addEventListener('click', clickStopCounter);
