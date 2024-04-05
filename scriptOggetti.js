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

const auto = FnAutomobili(3, 'Ford', 'diesel', 'brum', 1, 'FRD01')
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
    console.log(Concessionaria.aggiungi(auto1))
    console.log(Concessionaria.aggiungi(auto2))
    console.log(Concessionaria.esiste('idauto'))
*/