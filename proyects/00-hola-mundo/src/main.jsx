import React from 'react'
import ReactDOM from 'react-dom/client'

// Estamos importanto react y react-dom/client
// Estamos importando un componente app
// Estamos importando un archivo css como componente

// ReactDOM donde queremos empezar a renderizar nuestra aplicación

//ScritMode - 

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

// Una forma sería mediante una función

const createButton = (text, icon) => {
  return (
    <button>
      {text} {icon}
    </button>
  )
}

