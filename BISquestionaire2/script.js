let btn = document.querySelector('button');
let output = document.querySelector('h4');

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function arrayOfNumbers(start, end) {
    let array = [];

    //let i = start;
    for(let i = start; i <= end; i++)
    {
        array.push(i);
    }
    return array;
}

let numberArray = arrayOfNumbers(1,5000);

btn.addEventListener('click', () => {
    if(numberArray.length == 0){
        output.innerText = "No More Random Numbers";
        return;
    }
    let randomIndex = getRandomNumber(0,numberArray.length-1);
    let randomNumber = numberArray[randomIndex];

    numberArray.splice(randomIndex, 1);
    output.innerText = randomNumber;

    if(randomNumber > 1000){
        window.alert("Your number is: " + randomNumber + "\r" + "The site says..." + "\r" + "Too bad! You've lost!")

    }
})