console.log(polindrome('шалаш'));
const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

console.log(findmatches('Germany', hotels));
console.log(sortcoutryandcity(hotels));
function findmatches(string, data) {
  return data.filter(
    (item) =>
      string.includes(item.name) || string.includes(item.country) || string.includes(item.city),
  );
}
function polindrome(string) {
  return string === string.split('').reverse().join('');
}
function sortcoutryandcity(data) {
  let countrys = [];
  let citys = [];
  let res = [];
  data.forEach((element) => {
    if (!res.includes(element.country)) countrys.push(element.country);
  });

  for (i in countrys) {
    let el = [];
    data.forEach((element) => {
      if (countrys[i] == element.country) {
        el.push(element.city);
      }
    });
    citys.push(el);
  }

  for (j = 0; j < countrys.length; j++) {
    res.push({ [countrys[j]]: citys[j] });
  }

  return res;
}

console.log(getCalendarMonth(31, 7, 4));

function getCalendarMonth(amountinmonth, amountinweek, amountofweek) {
  if (
    amountinmonth < 30 ||
    amountinmonth > 31 ||
    amountinweek > 7 ||
    amountinweek < 7 ||
    amountofweek > 7 ||
    amountofweek < 1 ||
    amountofweek > amountinweek
  )
    console.log('Неверно введены данные');
  else {
    let calendaraar = [];
    amountinlastmonth = (amountinmonth == 30 ? 31 : 30) - amountofweek + 2;
    if (amountinlastmonth != 0) {
      var lastmonthcalendararr = [];
      for (j = amountinlastmonth; j < (amountinmonth == 30 ? 31 : 30) + 1; j++) {
        lastmonthcalendararr.push(j);
      }
    }
    for (i = 1; i < amountinweek - amountofweek + 2; i++) {
      lastmonthcalendararr.push(i);
    }
    calendaraar.push(lastmonthcalendararr);
    let thismonthcalendararr = [];
    for (i = amountinweek - amountofweek + 2; i <= amountinmonth + amountinweek; i++) {
      if (thismonthcalendararr.length == amountinweek) {
        calendaraar.push(thismonthcalendararr);
        thismonthcalendararr = [];
      }
      if (i <= amountinmonth) thismonthcalendararr.push(i);
      else thismonthcalendararr.push(i - amountinmonth);
    }
    return calendaraar;
  }
}