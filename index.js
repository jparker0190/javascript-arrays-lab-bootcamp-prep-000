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
 kittens = [...kittens, name]
  return kittens
}
function prependKitten(name){
  kittens = [name,...kittens]
  return kittens
}
function removeLastKitten(){
  joe = kittens.slice(-1)
  return joe
}
function removeFirstKitten(){
  joe = kittens.slice(1)
  return joe
}
