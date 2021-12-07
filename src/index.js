// import Example from "./scripts/example";
document.addEventListener("DOMContentLoaded", () => {
    require('./scripts/graph.js')
})
// grabs all list elements
const liElements = document.querySelectorAll('li')
// adds event listener to each li element, passing through it's id as the coin name the g graph
liElements.forEach(li => {
    li.addEventListener("click", generateGraph(li.getAttribute('id')))
})

// document.getElementById('ETH').addEventListener("click", generateGraph());
// document.getElementById('BTC').addEventListener("click", generateGraph('ETH'));

const ethEle = document.querySelector('#ETH');
console.log(ethEle)



// const eth = document.querySelector('#ETH');

// eth.addEventListener('click', generateGraph('BTC-TEST'))
// window.eth = eth;

// document.getElementById('ETH').addEventListener("click", generateGraph('ETH'));
// document.getElementById('BTC').addEventListener("click", generateGraph('BTC'));


