const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/******* Les livres ont été au moins empruntés une fois? *******/

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let numBooks = 0

for(let i=0; i < books.length; i++){
  if(books[i].rented >= 1){
    numBooks += 1
  }
}
if(numBooks = books.length){
  console.log("Oui!")
}

/******* Quel est livre le plus emprunté ? *******/

console.log("Quel est livre le plus emprunté ?");
let mostRentedBook = [0," "]

for(let i=0; i < books.length; i++){
  if(mostRentedBook[0] < books[i].rented){
    mostRentedBook[0] = books[i].rented
    mostRentedBook[1] = books[i].title
  }
} 

console.log(`${mostRentedBook[1]} est le livre le plus emprunté. Il a été emprunté ${mostRentedBook[0]}`)

/******* Quel est livre le moins emprunté ? *******/

console.log("Quel est livre le moins emprunté ?");
let leastRentedBook = mostRentedBook

for(let i=0; i < books.length; i++){
  if(leastRentedBook[0] > books[i].rented){
    leastRentedBook[0] = books[i].rented
    leastRentedBook[1] = books[i].title
  }
} 

console.log(`${leastRentedBook[1]} est le livre le moins emprunté. Il a été emprunté ${leastRentedBook[0]}`)

/******* Trouve le livre avec l'ID: 873495 *******/

console.log("Quel est livre le moins emprunté ?");
let foundByID = [873495," "]

for(let i=0; i < books.length; i++){
  if(foundByID[0] = books[i].id){
    foundByID[1] = books[i].title
  }
}

console.log(`${foundByID[1]} est le livre avec l'id ${foundByID[0]}`)

/******* Supprimer le livre avec l'ID: 133712 *******/

console.log("Supprimer le livre avec l'ID: 133712 ");
let deleteByID = 133712

for(let i=0; i < books.length; i++){
  if(deleteByID == books[i].id){
    books.splice(i,1)
  }
}

console.log(books)

/******* Trie les livres par ordre alphabétique *******/

console.log("Trie les livres par ordre alphabétique");
let booksTitleArray = []

for(let i=0; i < books.length; i++){
  booksTitleArray.push(books[i].title)
}

console.log(booksTitleArray.sort())