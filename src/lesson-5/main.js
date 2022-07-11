const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const date = '2020-11-26';
console.log(dateformat(date));
console.log(findmatches('Berlin', data));

function dateformat(date) {
  const yearindex = date.indexOf('-');
  const dayindex = date.lastIndexOf('-');
  return (date =
    date.slice(dayindex + 1) +
    '.' +
    date.slice(yearindex + 1, dayindex) +
    '.' +
    date.slice(0, yearindex));
}

function findmatches(string, data) {
  return data.filter(
    (item) =>
      string.includes(item.name) || string.includes(item.country) || string.includes(item.city),
  );
}
