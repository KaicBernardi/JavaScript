const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameover = document.querySelector('.gameover')
gameover.style.animation = 'none'
let points = 0

function jump() {
    mario.classList.add('jump')
        setTimeout(() => {

    mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log('loop')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.left = `${marioPosition}px`

        mario.src = 'images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameover.style.animation='gameover-animation .2s linear forwards'
        /*gameover.style.animation='gameover-animation .2s 
        linear forwards'*/

        points++    
    pointsScore.textContent=`Points: ${points}`
    console.log(points)
    }

}, 10)

document.addEventListener('keyup', jump)