const hotels = [
  {
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
  },
  {
    name: "Apartment Sunshine",
    city: "Santa Cruz de Tenerife",
    country: "Spain",
  },
  {
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
  },
  {
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
  },
  {
    name: "Radisson Blu Hotel",
    city: "Kyiv",
    country: "Ukraine",
  },
  {
    name: "Paradise Hotel",
    city: "Guadalupe",
    country: "Mexico",
  },
  {
    name: "Hotel Grindewald",
    city: "Interlaken",
    country: "Switzerland",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Virgin Hotel",
    city: "Chicago",
    country: "USA",
  },
  {
    name: "Grand Beach Resort",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  {
    name: "Shilla Stay",
    city: "Seoul",
    country: "South Korea",
  },
  {
    name: "San Firenze Suites",
    city: "Florence",
    country: "Italy",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Black Penny Villas",
    city: "BTDC, Nuca Dua",
    country: "Indonesia",
  },
  {
    name: "Koko Hotel",
    city: "Tokyo",
    country: "Japan",
  },
  {
    name: "Ramada Plaza",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    name: "Waikiki Resort Hotel",
    city: "Hawaii",
    country: "USA",
  },
  {
    name: "Puro Hotel",
    city: "Krakow",
    country: "Poland",
  },
  {
    name: "Asma Suites",
    city: "Santorini",
    country: "Greece",
  },
  {
    name: "Cityden Apartments",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    name: "Mandarin Oriental",
    city: "Miami",
    country: "USA",
  },
  {
    name: "Concept Terrace Hotel",
    city: "Rome",
    country: "Italy",
  },
  {
    name: "Ponta Mar Hotel",
    city: "Fortaleza",
    country: "Brazil",
  },
  {
    name: "Four Seasons Hotel",
    city: "Sydney",
    country: "Australia",
  },
  {
    name: "Le Meridien",
    city: "Nice",
    country: "France",
  },
  {
    name: "Apart Neptun",
    city: "Gdansk",
    country: "Poland",
  },
  {
    name: "Lux Isla",
    city: "Ibiza",
    country: "Spain",
  },
  {
    name: "Nox Hostel",
    city: "London",
    country: "UK",
  },
  {
    name: "Leonardo Vienna",
    city: "Vienna",
    country: "Austria",
  },
  {
    name: "Adagio Aparthotel",
    city: "Edinburgh",
    country: "UK",
  },
  {
    name: "Steigenberger Hotel",
    city: "Hamburg",
    country: "Germany",
  },
];

console.log(polindrome("шалаш"));
console.log(findMatches("Germany", hotels));
console.log(sortCoutryAndCity(hotels));
console.log(getCalendarMonth(31, 7, 4));

function findMatches(string, data) {
  return data.filter(
    (item) =>
      string.includes(item.name) || string.includes(item.country) || string.includes(item.city),
  );
}

function polindrome(string) {
  return string === string.split("").reverse().join("");
}

function sortCoutryAndCity(data) {
  const countrys = [];
  const citys = [];
  const res = [];
  data.forEach((element) => {
    if (!res.includes(element.country)) countrys.push(element.country);
  });

  for (const i in countrys) {
    const el = [];
    data.forEach((element) => {
      if (countrys[i] == element.country) {
        el.push(element.city);
      }
    });
    citys.push(el);
  }

  for (let j = 0; j < countrys.length; j++) {
    res.push({ [countrys[j]]: citys[j] });
  }
  return res;
}

function getCalendarMonth(amountInMonth, amountInWeek, amountOfWeek) {
  if (
    amountInMonth < 30 ||
    amountInMonth > 31 ||
    amountInWeek > 7 ||
    amountInWeek < 7 ||
    amountOfWeek > 7 ||
    amountOfWeek < 1 ||
    amountOfWeek > amountInWeek
  ) {
    console.log("Неверно введены данные");
  } else {
    const calendarArr = [];
    const amountInLastMonth = (amountInMonth == 30 ? 31 : 30) - amountOfWeek + 2;
    const lastMonthCalendarArr = [];
    if (amountInLastMonth != 0) {
      for (let j = amountInLastMonth; j < (amountInMonth == 30 ? 31 : 30) + 1; j++) {
        lastMonthCalendarArr.push(j);
      }
    }

    for (let i = 1; i < amountInWeek - amountOfWeek + 2; i++) {
      lastMonthCalendarArr.push(i);
    }

    calendarArr.push(lastMonthCalendarArr);
    let thisMonthCalendarArr = [];

    for (let i = amountInWeek - amountOfWeek + 2; i <= amountInMonth + amountInWeek; i++) {
      if (thisMonthCalendarArr.length == amountInWeek) {
        calendarArr.push(thisMonthCalendarArr);
        thisMonthCalendarArr = [];
      }
      if (i <= amountInMonth) thisMonthCalendarArr.push(i);
      else thisMonthCalendarArr.push(i - amountInMonth);
    }

    return calendarArr;
  }
}
