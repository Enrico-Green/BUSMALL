'use strict';

/* 
select three random photos out of 10 from the image directory and display them side-by-side-by-side
the products to be showcased on the BUSMALL site will be refered to as "items" in this script.

xx where are the imaged stored = variable  with path to image 
xx array of 10 images 
xx an array of clicks

counter for number of clicks
constructor function for bus-mall products
instead create an array of product objects 
- [{item}, {item}]
-bus-mall object: {image_url: 'xxxxxx.jpg, clicks: 0}]
-name our items objects something descriptive 

- listen for an event (click)
 - while (votes < 10)
 - randomly select an image (3 images)
 -change the DOM
 -random number generator - to pick the items's photo
 -increment the number of clicks on the clicked item
- store the index of the last item on the page; track which item is clicked on by referencing the items index and saving it.


limit the votes to 10

 an array of click events that increment everytime a specific item is clicked.

 */

 //global var
var  clickCounter = 0;
var allItems = [];

//constructors

var ItemImage = function(url, name ) {
    this.imageURL = url;
    this.name = name;
    this.clicks = 0;

allItems.push(this);
};

//instansiate ItemImage objects

new ItemImage('./img/bag.jpg', 'R2D2 Bag' );
new ItemImage('./img/banana.jpg', 'Bananna Slicer');
new ItemImage('./img/bathroom.jpg', 'Toilet Tablet Stand' );
new ItemImage('./img/boots.jpg', 'Open-toe Rain Boots' );
new ItemImage('./img/breakfast.jpg', 'Breakfast Maker' );
new ItemImage('./img/bubblegum.jpg', 'Meatball Gum' );
new ItemImage('./img/chair.jpg', 'Uncomfortable Chair' );
new ItemImage('./img/cthulhu.jpg', 'Cthulhu Monster' );
new ItemImage('./img/dog-duck.jpg', 'Duckbill Dog Leash' );
new ItemImage('./img/dragon.jpg', 'Canned Dragon Meat' );
new ItemImage('./img/pen.jpg', 'Eating Utinsel Pens' );
new ItemImage('./img/pet-sweep.jpg', 'Pet Feet Sweepers' );
new ItemImage('./img/scissors.jpg', 'Pizza Scissors' );
new ItemImage('./img/shark.jpg', 'Shark Sleeping Bag' );
new ItemImage('./img/sweep.jpg', 'Baby Onsie Sweeper' );
new ItemImage('./img/tauntaun.jpg', 'Tauntaun Sleeping Bag' );
new ItemImage('./img/unicorn.jpg', 'Canned Unicorn Meat' );
new ItemImage('./img/usb.gif', 'USB octopus' );
new ItemImage('./img/water-can.jpg', 'Weird Water Can' );
new ItemImage('./img/wine-glass.jpg', 'Weird Wine Glass' );


console.log(allItems);

 
var lefItemImage =  document.getElementById('left item')git
var middleItemImage =  document.getElementById('middle item')
var rightItemImage =  document.getElementById('right item')

leftItemImage.addEventListener('left item')
middleItemImage.addEventListener('middle item')
rightItemImage.addEventListener('right item')

// initialize the page

function handleClickOnRightItem(event){
    //increment right item
    clickCounter++;

    //stop click after 10 clciks
    if(clickCounter > 9) {
        leftItemDiv.removeEventListener('click', handleClickOnLeftItem);
        middleItemDiv.removeEventListener('click', handleClickOnMiddleItem); v 
        righttItemDiv.removeEventListener('click', handleClickOnRightItem);
        console.log('reached max ammount of clicks');
    };

};

var rightItemIndex =  Math.floor(Math.random() * allItems.length);
var middleItemIndex =  Math.floor(Math.random() * allItems.length);
var leftItemIndex =  Math.floor(Math.random() * allItems.length);

function handleClickOnLeftItem(event){
    clickCounter++;
    //increment left Item
  
};

function handleClickOnMiddleItem(event){
    clickCounter++;
    //increment middle Item

};

function handleClickOnRighttItem(event){
    clickCounter++;
    //increment right Item

};

 //call whats going to run on the page