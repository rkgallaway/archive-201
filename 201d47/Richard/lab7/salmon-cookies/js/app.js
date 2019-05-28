 'use strict';

 var locations = ['1st and pike',"SeaTac Airport", "Seattle Center", "Capitol Hill", "Alki"]
 var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
 
 function getRandomNumber(min, max){ 
    return Math.floor(Math.random() * (max - min) + min);
 }


 function CookieStore(minCustomer, maxCustomer, avgCookieSale, id){
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.id = id;
    this.consumptionArray = [];
    this.randomCookiesPerHour = function(){
        return getRandomNumber(this.minCustomer, this.maxCustomer);
    };
    this.cookieSold = function(){
        return Math.round(this.randomCookiesPerHour() * this.avgCookieSale); 
    };
    this.render = function(){
        var tr = document.createElement('tr');
        var table = document.getElementById('hours-row');
        table.append(tr);
        var sum = 0; 
        for(var i = 0; i < hours.length; i++){
            var td = document.createElement('td');
            //math
            var consumption = this.cookieSold(); 
            sum += consumption;
            this.consumptionArray.push(consumption);
            td.textContent = this.consumptionArray[i];
            tr.append(td);
        };
        var cookieSoldTable = document.getElementById('num');
        cookieSoldTable.append(tr);
        
        var totaltd = document.createElement('td');
        var totaltr = document.createElement('tr');
        totaltd.textContent = sum;
        totaltr.append(totaltd);
        //create a loop for locations so you can add them to the table
        for(var i = 0; i < 5; i++){
            var tr = document.createElement('tr');
            th.textContent = locations[i];
            tr.append(th);
        };
        var locationsrow = document.getElementById('locations');
        locationsrow.append(tr);
    };
 };




var firstandpike = new CookieStore(23, 65, 6.3, 'first-and-pike');
firstandpike.render();

//
//  var firstandpike = {
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookieSale: 6.3,
//     consumptionArray: [],
//     id: '1andpike',
//     randomCookiesPerHour: function(){
//         return getRandomNumber(this.minCustomer, this.maxCustomer);
//     },
//     cookiesSold: function(){
//         return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
//     },
//     render: function(){
//         var ulElement = document.getElementById(this.id);
//         var sum = 0; 
//         for(var i =0; i < hours.length; i++){
//             var liElement = document.createElement('li');
//             var consumption = this.cookiesSold(); 
//             sum += consumption;
//             this.consumptionArray.push(consumption);
//             liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
//             ulElement.append(liElement);
//         }

//         var totalLi = document.createElement('li');
//         totalLi.textContent = `Total is ${sum} cookies`;
//         ulElement.append(totalLi);
//     },
//  };
// firstandpike.randomCookiesPerHour();
// firstandpike.cookiesSold();
// firstandpike.render();

// var seaTac = {
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookieSale: 1.2,
//     consumptionArray: [],
//     id: "seatac",
//     randomCookiesPerHour: function(){
//         return getRandomNumber(this.minCustomer, this.maxCustomer);
//     },
//     cookiesSold: function(){
//         return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
//     },
//     render: function(){
//         var ulElement = document.getElementById(this.id);
//         var sum = 0; 
//         for(var i =0; i < hours.length; i++){
//             var liElement = document.createElement('li');
//             var consumption = this.cookiesSold(); 
//             sum += consumption;
//             this.consumptionArray.push(consumption);
//             liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
//             ulElement.append(liElement);
//         }

//         var totalLi = document.createElement('li');
//         totalLi.textContent = `Total is ${sum} cookies`;
//         ulElement.append(totalLi);
//     },
// };
// seaTac.randomCookiesPerHour();
// seaTac.cookiesSold();
// seaTac.render();

// var seattleCenter = {
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookieSale: 3.7,
//     consumptionArray: [],
//     id: "seattlecenter",
//     randomCookiesPerHour: function(){
//         return getRandomNumber(this.minCustomer, this.maxCustomer);
//     },
//     cookiesSold: function(){
//         return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
//     },
//     render: function(){
//         var ulElement = document.getElementById(this.id);
//         var sum = 0; 
//         for(var i =0; i < hours.length; i++){
//             var liElement = document.createElement('li');
//             var consumption = this.cookiesSold(); 
//             sum += consumption;
//             this.consumptionArray.push(consumption);
//             liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
//             ulElement.append(liElement);
//         }

//         var totalLi = document.createElement('li');
//         totalLi.textContent = `Total is ${sum} cookies`;
//         ulElement.append(totalLi);
//     },
// };
// seattleCenter.randomCookiesPerHour();
// seattleCenter.cookiesSold();
// seattleCenter.render();

// var capitolHill = {
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookieSale: 2.3,
//     consumptionArray: [],
//     id: "capitolhill",
//     randomCookiesPerHour: function(){
//         return getRandomNumber(this.minCustomer, this.maxCustomer);
//     },
//     cookiesSold: function(){
//         return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
//     },
//     render: function(){
//         var ulElement = document.getElementById(this.id);
//         var sum = 0; 
//         for(var i =0; i < hours.length; i++){
//             var liElement = document.createElement('li');
//             var consumption = this.cookiesSold(); 
//             sum += consumption;
//             this.consumptionArray.push(consumption);
//             liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
//             ulElement.append(liElement);
//         }

//         var totalLi = document.createElement('li');
//         totalLi.textContent = `Total is ${sum} cookies`;
//         ulElement.append(totalLi);
//     },
// };
// capitolHill.randomCookiesPerHour();
// capitolHill.cookiesSold();
// capitolHill.render();

// var alki = {
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookieSale: 4.6,
//     consumptionArray: [],
//     id: "alki",
//     randomCookiesPerHour: function(){
//         return getRandomNumber(this.minCustomer, this.maxCustomer);
//     },
//     cookiesSold: function(){
//         return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
//     },
//     render: function(){
//         var ulElement = document.getElementById(this.id);
//         var sum = 0; 
//         for(var i =0; i < hours.length; i++){
//             var liElement = document.createElement('li');
//             var consumption = this.cookiesSold(); 
//             sum += consumption;
//             this.consumptionArray.push(consumption);
//             liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
//             ulElement.append(liElement);
//         }

//         var totalLi = document.createElement('li');
//         totalLi.textContent = `Total is ${sum} cookies`;
//         ulElement.append(totalLi);
//     },
// };
// alki.randomCookiesPerHour();
// alki.cookiesSold();
// alki.render();