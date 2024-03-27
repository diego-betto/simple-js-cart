function addRow(pSku, pProdotto, pPrezzo, pQta) {
    const row = document.createElement('tr');

    const elSku = document.createElement('td');
    const elProdotto = document.createElement('td');
    const elPrezzo = document.createElement('td');
    const elQta = document.createElement('td');
    const elTotale = document.createElement('td');

    elSku.innerHTML = pSku;
    elProdotto.innerHTML = pProdotto;
    elPrezzo.innerHTML = pPrezzo;
    elQta.innerHTML = pQta;
    elTotale.innerHTML = pPrezzo * pQta;

    row.appendChild(elSku)
    row.appendChild(elProdotto)
    row.appendChild(elPrezzo)
    row.appendChild(elQta)
    row.appendChild(elTotale)

    carrelloElement.appendChild(row)
}

const cart = () => {
    const items = [];

    return {
        oggetti: () => items, // dammi tutti gli elementi
        aggiungi: (prodotto) => { // aggiunge prodotto a items
            // cerco negli items un prodotto con stesso sku
            // se c'è posizioneElemento sarà >= 0
            // altrimenti sarà -1
            const posizioneElemento = items.findIndex(function(el) {
                return el.sku === prodotto.sku;
            })

            // equivalente con arrow function della funzione sopra
            // const posizioneElemento = items.findIndex(el => el.sku === prodotto.sku)

            if (posizioneElemento === -1) {
                // non c'è, quindi aggiungilo direttamente
                items.push({
                    ...prodotto,
                    ...{qta: 1}
                })

                // alternativa ma non ottimale
                // prodotto.qta = 1;
                // items.push(prodotto)
            } else {
                // prodotto esiste, incrementa la sua qta
                items[posizioneElemento].qta += 1;
            }
        },
        qta: () => items.length, // dammi quanti elementi ci sono in carrello
        totale: () => {
            return items.reduce((acc, item) => acc + item.qta * item.prezzo, 0)

            // modo con reduce
            // const tot = items.reduce(function(totaleCorrente, item){
            //     totaleCorrente += item.qta * item.prezzo
            //     return totaleCorrente;
            // },0)
            // return tot

            // modo classico
            // let tot = 0;
            // items.forEach(function(item) {
            //     tot += item.qta * item.prezzo;
            // })
            // return tot

        } // dammi il totale di tutti i prodotti per i loro prezzi
    }
}

function updateCartTable() {
    carrelloElement.innerHTML = '';
    
    Carrello.oggetti().forEach(function(item){
        addRow(
            item.sku, 
            item.nome, 
            item.prezzo, 
            item.qta
        )
    })
}

function handleProductClick(prodotto) {
    Carrello.aggiungi(prodotto)

    qtaElement.textContent = Carrello.qta();
    totalElement.textContent = Carrello.totale();

    updateCartTable()
    updateProductsList()
}
/** MAIN */
const prodotti = [
    {
        sku: 'GAME01',
        nome: 'Gran Theft Auto',
        prezzo: 70,
        magazzino: 100
    },
    {
        sku: 'GAME02',
        nome: 'Call of Duty',
        prezzo: 26,
        magazzino: 50
    },
    {
        sku: 'GAME03',
        nome: 'Fifa Pro Evolution',
        prezzo: 26,
        magazzino: 50
    },
    {
        sku: 'GAME04',
        nome: 'Ghost and Gobblins',
        prezzo: 26,
        magazzino: 50
    },
    {
        sku: 'GAME05',
        nome: 'Xonotic',
        prezzo: 26,
        magazzino: 50
    },
    {
        sku: 'GAME06',
        nome: 'SIMS 4',
        prezzo: 26,
        magazzino: 50
    },
    {
        sku: 'GAME07',
        nome: 'Unreal Tournament 2004',
        prezzo: 26,
        magazzino: 50
    }
];

// versione classica, sotto uso invece la versione arrow function
// function updateProductsList(cercato) {

const updateProductsList = (cercato) => {
    productsList.innerHTML = '';

    prodotti
    .filter((p) => !cercato || p.nome.toLowerCase().indexOf(cercato.toLowerCase()) >= 0)
    .forEach(function(item) {
        const listItem = document.createElement('li');
    
        // listItem.innerHTML = item.nome + ' <b>' + item.prezzo + '€</b>';
        listItem.innerHTML = `${item.nome}<b>${item.prezzo}€</b>`;

        console.log(
            Carrello.oggetti(),
            item
        )

        if (Carrello.oggetti().findIndex((i) => item.sku === i.sku) >=0) {
            listItem.className = 'added'
        }
    
        listItem.addEventListener(
            'click',
            () => handleProductClick(item)
        )
    
        productsList.appendChild(listItem)
    })
}

let qtaElement;
let totalElement;

let productsList;
let carrelloElement;

let searchField;

let qta = 0;
const prezzo = 120;
let Carrello;

document.addEventListener('DOMContentLoaded', () => {
    qtaElement = document.getElementById('qta')
    totalElement = document.getElementById('total')
    
    productsList = document.getElementById('items')
    carrelloElement = document.getElementById('carrello')

    searchField = document.getElementById('cerca')

    Carrello = cart();

    updateProductsList();

    // aggiungo un event listener al campo di input in modo che quando premo 
    // un tasto rieseguo l'aggiornamento della lista di prodotti
    searchField.addEventListener(
        'input',
        (event) => {
            // cerco il valore dentro il target che è il campo di input
            // ovvero il target dell'evento
            const valoreCercato = event.target.value;

            updateProductsList(valoreCercato);
        }
    )
})