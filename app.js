const boxes = document.querySelectorAll('.box')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time')
const score = document.getElementById('score')
const startButton = document.getElementById('start-button') 
const container = document.querySelector('.container')

let randomPosition
let updateScore = 0
let timer = 10
let timerId = null
let countDown

container.addEventListener('click', () => {
    container.classList.add('container-rotate')
    setTimeout(() =>{
        container.classList.remove('container-rotate')
    }, 200)
})

startButton.addEventListener('click', startGame)

function randomBox () {
    boxes.forEach(box => {
        box.classList.remove('mole')
    })

    let randomBox = boxes[Math.floor(Math.random() * 9)]
    randomBox.classList.add('mole')
    randomPosition = randomBox.id
}
boxes.forEach(box => {
    box.addEventListener('mousedown', () => {
        if(box.id === randomPosition){
            const audioHit = new Audio('sounds/hit.wav')
            audioHit.play()
            updateScore ++
            score.textContent = updateScore
        }
    })
})

function timeCounter () {
    timer--
    timeLeft.textContent= timer
    if(timer === 4){
        const timeAudio = new Audio('sounds/time.mp3')
        timeAudio.play()
    }
    if(timer<1){
        clearInterval(countDown)
        clearInterval(timerId)
        timer = 0
        alert(`Time Over. Your Score: ${updateScore}`)
        location.reload()
    }
}
function startGame () {
    
    timerId = setInterval(randomBox, 500)
    countDown = setInterval(timeCounter, 1000)
}


