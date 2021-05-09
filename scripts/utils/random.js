const rng = (from, to) => Math.floor(Math.random() * (to - from + 1) + from)

const randomArrayItem = (array) => array[rng(0, array.length - 1)]

export {
  rng,
  randomArrayItem
}
