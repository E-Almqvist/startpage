// Script to display random quotes

var quoteText = document.getElementById("quote");
var quoteAuth = document.getElementById("author");

const url = "https://type.fit/api/quotes";
// const url = "http://quotes.stormconsultancy.co.uk/random.json";

const getNewQuote = async () => {
	const response = await fetch(url);

	const allQuotes = await response.json();
	const idx = Math.floor( Math.random() * allQuotes.length );

	const quote = allQuotes[idx].text;

	const auth = allQuotes[idx].author || "Anon";

	quoteText.innerHTML = "\"" + quote + "\"";
	quoteAuth.innerHTML = "-- " + auth;
}

getNewQuote();
