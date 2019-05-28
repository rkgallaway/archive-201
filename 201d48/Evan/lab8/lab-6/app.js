'use strict';
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var allStores = [];
// var salesTable = document.getElementById('salesTable')
var cookieStoresTable = document.getElementById('cookieStores');

//SalmonCookies Constructor Function
function SalmonCookies(minCustomers, maxCustomers, avgSales, storeName) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.storeName = storeName;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.calcCustomersPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(getRandomInt(this.minCustomers, this.maxCustomers));
    }
  };
  this.calcCookiesPerHour = function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++) {
      var hourWorthOfCookies = Math.ceil(this.customersPerHour[i] * this.avgSales);
      this.cookiesPerHour.push(hourWorthOfCookies);
      this.totalCookies += hourWorthOfCookies;
    }
  };

  
  this.render = function() {
    this.calcCookiesPerHour();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    //display store names
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);
    cookieStoresTable.appendChild(trEl);
    //generate table body
    for(var j = 0; j < hours.length + 1; j++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesPerHour[j];
      trEl.appendChild(tdEl);
      cookieStoresTable.appendChild(trEl);
    }
    tdEl.textContent = this.totalCookies;
    trEl.appendChild(tdEl);
    cookieStoresTable.appendChild(trEl);
  };
  allStores.push(this);
}
// generate table header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hours:';
  trEl.appendChild(tdEl);
  cookieStoresTable.appendChild(trEl);
  for(var i = 0; i < hours.length + 1; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
    cookieStoresTable.appendChild(trEl);
  }
  tdEl.textContent = 'Grand Total:';
  trEl.appendChild(tdEl);
  cookieStoresTable.appendChild(trEl);
}

function hourlyTotals() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total:';
  trEl.appendChild(tdEl);
  cookieStoresTable.appendChild(trEl);
  var cookiesPerDay = 0;
  for(var i = 0; i < hours.length + 0; i++) {
    var totalCookiesMadePerHour = 0;
    for(var j = 0; j < 5; j++) {
      totalCookiesMadePerHour += allStores[j].cookiesPerHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesMadePerHour;
    trEl.appendChild(tdEl);
    cookieStoresTable.appendChild(trEl);
    cookiesPerDay += totalCookiesMadePerHour;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = cookiesPerDay;
  trEl.appendChild(tdEl);
  cookieStoresTable.appendChild(trEl);
}

var pikePlace = new SalmonCookies (23, 65, 6.3,'Pike Place');
var seaTac = new SalmonCookies (3, 24, 1.2,'SeaTac Airport');
var seattleCenter = new SalmonCookies (11, 38, 3.7,'Seattle Center');
var capitolHill = new SalmonCookies (20, 38, 2.3,'Capitol Hill');
var alki = new SalmonCookies (2, 16, 4.6,'Alki');

function renderAllStores() {
  for(var i = 0; i < 5; i++) {
    allStores[i].render();
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

makeHeaderRow();
renderAllStores();
hourlyTotals();

