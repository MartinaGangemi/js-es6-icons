// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'delfino', famiglia: 'Delphinidae', classe: 'mammiferi' },
    { nome: 'rana', famiglia: 'ranidi', classe: 'anfibio' },
  ]

//creo un nuovo array con la lista dei mammiferi usando filter
  const mammiferi = animali.filter((animale) =>{
    if (animale.classe.includes("mammiferi")){
        return true
    }
    return false
  })

  console.log(mammiferi)