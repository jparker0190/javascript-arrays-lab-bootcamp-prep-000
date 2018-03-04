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
function appendKitten(kittens,name){
  
}
function prependKitten(kittens, name){
  kittens = [...name, kittens]
  return kittens
}
