// JavaScript file intended to create full file paths
// to be utilized with Marvel API

const base = 'http(s)://gateway.marvel.com/';
const charName = '';

const container = document.querySelector("#results");

const url = `${base}${charName}`

fetch(url)
// parse data to json
	.then(response => response.json())

	.then(function (data) {
		container.innerHTML = `<p>${data.name}` + ` ${data.description}</p>`;
	})