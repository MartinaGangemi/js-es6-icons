// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// creo un'array in minuscolo
const anime = ["bleach", "NARUTO", "gintama"]


// creo un altro array con map
const capitalizedAnime = anime.map((element) =>{
    //faccio una variabile dove trasformo le lettere maiuscole in minuscolo
    const lower = element.toLowerCase()

    // seleziono la prima lettera dell'array per trasformarla in maiuscolo
    firstLetterAnime = element.charAt(0).toUpperCase()
    console.log(firstLetterAnime)

    // costante remain per selezionare il resto della parola in minuscolo
    const remain = lower.slice(1)
    
    // combino le due variabili per formare la parola completa
     combined = firstLetterAnime + remain
    
})

console.log(capitalizedAnime)