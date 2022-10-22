const api = "https://api.quotable.io/random";

// Grabbing Quote and Author elements
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

// Attaching Event Listener to Button

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `- ${data.author}`;
        })
        .catch((err) => {
            console.error('Error:', err);
        });
}
