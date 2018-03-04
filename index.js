const app = "I don't do much."
function destructivelyPrependKitten(kitten){
  var array = [kitten]
  array.push(array)
  return array
}