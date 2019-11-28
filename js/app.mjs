import 'index.mjs';

alert("hey");

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

	static showAlert(message, classname){
		let div = document.createElement('div');
		div.className = `alert alert-${classname}`;
		div.appendChild(document.createTextNode(message)); 

		var bookform = document.querySelector('#book-form');
		var creatediv = document.querySelector('.createDiv');

		creatediv.insertBefore(div, creatediv);
	}

}

/*____________________________________________________________________________*/

class Store{

	static getBooks(){

		if(localStorage.getItem('books') == null){
			return books = [];
		}else{
			return JSON.parse(localStorage.getItem('books'));
		}
	}

	static addBook(book){

		// first we need to get the books: so we run getBooks:
		var books = getBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
		showAlert('Your book has been added', 'success');
	}

	static deleteBook(){
		//
	}
}

/*____________________________________________________________________________*/

// lets create a booK
document.querySelector('#book-form').addEventListener('submit', function(e){
	e.preventDefault();
	
	if(imagefield == "" || titlefield == "" || isbnfield == "" || authorfield = ""|| ownerfield == ""){
		UI.showAlert('Please fill in the entire form', 'danger');
	}else{ // add the book:
		
		// first lets instatiate the function:
		var book = new Book(imagefield, titlefield, isbnfield, authorfield, ownerfield;

		// run the function in the class:
		Store.addBook(book);	
	}
});



