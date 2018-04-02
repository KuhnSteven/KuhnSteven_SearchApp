// JavaScript file intended to create full file paths
// to be utilized with a Library API

// Targeting specific objects from the DOM
const form = document.querySelector("#form");
const input = document.querySelector("#search");
const results = document.querySelector("#results");
const content = '';

form.addEventListener("submit", e => {
	e.preventDefault();
	value = input.value;
	console.log(value);

	// Create url-path for API
	const query = input.value;
	const url = `http://openlibrary.org/search.json?q=${query}`;

// TESTING URL
//const url = 'http://openlibrary.org/search.json?q=Iron-Man';

// FETCH base + query
fetch(url)
	.then(data => data.json())
	.then(data => console.log(data))
	.then(data => displayPage(data))
	.catch(error => console.log('Error Report:', error));
})

// Build results
function displayPage(data) {

	for(var i = 0; i < 101; i++) {
		const { book } = data.docs[i];
		const id = book.cover_edition_key;
		content +=
		`<article> 
		<h1 id="title">${book.title[0]}</h1>
		<h1 id="author">${book.author_name[0]}</h1>
		<h2 id="pubYear">${book.first_publish_year[0]}</h2>
		<h2 id="languages">${book.language[0]}</h2>
		<h2 id="subject">${book.subject[0]}</h2>
		<h2 id="publisher">${book.publisher[0]}</h2>

		<h2 id="cast">${book.person}</h2>
		<h2 id="locations">${book.place}</h2>
		</article>`;
	};
	// Populate the DOM
	results.innerHTML = content;


