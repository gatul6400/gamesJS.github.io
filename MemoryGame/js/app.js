document.addEventListener('DOMContentLoaded', () => {

    // Food Items Array
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    let resultDisplay = document.querySelector('#result');
    resultDisplay.textContent = 0;
    let cardChoosen = [];
    let cardChoosenId = [];
    let cardsWon = [];
    let score = 0;
 
    // Create our board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }


    // Check for match

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardChoosenId[0];
        const optionTwoId = cardChoosenId[1];
        if(cardChoosen[0] === cardChoosen[1]){
            alert('you found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardChoosen);
            score += 5;
        }
        else{
            alert('Better luck next time !!!');
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            score -= 2;
        }
        cardChoosen = [];
        cardChoosenId = [];
        resultDisplay.textContent = score;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "You won the game Congratulation...";
        }
    }

     

    // Flip your card
    function flipcard(){
        var cardId = this.getAttribute('data-id');
        cardChoosen.push(cardArray[cardId].name);
        cardChoosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardChoosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});