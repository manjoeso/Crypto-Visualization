const axios = require('axios');

function generateGraph(coin, data){
    let date = new Date(); // returns date object with current date and time 
    date = date.toISOString();
    // let options = {period_id: "1DAY", time_start: "2021-11-15T00:00:00" ,time_end: date, limit: "1000" }
        // axios({
        //     method: 'get',
            // url: `https://rest.coinapi.io/v1/exchangerate/${coin}/USD/history?period_id=${options.period_id}&time_start=${options.time_start}&time_end=${options.time_end}`,//limit=${options.limit}`,
        //     headers: {
        //         'X-CoinAPI-Key': '9BE11048-8939-47D8-8CEC-22E693B66137'
        //         // 'X-CoinAPI-Key': 'B1C87260-00AD-44BC-8EFD-02DF3C6984A5'
        //     },
        //     data: {
        //     }
        // }).then(apiObject => {
        let coinPrices = []; 
        let coinDates = []; 
        data.forEach(el=>{
            coinPrices.push(el.rate_high)
            coinDates.push(el.time_open.slice(0,10))
        })
        const maxPrice = Math.max(...coinPrices);
        drawGraph(maxPrice, coin, data)
//   });
}

function formatDates(coinDates){
    let dateNum = [];
    for(let i = 0; i < coinDates.length; i++){
        coinDates[i] = new Date(coinDates[i]) // converts dates into date objects
    }
    return coinDates;
}

function drawGraph(maxPrice, coin, newData){ 
    const yMax = maxPrice + maxPrice/10;
    
    const margin = { top: 40, right: 80, bottom: 60, left: 50 },
        width = 1500 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;
    // Parse the date / time
    const parseDate = d3.timeParse("%Y-%m-%d"),
        formatDate = d3.timeFormat("%b %d %Y"),
        formatMonth = d3.timeFormat("%b");
    // Set the ranges
    var x = d3
        .scaleTime()
        .range([0, width/1.25])
        .nice();
    var y = d3
        .scaleLinear()
        .range([height/1.5, 0])
        .nice();    
    
    const area = d3
        .area()
        .x((d) => { return x(d.date); })
        .y0(height)
        .y1((d) => { return y(d.price); })
        .curve(d3.curveCardinal)
        

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
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


        createAxes(svg, x, y, formatMonth);
        createLabels(svg, height, width, coin, margin)
        appendData(newData, parseDate, x, y, svg, area, valueLine, width, height, formatDate);
    }
    
function createAxes(svg, x, y, formatMonth){
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
}    

function appendData(data, parseDate, x, y, svg, area, valueLine, width, height, formatDate){
    data.forEach((d) => {
        d.date = d.time_period_start.slice(0,10)
        d.date = parseDate(d.date);
        if(d.rate_high > 5){
            d.price = Number(Math.round((d.rate_high)*100)/100)
        } else {
            d.price = Number(Math.round((d.rate_high)*100000)/100000);
        }
    });
    x.domain(
        d3.extent(data, (d) => {return d.date;})
    )
    y.domain([0,d3.max(data, (d) => { return d.price; }),
    ]);

    svg
        .select(".x.axis") 
        .transition()
        .duration(500)
        .call(d3.axisBottom(x).ticks(d3.timeYear))
    svg
        .select(".y.axis") 
        .transition()
        .duration(500)
        .call(d3.axisLeft(y));

    // const areaPath = svg
    //     .append("path")
    //     .data([data])
    //     .attr("class", "area")
    //     .attr("d", area)
    //     .attr("transform", "translate(150,108.5)")
    //     .transition()
    //     .duration(1000)
    //     .style("stroke", "")
    //     .style("font-weight", "bold")
    //     .style("stroke-1", "2")
    //     .style("background", "transparent");;

       
    const linePath = svg
        .append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueLine)
        .style("stroke", "#0451cf")
        .attr("transform", "translate(" + 150 + "," + 108.5 + ")")
        .style("font-weight", "bolder")
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
        .style("display", "none")
        .attr("transform", "translate(" + 150 + "," + 108.5 + ")"); // this moved!!

    // intersection x line
    focus
        .append("line")
        .attr("class", "x")
        .attr("style", "white")
        .style("solid", "3,3")
        .style("opacity", 0.5)
        .attr("y1", 0)
        .attr("y2", height)
        .attr("transform", "translate(" + 150 + "," + 0 + ")");

    // intersection y line
    focus
        .append("line")
        .attr("class", "y")
        .style("solid", "3,3")
        .style("opacity", 0.5)
        .attr("x1", width)
        .attr("x2", width) 
        .attr("transform", "translate(" + 0 + "," + 108.5 + ")");

    // append the circle at the intersection
    focus
        .append("circle")
        .attr("class", "y")
        .style("fill", "none")
        .attr("r", 4); // radius

    // place the value at the intersection
    focus.append("text").attr("class", "y1").attr("dx", 8).attr("dy", "-.3em").style("fill", "#E1D9D1");
    // place the date at the intersection
    focus.append("text").attr("class", "y3").attr("dx", 8).attr("dy", "1em").style("fill", "#E1D9D1");

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
            .text(`$${d.price}`);

        focus
            .select("text.y3")
            .attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")")
            .text(formatDate(d.date));

        // draws x-interecept line
        focus
            .select(".x")
            .attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")")
            .attr("y2", height - y(d.price) - 300);

        // draws y-interecept line
        focus
            .select(".y")
            .attr("transform", "translate(" + width * -1 + "," + y(d.price) + ")")
            .attr("x2", width + width - width/5);
    }

    svg
        .append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all")
        .attr("transform", "translate(" + 150 + "," + 0 + ")")
        .on("mouseover", () => {
            focus.style("display", null);
        })
        .on("mouseout", () => {
            focus.style("display", "none");
        })
        .on("touchmove mousemove", mouseMove);
};

function createLabels(svg, height, width, coin, margin){
    // Create title
    svg.append('text')
        .attr('x', width/2)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Roboto Mono')
        .style('font-size', 48)
        .text(coin)
        .style('fill', '#E1D9D1')
        .attr('font-weight', 700);
    // Create x-axis label
    svg.append('text')
        .attr('x', width/2)
        .attr('y', height/1.15)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Roboto Mono')
        .style('font-size', 32)
        .style('fill', '#E1D9D1')
        .text('Time')
        .attr('font-weight', 700);
    // Create y-axis label
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

export {generateGraph, formatDates, drawGraph, createLabels}