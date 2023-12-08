const lyrics = 'Tmi bondu kala pakhi. ami jeno ki .bosonto kale tomay bolte paki';
// console.log(lyrics);
const parts = lyrics.split(' ')
console.log(parts);
const sentence = lyrics.split('.')
console.log(sentence);
const word = lyrics.split('')
console.log(word);

const parsial = lyrics.slice(5, 8)
console.log(parsial);

const parsial2 = lyrics.substring(5, 8)
console.log(parsial2);


const lines =[
    'Tmi bondu kala pakhi',
    ' ami jeno ki ',
    'bosonto kale tomay bolte paki'
]; 
const newlines = lines.join('. ')
console.log(newlines);