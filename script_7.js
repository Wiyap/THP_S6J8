let ask = prompt("Koi? kestu m've la?")

if(ask.charAt(ask.length-1) == "?"){
  console.log("Ouais Ouais...");
} else if(ask == ask.toUpperCase() && ask.match(/[A-Z]/g)){
  console.log("Pwa, calme-toi...");
} else if(ask.match("Fortnite")){
  console.log("on s' fait une partie soum-soum ?");
} else if (ask.match(/^[^\n ]*$/) == null){
  console.log("t'es en PLS ?");
} else {
  console.log("balek");
}