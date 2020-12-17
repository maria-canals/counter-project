// Tu código aquí
const lowerCount = document.querySelector('.prevBtn');
const addCount = document.querySelector('.nextBtn');
const textCounter = document.querySelector('#counter');

let counter = 0;

lowerCount.addEventListener('click', decrement);
addCount.addEventListener('click', increment);


function decrement() {
    counter--
    textCounter.textContent = counter;
    checkNumber()
}

function increment() {
    counter++
    textCounter.textContent = counter;
    checkNumber()
}

function checkNumber() {
    if(counter > 0) {
        textCounter.style.color = 'green'
    } else if (counter == 0) {
        textCounter.style.color = 'black'
    } else {
        textCounter.style.color = 'red'
    }
}
