// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  return drivers.push(name)
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name)
}
function destructivelyRemoveLastDriver(name){
  return drivers.pop(name)
}
function destructivelyRemoveFirstDriver(name){
  return drivers.shift(name)
}

function appendDriver(name){
  let new_array = [...drivers,name]
  return new_array
}
function prependDriver(name){
  let new_array = [name,...drivers]
  return new_array
}

function removeLastDriver(name){
  let new_array = drivers.slice(0,drivers.length-1)
  return new_array
}
function removeFirstDriver(name){
  let new_array = drivers.slice(1)
  return new_array
}
