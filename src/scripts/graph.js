const axios = require('axios');
// var internalData = require('../../coin_data/ada.js')

function generateGraph(coin, data){
    let date = new Date(); // returns date object with current date and time 
    date = date.toISOString();
    let period_id = "1DAY"
    let time_start = "2021-11-15T00:00:00" 
    let time_end = date;  // current date
    let limit = "1000";
    let currentCoin = coin
    console.log(data)
        // axios({
        //     method: 'get',
        //     url: `https://rest.coinapi.io/v1/exchangerate/${currentCoin}/USD/history?period_id=${period_id}&time_start=${time_start}&time_end=${time_end}`,//limit=${limit}`,
        //     headers: {
        //         'X-CoinAPI-Key': '9BE11048-8939-47D8-8CEC-22E693B66137'
        //         // 'X-CoinAPI-Key': 'B1C87260-00AD-44BC-8EFD-02DF3C6984A5'
        //     },
        //     data: {
        //     }
        // }).then(apiObject => {
        let coinPrices = []; //[25000, 30000, 38000, 40000, 45000, 23000, 32000];
        let coinDates = []; //['2015-01-01','2015-04-01', '2016-09-01','2016-10-02', '2016-11-03', '2016-12-04', '2017-09-01'];
        data.forEach(el=>{
            coinPrices.push(el.rate_high)
            coinDates.push(el.time_open.slice(0,10))
        })
        let d3Data = createD3Data(formatDates(coinDates), coinPrices);
        const maxPrice = Math.max(...coinPrices);
        console.log(maxPrice)

        drawGraph(d3Data, maxPrice, coin, data)
//   });
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

function drawGraph(data, maxPrice, coin, newData){ // need to somehow "delete" the graph in beginning to add new graph

    // const width = 1500;
    // const height = 1000;
    const yMax = maxPrice + maxPrice/10;
    
    const margin = { top: 40, right: 80, bottom: 60, left: 50 },
        width = 1500 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;
    // Parse the date / time
    const parseDate = d3.timeParse("%Y-%m-%d"),
        formatDate = d3.timeFormat("%b %d"),
        formatMonth = d3.timeFormat("%b");

    // Set the ranges
    var x = d3
        .scaleTime()
        .domain([data[0][0], data[data.length-1][0]])
        .range([0, width/1.25])
        .nice();
    var y = d3
        .scaleLinear()
        // .domain([0, yMax])
        .range([height/1.5, 0])
        .nice();    
    
    const area = d3
        .area()
        .x((d) => { return x(d.date); })
        .y0(height)
        .y1((d) => { return y(d.price); })
        .curve(d3.curveCardinal);

    var valueLine = d3.line()
        .x(function(d) { return x(d.date); }) 
        .y(function(d) { return y(d.price); });

    const svg = d3
        .select('#d3-display')
        .append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .classed("svg-content", true)
        .attr('id',"svg")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // creates x-axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(150," + 708.5 + ")")
        .call(d3.axisBottom(x).tickFormat(formatMonth))
        //ticks(d3.timeYear))  **// NEED TO CHANGE BACK HERE POTENTIALLY
        .style("color", "E1D9D1");

    // creates y-axis
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(150," + 108.5 + ")")
        .call(d3.axisLeft(y))
        .style("color", "E1D9D1");
        
    // ------------------------------------------------
    // append data
    createLabels(svg, height, width, coin, margin)
    appendData(newData, parseDate, x, y, svg, area, valueLine, width, height, formatDate);
}

function appendData(data, parseDate, x, y, svg, area, valueLine, width, height, formatDate){
    data.forEach((d) => {
        d.date = d.time_period_start.slice(0,10)
        d.date = parseDate(d.date);
        d.price = Number(d.rate_high);
    });

    x.domain(
        d3.extent(data, (d) => {return d.date;})
    )

    y.domain([
        0,
        d3.max(data, (d) => { return d.price; }),
    ]);

    svg
        .select(".x.axis") 
        .transition()
        .duration(500)
        .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b")));
    svg
        .select(".y.axis") 
        .transition()
        .duration(500)
        .call(d3.axisLeft(y));

    const areaPath = svg
        .append("path")
        .data([data])
        .attr("class", "area")
        .attr("d", area)
        .attr("transform", "translate(150,108.5)")
        .transition()
        .duration(1000)
        // .style("stroke", "white")
        // .style("font-weight", "bold")
        // .style("stroke-1", "2")
       
    const linePath = svg
        .append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueLine)
        .style("stroke", "#39FF14")
        .attr("transform", "translate(" + 150 + "," + 108.5 + ")")
        .style("font-weight", "bold")
        .style("stroke-1", "2");

    const pathLength = linePath.node().getTotalLength();

    linePath // graph doesnt display with this?
        // .attr("stroke-dasharray", pathLength)
        // .attr("stroke-dashoffset", pathLength)
        // .attr("stroke-width", 3)
        // .transition()
        // .duration(1000)
        // .attr("stroke-width", 0)
        // .attr("stroke-dashoffset", 0);

    const focus = svg
        .append("g")
        .attr("class", "focus")
        .style("display", "none");

    // append the x line
    focus
        .append("line")
        .attr("class", "x")
        .attr("style", "white")
        .style("stroke-dasharray", "3,3")
        .style("opacity", 0.5)
        .attr("y1", 0)
        .attr("y2", height);

    // append the y line
    focus
        .append("line")
        .attr("class", "y")
        .style("stroke-dasharray", "3,3")
        .style("opacity", 0.5)
        .attr("x1", width)
        .attr("x2", width);

    // append the circle at the intersection
    focus
        .append("circle")
        .attr("class", "y")
        .style("fill", "none")
        .attr("r", 4); // radius

    // place the value at the intersection
    focus.append("text").attr("class", "y1").attr("dx", 8).attr("dy", "-.3em").style("fill", "#E1D9D1");
    focus.append("text").attr("class", "y2").attr("dx", 8).attr("dy", "-.3em").style("fill", "#E1D9D1");

    // place the date at the intersection
    focus.append("text").attr("class", "y3").attr("dx", 8).attr("dy", "1em").style("fill", "#E1D9D1");
    focus.append("text").attr("class", "y4").attr("dx", 8).attr("dy", "1em").style("fill", "#E1D9D1");

    // ==================================================
    function mouseMove(event) {
        const bisect = d3.bisector((d) => d.date).left,
        x0 = x.invert(d3.pointer(event, this)[0]),
        i = bisect(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;

        focus
            .select("circle.y")
            .attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")");

        focus
            .select("text.y1")
            .attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")")
            .text(d.price);

        focus
            .select("text.y2")
            .attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")")
            .text(d.price);

        focus
            .select("text.y3")
            .attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")")
            .text(formatDate(d.date));

        focus
            .select("text.y4")
            .attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")")
            .text(formatDate(d.date));

        focus
            .select(".x")
            .attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")")
            .attr("y2", height - y(d.price));

        focus
            .select(".y")
            .attr("transform", "translate(" + width * -1 + "," + y(d.price) + ")")
            .attr("x2", width + width);
    }

    svg
        .append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", () => {
            focus.style("display", null);
        })
        .on("mouseout", () => {
            focus.style("display", "none");
        })
        .on("touchmove mousemove", mouseMove);
};

function createLabels(svg, height, width, coin, margin){
    // title
    svg.append('text')
        .attr('x', width/2)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Roboto Mono')
        .style('font-size', 48)
        .text(coin)
        .style('fill', '#E1D9D1')
        .attr('font-weight', 700);
    //x-axis label
    svg.append('text')
        .attr('x', width/2)
        .attr('y', height/1.15)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Roboto Mono')
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
        .style('font-family', 'Roboto Mono')
        .style('font-size', 32)
        .style('fill', '#E1D9D1')
        .text('Price ($USD)')
        .attr('font-weight', 700);
}

export {generateGraph, formatDates, createD3Data, drawGraph, createLabels}