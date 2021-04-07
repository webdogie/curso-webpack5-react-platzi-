// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//   'a',
//   { href: 'https://platzi.com' },
//   'Ir a platzi'
// );
const name = 'Juan';
const job = 'Ingeniero frontend';
// const element = React.createElement('h1', {}, `Hola soy ${name}`);
// const jsx = <h1>Hola soy {name}</h1>;
const container = document.getElementById('app');

const jsx = (
  <div>
    <h1>Hola soy {name}</h1>
    <p>Soy {job}</p>
  </div>
);
ReactDOM.render(jsx, container);

// ReactDOM.render(__qué__, __dónde__);
