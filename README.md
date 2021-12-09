# Crypto Data Visualization 

## Background 

This project will be a datavisualization of the 
top 5 crypto currencies: Bitcoin, Etherium, Cardano,
Solana, and Dogecoin. There will be a clickable list of
these 5 currencies as a bar on the left side of the 
page. When one of the currencies is clicked, the display
in the middle will be updated with a chart for that 
specific coin.

The chart will be a line graph displaying time on the
x-axis, and price (in $USD) on the y-axis. When you 
hover over the line, it will show display a tool tip
of the selected date and the corresponding price.

## Functionality and MVPs

In Crypto Data Visualization, users will be able to:

- Check historial prices a crypto currency, up to the 
current date.
- Select between 5 crypto currencies, which
will update the display chart.
- Hover over the line graph, to reveal data incuding the price
and date intersection point.

In addition, this project will include: 

- A production README.
 
## Wireframes

![image](https://user-images.githubusercontent.com/63963324/144649859-31922653-4e00-4418-9555-f9da524068de.png)
 
## Technologies, Libraries APIs 

1. A public data API (https://coinmarketcap.com/api/) to import live and hisotrical data from a crypto currency exchange.
2. Webpack to bundle and transpile the source JavaScript code.
3. D3 API to bind data from API, and create the chart displaying the data.
