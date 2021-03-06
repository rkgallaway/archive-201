'use strict'

// JS for Salmon Cookies

// will hold all the store object instances
var allShops = [];

// grabbing salesTable DOM element in sales.html
var salesTable = document.getElementById('salesTable');

// hard coding the hours of operation for all stores
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var allShopsHourlyTotal = [];

var hourlyTotals = [];

// Pat's Salmon Cookies constructor function
function Shop(location, minCustomerPerHr, maxCustomerPerHr, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.recordOfSalesPerHour = [];

  // returns a random number between min and max customers for each location inclusive of min and max number
  this.randomCustomersPerHr = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  };

  // generating the recordOfSalesPerHour for each store
  // pushing recordOfSalesPerHour for each store into allShopsHourlyTotal array creating an array of arrays
  this.cookiesPurchasedPerHr = function() {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i < hoursOfOperation.length; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr) * this.avgCookiesPerCustomer));
    }
    allShopsHourlyTotal.push(this.recordOfSalesPerHour);
  };

  this.totalCookiesPerDay = function(hourlyArray) {
    var sumTotal = 0;
    for (var i = 0; i < hourlyArray.length; i++) {
      sumTotal += hourlyArray[i];
    }
    return sumTotal;
  };

  this.render = function() {
    this.cookiesPurchasedPerHr();
    
    // make a tr
    var trEl = document.createElement('tr');
    // create, content, append for "Shop Location"
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    // create, content, append for each hourly total
    for (var i = 0; i < hoursOfOperation.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.recordOfSalesPerHour[i];
      trEl.appendChild(tdEl);
    }
    // create, content, append for daily total
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay(this.recordOfSalesPerHour);
    trEl.appendChild(tdEl);
    // append the tr to the table
    salesTable.appendChild(trEl);
  };
  allShops.push(this);
}

new Shop('1st and Pike', 23, 65, 6.3);
new Shop('SeaTac Airport', 3, 24, 1.2);
new Shop('Seattle Center', 11, 38, 3.7);
new Shop('Capitol Hill', 20, 38, 2.3);
new Shop('Alki', 2, 16, 4.6);

function makeHeaderRow() {
  // create the row
  var trEl = document.createElement('tr');
  // create, content, append first cell
  var thEl = document.createElement('th');
  thEl.textContent = 'Shop Location';
  trEl.appendChild(thEl);
  // create, content, append all hours of operation cells
  for (var i = 0; i < hoursOfOperation.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursOfOperation[i];
    trEl.appendChild(thEl);
  }
  // create, content, append total sum cell
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  // append the row to the table
  salesTable.appendChild(trEl);
}

function sumHourlyTotals(allShopsHourlyTotal) {
  for (var i = 0; i < hoursOfOperation.length; i++) {
	var hourlySum = 0;
    for (var j = 0; j < allShopsHourlyTotal.length; j++) {
  	  hourlySum = hourlySum + allShopsHourlyTotal[j][i];
    }
    hourlyTotals.push(hourlySum);
  }
};

function totalOfAllTotals() {
  var sumTotal = 0;
  for (var i = 0; i < hourlyTotals.length; i++) {
    sumTotal += hourlyTotals[i];
  }
  return sumTotal;
};

function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
}

function renderHourlyTotals() {
  var trEl = document.createElement('tr');
  // create, content, append for "Shop Location"
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  // create, content, append for each hourly total
  for (var i = 0; i < hoursOfOperation.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotals[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalOfAllTotals();
  trEl.appendChild(tdEl);

  // append the tr to the table
  salesTable.appendChild(trEl);
}

makeHeaderRow();
renderAllShops();
sumHourlyTotals(allShopsHourlyTotal);
renderHourlyTotals();

