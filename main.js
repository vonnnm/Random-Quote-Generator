//The quotes, all that's needed for now is just this,
// I would import a txt file but I don't know at all how to.

const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Be yourself; everyone else is already taken.",
    "Life is what happens when you're busy making other plans.",
    "The only way to do great work is to love what you do.",
    "Happiness depends upon ourselves.",
    "The best way to predict your future is to create it.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "You miss 100% of the shots you don’t take.",
    "Believe you can and you're halfway there.",
    "The journey of a thousand miles begins with a single step.",
    "In the middle of every difficulty lies opportunity.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Everything you can imagine is real.",
    "You are never too old to set another goal or to dream a new dream.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Dream big and dare to fail.",
    "Turn your wounds into wisdom.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don’t count the days, make the days count.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Believe in yourself and all that you are.",
    "Start where you are. Use what you have. Do what you can.",
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "Limit your always and your nevers.",
    "Do what you can, with what you have, where you are.",
    "Nothing will work unless you do."
];


//The actual function, all this does will
//  select a random selection from the array.

function quoteRandom() {
    return quotes[Math.floor(Math.random()*quotes.length)]
}