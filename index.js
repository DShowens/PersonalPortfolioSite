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
    "Top Gun",
    "Karate Kid",
    "The Lion King",
    "Ratatouille",
    "The Jungle Book",
    "Winnie the Pooh",
    "Lilo & Stitch",
    "The Incredibles",
    "Megamind",
    "Frozen",
    "The Next Karate Kid"
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
    "Maverick",
    "Miyagi",
    "Rafiki",
    "Gusteau",
    "Bagheera",
    "Pooh",
    "Lilo",
    "Edna",
    "Megamind",
    "Anna",
    "Miyagi"
    ]
//Array of movie quotes in order to match the characters and movies above.
const movieQuote = [
    `\"May the Force be with you.\"`, 
    `\"I'm the king of the world!\"`,
    `\"E.T. phone home.\"`,
    `\"Just keep swimming.\"`,
    `\"Roads?  Where we,re going we don't need roads.\"`,
    `\"That'll do, pig.\"`,
    `\"To infinity and beyond!\"`,
    `\"You're killing me, Smalls.\"`,
    `\"I'll be back.\"`,
    `\"I feel the need - the need for speed!\"`,
    `\"There is no such thing as a bad student, only bad teacher.  Student does as teacher says.\"`,
    `\"Oh yes, the past can hurt.  But, you can either run from it or, learn from it.\"`,
    `\"If you focus on what you left behind you will never see what lies ahead.\"`,
    `\"Things will work better in the morning.\"`,
    `\"It's a good thing I noticed it.  Otherwise, I wouldn't have seen it.\"`,
    `\"Ohana means family.  Family means, no one gets left behind.\"`,
    `\"Never look back, darling.  It distracts from the now.\"`,
    `\"Destiny is not a path given to us but a path we choose ourselves.\"`,
    `\"True love is putting someone else before you.\"`,
    `\"Ambition without knowledge is like a boat on dry land.\"`
    ]

// function to create a random number based on the array length and return the random indexes for each into a console.log
function randomGenerator(movie, character, movieQuote) {

    let randomMovie = (Math.floor(Math.random()*movie.length));
    let randomCharacter = (Math.floor(Math.random()*character.length));
    let randomQuote = (Math.floor(Math.random()*movieQuote.length))

    let movieChoice = movie[randomMovie];
    let characterChoice = character[randomCharacter];
    let movieQuoteChoice = movieQuote[randomQuote];


    message.innerHTML = `Perhaps the movie ${movieChoice}, should have had the quote: `
    + movieQuoteChoice +
    ` with the character, ${characterChoice} (from ${movie[randomCharacter]}), saying the line.`;
};

btn.addEventListener('click', (e) => {
    randomGenerator(movie, character, movieQuote)
});





