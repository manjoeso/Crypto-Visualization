// ----------------------------------- // 
              BACKGROUND 
// ----------------------------------- // 

This project will be a datavisualization of the top 5 crypto 
currencies: Bitcoin, Etherium, Cardano, Tether, and Solana.
There will be a clickable list of these 5 currencies as a bar
on the right side of the page. When one of the currencies is clicked,
the display in the middle will be updated with a chart for that specific coin.

The chart will be a line graph displaying time on the x-axis, and price (in $USD) 
on the y-axis. The time will span from when the coin was created to the current 
date. When you hover over the line graph, it will show the max price and date of the max price.

// ----------------------------------- // 
         FUNCTIONALITY & MVPS 
// ----------------------------------- // 

In Cryptocurrency data visualization, users will be able to:

: Check historial prices a crypto currency, up to the 
current date.
: Select between 5 (maybe more?) crypto currencies, which
will update the display chart.
: When hovering over the line graph, can see the all-time 
max price of the coin, and the date/time of that maximum price.
: (POTENTIAL BONUS) Make some sort of animation

--------- Bonus Functionality ---------
: (POTENTIAL BONUS) Make some sort of animation when clicking 
the icon of the coin
: (POTENTIAL BONUS) Change color (maybe music) when the coin is 
uptrending or downtrending
: (POTENTIAL BONUS) Add a calculator (that will be visualized) 
that takes user input answering the question "If you invested $X
 money in Y coin on Z date, you would have made/lost $_______.


In addition, this project will include: 

: A simple paragraph describing some background for crypto, and
what the site's functionality is.
: A production README.


// ----------------------------------- // 
      Technologies, Libraries APIs 
// ----------------------------------- // 

: An API (https://coinmarketcap.com/api/) to import live and 
hisotrical data from a crypto currency exchange.
: Webpack to bundle and transpile the source JavaScript code.
: D3 to bind data from API, and create the chart displaying the data.
