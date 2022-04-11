// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const automobili = [
{
    marca: "Fiat",
    modello: "500",
    alimentazione: "Benzina",
},

{
    marca: "Opel",
    modello: "Astra",
    alimentazione: "Diesel",
},

{
    marca: "Lancia",
    modello: "Ypsilon",
    alimentazione: "Metano",
},

{
    marca: "Pegeout",
    modello: "206",
    alimentazione: "Diesel",
},

{
    marca: "Pegeout",
    modello: "207",
    alimentazione: "Diesel",
},

{
    marca: "Nissan",
    modello: "Micra",
    alimentazione: "Elettrico",
},

{
    marca: "Suzuki",
    modello: "Ignis",
    alimentazione: "gpl",
},

{
    marca: "Lancia",
    modello: "Delta",
    alimentazione: "Diesel",
},

{
    marca: "Fiat",
    modello: "Punto",
    alimentazione: "Benzina",
},

{
    marca: "Audi",
    modello: "Q2",
    alimentazione: "Diesel",
},

]

// auto a benzina

    const benzina = automobili.filter((auto) =>
    {
        if (auto.alimentazione.includes("Benzina")){
            return true
        } 
        return false
    })

    console.log(benzina)

    // auto diesel
    const diesel = automobili.filter((auto) =>
    {
        if (auto.alimentazione.includes("Diesel")){
            return true
        } 
        return false
    })

    console.log(diesel)
   

    // tutte le altre auto

    const autoRimanenti = automobili.filter((auto) =>
    {
        if (!auto.alimentazione.includes("Diesel" ) &&!auto.alimentazione.includes("Benzina")){
            return true
        } 
        return false
    })

    console.log(autoRimanenti)
