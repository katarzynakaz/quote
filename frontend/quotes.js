const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("new-quote");
const url = "http://localhost:3000/";

// generate and show to user
const generateQuote = async () => {
//   const selectedQuote = pickFromArray(quotes);
    const response = await fetch (url)
    const selectedQuote = await response.json();
    quote.innerHTML = selectedQuote.quote;
    author.innerHTML = selectedQuote.author;
  // change greeting
  document.getElementById("greeting").innerHTML = "Your quote is:";
  document.getElementById("greeting").style = "size: 1rem";
};

//show to user on click of new quote
button.addEventListener("click", generateQuote);
