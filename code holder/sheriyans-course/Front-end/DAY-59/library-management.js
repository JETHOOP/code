class Library {
    constructor() {
        this.books = ["Duggo the legend"];
    }
    addbook(book) {
        this.books.push(book)
    }
    listallbooks() {
        this.books.forEach(function (book) {
            console.log(book);
        })
    }
}
class book{
constructor(name,isbn,price,author){
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
}
info(){
    console.log(
        `this book named ${this.name} has written by ${this.author} and available on amazon at price of${this.price}`
    )
}
}
let jhansiLibrary = new Library
let book1 = new book("Duggo the legend", 123456789, 500, "Jhansi")
let book2 = new book("The Alchemist", 987654321, 300, "Paulo Coelho")
console.log(jhansiLibrary.books);