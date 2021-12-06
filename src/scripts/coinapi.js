const app = document.getElementById('root')

console.log("Working");

const axios = require('axios');

const dataset1 = [
    [0,0], [1,20000], [2,25000],
    [3, 30000], [4, 25000], [5, 40000],
    [6, 42000], [7, 38000], [8, 45000],
    [9, 35000], [10, 45000], [11, 50000],
    [12, 55000], [13, 45000], [14, 35000],
    [15, 45000], [16, 55000], [17, 60000],
    [18, 50000], [19, 55000], [20, 50000]
];

let date = new Date(); // returns date object with current date and time 
date = date.toISOString();
// const month = date.getMonth();
// const year = date.getFullYear();
window.date = date;

const width = 1000;
const height = 750;
const margin = 50;

// need to add current date using date object, format and interpolate into url request
// (eventually) need to interpolate coin depending on event listener

// let period_id = "1DAY"
// let time_start = "2020-09-01T00:00:00" 
// let time_end = date // current date
// let limit = "1000"
// let currentCoin = "BTC"

// axios({
//     method: 'get',
//     url: `https://rest.coinapi.io/v1/exchangerate/${currentCoin}/USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}&limit=${limit}`,
//     headers: {
//         'X-CoinAPI-Key': '9BE11048-8939-47D8-8CEC-22E693B66137'
//     },
//     data: {
//     } 
//   }).then(apiObject => {
        let coinPrices = [30000, 38000, 41000, 45000, 23000, 32000];
        let coinDates =  ['2015-04-01', '2016-09-01','2016-10-02', '2016-11-03', '2016-12-04', '2017-09-01'];

        // apiObject.data.forEach(el=>{
        //     coinPrices.push(el.rate_high)
        //     // candlestick 2
        //     // candlestick 3
        //     // candlestick 4
        //     coinDates.push(el.time_open.slice(0,10))
        // })
        let d3Data = createD3Data(formatDates(coinDates), coinPrices);

        const maxPrice = Math.max(...coinPrices);
        drawGraph(d3Data, maxPrice);
//   });

function formatDates(coinDates){
    let dateNum = [];
    for(let i = 0; i < coinDates.length; i++){
        coinDates[i] = new Date(coinDates[i]) // converts dates into date objects
        // dateNum.push(i);
    }
    return coinDates;
}

function createD3Data(coinDates, coinPrices){
    let d3Data = [];
    for(let i = 0; i < coinDates.length; i++){
        d3Data[i] = [coinDates[i], coinPrices[i]];
    }
    return d3Data;
}

// > formatDate = d3.time.format("%b-%Y")
// > formatDate(parseDate('2003-01-01'))
// "Jan-2003"
// do this part on display?

function drawGraph(data, maxPrice){ // need to somehow "delete" the graph in beginning to add new graph
    var svg = d3.select('#d3-display')
        .append('svg')
        .attr('height', height - margin)
        .attr('width', width - margin);

    const xMax = data.length - 1;
    const yMax = maxPrice + maxPrice/10;

    var xScale = d3
        .scaleTime()
        .domain([data[0][0], data[data.length-1][0]])
        .range([0, width/2])
        .nice();
 
    var yScale = d3
        .scaleLinear()
        .domain([0, yMax])
        .range([height/2, 0])
        .nice();
    // debugger
    
    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } ) // x-coordinate of data point
        .attr("cy", function (d) { return yScale(d[1]); } ) // y-coordinate of data point
        .attr("r", 2)
        .attr("transform", "translate(" + 250 + "," + 125 + ")")
        .style("fill", "#39FF14");
    
    var line = d3.line()
        .x(function(d) { return xScale(d[0]); }) 
        .y(function(d) { return yScale(d[1]); }) 
        // .curve(d3.curveMonotoneX)
    

    svg.append("path")
        .datum(data) 
        .attr("class", "line") 
        .attr("transform", "translate(" + 250 + "," + 125 + ")")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#000000")
        .style("stroke-width", "2");

    // ---------------------------------------------------------------------
    
    // creates x-axis
    svg.append("g")
        .attr("transform", "translate(250," + 500 + ")")
        .call(d3.axisBottom(xScale).ticks(d3.timeYear)); //change to timeYear if need

    // creates y-axis
    svg.append("g")
        .attr("transform", "translate(250," + 125 + ")")
        .call(d3.axisLeft(yScale)); 

    // Create Title
    svg.append('text')
        .attr('x', width/2)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 24)
        .text('Bitcoin Price Over Time');

    //x-axis label
    svg.append('text')
        .attr('x', width/2)
        .attr('y', 600)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 24)
        .text('Time(Days)');

    //y-axis label
    svg.append('text')
        .attr('x', 400)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 24)
        .text('Price ($USD)');
}



