const app = document.getElementById('root')

window.app = app;



var request = new XMLHttpRequest()

request.open('GET', "https://api.cryptowat.ch/markets/kraken/btceur/price", true)

request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data);
}

request.send();




// }

// request.send()

// function getData() {
//     const response = await fetch('https://ghibliapi.herokuapp.com/films')
//     const data = await response.json()
//   }

//   +