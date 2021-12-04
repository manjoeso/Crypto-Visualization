const app = document.getElementById('root')

window.app = app;



var request = new XMLHttpRequest()

request.open('GET', "https://ghibliapi.herokuapp.com/films", true)

request.onload = function() {
    var data = JSON.parse(this.response)
    data.forEach(movie => {
        console.log(movie.title)
    })
}

request.send();




// }

// request.send()

// function getData() {
//     const response = await fetch('https://ghibliapi.herokuapp.com/films')
//     const data = await response.json()
//   }

//   +