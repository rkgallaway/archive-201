'use strict';

var locations = ['1st and pike',"SeaTac Airport", "Seattle Center", "Capitol Hill", "Alki"]
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomNumber(min, max){ 
   return Math.floor(Math.random() * (max - min) + min);
}
var firstandpike = {
   minCustomer: 23,
   maxCustomer: 65,
   avgCookieSale: 6.3,
   consumptionArray: [],
   id: '1andpike',
   randomCookiesPerHour: function(){
       return getRandomNumber(this.minCustomer, this.maxCustomer);
   },
   cookiesSold: function(){
       return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
   },
   render: function(){
       var ulElement = document.getElementById(this.id);
       var sum = 0; 
       for(var i =0; i < hours.length; i++){
           var liElement = document.createElement('li');
           var consumption = this.cookiesSold(); 
           sum += consumption;
           this.consumptionArray.push(consumption);
           liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
           ulElement.append(liElement);
       }

       var totalLi = document.createElement('li');
       totalLi.textContent = `Total is ${sum} cookies`;
       ulElement.append(totalLi);
   },
};
firstandpike.randomCookiesPerHour();
firstandpike.cookiesSold();
firstandpike.render();

var seaTac = {
   minCustomer: 3,
   maxCustomer: 24,
   avgCookieSale: 1.2,
   consumptionArray: [],
   id: "seatac",
   randomCookiesPerHour: function(){
       return getRandomNumber(this.minCustomer, this.maxCustomer);
   },
   cookiesSold: function(){
       return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
   },
   render: function(){
       var ulElement = document.getElementById(this.id);
       var sum = 0; 
       for(var i =0; i < hours.length; i++){
           var liElement = document.createElement('li');
           var consumption = this.cookiesSold(); 
           sum += consumption;
           this.consumptionArray.push(consumption);
           liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
           ulElement.append(liElement);
       }

       var totalLi = document.createElement('li');
       totalLi.textContent = `Total is ${sum} cookies`;
       ulElement.append(totalLi);
   },
};
seaTac.randomCookiesPerHour();
seaTac.cookiesSold();
seaTac.render();

var seattleCenter = {
   minCustomer: 11,
   maxCustomer: 38,
   avgCookieSale: 3.7,
   consumptionArray: [],
   id: "seattlecenter",
   randomCookiesPerHour: function(){
       return getRandomNumber(this.minCustomer, this.maxCustomer);
   },
   cookiesSold: function(){
       return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
   },
   render: function(){
       var ulElement = document.getElementById(this.id);
       var sum = 0; 
       for(var i =0; i < hours.length; i++){
           var liElement = document.createElement('li');
           var consumption = this.cookiesSold(); 
           sum += consumption;
           this.consumptionArray.push(consumption);
           liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
           ulElement.append(liElement);
       }

       var totalLi = document.createElement('li');
       totalLi.textContent = `Total is ${sum} cookies`;
       ulElement.append(totalLi);
   },
};
seattleCenter.randomCookiesPerHour();
seattleCenter.cookiesSold();
seattleCenter.render();

var capitolHill = {
   minCustomer: 20,
   maxCustomer: 38,
   avgCookieSale: 2.3,
   consumptionArray: [],
   id: "capitolhill",
   randomCookiesPerHour: function(){
       return getRandomNumber(this.minCustomer, this.maxCustomer);
   },
   cookiesSold: function(){
       return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
   },
   render: function(){
       var ulElement = document.getElementById(this.id);
       var sum = 0; 
       for(var i =0; i < hours.length; i++){
           var liElement = document.createElement('li');
           var consumption = this.cookiesSold(); 
           sum += consumption;
           this.consumptionArray.push(consumption);
           liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
           ulElement.append(liElement);
       }

       var totalLi = document.createElement('li');
       totalLi.textContent = `Total is ${sum} cookies`;
       ulElement.append(totalLi);
   },
};
capitolHill.randomCookiesPerHour();
capitolHill.cookiesSold();
capitolHill.render();

var alki = {
   minCustomer: 2,
   maxCustomer: 16,
   avgCookieSale: 4.6,
   consumptionArray: [],
   id: "alki",
   randomCookiesPerHour: function(){
       return getRandomNumber(this.minCustomer, this.maxCustomer);
   },
   cookiesSold: function(){
       return Math.round(this.randomCookiesPerHour() * this.avgCookieSale);
   },
   render: function(){
       var ulElement = document.getElementById(this.id);
       var sum = 0; 
       for(var i =0; i < hours.length; i++){
           var liElement = document.createElement('li');
           var consumption = this.cookiesSold(); 
           sum += consumption;
           this.consumptionArray.push(consumption);
           liElement.textContent = `At ${hours[i]}, we sold  ${consumption} cookies.`;
           ulElement.append(liElement);
       }

       var totalLi = document.createElement('li');
       totalLi.textContent = `Total is ${sum} cookies`;
       ulElement.append(totalLi);
   },
};
alki.randomCookiesPerHour();
alki.cookiesSold();
alki.render();