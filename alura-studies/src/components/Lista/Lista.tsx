import { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './item/Item';
import style from './Lista.module.scss';

interface Props {
    tarefas: Array<ITarefa>,
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
const Lista = ({ tarefas, selecionaTarefa }: Props) => {


    return (
        <aside className={style['listaTarefas']}>
            <h2> Tarefas do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.uuid}
                        {...item}
                    />
                ))}
            </ul>

        </aside>
    )
}

export default Lista