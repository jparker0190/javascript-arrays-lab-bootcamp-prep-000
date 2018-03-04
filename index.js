const app = "I don't do much."
function destructivelyPrependKitten(array){
  var array = array
  array.push(array)
  return array
}