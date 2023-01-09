import style from './App.module.scss'

import Formulario from "../components/Formulario/Formulario"
import Lista from "../components/Lista/Lista"

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  )
}

export default App
