// import Example from "./scripts/example";


document.addEventListener("DOMContentLoaded", () => {
    require('./scripts/coinapi.js');
    require('./scripts/crypto_compare.js');
    require('./scripts/coin_marketcap.js')
})



const dataset1 = [
    [0,0], [5,20000], [10,25000],
    [15, 30000], [20, 25000], [25, 40000],
    [30, 42000], [35, 38000], [40, 45000],
    [45, 35000], [50, 45000], [55, 50000],
    [60, 55000], [65, 45000], [70, 35000],
    [75, 45000], [80, 55000], [85, 60000],
    [90, 50000], [95, 55000], [100, 50000]
];

const width = 1000;
const height = 750;
const margin = 50;

var svg = d3.select('#d3-display')
    .append('svg')
    .attr('height', height - margin)
    .attr('width', width - margin);

// // will have to somehow compute max values here, and use in x and y scale

var xScale = d3.scaleLinear().domain([0,100]).range([0, width/2]);
var yScale = d3.scaleLinear().domain([0,60000]).range([height/2, 0]);


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

svg.append("g")
    .attr("transform", "translate(250," + 500 + ")")
    .call(d3.axisBottom(xScale));

svg.append("g")
    .attr("transform", "translate(250," + 125 + ")")
    .call(d3.axisLeft(yScale));


svg.append('g')
    .selectAll("dot")
    .data(dataset1)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale(d[0]); } )
    .attr("cy", function (d) { return yScale(d[1]); } )
    .attr("r", 4)
    .attr("transform", "translate(" + 250 + "," + 125 + ")")
    .style("fill", "#CC0000");

var line = d3.line()
    .x(function(d) { return xScale(d[0]); }) 
    .y(function(d) { return yScale(d[1]); }) 
    .curve(d3.curveMonotoneX)
    
svg.append("path")
    .datum(dataset1) 
    .attr("class", "line") 
    .attr("transform", "translate(" + 250 + "," + 125 + ")")
    .attr("d", line)
    .style("fill", "none")
    .style("stroke", "#CC0000")
    .style("stroke-width", "2");


// const data = [ // source data, can make array just like this with name -> date, score -> price
//     { name: 'Simon', score: 80},
//     { name: 'Mary', score: 90},
//     { name: 'John', score: 60}
// ];

// const width = 800; // width of SVG
// const height = 400; // height of SVG
// const margin  = { top: 50, bottom: 50, left: 50, right: 50} // margin of SVG

// const svg = d3.select('#d3-display') // selects the div named in HTML code, svg is the box that holds the chart / graph, selects
//     .append('svg')
//     // .border()
//     .attr('height', height - margin.top - margin.bottom)
//     .attr('width', width - margin.left - margin.right)
//     .attr('viewBox', [0, 0, width, height]); // viewbox takes in array

// // // create scale for x and y axis

// const x = d3.scaleBand() // crate scale for x axis, normalizes?
//     .domain(d3.range(data.length)) // range of elements
//     .range([margin.left, width - margin.right]) // range is an array
//     .padding(0.1);

// const y = d3.scaleLinear()
//     .domain([0, 100]) // scores are 0 to 100, must be dynamic for pricing in actual graph
//     .range([height - margin.bottom, margin.top]);

//     svg 
//     .append('g')
//     .attr('fill', 'royalblue')
//     .selectAll('rect')
//     .data(data.sort((a,b) => d3.descending(a.score, b.score)))
//     .join('rect')
//         .attr('x', (d, i) => x(i))
//         .attr('y', (d) => y(d.score))
//         .attr('height', d => y(0) - y(d.score))
//         .attr('width', x.bandwidth())
//         .attr('class', 'rectangle')

// function xAxis(g) {
//     g.attr('transform', `translate(0, ${height - margin.bottom})`)
//         .call(d3.axisBottom(x).tickFormat(i => data[i].name))
//         .attr('font-size', '20px')
// }

// function yAxis(g) {
//     g.attr('transform', `translate(${margin.left}, 0)`)
//     .call(d3.axisLeft(y).ticks(null, data.format))
//     .attr('font-size', '20px')

// }

// svg.append('g').call(yAxis);
// svg.append('g').call(xAxis);
// svg.node();