import { ITarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Item = (
    {
        uuid,
        tarefa,
        tempo,
        selecionado,
        completado,
        selecionaTarefa
    }: Props) => {

    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    uuid
                }
            )}
        >
            <h3>{tarefa}</h3>
            <span >{tempo}</span>
            {completado && <span className={style.concluido}></span>}
        </li>
    )
}

export default Item