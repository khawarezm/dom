document.write('you re welcome to github world');

// select the element and store it in a variable single selector or multi-elements
itemOne = document.getElementById('one');

// querySelector() only returns the first match
itemHotClass = document.querySelector('li.hot');

// change the value of the class attribute
itemOne.className = 'cool';


// select one or more elements == nodeList 
hotItems = document.getElementsByClassName('hot');

if(hotItems.length > 2){
    var el = hotItems[2];
    el.className = 'cool';

}
listItems = document.getElementsByTagName('li');

if(listItems.length > 0){
    var el = listItems[0];
    el.className = 'cool';

}

// returns a nodeList

itemsHotClass = document.querySelectorAll('li.hot');
itemsHotClass[1].className = 'cool'
 // looping through a nodelist
 if(itemsHotClass.length > 0) // if it contains items 
 {
     for (let i = 0; i < itemsHotClass.length; i++) {
         itemsHotClass[i].className = 'cool';
         
     }
 }



 /* DOM MANIPULATION 
 innerHtml == textContent to access child elemnts and text content
 add nodes to dom tree and remove nodes from it 
  1. createElements()
 2. createTextNode()
 3. appendChild()
  4. remmoveChild()
  
  to access or update attribute value
  className --  id  --  hasAttribute() to check if its exists
  getAttribute() --- setAttribute -- removeAttribute */

  // string building 
  var firstItemContent = itemOne.innerHTML;

  itemOne.innerHTML = '<a href="http://google.jo"' + firstItemContent + '</a>';
// dom manipulation to create element :::: 
  // step 1:  create a new element 
  var newElement = document.createElement('li');

  // step 2:  create a text node 
  var newText = document.createTextNode('Quinoa');

  // step 3: attach text node to the element
  newElement.appendChild(newText);

  // step 4: find the position where the new element should be added
  var position = document.getElementsByTagName('ul')[0];

  // step5 : insert element into its position 
  position.appendChild(newElement);



// dom manipulation remove 
// step 1: STORE THE ELEMENT TO BE REMOVED IN A VARIABLE 
  var removeElement = document.getElementsByTagName('li')[3];
  
// step 2: STORE THE PARENT OF THAT ELEMENT IN A VARIABLE 
   var containerElement = removeElement.parentElement;

// step 3: REMOVE THE ELEMENT FROM ITS CONTAINING ELEMENT 
   containerElement.removeChild(removeElement);



if(itemOne.hasAttribute('class')){
    var attr = itemOne.getAttribute('class');
    var el = document.getElementById('scriptResults');
    el.innerHTML ='<p> The first item has a class name: ' + attr + '</p>';
}

// Creating attributes and changing their values 
var fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class','hot');

itemOne.className = 'complete';


// removing attributes
if (itemOne.hasAttribute('class')) {
    itemOne.removeAttribute('class');
    
}
