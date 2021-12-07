const axios = require('axios');

function generateGraph(coin){
    // d3.selectAll("svg > *").remove();    
    let date = new Date(); // returns date object with current date and time 
    date = date.toISOString();
    let period_id = "1DAY"
    let time_start = "2021-11-15T00:00:00" 
    let time_end = date;  // current date
    let limit = "1000";
    let currentCoin = coin
        axios({
            method: 'get',
            url: `https://rest.coinapi.io/v1/exchangerate/${currentCoin}/USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}`,//limit=${limit}`,
            headers: {
                'X-CoinAPI-Key': '9BE11048-8939-47D8-8CEC-22E693B66137'
                // 'X-CoinAPI-Key': 'B1C87260-00AD-44BC-8EFD-02DF3C6984A5'
            },
            data: {
            }
        }).then(apiObject => {
        let coinPrices = [];//[25000, 30000, 38000, 40000, 45000, 23000, 32000];
        let coinDates = [];// ['2015-01-01','2015-04-01', '2016-09-01','2016-10-02', '2016-11-03', '2016-12-04', '2017-09-01'];
        // let coinDates = [0, 1, 2, 3, 4, 5, 6]
            apiObject.data.forEach(el=>{
                coinPrices.push(el.rate_high)
                coinDates.push(el.time_open.slice(0,10))
            })
        let d3Data = createD3Data(formatDates(coinDates), coinPrices);
        const maxPrice = Math.max(...coinPrices);
        drawGraph(d3Data, maxPrice, coin)
  });
}

function formatDates(coinDates){
    let dateNum = [];
    for(let i = 0; i < coinDates.length; i++){
        coinDates[i] = new Date(coinDates[i]) // converts dates into date objects
        // coinDates[i] = i;
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
    const yMax = maxPrice + maxPrice/10;
    
    var svg = d3.select('#d3-display')
        .append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .classed("svg-content", true)
        .attr('id',"svg");
    // Set the ranges
    var x = d3
        .scaleTime()
        .domain([data[0][0], data[data.length-1][0]])
        .range([0, width/1.25])
        .nice();
    var y = d3
        .scaleLinear()
        .domain([0, yMax])
        .range([height/1.5, 0])
        .nice();    

    // creates x-axis
    svg.append("g")
        .attr("transform", "translate(150," + 775 + ")")
        .call(d3.axisBottom(x).ticks(d3.timeDay)) //change to timeYear if need
        .style("color", "E1D9D1"); 
    // creates y-axis
    svg.append("g")
        .attr("transform", "translate(150," + 108.5 + ")")
        .call(d3.axisLeft(y))
        .style("color", "E1D9D1"); 
        
    var line = d3.line()
        .x(function(d) { return x(d[0]); }) 
        .y(function(d) { return y(d[1]); });

    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d[0]); } ) // x-coordinate of data point
        .attr("cy", function (d) { return y(d[1]); } ) // y-coordinate of data point
        .attr("r", 2)
        .attr("transform", "translate(" + 150 + "," + 108.5 + ")")
        .style("fill", "#39FF14");
        // .curve(d3.curveMonotoneX)
    svg.append("path")
        .datum(data) 
        .attr("class", "line") 
        .attr("transform", "translate(" + 150 + "," + 108.5 + ")")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#39FF14")
        .style("font-weight", "bold")
        .style("stroke-1", "2")
        // .on('mouseover', function (d, i) {
        //     d3.select(this).transition()
        //         .duration('50')
        //         .attr('opacity', '.6')
        // });
    // ---------------------------------------------------------------------
    // Create Title
    svg.append('text')
        .attr('x', width/2)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 48)
        .text(coin)
        .style('fill', '#E1D9D1')
        .attr('font-weight', 700);
    //x-axis label
    svg.append('text')
        .attr('x', width/2)
        .attr('y', height/1.15)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 32)
        .style('fill', '#E1D9D1')
        .text('Time (Days)')
        .attr('font-weight', 700);
    //y-axis label
    svg.append('text')
        .attr('x', height/1.55)
        .attr('y', width/65)
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height/.95 + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 32)
        .style('fill', '#E1D9D1')
        .text('Price ($USD)')
        .attr('font-weight', 700);
}
    
// > formatDate = d3.time.format("%b-%Y")
// > formatDate(parseDate('2003-01-01'))
// "Jan-2003"
// do this part on display?

export {generateGraph, formatDates, createD3Data, drawGraph}