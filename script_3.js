numero = prompt("Donne moi un nombre!")

function addSpace(num){
  string = ""
  for(let count = 1; count < num; count++){
    string += " "
  }
  return string
}

function addHashtag(num){
  string = ""
  for(let count = 0; count <= num; count++){
    string += "#"
  }
  return string
}

function pyramide(num){
  for(let count = 0; count < num; count++){
    space = num - count
    hashtag = count
    string = addSpace(space) + addHashtag(hashtag)
    console.log(string)
  }
}

pyramide(numero)