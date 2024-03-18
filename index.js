// HTML element variables
let message = document.getElementById("randomQuote");
let btn = document.getElementById("btn");



//Array of movies in order to match the characters and movie quotes below.
const movie = [
    "Star Wars", 
    "Titanic", 
    "E.T. the Extra-Terrestrial",
    "Finding Nemo",
    "Back to the Future",
    "Babe",
    "Toy Story",
    "The Sandlot",
    "The Terminator",
    "Top Gun"
]
//Array of characters in order to match the movie and movie quotes above and below.
const character = [
    "Obi-Wan Kenobi", 
    "Jack Dawson", 
    "E.T.",
    "Dory",
    "Doc",
    "Arthur Hoggett",
    "Buzz Lightyear",
    "Hamilton 'Ham' Porter",
    "Terminator",
    "Maverick"
    ]
//Array of movie quotes in order to match the characters and movies above.
const movieQuote = [
    "May the Force be with you.", 
    "I'm the king of the world!",
    "E.T. phone home.",
    "Just keep swimming.",
    "Roads?  Where we,re going we don't need roads.",
    "That'll do, pig.",
    "To infinity and beyond!",
    "You're killing me, Smalls.",
    "I'll be back.",
    "I feel the need - the need for speed!"
    ]

// function to create a random number based on the array length and return the random indexes for each into a console.log
function randomGenerator(movie, character, movieQuote) {
    let movieChoice = movie[(Math.floor(Math.random()*movie.length))];
    let characterChoice = character[(Math.floor(Math.random()*character.length))];
    let movieQuoteChoice = movieQuote[(Math.floor(Math.random()*movieQuote.length))];


    message.innerHTML = "Perhaps the movie " + movieChoice +", should have had the quote: "
        + movieQuoteChoice + " with the character " + characterChoice + " saying the line.";
};

btn.addEventListener('click', (e) => {
    randomGenerator(movie, character, movieQuote)
});





