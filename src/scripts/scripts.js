const app = document.getElementById('root')

window.app = app;

console.log("Working");



const url = "http://rest.coinapi.io"

let path1 = "/v1/exchangerate/BTC/USD"
let path2 = "/v1/ohlcv/BTC/history?period_id=1MIN&time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00"
let path3 = "/v1/exchangerate/history/periods"
let path4 = "/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1MIN" 
let path5 = "/v1/exchangerate/BTC/USD/history"
let path6 = "/v1/exchangerate/BTC/ETH/history?period_id=1MIN?time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00"

// const apiKey = "?apikey=9BE11048-8939-47D8-8CEC-22E693B66137"

var request = new XMLHttpRequest() 


request.open('GET', url+path6, true)
// request.open('GET', "https://rest.coinapi.io/v1/ohlcv/BTC/history?period_id=1MIN&time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00&limit=100", true)
request.setRequestHeader('Accept', 'application/json')
request.setRequestHeader('X-CoinAPI-Key', '9BE11048-8939-47D8-8CEC-22E693B66137')

// request.setRequestHeader('Accept-Encoding', 'deflate, gzip')
// if (request.status >= 200 && request.status < 400) {
    console.log(request.status)
    request.onload = function() {
        var data = JSON.parse(this.response)
        console.log(data);
    }
// }
    request.send();

//---------------------------------------------------------------------------------
// function getData() {
//     const response = await fetch('https://ghibliapi.herokuapp.com/films')
//     const data = await response.json()
//   
//---------------------------------------------------------------------------------
// const https = require('../../node_modules/https/package');

