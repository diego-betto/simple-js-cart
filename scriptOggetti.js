/*
 costruttore per oggetti automobili
    - ruote
    - nome auto
    - alimentazione
    - funzione suono
    - numero passeggeri a bordo
    - id auto
    - incrementa passeggero

const FnAutomobili = (..) => {..}

const auto = FnAutomobili(..)

console.log(auto.incrementaPass())
console.log(auto.numeroPasseggeri())
console.log(auto.id)

*/


const FnAutomobili = (ruote, nome, alim, suono, nrPass, id) => {
    let nrPasseg = nrPass

    return {
        ruote,
        nome,
        alim,
        suono,
        id,
        incrementaPass: () => nrPasseg++,
        decrementaPass: () => nrPasseg > 0 ? --nrPasseg : nrPasseg,
        numeroPasseggeri: () => nrPasseg,
    }
}

/*
console.log(auto.incrementaPass())
console.log(auto.decrementaPass())
console.log(auto.numeroPasseggeri())
console.log(auto.id)*/

/*
    creare un costruttore di oggetti FnConcessionaria
    - quanti automezzi ha in sede
    - aggiungere un automezzo
    - c'è l'automezzo nella sede

    const FnConcessionaria = (..) => {}

    const Concessionaria = FnConcessionaria(..)

    console.log(Concessionaria.numeroMezzi())
    console.log(Concessionaria.aggiungiMezzo(auto1))
    console.log(Concessionaria.aggiungiMezzo(auto2))
    console.log(Concessionaria.esisteMezzo('idauto'))
*/

const FnConcessionaria = () => {
    // elenco mezzi della concessionaria
    const mezzi = [];

    return {
        // ritorno la lunghezza del magazzino, quanti mezzi ho
        numeroMezzi: () => mezzi.length,
        // aggiunge un mezzo al magazzino
        aggiungiMezzo: (mezzo) => {
            mezzi.push(mezzo)
        },
        // controlla se esiste l'id del mezzo tra i vari mezzi
        // del magazzino
        esisteMezzo: (idCercato) => {
            // idxMezzo sarà >= 0 se c'è il mezzo
            // sarà -1 se non c'è
            const idxMezzo = mezzi.findIndex(function(m){
                // idCercato è uguale al id dell'auto corrente?
                // se si torna true, e findIndex si ferma tornandomi
                // la posizione dell'auto trovata
                // se no torna false, e findIndex mi restituirà -1
                return m.id === idCercato
            })

            // const idxMezzo = mezzi.findIndex((m) => m.id === idCercato) >= 0
            // come se fosse
            // if (idxMezzo >=0) { return true } else {return false}
            return idxMezzo >= 0
        },
    }
}

const Concessionaria = FnConcessionaria()

const auto1 = FnAutomobili(4, 'Ford', 'diesel', 'brum', 1, 'FRD01')
const auto2 = FnAutomobili(3, 'Skoda', 'benzina', 'bru', 2, 'SKD01')

console.log(Concessionaria.numeroMezzi())
console.log(Concessionaria.aggiungiMezzo(auto1))
console.log(Concessionaria.aggiungiMezzo(auto2))
console.log(Concessionaria.numeroMezzi())

console.log(Concessionaria.esisteMezzo('FRD01'))
console.log(Concessionaria.esisteMezzo('FRD22'))