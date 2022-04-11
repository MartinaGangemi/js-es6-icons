// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

const persone = [
    {nome: "Anna", cognome:"Pasquale", età: 18},
    {nome: "Mario", cognome:"Rossi", età: 33},
    {nome: "Isa", cognome:"Pinta", età: 16},
    {nome: "Luigi", cognome:"Fausto", età: 14},
    {nome: "Alex", cognome:"Cannuccia", età: 28},
]

const users = persone.map((persona) => {
    if (persona.età<18){
       return `${persona.nome} che ha ${persona.età} anni può guidare`
    } else {
        return `${persona.nome} che ha ${persona.età} anni non può guidare`
    }
})

console.log(users)
