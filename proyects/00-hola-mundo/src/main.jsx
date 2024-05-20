import React from 'react'
import ReactDOM from 'react-dom/client'

// Estamos importanto react y react-dom/client
// Estamos importando un componente app
// Estamos importando un archivo css como componente

// ReactDOM donde queremos empezar a renderizar nuestra aplicación

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <button>
      Hola Mundo 🩷
    </button>
    <button>
      Hola Mundo ☠️
    </button>
    <button>
      Hola Mundo 🖖
    </button>
  </React.Fragment>
)
*/


//El objetivo es crear un componente al que le pasemos parámetros y que nos devuelva un botón

// Una forma sería mediante una función, esta no es la forma correcta de hacerlo, pero es una forma de hacerlo

const createButton = ({ text }) => {

  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brilliance" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7" />
      </svg>
      {text}
    </button>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    {createButton({ text: 'Hola Mundo 🩷' })}
    {createButton({ text: 'Hola Mundo ☠️' })}
    {createButton({ text: 'Hola Mundo 🖖' })}
  </React.Fragment>
)

// La forma correcta de hacerlo es mediante un componente, utilizando la función de React

// Los nombres de los componentes deben estar en PascalCase (la primera letra de cada palabra en mayúscula, de otra forma no funcionará)
const Button = ({ text }) => {
  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brilliance" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7" />
      </svg>
      {text}
    </button>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Button text="Say Hello" />
    <Button text="Sayonara" />
  </React.Fragment>
)