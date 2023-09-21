// initialize the button

const showMeme = document.querySelector('#showMeme');
const showJoke = document.querySelector('#showJoke');
const showQuote = document.querySelector('#showQuote');
const showRiddle = document.querySelector('#showRiddle');
const revealAnswers = document.querySelector('#revealAnswers');

// useful functions

const clearAll = () => {
    const memeContainer = document.querySelector('#meme-content');
    const jokeContainer = document.querySelector('#joke-content');
    const quoteContainer = document.querySelector('#quote-content');
    const riddleContainer = document.querySelector('#riddle-content');

    memeContainer.innerHTML = '';
    jokeContainer.innerHTML = '';
    quoteContainer.innerHTML = '';
    riddleContainer.innerHTML = '';
}

// Event listener

showMeme.addEventListener('click', () => {
    // value is a string representing image URL
    const len = data[0].length;
    const randomMemeUrl = data[0][Math.floor(Math.random() * len)];
    const container = document.querySelector('#meme-content');
    const newImage = document.createElement('img');
    newImage.setAttribute('src', randomMemeUrl);

    /*
    const isImg = document.querySelector('img');

    if (isImg){
        container.innerHTML = '';
    }
    container.appendChild(newImage);
    */

    clearAll();
    container.appendChild(newImage);
});

showJoke.addEventListener('click', () => {
    // value is a string representing the joke
    len = data[1].length;
    const randomJokeText = data[1][Math.floor(Math.random() * len)];

    // create a paragraph with js

    const newParagraph = document.createElement('p');
    newParagraph.textContent = randomJokeText;

    clearAll();

    document.querySelector('#joke-content').appendChild(newParagraph);
});


showQuote.addEventListener('click', () => {
    // value should be in format : {quote : author: }
    const len = data[2].length;
    const randomQuote = data[2][Math.floor(Math.random() * len)];
    /*

    const paragraph = document.createElement('p');
    paragraph.textContent = '{' + randomQuote.quote + ' : ' + randomQuote.author + '}';

    clearAll();

    document.querySelector('#quote-content').appendChild(paragraph);

    */

    const quote = document.createElement('p');
    const author = document.createElement('p');
    quote.textContent = randomQuote.quote;
    author.textContent = ' - ' + randomQuote.author;

    clearAll();
    const container = document.querySelector('#quote-content');

    container.appendChild(quote);
    container.appendChild(author);
});

showRiddle.addEventListener('click', () => {
    const len = data[3].length;
    const randomRiddle = data[3][Math.floor(Math.random() * len)];

    // show the riddle
    /*
    const riddle = document.createElement('p');
    riddle.textContent = randomRiddle.question;

    clearAll();

    document.querySelector('#riddle-content').appendChild(riddle); */
    
    const {question, answer} = randomRiddle;

    const questionElem = document.createElement('p');
    questionElem.textContent = question;

    const container = document.querySelector('#riddle-content');

    const answerElem = document.createElement('p');
    answerElem.textContent = answer;
    answerElem.setAttribute('id', 'riddle-answer');
    answerElem.hidden = true;

    clearAll();

    container.appendChild(questionElem);
    container.appendChild(answerElem);
});

revealAnswers.addEventListener('click', () => {
    const riddleContainer = document.querySelector('#riddle-content');
    const riddle = riddleContainer.querySelector('p');
    const answer = document.querySelector('#riddle-answer');


    if (riddle && answer.hidden){
        answer.hidden = false;
    } else if (riddle){
        alert('The answer is already revealed');
    } else {
        alert('There is no riddle to reveal the answer too!')
    }
});

// useful data

function getRandomData(type){
    return data[type][rn(data[type].length)];
    // This doesn't work
}


const memes = [
    'img/birusha.jpg',
    'img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
    'img/image4.jpg',
    'img/image5.jpg',
    'img/image6.jpg',
    'img/mike-and-me.jpg'
];

const jokes = [
    'Hello world',
    'I love coding',
    'The kids are brilliant '
];

const quotes = [
    {
        quote: "Program must be written for people to read, and incidentally for machines to execute.",
        author: 'Horold Abelson'
    },
    {
        quote: 'Learn to program with python3',
        author: 'Birusha Ndegeya'
    },
    {
        quote: 'How to think like a computer scientist',
        author: "Jill Smith"
    },
    {
        quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing',
        author: 'Joshua Ben'
    }
];

const riddles = [
    {
        question: "I speak without a mouth and hear without ears, I have body, but I come alive with wind. What am I?",
        answer: 'An echo'
    },
    {
        question: 'I come once in a minute, Twice in a moment, But never in a thousand years.',
        answer: 'm'
    },
    {
        question: 'I always run, but never walk. I have a bed. but I don\'t sleep. I have a mouth. but I don\'t eat'
    },
    {
        question: 'When you put this in a heavy wooden box. the box will become lighter.',
        answer: 'hole'
    },
    {
        question: 'You hear my sound. You feel me when I move. But see me you never will.',
        answer: 'windy'
    },
    {
        question: 'I follow you all day long. But when the night or rain comes. I am all gone.',
        answer: 'shadow'
    },
    {
        question: 'The more I dry, the wetter I get',
        answer: 'towel'
    },
    {
        question: 'I am very heavy, but backwards, i\'am not.',
        answer: 'ton'
    },
    {
        question: 'A cowboy rides into town Friday. He stays two days, then leaves on Saturday. How can this be?',
        answer: 'The horse named Friday'
    },
    {
        question: 'What has to be broken before it can be used?',
        answer: 'egg'
    },
    {
        question: 'Jimmy\'s mother had three children. The first was called April, the second was called May. what was the name of the third?',
        answer: 'Jimmy'
    },
    {
        question: 'What begins with T, ends with T, and has T in it?',
        answer: 'teapot'
    },
    {
        question: 'You can hold it without using your hands or your arms. What is it?',
        answer: 'breath'
    },
    {
        question: 'It\'s so fragile even just saying its name can break it. What is it?',
        answer: 'silence'
    },
    {
        question: 'What building has the most stories?',
        answer: 'library'
    },
    {
        question: 'What tastes better than it smells?',
        answer: 'tongue'
    },
    {
        question: 'What gets broken if it\'s not kept?',
        answer: 'promise'
    }, 
    {
        question: 'It\'s been around for millions of years, but never more than a month old. What is it?',
        answer: 'moon'
    },
    {
        question: 'Feed me and I will live, but give me a drink and I will die. What am I?',
        answer: 'fire'
    },
    {
        question: 'What can you keep after giving it to someone?',
        answer: 'information'
    }, 
    {
        question: 'What has four fingers and one thumb, but isn\'t alive?',
        answer: 'gloves'
    },
    {
        question: 'What can never be put in a saucepan?',
        answer: 'It\'s lid'
    },
    {
        question: 'I live in my little house all alone. There are no windows or doors, and if I want to go out I have to break through the wall. What am I?',
        answer: 'chick/egg'
    },
    {
        question: 'What cannot talk but will always reply when spoken to?',
        answer: 'echo'
    },
    {
        question: 'Three doctors said that Bill was their brother. Bill said he had no brothers. Who was lying?',
        answer: 'Doctors were his sister'
    },
    {
        question: 'The more that there is of this, the less you see. What is it?',
        answer: 'Darkness'
    },
    {
        question: 'I am a box that that holds keys without locks, yet my keys can unlock your deepest senses. What am I?',
        answer: 'piano'
    }, 
    {
        question: 'Two fathers and two sons are in a car, yet there are only three people in the car. How is this possible?',
        answer: 'One is the father, a son is a driver, father of one passanger'
    }, 
    {
        question: 'What has one eye but cannot see?',
        answer: 'needle'
    }, 
    {
        question: 'I have seas with no waters, coasts with no sand, towns and mountains with no land. What am I?',
        answer: 'a map'
    }, 
    {
        question: 'It belongs to you, but other people use it more than you do. what is it?',
        answer: 'name'
    }
];


// trash function

const rn = (len) => {
    return Math.floor(Math.random() * len);
    // This doesn't work I do not know why! Try to figure out is why to put out it the spaggethi function
}

const data = [
    memes,
    jokes,
    quotes,
    riddles
];
