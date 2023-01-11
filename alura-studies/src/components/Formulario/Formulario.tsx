import style from './Formulario.module.scss'
import Button from "../Button/Button"
import React, { useState } from 'react'
import { ITarefa } from '../../types/tarefa'
import { v4 as uuidv4 } from 'uuid'

const Formulario = (
    { setTarefas }: {
        setTarefas:
        React.Dispatch<React.SetStateAction<Array<ITarefa>>>
    }
) => {

    const [tarefa, setTarefa] = useState<string>('');
    const [tempo, setTempo] = useState('00:00:00')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTarefas(pre => [
            ...pre,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                uuid: uuidv4()
            }
        ]);
        setTarefa('');
        setTempo('00:00:00')
    }

    return (
        <form className={style.novaTarefa}
            onSubmit={handleSubmit}
        >
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    placeholder="O que você quer estudar?"
                    id="tarefa"
                    required
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}

                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}

export default Formulario