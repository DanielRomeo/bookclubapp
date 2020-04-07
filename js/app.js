'use strict';

// this is the basic functionality of the application:

// declaration of field names:
const createDiv = document.querySelector('.createDiv');
const addABookButton = document.querySelector('#addABookButton');
const displayBooks = document.querySelector('#displayBooks');
const booklist = document.querySelector('#booklist');

// field names:
const imagefield = document.querySelector('#imagefield').value;
const titlefield = document.querySelector('#titlefield').value;
const isbnfield = document.querySelector('#isbnfield').value;
const authorfield = document.querySelector('#authorfield').value;
const ownerfield = document.querySelector('#ownerfield').value;



let randomData = [
	
	{
		"image" : "logo.png",
		"title" : "json book for dummies",
		"author" : "jk. rowling",
		"isbn" : 255,
		"owner" : "sammy"
	},
	{
		"image" : "house.jpg",
		"title" : "ntloh",
		"author" : "jk. rowling",
		"isbn" : 2885,
		"owner" : "kim"
	}
];

// add the above books to local storage first as early data:
localStorage.setItem('books', JSON.stringify(randomData));

/*____________________________________________________________________________*/

class Book{
	constructor(image, title, author, isbn, owner){
		this.image = image;
		this.title = title;
		this.author = author;
		this.isbn = isbn; 
		this.owner = owner;
	}
}

/*____________________________________________________________________________*/

class UI{
	static displayBooks(){

		const StoredBooks = Store.getBooks();

		console.log(StoredBooks);

		const books = StoredBooks;

		console.log(books);

		// loop through books and add...
		books.forEach( (book)=> UI.addBookToList(book) );
	}

	static addBookToList(book){
		// grab table:
		const list = document.querySelector('#book-list');
		const row = document.createElement('tr');

		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href="#"  class="btn btn-danger btn-sm delete"> X </a> </td>
		`;

		list.appendChild(row);
	}

	static deleteBook(el){
		// make sure it has delete:
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
	}

	static showAlert(message, className){
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		// const form = document.querySelector('#book-form');
		var bookform = document.querySelector('#sbook-form');
		container.insertBefore(div, bookform);


		// vanish in 2 seconds"
		setTimeout( () => document.querySelector('alert').remove(), 3000 );

	}

	static clearFields(){
		// document.querySelector('#title').value = '';
		// document.querySelector('#author').value = '';
		// document.querySelector('#isbn').value = '';
	}
}

/*____________________________________________________________________________*/

class Store{
	static getBooks(){

		let books;
		// check if local storage has books first: 
		if(localStorage.getItem('books') === null){
			console.log("aint no books mate!");
			books = [];
		}else{
			books = JSON.parse(localStorage.getItem('books'));
			console.log(books);
			return books;
		}
	}

	/**/
	static addBook(book){
		// get all books and add them to array:
		const books = Store.getBooks();

		books.push(book);

		localStorage.setItem('books', JSON.stringify(books));
		UI.addBookToList(book);
		// UI.displayBooks();
	}

	/**/
	static removeBook(isbn){

		const books = Store.getBooks();

		books.forEach((book, index) => {

			if(book.isbn === isbn){
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}

/*____________________________________________________________________________*/

//as soon as the dom loads: we wanna display the books:
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// lets create a booK
document.querySelector('#book-form').addEventListener('submit', function(e){
	// alert('clicked	xx');
	e.preventDefault();
	
	if(imagefield == " " || titlefield == "" || isbnfield == "" || authorfield == " "|| ownerfield == ""){
		UI.showAlert('Please fill in the entire form', 'danger');
	}else{ // add the book:
		
		// first lets instatiate the function:
		var book = new Book(imagefield, titlefield, isbnfield, authorfield, ownerfield);
		// console.log('reached this');
		// run the function in the class:
		Store.addBook(book);
		// success alert
		UI.showAlert("Successfully added a book", 'success');	
	}
});

// delete books:
document.querySelector('#book-list').addEventListener('click', (e) => {
	//console.log(e.target)
	UI.deleteBook(e.target);
	if (confirm('Are you sure you want to delete this book?')) {
	    UI.showAlert('Book Deleted!', 'warning');
	} else {
	    // Do nothing!
	}
});





