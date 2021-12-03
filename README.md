# Crypto Data Visualization 

## Background 

This project will be a datavisualization of the 
top 5 crypto currencies: Bitcoin, Etherium, Cardano,
Tether, and Solana. There will be a clickable list of
these 5 currencies as a bar on the right side of the 
page. When one of the currencies is clicked, the display
in the middle will be updated with a chart for that 
specific coin.

The chart will be a line graph displaying time on the
x-axis, and price (in $USD) on the y-axis. The time will 
span from when the coin was created to the current date. 
When you hover over the line graph, it will show the max 
price and date of the max price.

## Functionality and MVPs

In Crypto Data Visualization, users will be able to:

- Check historial prices a crypto currency, up to the 
current date.
- Select between 5 crypto currencies, which
will update the display chart.
- Hover over the line graph, to reveal data including the all-time 
max price of the coin, and the date it occurred.

### Bonus Functionality 
- Make some sort of animation when clicking 
the icon of the coin
- Change color (maybe music) when the coin is 
uptrending or downtrending
- Add a calculator (that will be visualized) 
that takes user input answering the question "If you invested $X
money in Y coin on Z date", returning the possible gains.

In addition, this project will include: 

- A simple paragraph describing some background for crypto, and
what the site's functionality is.
- A production README.
 
## Wireframes

![image](https://user-images.githubusercontent.com/63963324/144649859-31922653-4e00-4418-9555-f9da524068de.png)
 
## Technologies, Libraries APIs 

1. A public data API (https://coinmarketcap.com/api/) to import live and hisotrical data from a crypto currency exchange.
2. Webpack to bundle and transpile the source JavaScript code.
3. D3 API to bind data from API, and create the chart displaying the data.

## Implementation Timeline 

- Friday Afternoon & Weekend: Layout basic HTML structure of the page, populate with bare content. Implement D3 to get charts working and extablish format. Get API set up and working.
- Monday: Get JS code and CSS working together, implement page functionality
- Tuesday: Continue working on JS and CSS code
- Wednesday: Finish CSS touches, add personality and details
- Thursday Morning: If time permits, add bonus functionality
