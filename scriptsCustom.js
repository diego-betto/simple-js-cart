const itemsElement = document.getElementById('items')
const li1 = document.createElement('li')
const li2 = document.createElement('li')

li1.innerText = 'primo prodotto'
li2.innerText = 'secondo prodotto'

// li1.addEventListener('click', () => alert('hai cliccato'))
// li2.addEventListener('click', function() {alert('hai cliccato')})

// li1.addEventListener('click', (event) => alert(event.target.innerText))
// li2.addEventListener('click', (event) => alert(event.target.innerText))

itemsElement.appendChild(li1)
itemsElement.appendChild(li2)

const lis = document.getElementsByTagName('li')
Array.from(lis).forEach((element) => {
    element.addEventListener(
        'click', 
        (event) => alert(event.target.innerText)
    )
})

