const bmo = document.querySelector('#bmo')
const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');

let intervalTime = 1000;
let interval;
function setEye() {
  leftEye.classList.remove('blink');
  leftEye.setAttribute('animation-delay', randomBlinkDelay());
  setTimeout(() => {
    leftEye.classList.add('blink');
  }, 1000);
}

bmo.style.height = window.innerHeight


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

// Blink

// const blinkAnimation = eyes[0].animate(blink, blinkTiming);
// while (true){

// function animateEye() {
const eyes = [leftEye, rightEye];
function blinkEyes(eyesArr) {
  // console.log('!!!!!!!!CALL!!!!!!!!!');
  let betweenBlinks = Math.floor(Math.random() * 5000);
  let blinkTime = Math.floor(Math.random() * 1000 + 700);
  let numBlinks = Math.random() > 0.8 ? 1 : 2;
  // console.log(betweenBlinks);
  // console.log(blinkTime);
  // console.log(numBlinks);

  let animL = eyesArr[0].animate(blink, {
    duration: blinkTime,
    iterations: numBlinks,
  });
  let animR = eyesArr[1].animate(blink, {
    duration: blinkTime,
    iterations: numBlinks,
  });
  // let anim = eyesArr[1].animate(blink, {duration: Math.floor(Math.random()*8000), iterations: Math.floor(Math.random()*2)})
  animL.onfinish = (r) => {
    // console.dir(r)
    // clearTimeout(tim)
    // animL.cancel()
    // animR.cancel()
    let tim = setTimeout(() => {
      blinkEyes(eyesArr);
    }, betweenBlinks);
    // blinkEyes (eyesArr)
  };
} 
blinkEyes(eyes)

