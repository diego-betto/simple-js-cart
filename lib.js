const Item = (nome, prz, qtaIniziale, sku) => {
    let qta = qtaIniziale 
    
    return {
      sku,
      nome,
      prz,
      getQta: () => qta,
      setQta: (q) => {
          qta = q
      },
      totale: () => prz * qta
    }
}

const Carrello = () => {
    const items = [];

    return {
        oggetti: () => items,
        aggiunti: (item) => {
            if (items.length === 0){
                items.push(item)
            } else {
                const itemPos = items.findIndex(function(singleItem){
                  return singleItem.sku === item.sku
                });

                if (itemPos >= 0){
                   items[itemPos].setQta(item.getQta())
                } else {
                   items.push(item)
                }
            }
        },
        qta: () => items.length,
        totale: () => items.reduce(function(acc, curr) {
            acc += curr.totale()
            return acc
        }, 0),
    }
}

const cart = () => {
    const items = [];

    return {
        oggetti: () => items,
        aggiungi: () => {},
        qta: () => items.length,
        totale: () => {}
    }
}





