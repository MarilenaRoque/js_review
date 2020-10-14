function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
}
Book.prototype.info = function(){
        let status = '';
        if (this.read == true ) {
            status = ' was read.';
        } else {
            status = ' not read yet.';
        }
        let info = 'The ' + this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + status;
        return info;
}
let myHobbit = new Book('Hobbit', 'Someone','255', true )

const myBody = document.querySelector('body');
const redP = document.createElement('p');
redP.textContent = myHobbit.info();
redP.style.color = 'red';
myBody.appendChild(redP);

myHobbit.read = false;

const newP = document.createElement('p');
newP.textContent = myHobbit.info();
newP.style.color = 'red';
myBody.appendChild(newP);

