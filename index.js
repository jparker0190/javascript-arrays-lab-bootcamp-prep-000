const app = "I don't do much."
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
 [...kittens, name]
  return kittens
}
function prependKitten(name){
  [name,...kittens]
  return kittens
}
function removeFirstKitten(){
  kittens = kittens.slice(1)
  return kittens
}
function removeLastKitten(){
  kittens = kittens.slice(0,kittens.length - 1)
  return kittens
}
