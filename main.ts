const user = {
  author: 'Fabio Biondi',
  address: {
    street: 'Via Javascript 123',
    suite: 'JS',
    city: 'Trieste',
    zipcode: '12345',
    geo: {
      lat: '43.10',
      lng: '13.20',
      // "zoom": "10" (if missing set default to 5)
    },
  },
};

/**
 * ESERCIZIO
 * Utilizza il destructuring per recuperare le seguente proprietà:
 * author, city, lat, lng, zoom
 *
 * GOAL
 * Visualizza il seguente output utilizzando i template literals:
 * Fabio Biondi - Trieste (43.10, 13.20, 5)
 */

const {author:a, address: {geo : {lat,lng}}}=user;
export const result = `${a} - ${lat}, ${lng}`; // <== MODIFICA QUESTA LINEA

console.log(result);
document.querySelector('#output').innerHTML = result;
