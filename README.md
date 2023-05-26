# Sudoku-Game
A browser playable Sudoku Game.

## Goal
Create a responsive web app to generate Sudoku puzzles and allow the user to play and complete them.

## Surge Deployment Link
[Deployment Link](cold-organization.surge.sh)

## Trello Board for Project Plan
[Project Management Plan](https://trello.com/b/3X7vCaYw/sudoku-game)

## Wireframe
[Wireframe](https://www.figma.com/file/HYcqy2Dh2Mqh0RbSNuLTBX/Sudoku-Game-Wireframe?type=whiteboard&node-id=0%3A1&t=DCz2ihIqRPE9vD0F-1)

## Functionality
1. Level Selection loads a puzzle of that level of difficulty
2. The user is able to input numbers in empty squares with the use of either the keyboard or through buttons in the browser
3. The app will check to see if the user has won once all squares have been filled and the solve button is clicked.
4. All originally empty squares must be editable throughout gameplay
5. There should be an option to place numbers of a different color into squares as temporary placeholders (guesses) to be tested during gameplay
6. The puzzles should be of varying difficulty and the user should be able to select the difficulty of the puzzle they would like to attempt
7. The app should be fully responsive and playable on mobile all the way to a normal desktop monitor size
8. The user should only be able to type numbers into the empty squares (not letters)
9. Further functionality should be considered throughout creation...

## Secondary Functionality...
1. Add a timer to keep track of the length of time it takes to complete a puzzle
2. Display a modal for a successful completion of the puzzle
3. Add a Light and Dark mode

## Project Management Tasks

### HTML
1. Titles
2. Gameplay Instructions
3. Buttons for level of play, solve puzzle, and possibly start timer...
4. Gameboard
5. Buttons for input of numbers into selected square
6. Signature and Repo link


### CSS
1. Stylization of Titles/Instructions/Buttons synonymous with color theme/appearance theme
2. Gameboard construction with accessible tiles
3. Responsiveness of all elements utilizing media queries and responsive style choices


### JS (Main Functionality)
1. Array creation for Sudoku Puzzles and Solutions
2. Variable selections for all DOM elements
3. Generation of gameboard on level select **AND** when a user selects a different level of puzzle
4. Ensure that game win tests are checking against the proper solution array
5. Ensure all gameboard tiles that should be are accessible
6. Ensure number buttons allow the user to input the specified number into the selected tile
7. Level buttons should generate a new gameboard with that level of puzzle
8. Check for invalid inputs such as letters when all inputs should be numbers
9. Construct game win tests to ensure when the game is completed correctly that the winner is declared

### JS (Secondary Functionality)
1. Add a timer to track the length of time it takes the player to complete a game
2. Add a Light and Dark mode functionality
3. Add an instruction modal to explain the functionality of the game
