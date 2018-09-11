function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}