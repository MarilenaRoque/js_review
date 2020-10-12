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

liElement.textContent = "New Item of the List"

myUl.appendChild(liElement);