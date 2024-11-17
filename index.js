const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const you = document.getElementById('you');
const computer = document.getElementById('computer');
const result = document.getElementById('result');
const winner = document.getElementById('winner');
const score = document.getElementById('score');
const reset = document.getElementById('reset');

let playerValue = null;
let computerValue = null;

let wins = parseInt(localStorage.getItem('wins')) || 0;
let losses = parseInt(localStorage.getItem('losses')) || 0;

const updateScoreboard = () => {
  score.innerHTML = `<p>Nexus won: ${wins} </p><p>Nexus lost: ${losses}</p>`;
  localStorage.setItem('wins', wins);
  localStorage.setItem('losses', losses);
};

function random() {
  return Math.floor(Math.random() * 3) + 1;
}

function rockClick() {
  you.textContent = 'You: Rock';
  playerValue = 1;
}

function paperClick() {
  you.textContent = 'You: Paper';
  playerValue = 2;
}

function scissorsClick() {
  you.textContent = 'You: Scissors';
  playerValue = 3;
}

function computerChoice() {
  random();
  if (random() === 1) {
    computer.textContent = 'Computer: Rock';
    computerValue = 1;
  } else if (random() === 2) {
    computer.textContent = 'Computer: Paper';
    computerValue = 2;
  } else {
    computer.textContent = 'Computer: Scissors';
    computerValue = 3;
  }
}
function results() {
  if (playerValue === computerValue) {
    winner.textContent = 'TIE';
    winner.style.color = 'aliceblue';
  } else if (
    (playerValue === 1 && computerValue === 3) ||
    (playerValue === 2 && computerValue === 1) ||
    (playerValue === 3 && computerValue === 2)
  ) {
    winner.textContent = 'YOU WIN!';
    winner.style.color = 'green';
    wins++;
  } else {
    winner.textContent = 'YOU LOSE!';
    winner.style.color = 'red';
    losses++;
  }
}

reset.addEventListener('click', () => {
  wins = 0;
  losses = 0;
  winner.textContent = '?';
  winner.style.color = 'aliceblue';
  you.textContent = 'You:';
  computer.textContent = 'Computer:';
  updateScoreboard();
});

rock.addEventListener('click', () => {
  rockClick();
  computerChoice();
  results();
  updateScoreboard();
});
paper.addEventListener('click', () => {
  paperClick();
  computerChoice();
  results();
  updateScoreboard();
});
scissors.addEventListener('click', () => {
  scissorsClick();
  computerChoice();
  results();
  updateScoreboard();
});

updateScoreboard();
