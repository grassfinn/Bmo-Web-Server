const bmo = document.querySelector('#bmo');
const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');
const buttons = document.getElementsByClassName('button');
let intervalTime = 1000;
let interval;
function setEye() {
  leftEye.classList.remove('blink');
  leftEye.setAttribute('animation-delay', randomBlinkDelay());
  setTimeout(() => {
    leftEye.classList.add('blink');
  }, 1000);
}

bmo.style.height = window.innerHeight;

function randomBlinkDelay() {
  // * (max - min) + 2
  const delay = Math.floor(Math.random() * (10000 - 2000)) + 2000;
  intervalTime = delay;
  return intervalTime;
}

function blinkEyes(eyesArr) {
  eyesArr[1].animate(blink, blinkTiming).onfinish = eyesArr[1].animate(
    blink,
    blinkTiming
  );
}

const blink = [
  {
    transform: 'none',
    'animation-timing-function': 'ease-in',
    offset: 0.9,
  },
  {
    'animation-timing-function': 'ease-in',

    transform: 'translateY(15px) scaleY(0)',
    offset: 0.93,
  },
  {
    'animation-timing-function': 'ease-out',
    offset: 1,
  },
];
const blinkTiming = {
  duration: 800,
  // iterations: 2,
};

const eyes = [leftEye, rightEye];
function blinkEyes(eyesArr) {
  let betweenBlinks = Math.floor(Math.random() * 5000);
  let blinkTime = Math.floor(Math.random() * 1000 + 700);
  let numBlinks = Math.random() > 0.8 ? 1 : 2;

  let animL = eyesArr[0].animate(blink, {
    duration: blinkTime,
    iterations: numBlinks,
  });
  let animR = eyesArr[1].animate(blink, {
    duration: blinkTime,
    iterations: numBlinks,
  });
  animL.onfinish = (r) => {
    let tim = setTimeout(() => {
      blinkEyes(eyesArr);
    }, betweenBlinks);
  };
}

let code = [];
function bmoTime(arr) {
  const correct = [
    'up',
    'up',
    'down',
    'down',
    'left',
    'right',
    'left',
    'right',
    'b',
    'a',
  ];
  if (JSON.stringify(correct) === JSON.stringify(arr)) {
    const song = new Audio(
      './sounds/BMO (Adventure Time)__Dust_in_the_Wind_combined.wav'
    );
    song.play();
    code = [];
    return;
  }
}

let flag = 'off';
let timeout;

function idleTimer(e) {
  const [userPress] = e.target.classList;
  code.push(userPress);
  bmoTime(code);
  if (flag === 'off') {
    flag = 'on';
    return (timeout = setTimeout(() => {
      flag = 'off';
      code = [];
    }, 2500));
  }
  clearTimeout(timeout);
  flag = 'off';
  return idleTimer;
}

for (let button of buttons) {
  button.addEventListener('click', idleTimer);
}

blinkEyes(eyes);
