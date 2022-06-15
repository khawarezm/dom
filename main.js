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

tableContainer = document.getElementById('table');

table = document.createElement('table');
tableContainer.appendChild(table);
table.setAttribute('border','2px solid gray');
table.style.backgroundColor = 'yellow'

tableC = table.createCaption();
tableC.innerHTML = '<p> students table </p>'

tr = document.createElement('tr');
table.appendChild(tr);

th1 = document.createElement('th');
z = document.createTextNode('name');
th1.appendChild(z);
tr.appendChild(th1);

th2 = document.createElement('th');
z1 = document.createTextNode('age');
th2.appendChild(z1);
tr.appendChild(th2);



row1 = document.createElement('tr');
table.appendChild(row1)

data1 = document.createElement('td');
data1T = document.createTextNode('eslam');
data1.appendChild(data1T);
row1.appendChild(data1);

data2 = document.createElement('td');
data2T = document.createTextNode(31);
data2.appendChild(data2T);
row1.appendChild(data2);

row2 = document.createElement('tr');
table.appendChild(row2)

data1 = document.createElement('td');
data1tt = document.createTextNode('alaa');
data1.appendChild(data1tt)
row2.appendChild(data1);

data2 = document.createElement('td');
data2tt = document.createTextNode(32);
data2.appendChild(data2tt)
row2.appendChild(data2);

// DOM TABLE 


function generate_table() {
    // creates a <table> element and a <tbody> element
     const tbl = document.createElement("table");
     const tblBody = document.createElement("tbody");
   
     // creating all cells
     for (let i = 0; i < 2; i++) {
       // creates a table row
       const row = document.createElement("tr");
   
       for (let j = 0; j < 2; j++) {
         // Create a <td> element and a text node, make the text
         // node the contents of the <td>, and put the <td> at
         // the end of the table row
         const cell = document.createElement("td");
         const cellText = document.createTextNode("cell in row "+i+", column "+j);
         cell.appendChild(cellText);
         cell.style.textAlign = 'center';
         cell.style.padding = '5px';
         cell.style.border = '2px solid yellow';
         row.appendChild(cell);
       }
   
       // add the row to the end of the table body
       tblBody.appendChild(row);
     }
   
     // put the <tbody> in the <table>
     tbl.appendChild(tblBody);
     // appends <table> into <body>
     document.body.appendChild(tbl);
     // sets the border attribute of tbl to '2'
     tbl.setAttribute("border", "2");
     tbl.style.border = '5px dashed red'
   }
   



