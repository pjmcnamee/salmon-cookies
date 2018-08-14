'use strict';

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerCustomer: 6.3,
  customers: [],
  cookies: []
};

function customerAmount() {
  var pikeCustomersPush = '';
  var pikeCookiesPush = '';
  for(var i = 0; i < times.length; i++) {
    pikeCustomersPush = Math.floor(Math.random() * (pike.maxCustomers - pike.minCustomers + 1)) + pike.minCustomers;
    pike.customers.push(pikeCustomersPush);
    pikeCookiesPush = Math.floor(pikeCustomersPush * pike.avgCookiePerCustomer);
    pike.cookies.push(pikeCookiesPush);
  }
}

customerAmount();


pike.render = function() {
  var pikeUlEl = document.getElementById('pike');
  for (var i = 0; i < times.length; i++) {
    var LiEl = document.createElement('li');
    LiEl.textContent = times[i] + ': ' + pike.cookies[i] + ' cookies.';
    pikeUlEl.appendChild(LiEl);
  }
};

pike.render();


var seatac = {
  name: 'SeaTac Airpot',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerCustomer: 1.2,
  customers: [],
  cookies: []
};

function seatacCustomerAmount() {
  var seatacCustomersPush = '';
  var seatacCookiesPush = '';
  for(var i = 0; i < times.length; i++) {
    seatacCustomersPush = Math.floor(Math.random() * (seatac.maxCustomers - seatac.minCustomers + 1)) + seatac.minCustomers;
    seatac.customers.push(seatacCustomersPush);
    seatacCookiesPush = Math.floor(seatacCustomersPush * seatac.avgCookiePerCustomer);
    seatac.cookies.push(seatacCookiesPush);
  }
}
seatacCustomerAmount();

seatac.render = function() {
  var seatacUlEl = document.getElementById('seatac');
  for (var i = 0; i < times.length; i++) {
    var LiEl = document.createElement('li');
    LiEl.textContent = times[i] + ': ' + seatac.cookies[i] + ' cookies.';
    seatacUlEl.appendChild(LiEl);
  }
};

seatac.render();

var seattleCenter = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerCustomer: 3.7,
  customers: [],
  cookies: []
};

function seattleCenterCustomerAmount() {
  var seattleCenterCustomersPush = '';
  var seattleCenterCookiesPush = '';
  for(var i = 0; i < times.length; i++) {
    seattleCenterCustomersPush = Math.floor(Math.random() * (seattleCenter.maxCustomers - seattleCenter.minCustomers + 1)) + seattleCenter.minCustomers;
    seattleCenter.customers.push(seattleCenterCustomersPush);
    seattleCenterCookiesPush = Math.floor(seattleCenterCustomersPush * seattleCenter.avgCookiePerCustomer);
    seattleCenter.cookies.push(seattleCenterCookiesPush);
  }
}
seattleCenterCustomerAmount();

seattleCenter.render = function() {
  var seattleCenterUlEl = document.getElementById('seattleCenter');
  for (var i = 0; i < times.length; i++) {
    var LiEl = document.createElement('li');
    LiEl.textContent = times[i] + ': ' + seattleCenter.cookies[i] + ' cookies.';
    seattleCenterUlEl.appendChild(LiEl);
  }
};
seattleCenter.render();

var capitolHill = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiePerCustomer: 2.3,
  customers: [],
  cookies: []
};

function capitolHillCustomerAmount() {
  var capitolHillCustomerPush = '';
  var capitolHillCookiesPush = '';
  for(var i = 0; i < times.length; i++) {
    capitolHillCustomerPush = Math.floor(Math.random() * (capitolHill.maxCustomers - capitolHill.minCustomers + 1)) + capitolHill.minCustomers;
    capitolHill.customers.push(capitolHillCustomerPush);
    capitolHillCookiesPush = Math.floor(capitolHillCustomerPush * capitolHill.avgCookiePerCustomer);
    capitolHill.cookies.push(capitolHillCookiesPush);
  }
}
capitolHillCustomerAmount();

capitolHill.render = function() {
  var capitolUlEl = document.getElementById('capitolHill');
  for (var i = 0; i < times.length; i++) {
    var LiEl = document.createElement('li');
    LiEl.textContent = times[i] + ': ' + capitolHill.cookies[i] + ' cookies.';
    capitolUlEl.appendChild(LiEl);
  }
};
capitolHill.render();

var alki = {
  name: 'Alki Beach',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerCustomer: 4.6,
  customers: [],
  cookies: []
};

function alkiCustomerAmount() {
  var alkiCustomerPush = '';
  var alkiCookiesPush = '';
  for(var i = 0; i < times.length; i++) {
    alkiCustomerPush = Math.floor(Math.random() * (alki.maxCustomers = alki.minCustomers + 1)) + alki.minCustomers;
    alki.customers.push(alkiCustomerPush);
    alkiCookiesPush = Math.floor(alkiCustomerPush * alki.avgCookiePerCustomer);
    alki.cookies.push(alkiCookiesPush);
  }
}
alkiCustomerAmount();

alki.render = function() {
  var alkiUlEl = document.getElementById('alki');
  for (var i = 0; i < times.length; i++) {
    var LiEl = document.createElement('li');
    LiEl.textContent = times[i] + ': ' + alki.cookies[i] + ' cookies.';
    alkiUlEl.appendChild(LiEl);
  }
};
alki.render();



