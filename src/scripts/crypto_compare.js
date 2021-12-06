


// let url = "https://min-api.cryptocompare.com/data/dayAvg?fsym=BTC&tsym=USD?tots"

// var request = new XMLHttpRequest() 

// request.open('GET', url, true)
// request.setRequestHeader('Accept', 'application/json')
// request.setRequestHeader('authorization', 'Apikey 9BE11048-8939-47D8-8CEC-22E693B66137')

// if (request.status >= 200 && request.status < 400) {
    // console.log(request.status)
    // request.onload = function() {
        // let btcPrices = [];
        // let btcDates = [];
        // window.btcPrices = btcPrices;
        // window.btcDates = btcDates;

        // var data = JSON.parse(this.response)
        // window.data = data;
        // console.log(data);

        // var priceDateHash = {};

        // data.forEach(el=>{
        //     btcPrices.push(el.rate_high)
        //     btcDates.push(el.time_open.slice(0,10))
        // })

        // for(let i = 0; i < btcPrices.length; i++){
        //     priceDateHash[btcDates[i]] = btcPrices[i];
        // }
        // window.priceDateHash = priceDateHash;
    // }
// }
    // request.send();