const url = `https://restcountries.com/v3.1/all`;
const loadData = async () => {
	const res = await fetch(url);
	const data = await res.json();
	displayCountries(data);
	console.log(data);
};

loadData();

const displayCountries = (countries) => {
	const countriesHTML = countries.map((country) => displayCountry(country));
	const countriesID = document.getElementById("countries-container");
	countriesID.innerHTML = countriesHTML.join(" ");
};

const displayCountry = (country) => {
	return `
	<div class="country">
	<h2>${country.name.common}</h2>
	<img src="${country.flags.png}">
	</div>
	`;
};
