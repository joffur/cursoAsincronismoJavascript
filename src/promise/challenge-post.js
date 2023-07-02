import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// POST
function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response;
}

const data = {
  "title": "Redmi POCO F3",
  "price": 2500,
  "description": "A new brand smartphone",
  "categoryId": 2,
  "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));

// PUT
import fetch from "node-fetch";
const API2 = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, dataUpdate) {
	const response = fetch(urlApi, {
	  method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',
    headers:{
	    'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataUpdate)
  });
	return response;
}

const dataUpdate = {
    "category": {
      "id": 2
    },
    "price": 300 // no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API2}/products/208`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
  .then(response => response.json())
  .then(dataUpdate => console.log(dataUpdate));

// DELETE
import fetch from "node-fetch";
const API3 = 'https://api.escuelajs.co/api/v1';

function deleteData(urlApi) { //no es necesario pasar la data
  const response = fetch(urlApi, {
		method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin',
    headers:{
      'Content-Type': 'application/json'
    } //no es necesario especificar el body
  });
	return response;
}

const idNumber = 209; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API3}/products/${idNumber}`) //no es necesario pasar data
  .then(() => {
    console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
});