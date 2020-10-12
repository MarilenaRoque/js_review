let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/racoon.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
      }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

const myBody = document.querySelector('body');

myBody.onclick = function() {
    myBody.classList.toggle('newstyle');
}

const myUl = document.querySelector ('ul');
const liElement = document.createElement('li');

liElement.textContent = "New Item of the List";

myUl.appendChild(liElement);

// Create Red paragraph
// EXERCISE 1
const redP = document.createElement('p');
redP.textContent = "Hey, I am red!";
redP.style.color = 'red';
myBody.insertBefore(redP,myButton)


// Create Blue h3
// EXERCISE 2
const bluH3 = document.createElement('h3');
bluH3.textContent = "I am a blue h3!";
bluH3.style.color = 'blue';
myBody.insertBefore(bluH3,myButton)


// Create a div with a black border and pink backgroud
// EXERCISE 3
const newDiv = document.createElement('div');
newDiv.style.cssText = 'border: solid 1px black; background:pink;';


// Create a h1 and a paragraph inside the new Div
// EXERCISE 4
newDiv.innerHTML = "<h1>I’m in a div</h1><p>ME TOO!</p>"

myBody.insertBefore(newDiv,myButton);



