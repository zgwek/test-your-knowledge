const stocks = [ 
   {symbol: "AMZN", name: "Amazon", price: 23.67, units: 59}, 
   {symbol: "AMT", name: "American Tower", price: 11.22, units: 10}, 
   {symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100}, 
   {symbol: "APPL", name: "Amazon", price: 234.00, units: 59}, 
   {symbol: "AWK", name: "American Water", price: 100.00, units: 10}
 ];

 // your solutions here

//  function total(price,units){
//   return price*units;
//  }
//  for(let stock of stocks ){
//   stock.total = total(stock.price,stock.units);
//  }

stocks.forEach( (stock) => {
  stock.total =  stock.price*stock.units;
 });

//  for(let stock of stocks ){
//   console.log(stock.total);
//  }

 stocks.forEach( (stock) => {
  console.log(stock.total);
 });

//  2. Find CAT
//const cat;
// for(let stock of stocks ){
//      if(stock.symbol == "CAT"){
//      cat = stock;
//      }
//     }
//   console.log(cat);



  const cat = stocks.find( stock => stock.symbol === "CAT" );
  console.log(cat);

   //3
//  const newArray = [];
//  for(let stock of stocks ){
//      if (stock.price >= 0 && stock.price <= 20){
//       newArray.push(stock)
//    }
//   }

const newArray = stocks.filter(stock => stock.price >= 0 && stock.price <= 20);
console.log(newArray);

// Create a new array of strings with <li> elements containing the stock name
// property (using loop and then using map()).

// const stockArray = [];
//  for(let stock of stocks ){   
// let item = `<li>${stock.name}</li>`;
// stockArray.push(item);
// }
// console.log(stockArray);

const newStocks = stocks.map( stock => `<li>${stock.nam}</li>` );
//SORT
const sorted2 = stocks.sort( (a,b) => a.symbol < b.symbol? -1: 1 );
console.log(sorted2);

