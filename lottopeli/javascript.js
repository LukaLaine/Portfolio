let selectedNumbers = [];
let computerNumbers = [];
let weeks = 0;
let years = 0;

function selectNumber(button) {
  const number = button.value;


  if (selectedNumbers.includes(number)) {
    alert("You can only select each number once!");
    return;
  }


  if (selectedNumbers.length < 7) {
    selectedNumbers.push(number);
    updateSelectedNumbers();
  } else {
    alert("You can only select 7 numbers!");
  }
}

function updateSelectedNumbers() {
  document.getElementById('selectedNumbers').innerHTML = 'Selected Numbers: ' + selectedNumbers.join(', ');
}

function drawLotteryNumbers() {

  if (selectedNumbers.length !== 7) {
    alert("Please select 7 numbers before drawing lottery numbers!");
    return;
  }

  computerNumbers = [];
  document.getElementById('drawResults').innerHTML = '';

  computerNumbers = generateRandomNumbers(7);


  document.getElementById('drawResults').innerHTML = 'Computer\'s Numbers: ' + computerNumbers.join(', ');
}

function compareNumbers() {
  if (computerNumbers.length === 0) {
    alert("Please draw lottery numbers first!");
    return;
  }

  const correctNumbers = selectedNumbers.filter(number => computerNumbers.includes(Number(number)));

  document.getElementById('drawResults').innerHTML += '<br>Correct Numbers: ' + correctNumbers.length + ' (' + correctNumbers.join(', ') + ')';
}

function repeatDraw() {
  computerNumbers = [];
  document.getElementById('drawResults').innerHTML = '';

  selectedNumbers = [];
  updateSelectedNumbers();
}

function generateRandomNumbers(count) {
  const randomNumbers = [];
  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * 40) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}