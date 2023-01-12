import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css';
import './index.css'
import Cardapio from './pages/Cardapio/Cardapio'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>,
)
