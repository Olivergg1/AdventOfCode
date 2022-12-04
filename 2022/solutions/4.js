import { getInput } from '../../helper.js'

// Genereate data from input
const pairs = getInput('4')
  .split('\r\n')
  .map((round) => round.split(',').map((range) => range.split('-').map(Number)))

const first = () => {
  let total = 0
  const LOW = 0,
    HIGH = 1
  for (let [elf1, elf2] of pairs) {
    if (elf1[LOW] <= elf2[LOW] && elf1[HIGH] >= elf2[HIGH]) {
      total++
      continue
    }

    if (elf1[LOW] >= elf2[LOW] && elf1[HIGH] <= elf2[HIGH]) {
      total++
      continue
    }
  }
  console.log('First:', total)
}

const second = () => {
  let total = 0
  const LOW = 0,
    HIGH = 1
  // Check overlap for all pairs of elves
  for (let [elf1, elf2] of pairs) {
    // Right overlaps left
    if (elf1[LOW] <= elf2[LOW] && elf1[HIGH] >= elf2[LOW]) {
      total++
      continue
    }

    // Left overlaps right
    if (elf2[LOW] <= elf1[LOW] && elf2[HIGH] >= elf1[LOW]) {
      total++
      continue
    }
  }
  console.log('Second:', total)
}

//first()
second()
