const app = document.getElementById('root')
const axios = require('axios');
// make pojo with keys as method, values 
// could also pack into a class
// export at the end
// class Graph {
//     constructor(coin){
//         this.coin = coin;
//     }
// create pojo with keys as functions, ajaz twitter and TTT
function generateGraph(coin){
    let date = new Date(); // returns date object with current date and time 
    date = date.toISOString();
    let period_id = "1DAY"
    let time_start = "2020-10-01T00:00:00" 
    let time_end = "2021-01-01T00:00:00"  // current date
    // let limit = "100"
    let currentCoin = "BTC"
        axios({
            method: 'get',
            url: `https://rest.coinapi.io/v1/exchangerate/${currentCoin}/USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}`,//&limit=${limit}`,
            headers: {
                // 'X-CoinAPI-Key': '9BE11048-8939-47D8-8CEC-22E693B66137'
                'X-CoinAPI-Key': 'B1C87260-00AD-44BC-8EFD-02DF3C6984A5'
            },
            data: {
            }
        }).then(apiObject => {
        let coinPrices = []; //[30000, 38000, 41000, 45000, 23000, 32000];
        let coinDates = []; //['2015-04-01', '2016-09-01','2016-10-02', '2016-11-03', '2016-12-04', '2017-09-01'];
            apiObject.data.forEach(el=>{
                coinPrices.push(el.rate_high)
                coinDates.push(el.time_open.slice(0,10))
            })
        let d3Data = createD3Data(formatDates(coinDates), coinPrices);
        const maxPrice = Math.max(...coinPrices);
        drawGraph(d3Data, maxPrice, coin);
  });
}

function formatDates(coinDates){
    let dateNum = [];
    for(let i = 0; i < coinDates.length; i++){
        coinDates[i] = new Date(coinDates[i]) // converts dates into date objects
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

function drawGraph(data, maxPrice, coin){ // need to somehow "delete" the graph in beginning to add new graph
    const width = 1500;
    const height = 1000;
    var svg = d3.select('#d3-display')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('id',"svg");
    const yMax = maxPrice + maxPrice/10;
    var xScale = d3
        .scaleTime()
        .domain([data[0][0], data[data.length-1][0]])
        .range([0, width/1.5])
        .nice();
    var yScale = d3
        .scaleLinear()
        .domain([0, yMax])
        .range([height/2, 0])
        .nice();    
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
        .style("stroke", "#39FF14")
        .style("font-weight", "bold")
        .style("stroke-1", "2");
    // ---------------------------------------------------------------------
    // creates x-axis
    svg.append("g")
        .attr("transform", "translate(250," + 625 + ")")
        .call(d3.axisBottom(xScale).ticks(d3.timeMonth)) //change to timeYear if need
        .style("color", "E1D9D1"); 
    // creates y-axis
    svg.append("g")
        .attr("transform", "translate(250," + 125 + ")")
        .call(d3.axisLeft(yScale))
        .style("color", "E1D9D1"); 
    // Create Title
    svg.append('text')
        .attr('x', width/2)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 24)
        .text(coin)
        .style('fill', '#E1D9D1')
        .attr('font-weight', 700);
    //x-axis label
    svg.append('text')
        .attr('x', width/2)
        .attr('y', height/1.45)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 24)
        .style('fill', '#E1D9D1')
        .text('Time (Days)')
        .attr('font-weight', 700);
    //y-axis label
    svg.append('text')
        .attr('x', height/1.6)
        .attr('y', width/12)
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 24)
        .style('fill', '#E1D9D1')
        .text('Price ($USD)')
        .attr('font-weight', 700);
}
// }
// > formatDate = d3.time.format("%b-%Y")
// > formatDate(parseDate('2003-01-01'))
// "Jan-2003"
// do this part on display?

generateGraph();