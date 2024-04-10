/*
Esercizio 1
Scrivere una funzione JS SommaNumeri() che preso un valore, 
fa la somma da 1 a quel valore e me la restituisce

console.log(SommaNumeri(5)) // 15
*/

function SommaNumeri(numero) {
    let finale = 0;

    for(let i = 0; i <= numero; i++) {
        finale += i;
    }
    return finale;
}

/* 
TEST

console.log(SommaNumeri(5))
*/

/*
Esercizio 2
Scrivere una funzione per generare un oggetto casa.
Ricevere parametri:
 - indirizzo
 - numero porte
 - superficie in mq

Espone:
 - metodo accendiRiscaldamento() 
 - metodo spegniRiscaldamento()
 - metodo switchaRiscaldamento()
 - metodo statoRiscaldamento() // 'acceso' o 'spento'?
*/

const FnCasa = (indirizzo, numero, superficie) => {
    let riscaldamentoAcceso = false;

    return {
        indirizzo: indirizzo,
        numero: numero, 
        superficie: superficie,
        accendiRiscaldamento: () => {
            riscaldamentoAcceso = true;
        },
        spegniRiscaldamento: () => {
            riscaldamentoAcceso = false;
        },
        switchaRiscaldamento: () => {
            riscaldamentoAcceso = !riscaldamentoAcceso;
        },
        statoRiscaldamento: () => riscaldamentoAcceso ? 'acceso' : 'spento'        
    }
}

const casa1 = FnCasa('via di Qua', 69, 90);

/*
TESt
console.log(casa1.statoRiscaldamento())

console.log(casa1.accendiRiscaldamento()) // accende, cambia lo stato ad acceso
console.log(casa1.statoRiscaldamento()) // output 'acceso'

console.log(casa1.spegniRiscaldamento()) // spegne, cambia lo stato a spento
console.log(casa1.statoRiscaldamento()) // output 'acceso'

console.log(casa1.switchaRiscaldamento()) // era spento, accende
console.log(casa1.statoRiscaldamento()) // output 'acceso'
console.log(casa1.switchaRiscaldamento()) // era acceso, spegne
console.log(casa1.statoRiscaldamento()) // output 'spento'

console.log(casa1.accendiRiscaldamento()) // era spento, accende
console.log(casa1.statoRiscaldamento()) // output 'acceso'
console.log(casa1.accendiRiscaldamento()) // era acceso, accende comunque
console.log(casa1.statoRiscaldamento()) // output 'acceso'

console.log(casa1.spegniRiscaldamento()) // era acceso, spegne
console.log(casa1.statoRiscaldamento()) // output 'spento'
console.log(casa1.spegniRiscaldamento()) // era spento, spengo comunque
console.log(casa1.statoRiscaldamento()) // output 'spento'
*/

/*
Esercizio 3
Scrivere una funzione per generare un oggetto inquilino.
Riceve parametri:
 - nome
 - anno di nascita

Espone:
 - metodo saluta() // 'Ciao sono <nome>, ho N anni'
*/

function FnInquilino(nome, annoNascita) {
    const eta = (new Date()).getFullYear() - annoNascita;

    return {
        nome, 
        annoNascita,
        saluta: () => {
            return `Ciao sono ${nome}, ho ${eta} anni`;
        }
    }
}


const inquilino1 = FnInquilino('Pinco', 1981)

/* TEST
console.log(inquilino1)

console.log(inquilino1.saluta())
*/

/*
Esercizio 4
Aggiungere a casa1, senza modificare la funzione FnCasa, i metodi:
 - metodo aggiungiInquilino(inq)
 - metodo elencoInquilini()
 - metodo rimuovi inquiliino(inq)
 */