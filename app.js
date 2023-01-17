// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Ron',
        satisfaction: 2,
    },
    {
        name: 'Ginny',
        satisfaction: 3,
    },
    {
        name: 'Fred',
        satisfaction: 1,
    },
    {
        name: 'George',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const friendName = friendInputEl.value;
    // create a new friend object
    const newFriend = {
        name: friendName,
        satisfaction: Math.ceil(Math.random() * 5)
    };
    // push it into the friends state array, passed in as an argument
    friendsEl.push(newFriend);
    // clear out the input element
    friendInputEl.value = '';
    // clear out and display all the friends (use a function here)
    displayFriends(); //!!!!called function that will build below
});

function displayFriends() {
    // // clear out the friends in DOM
    // friendsEl.textContent = '';
    // // for each friend in state . . .
    // for (let friend of friendData) {
    //     // use renderFriend to make a friendEl
    //     const newFriendEl = renderFriend(friend);
    //     // this is a clickable list, so . . .

    
        //     add an event listener to each friend
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             clear out and display the updated friends and mushrooms (hint: displayFriends, displayMushrooms)

        // append the friendEl to the friends list in DOM
    }
}

function displayMushrooms() {
    // clear out the mushroom div

    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
    }
}

displayFriends();
displayMushrooms();
