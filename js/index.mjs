// this is the basic functionality of the application:


var createDiv = document.querySelector('.createDiv');
var addABookButton = document.querySelector('#addABookButton');
var showAllBooksButton = document.querySelector('#showAllBooksButton');
var displayBooks = document.querySelector('#displayBooks');
var booklist = document.querySelector('#booklist');

// field names:
var imagefield = document.querySelector('#imagefield');
var titlefield = document.querySelector('#titlefield');
var isbnfield = document.querySelector('#isbnfield');
var authorfield = document.querySelector('#authorfield');
var ownerfield = document.querySelector('#ownerfield');


// toggle add a book:
addABookButton.addEventListener('click', function(e){
	e.preventDefault();
	if(createDiv.style.display == "none"){
		createDiv.style.display = 'block';
		addABookButton.innerHTML = 'Hide Create fields';
	}else{
		createDiv.style.display = 'none';
		addABookButton.innerHTML = 'Add a book';
	}
});

// toggle view books
showAllBooksButton.addEventListener('click', function(e){
	e.preventDefault();
	if(displayBooks.style.display == "none"){
		displayBooks.style.display = 'block';
		showAllBooksButton.innerHTML = `Hide Books' Display`;
	}else{
		displayBooks.style.display = 'none';
		showAllBooksButton.innerHTML = 'Show All Books';
	}
});



