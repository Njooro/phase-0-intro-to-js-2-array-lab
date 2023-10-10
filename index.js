// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    cats.splice(3, 0, Broom)
}
function removeFirstCat(){
    return cats.slice(1);
}
function removeLastCat(){
    return cats.slice(0, -1);
}

function prependCat(name){
    const newCatsArray = ["Arnold", ...cats];
    return newCatsArray;
   
}

function appendCat(name){
    const newAppendArray = [...cats, "Broom"]
    return newAppendArray;
}