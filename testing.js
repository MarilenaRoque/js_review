function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
                    let status = '';
                    if (read === true ) {
                        status = ' was read.';
                    } else {
                        status = ' not read yet.';
                    }
                    let info = 'The ' + this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + status;
                    return info;
    }
}