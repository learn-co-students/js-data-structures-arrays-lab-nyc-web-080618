// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(){
  return drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift()
}

function appendDriver(name){
  var newDrivers = [...drivers.slice(), name];
  return newDrivers;
}

function prependDriver(name){
  var newDrivers = [name, ...drivers.slice()];
  return newDrivers;
}

function removeLastDriver(){
  var newDrivers = drivers.slice(0, drivers.length - 1);
  return newDrivers;
}

function removeFirstDriver(){
  var newDrivers = drivers.slice(1);
  return newDrivers;
}
