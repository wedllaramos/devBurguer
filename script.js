const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterVegan = document.querySelector('.filter-vegan')

const list = document.querySelector('ul')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue
}

function showAll(productsArray) {
    let myLi = ''//reseta o menu

    productsArray.forEach(product => {
        myLi += `
            <li>
            <img src= ${product.src}>
            <p>${product.name}</p>
            <p class="price">R$ ${formatCurrency(product.price)}</p>
        </li>
        `
    })

    list.innerHTML = myLi
}

function mapItems(){
    const newPrices = menuOptions.map(product => ({
        ...product, //Spread Operator
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}

function sumItems(){
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
    </li>
    `
}

function filterItems() {
    const veganItems = menuOptions.filter(product => product.vegan)

    showAll(veganItems)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapItems)
buttonSumAll.addEventListener('click', sumItems)
buttonFilterVegan.addEventListener('click', filterItems)

