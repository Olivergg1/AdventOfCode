import { getInput } from '../../helper.js'

const first = () => {
  let highestCalories = 0

  // Create matrix based on input
  const elfs = getInput(1)
    .split('\r\n\r\n')
    .map((s) => s.split('\r\n').map((i) => Number(i)))

  for (let elf of elfs) {
    // Calculate sum of an elf's foods
    let totalCalories = elf.reduce((p, c) => p + c)

    // Set new highest calories, if total for elf > highest
    if (totalCalories > highestCalories) highestCalories = totalCalories
  }

  console.log('Highest calories:', highestCalories)

  return highestCalories
}

const second = () => {
  let highestCalories = [3, 2, 1]

  // Create matrix based on input
  const elfs = getInput(1)
    .split('\r\n\r\n')
    .map((s) => s.split('\r\n').map((i) => Number(i)))

  for (let elf of elfs) {
    // Calculate sum of an elf's foods
    let totalCalories = elf.reduce((p, c) => p + c)

    // Set new highest calories, if total for elf > top 3 elf
    if (totalCalories > highestCalories[highestCalories.length - 1]) {
      // Determine what elf to replace
      for (let i in highestCalories) {
        // If elf at [i] has less calories, shift elements to right starting from [i], then replace [i]
        if (totalCalories > highestCalories[i]) {
          for (let j = highestCalories.length - 1; j > i; j--) {
            highestCalories[j] = highestCalories[j - 1]
          }

          highestCalories[i] = totalCalories
          break
        }
      }
    }
  }

  console.log(highestCalories.reduce((p, c) => p + c))
}

//first()
second()
