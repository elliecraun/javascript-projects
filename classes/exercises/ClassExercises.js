// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pageNumber, timesCheckedOut, hasBeenDiscarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pageNumber = pageNumber;
        this.timesCheckedOut = timesCheckedOut;
        this.hasBeenDiscarded = hasBeenDiscarded;
    }   
    checkout(uses=1){
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:


class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pageNumber, timesCheckedOut, hasBeenDiscarded){
        super(title, author, copyrightDate, isbn, pageNumber, timesCheckedOut, hasBeenDiscarded);
    }
    dispose(currentYear){
        if (currentYear - this.copyrightDate > 5){
            this.hasBeenDiscarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pageNumber, timesCheckedOut, hasBeenDiscarded){
        super(title, author, copyrightDate, isbn, pageNumber, timesCheckedOut, hasBeenDiscarded);
    }
    dispose(){
        if (this.timesCheckedOut > 100){
            this.hasBeenDiscarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let secretManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
let classicNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');



// Code exercises 4 & 5 here:

secretManual.dispose(2024);
console.log(secretManual);

classicNovel.checkout(5);
classicNovel.dispose();
console.log(classicNovel);