const app = "I don't do much."
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyAppendKitten(name){
  kittens.shift(name)
  return kittens
}
function destrucivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destrucivelyRemoveFirstKitten(){
  kittens.push()
  return kittens
}
function appendKitten(kittens,name){
  kittens = [kittens, ...name]
  return kittens
}
function prependKitten(kittens, name){
  kittens = [...name, kittens]
  return kittens
}
