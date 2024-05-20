import React from 'react'
import ReactDOM from 'react-dom/client'
// Los componentes se pueden importar para ser utilizados en otros archivos, mediante import
import { App } from './App'
import './index.css'

// Seleccionamos la raíz donde queremos renderizar nuestra aplicación
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)
