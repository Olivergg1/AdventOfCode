import { getInput } from '../../helper.js'

const scores = {
  // you
  X: 1,
  Y: 2,
  Z: 3,

  // opponent
  A: 1,
  B: 2,
  C: 3,
}

// Genereate data from input
const rounds = getInput(2)
  .split('\r\n')
  .map((round) => round.split(' '))

const first = () => {
  let totalScore = 0

  // Play each round
  for (let [opponent, you] of rounds) {
    const score = scores[you]
    const diff = scores[opponent] - scores[you]

    // Differnce === 0, draw
    if (diff === 0) {
      totalScore += score + 3
    }

    // Rock >> Scissors
    if (Math.abs(diff) === 2) {
      // If difference > 0, win
      diff === 2 ? (totalScore += score + 6) : (totalScore += score)
    }

    // Rock >> Paper / Paper >> Scissors
    if (Math.abs(diff) === 1) {
      // If difference > 0, loss
      diff === -1 ? (totalScore += score + 6) : (totalScore += score)
    }
  }

  console.log('Part 1:', totalScore)
}

const second = () => {
  let totalScore = 0

  // Play each round
  for (let [opponent, result] of rounds) {
    // Expected result = Y, draw
    if (result === 'Y') {
      totalScore += scores[opponent] + 3
    }

    // Expected result = X, lose
    if (result === 'X') {
      const arr = [scores['C'], scores['A'], scores['B']]
      totalScore += arr[scores[opponent] - 1]
    }

    // Expected result = X, win
    if (result === 'Z') {
      totalScore += 6
      const arr = [scores['B'], scores['C'], scores['A']]
      totalScore += arr[scores[opponent] - 1]
    }
  }

  console.log('Part 2:', totalScore)
}

first()
second()
