const app = document.getElementById('root')

window.app = app;

// console.log("Working");

// const url = "https://rest.coinapi.io"
// let path6 = "/v1/exchangerate/BTC/USD/history?period_id=1DAY&time_start=2016-10-01T00:00:00&time_end=2021-11-01T00:00:00&limit=5000"

// var request = new XMLHttpRequest() 

// request.open('GET', url+path6, true)
// request.setRequestHeader('Accept', 'application/json')
// request.setRequestHeader('X-CoinAPI-Key', '9BE11048-8939-47D8-8CEC-22E693B66137')

// // if (request.status >= 200 && request.status < 400) {
//     console.log(request.status)
//     request.onload = function() {
//         let btcPrices = [];
//         let btcDates = [];
//         window.btcPrices = btcPrices;
//         window.btcDates = btcDates;

//         var data = JSON.parse(this.response)
//         window.data = data;
//         console.log(data);

//         var priceDateHash = {};

//         data.forEach(el=>{
//             btcPrices.push(el.rate_high)
//             btcDates.push(el.time_open.slice(0,10))
//         })

//         for(let i = 0; i < btcPrices.length; i++){
//             priceDateHash[btcDates[i]] = btcPrices[i];
//         }
//         window.priceDateHash = priceDateHash;
//     }
// // }
//     request.send();

//---------------------------------------------------------------------------------
// function getData() {
//     const response = await fetch('https://ghibliapi.herokuapp.com/films')
//     const data = await response.json()
//   
//---------------------------------------------------------------------------------
// const https = require('../../node_modules/https/package');

