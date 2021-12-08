// import Example from "./scripts/example";
import {generateGraph, formatDates, createD3Data, drawGraph, createLabels} from "./scripts/graph.js";

import {btcData} from "../coin_data/btc.js"
import {ethData} from "../coin_data/eth.js"
import {adaData} from "../coin_data/ada.js"
import {solData} from "../coin_data/sol.js"
import {dogeData} from "../coin_data/doge.js"
// console.log(dogeData)
require('./scripts/graph.js')

document.addEventListener("DOMContentLoaded", () => {
    const liElements = document.querySelectorAll('li')
    generateGraph("BTC", btcData)
    liElements.forEach(function(li) {
        li.addEventListener("click", e=>{
            d3.select("svg").remove();
            if(li.getAttribute('id') === "BTC"){
                generateGraph(li.getAttribute('id'), btcData)
            } else if(li.getAttribute('id') === "ETH"){
                generateGraph(li.getAttribute('id'), ethData)
            } else if(li.getAttribute('id') === "ADA"){
                generateGraph(li.getAttribute('id'), adaData)
            } else if(li.getAttribute('id') === "SOL"){
                generateGraph(li.getAttribute('id'), solData)
            } else if(li.getAttribute('id') === "DOGE"){
                generateGraph(li.getAttribute('id'), dogeData)
            }
        })
    })
})

