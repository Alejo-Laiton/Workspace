// Instalar axios para hacer llamadas al servidor
// npm install axios 

import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/udf')
  .then(function (response) {
    // handle success
    console.log("Succes!!!");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!")
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

