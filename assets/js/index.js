const button = document.querySelector("#click-button");
const number = document.querySelector("#number");
const message = document.querySelector("#message");

let counter = number.innerText;

// console.log(typeof counter);

// conver string to a number, and tell the system what base we are using, in this case, 10



// function eg: add(x,y) --> x + y

function addOneToNumber() {
    counter = parseInt(counter, 10);
    counter = counter + 1;
    number.innerText = counter;

    updateMessage();
}

function updateMessage() {

    if (counter >= 10) {
        message.innerText = "Way to go!";
    }

    if (counter >= 20) {
        message.innerText = "You're almost there!";
    }

    if (counter >= 25) {
        message.innerText = "Yes";
    }

    if (counter >= 30) {
        message.innerText = "Wait a minute...";
    }
    
    if (counter >= 35) {
    message.innerText = "Click more...";
    }
}

//  call the function: addOneToNumber();
// function needs a listener to call it
button.addEventListener("click", addOneToNumber)


console.log(counter);



