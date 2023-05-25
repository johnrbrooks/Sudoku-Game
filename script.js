//Dark Mode and Light Mode

const darkModeButton = document.querySelector('#darkModeButton')
const lightModeButton = document.querySelector('#lightModeButton')

const levelButtons = document.querySelectorAll('.level-selector')
const breakLines = document.querySelectorAll('#darkModeLines')

darkModeButton.addEventListener('click', darkMode)
lightModeButton.addEventListener('click', lightMode)

function darkMode () {
    document.body.style.backgroundColor = 'black'
    levelButtons.forEach(button => {
        button.classList.add('dark-mode-buttons')
    })
    breakLines.forEach(line => {
        line.classList.add('break-dark-mode')
    })
    darkModeButton.classList.add('moon-dark')
    lightModeButton.classList.remove('sun-light')
    timerElement.classList.add('timer-dark')
}

function lightMode () {
    document.body.style.backgroundColor = 'white'

    levelButtons.forEach(button => {
        button.classList.remove('dark-mode-buttons')
    })
    breakLines.forEach(line => {
        line.classList.remove('break-dark-mode')
    })
    lightModeButton.classList.add('sun-light')
    darkModeButton.classList.remove('moon-dark')
    timerElement.classList.remove('timer-dark')
}

//Starter Puzzle Arrays

const easyGameSetup = [
    '2-5---7--',
    '--9---856',
    '--43-7-1-',
    '45---9---',
    '7-------2',
    '---1---85',
    '-2-6-81--',
    '418---2--',
    '--6---7-8'
]

const medGameSetup = [
    '--6----9-',
    '-9-7-25-8',
    '2------7-',
    '9--75-1--',
    '-3-----4-',
    '--6-19--5',
    '-1------9',
    '3-92-1-8-',
    '-8----1--'
]

const hardGameSetup = [
    '---789---',
    '8---1---6',
    '-----61--',
    '--75-8-4-',
    '---7-9---',
    '-5-3-42--',
    '--38-----',
    '2---7---1',
    '---439---'
]

//Solution Puzzle Arrays

const easyGameSolution = [
    '215986734',
    '379124856',
    '864357219',
    '452869371',
    '781543692',
    '693172485',
    '527648193',
    '418937265',
    '936521748'
]

const medGameSolution = [
    '876345291',
    '493712568',
    '251968473',
    '982754163',
    '135826947',
    '746319825',
    '417638529',
    '359271684',
    '682594137'
]

const hardGameSolution = [
    '165789432',
    '847312596',
    '923546178',
    '297518346',
    '463729158',
    '851364297',
    '973821654',
    '284675931',
    '615439782'
]

//Gameboard Generation

const easyButton = document.querySelector('#levelSelector1')
const medButton = document.querySelector('#levelSelector2')
const hardButton = document.querySelector('#levelSelector3')

easyButton.addEventListener('click', generateEasy)
medButton.addEventListener('click', generateMed)
hardButton.addEventListener('click', generateHard)

let winner = false

function generateEasy() {
    let squareValues = []
    winner = false

    gridBoxes.forEach(box => {
        box.addEventListener('click', selectBox)
    })

    gridBoxes.forEach(box => {
        box.innerHTML = ''
        box.style.backgroundColor = 'rgb(175, 228, 255)'
    })

    easyGameSetup.forEach(value => {
        gridSquareValue = value.split('')
        squareValues.push(gridSquareValue)
    })

    let allValues = squareValues.flatMap(array => array)

    for(let i = 0; i < allValues.length; i++) {
        if(allValues[i].includes('-')) {
            allValues[i] = allValues[i].replace('-', '')
        }
    }
    for(let i = 0; i < allValues.length; i++) {
        let gridItem = allValues[i]
        let gridBox = gridBoxes[i]
        gridBox.innerHTML = gridItem
        if(gridBox.innerHTML !== '') {
            gridBox.style.backgroundColor = 'rgb(0, 145, 218)'
            gridBox.style.color = 'white'
            gridBox.removeEventListener('click', selectBox)
        }
    }
}

function generateMed() {
    let squareValues = []
    winner = false

    gridBoxes.forEach(box => {
        box.addEventListener('click', selectBox)
    })

    gridBoxes.forEach(box => {
        box.innerHTML = ''
        box.style.backgroundColor = 'rgb(175, 228, 255)'
    })

    medGameSetup.forEach(value => {
        gridSquareValue = value.split('')
        squareValues.push(gridSquareValue)
    })

    let allValues = squareValues.flatMap(array => array)

    for(let i = 0; i < allValues.length; i++) {
        if(allValues[i].includes('-')) {
            allValues[i] = allValues[i].replace('-', '')
        }
    }
    for(let i = 0; i < allValues.length; i++) {
        let gridItem = allValues[i]
        let gridBox = gridBoxes[i]
        gridBox.innerHTML = gridItem
        if(gridBox.innerHTML !== '') {
            gridBox.style.backgroundColor = 'rgb(0, 145, 218)'
            gridBox.style.color = 'white'
            gridBox.removeEventListener('click', selectBox)
        }
    }
}

function generateHard() {
    let squareValues = []
    winner = false

    gridBoxes.forEach(box => {
        box.addEventListener('click', selectBox)
    })

    gridBoxes.forEach(box => {
        box.innerHTML = ''
        box.style.backgroundColor = 'rgb(175, 228, 255)'
    })

    hardGameSetup.forEach(value => {
        gridSquareValue = value.split('')
        squareValues.push(gridSquareValue)
    })

    let allValues = squareValues.flatMap(array => array)

    for(let i = 0; i < allValues.length; i++) {
        if(allValues[i].includes('-')) {
            allValues[i] = allValues[i].replace('-', '')
        }
    }
    for(let i = 0; i < allValues.length; i++) {
        let gridItem = allValues[i]
        let gridBox = gridBoxes[i]
        gridBox.innerHTML = gridItem
        if(gridBox.innerHTML !== '') {
            gridBox.style.backgroundColor = 'rgb(0, 145, 218)'
            gridBox.style.color = 'white'
            gridBox.removeEventListener('click', selectBox)
        }
    }
}

//Gameboard/Number Tile Functionality

const gridBoxes = document.querySelectorAll('.grid-item')
let selectedBox;
let selectedNumber;

function selectBox (event) {
    gridBoxes.forEach(box => {
        box.classList.remove('grid-item-select')
    })
    selectedBox = event.target
    selectedBox.classList.add('grid-item-select')
    
    const numberSelectors = document.querySelectorAll('#numberTile')
    const placeholderSelectors = document.querySelectorAll('#placeholderTile')
    const backspaceSelectors = document.querySelectorAll('#emptyTile')

    numberSelectors.forEach(number => {
        number.addEventListener('click', addNumber)
    })

    placeholderSelectors.forEach(placeholder => {
        placeholder.addEventListener('click', addPlaceholder)
    })

    backspaceSelectors.forEach(selector => {
        selector.addEventListener('click', removeInfo)
    })

    function addNumberByKey(event) {
        console.log(event.key)
        switch(event.key) {
            case '1':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '1'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '1'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case '2':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '2'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '2'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case '3':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '3'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '3'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case '4':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '4'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '4'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case '5':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '5'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '5'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case '6':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '6'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '6'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case '7':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '7'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '7'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case '8':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '8'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '8'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case '9':
                if (event.shiftKey) {
                    selectedBox.innerHTML = '9'
                    selectedBox.style.color = 'red'
                }
                else {
                selectedBox.innerHTML = '9'
                selectedBox.style.color = 'white'
                selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
                }
                break;
            case 'Backspace':
                selectedBox.innerHTML = ''
                selectedBox.style.backgroundColor = 'rgb(175, 228, 255)'
                break;
            case 'Enter':
                testSolution()
                break;
            default:
                break;
        }
    }

    document.addEventListener('keydown', addNumberByKey)

    function addNumber (event) {
        selectedNumber = event.target
        selectedBox.innerHTML = selectedNumber.innerHTML
        selectedBox.style.color = 'white'
        selectedBox.style.backgroundColor = 'rgb(0, 51, 141)'
    }

    function addPlaceholder (event) {
        selectedPlaceholder = event.target
        selectedBox.innerHTML = selectedPlaceholder.innerHTML
        selectedBox.style.color = 'red'
    }

    function removeInfo (event) {
        selectedBox.innerHTML = ''
        selectedBox.style.backgroundColor = 'rgb(175, 228, 255)'
    }
}


//Game Solution Test Functionality

const solveButton = document.querySelector('#solveButton')

solveButton.addEventListener('click', testSolution)

function testSolution() {
    let currentState = []

    gridBoxes.forEach(box => {
        let boxState = box.innerHTML
        currentState.push(`${boxState}`)
    })
    if(currentState.includes('')) {
        alert('There are still empty squares!')
    }
    else {
        let easySolution = []

        easyGameSolution.forEach(value => {
            gridSquareValue = value.split('')
            easySolution.push(gridSquareValue)
        })
    
        let potentialSolution1 = easySolution.flatMap(array => array)

        let medSolution = []

        medGameSolution.forEach(value => {
            gridSquareValue = value.split('')
            medSolution.push(gridSquareValue)
        })
    
        let potentialSolution2 = medSolution.flatMap(array => array)

        let hardSolution = []

        hardGameSolution.forEach(value => {
            gridSquareValue = value.split('')
            hardSolution.push(gridSquareValue)
        })
    
        let potentialSolution3 = hardSolution.flatMap(array => array)
    

        if(potentialSolution1.join('') === currentState.join('')) {
            winner = true
            ifWinner()
        }
        else if(potentialSolution2.join('') === currentState.join('')) {
            winner = true
            ifWinner()
        }
        else if(potentialSolution3.join('') === currentState.join('')) {
            winner = true
            ifWinner()
        }
        else {
            alert('Your solution is not correct.')
        }
    }
}

//Start Timer Functionality

const startButton = document.querySelector('#startButton')
const timerElement = document.querySelector('#timerElement')
const pauseButton = document.querySelector('#pauseButton')
const playButton = document.querySelector('#playButton')

startButton.addEventListener('click', startTimer)

function startTimer() {

    let seconds = 0
    let minutes = 0
    let hours = 0

    if(winner === true) {
        return;
    }
    
    else {
        pauseButton.style.display = 'block'

        startButton.removeEventListener('click', startTimer)

        interval = setInterval(runTimer, 1000)

        function runTimer() {
            seconds++
            if(seconds === 60) {
                minutes++
                seconds = 0
                if(minutes === 60) {
                    hours++
                    minutes = 0
                }
            }

            if(winner === true){
                clearInterval(interval)
            }

            let h = hours < 10 ? "0" + hours : hours
            let m = minutes < 10 ? "0" + minutes : minutes
            let s = seconds < 10 ? "0" + seconds : seconds
            timerElement.innerHTML = `${h}:${m}:${s}`
        }

        pauseButton.addEventListener('click', () => {
            clearInterval(interval)
            pauseButton.style.display = 'none'
            playButton.style.display = 'block'
        })

        playButton.addEventListener('click', () => {
            interval = setInterval(runTimer, 1000)
            playButton.style.display = 'none'
            pauseButton.style.display = 'block'
            runTimer()
        })
    }
}

//Winner Declaration

const winnerModal = document.querySelector('.winner-container')
const closeModalButton = document.querySelector('.close-button')
const winnerTime = document.querySelector('.time-winner')

function ifWinner() {
    winnerModal.style.display = 'block'
    
    closeModalButton.addEventListener('click', () => {
        winnerModal.style.display = 'none'
        winner = false
    })

    time = timerElement.innerHTML

    winnerTime.innerHTML = `${time}`

    startButton.addEventListener('click', startTimer)
}




