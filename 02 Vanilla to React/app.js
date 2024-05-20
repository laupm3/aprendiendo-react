import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

// Seleccionamos el elemento del DOM donde vamos a renderizar nuestra aplicación
const appDomElement = document.getElementById('app')

// React lo que va a generar es un árbol de elementos que se va a renderizar en el DOM. Para ello, necesitamos un elemento raíz
const root = ReactDOM.createRoot(appDomElement)

// Puedes renderizar texto pero no puedes renderizar elementos de nivel superior a un elemento raíz de esta forma, siempre debemos crear primero el elemento y luego renderizarlo
const button = React.createElement('button', { "data-id": 123 }, 'Button 1')
const button2 = React.createElement('button', { "data-id": 456 }, 'Button 2')
const button3 = React.createElement('button', { "data-id": 789 }, 'Button 3')

// Creamos el contenedor de nuestros botones
const app = React.createElement(React.Fragment, null, [button, button2, button3])

// No se puede renderizar más de un elemento, siempre de uno en uno

root.render(app)

//! Esto sigue sin ser código declarativo
//* Para solucionar esto utilizaremos JSX en el siguiente ejemplo, que es una forma más declarativa de escribir React
//* JSX es una extensión de JavaScript que permite escribir HTML en JavaScript usando XML

/* JSX
<React.Fragment>
    <button data-id="123">Button 1</button>
    <button data-id="456">Button 2</button>
    <button data-id="789">Button 3</button>
</React.Fragment>
*/

//? ¿Quién se encarga de convertir el código JSX a código JavaScript?

//? Babel es el encargado de convertir el código JSX a código JavaScript

// https://babeljs.io/
// https://swc.rs/