import { randomArrayItem } from '../utils/random.js'

const numRows = 8
const numCols = 16

const SNAKE = 1
const FOOD = 2

const move = {
  up: 0,
  down: 0,
  left: 0,
  right: 0
}

let board

const initialize = (row, col) => {
  board = [...Array(numRows)].map(_ => new Array(numCols).fill(0))
  board[row][col] = SNAKE
}

const getFreeCells = () => {
  const freeCells = []

  for (let rowIndex = 0; rowIndex < numRows; rowIndex += 1) {
    for (let colIndex = 0; colIndex < numCols; colIndex += 1  {
      if (board[rowIndex][colIndex] === 0) {
        freeCells.push([rowIndex, colIndex])
      }
    }
  }

  return freeCells
}

const addFood = (row, col) => {
  const foodIndex = randomArrayItem(getFreeCells())
  board[foodIndex[0]][foodIndex[1]] = FOOD
}
