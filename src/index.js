// import Example from "./scripts/example";
import {generateGraph, formatDates, createD3Data, drawGraph} from "./scripts/graph.js";
require('./scripts/graph.js')
document.addEventListener("DOMContentLoaded", () => {

    generateGraph("BTC")

    const liElements = document.querySelectorAll('li')
    liElements.forEach(function(li) {
        li.addEventListener("click", e=>{
            d3.select("svg").remove();
            generateGraph(li.getAttribute('id'))
        })
    })


})

