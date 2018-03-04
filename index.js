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
  kittens.push()
  return kittens
}
function appendKitten(name){
  kittens = [name, ...kittens]
}
function prependKitten(name){
  kittens = [...kittens, name]
  return kittens
}
function removeLastKitten(){
  kittens = kittens.slice(1)
  return kittens
}
function removeFirstKitten(){
  kittens = kittens.slice(0,kittens.length - 1)
}
