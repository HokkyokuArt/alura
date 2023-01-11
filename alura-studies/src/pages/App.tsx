import style from './App.module.scss'

import Formulario from "../components/Formulario/Formulario"
import Lista from "../components/Lista/Lista"
import Cronometro from '../components/Cronometro/Cronometro'
import { useEffect, useState } from 'react'
import { ITarefa } from '../types/tarefa'
import { v4 as uuidv4} from 'uuid'

function App() {
  const [tarefas, setTarefas] = useState<Array<ITarefa>>([{
    tarefa: 'Limpar a casa',
    tempo: '00:00:03',
    completado: false,
    selecionado: false,
    uuid: uuidv4()
  }])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas(pre => pre.map(tarefa => (
      {
        ...tarefa,
        selecionado: tarefa.uuid === tarefaSelecionada.uuid ? true : false
      }
    )))
  }

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(pre => pre.map(tarefa => {
        if (tarefa.uuid === selecionado.uuid) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }
      ))
    }
  }


  return (
    <div className={style.AppStyle}>
      <Formulario
        setTarefas={setTarefas}
      />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  )
}

export default App;
