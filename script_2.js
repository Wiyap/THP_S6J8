numero = prompt("donne moi un nombre")
function factorielle(num) {
  for(let count = num-1; count >= 1; count-=1){
    num *= count;
    console.log(num)
  }
  return num;
}

console.log(factorielle(numero))