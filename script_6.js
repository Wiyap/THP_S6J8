let rnaSequence1 = "CCGUCGUUGCGCUACAGC"
let rnaSequence2 = "CCUCGCCGGUACUUCUCG"

/********** Transformer la séquence ARN en codon **********/

function sliceInCondon(rnaSequence){
  let rnaSequenceInCodon = []
  for(let i=0; i<(rnaSequence.length); i+=3){
    rnaSequenceInCodon.push(rnaSequence.slice(i,i+3))
  }
  return rnaSequenceInCodon
}

/********** Remplacer les codons par leurs AA correspondant **********/

function traductionOfRNA(rnaSequenceInCodon){
  for(let i=0; i<(rnaSequenceInCodon.length); i++){
    switch(rnaSequenceInCodon[i]){ 
      case "UCU":
      case "UCC": 
      case "UCA": 
      case "UCG": 
      case "AGU": 
      case "AGC":
        rnaSequenceInCodon[i] = "Sérine";
        break;
      case "CCU": 
      case "CCC": 
      case "CCA": 
      case "CCG":
        rnaSequenceInCodon[i] = "Proline";
        break;
      case "UUA":
      case "UUG":
        rnaSequenceInCodon[i] = "Leucine";
        break;
      case "UUU":
      case "UUC":
        rnaSequenceInCodon[i] = "Phénylalanine";
        break;
      case "CGU":
      case "CGC": 
      case "CGA": 
      case "CGG": 
      case "AGA": 
      case "AGG":
        rnaSequenceInCodon[i] = "Arginine";
        break;
      case "UAU":
      case "UAC": 
        rnaSequenceInCodon[i] = "Tyrosine";
        break;
    }
  }
  return rnaSequenceInCodon
}

/********** Lié les AA par "-" **********/

function linkAA(traductionOfRNA){
  return traductionOfRNA.join("-")
}

/********** Fonction perform **********/

function perform(rnaSequence){
  return linkAA(traductionOfRNA(sliceInCondon(rnaSequence)))
}

prot1 = perform(rnaSequence1)
prot2 = perform(rnaSequence2)
console.log(prot1)
console.log(prot2)