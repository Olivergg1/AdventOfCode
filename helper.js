import { readFileSync } from 'fs'

export const getInput = (day) => {
  try {
    const data = readFileSync(`../inputs/${day}.txt`)
    return data.toString()
  } catch (error) {
    console.log('Error opening file', error)
    return null
  }
}
