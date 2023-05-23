//DOM Selections


//Dark Mode

const darkModeButton = document.querySelector('#darkModeButton')
const lightModeButton = document.querySelector('#lightModeButton')

const levelButtons = document.querySelectorAll('#levelSelector')
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
}

//Starter Puzzle Arrays

easyGameSetup = [
    '2-5--9--4',
    '------3-7',
    '7--856-1-',
    '45-7-----',
    '--9---1--',
    '-----2-85',
    '-2-418--6',
    '6-8------',
    '1--2--7-8'
]

medGameSetup = [
    '--6-9-2--',
    '---7-2---',
    '-9-5-8-7-',
    '9---3---6',
    '75-----19',
    '1---4---5',
    '-1-3-9-8-',
    '---2-1---',
    '--9-8-1--'
]

hardGameSetup = [
    '---8-----',
    '789-1---6',
    '-----61--',
    '--7----5-',
    '5-87-93-4',
    '-4----2--',
    '--32-----',
    '8---7-439',
    '-----1---'
]

//Solution Puzzle Arrays

easyGameSolution = [
    '215379864',
    '986124357',
    '734856219',
    '452781693',
    '869543172',
    '371692485',
    '527418936',
    '648937521',
    '193265748'
]

medGameSolution = [
    '876493251',
    '345712968',
    '291568473',
    '982135746',
    '754826319',
    '163947825',
    '417359682',
    '529684137'
]

hardGameSolution = [
    '165847923',
    '789312546',
    '432596178',
    '297463851',
    '518729364',
    '346158297',
    '973284615',
    '821675439',
    '654931782'
]

//Gameboard Generation




//Gameboard/Number Tile Functionality

const gridBoxes = document.querySelectorAll('.grid-item')
let selectedBox;
let selectedNumber;

gridBoxes.forEach(box => {
    box.addEventListener('click', selectBox)
})

function selectBox (event) {
    gridBoxes.forEach(box => {
        box.classList.remove('grid-item-select')
    })
    selectedBox = event.target
    selectedBox.classList.add('grid-item-select')

    const numberSelectors = document.querySelectorAll('#numberTile')
    const placeholderSelectors = document.querySelectorAll('#placeholderTile')

    numberSelectors.forEach(number => {
        number.addEventListener('click', addNumber)
    })

    placeholderSelectors.forEach(placeholder => {
        placeholder.addEventListener('click', addPlaceholder)
    })

    function addNumber (event) {
        selectedNumber = event.target
        selectedBox.innerHTML = selectedNumber.innerHTML
        selectedBox.style.color = 'black'
    }

    function addPlaceholder (event) {
        selectedPlaceholder = event.target
        selectedBox.innerHTML = selectedPlaceholder.innerHTML
        selectedBox.style.color = 'red'
    }
}


//Game Solution Test Functionality



//Winner Declaration



//Level Select


