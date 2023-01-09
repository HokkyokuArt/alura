import style from'./Formulario.module.scss'

import Button from "../Button/Button"

const Formulario = () => {
    return (
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    placeholder="O que você quer estudar?"
                    id="tarefa"
                    required
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
                />
            </div>
            <Button />
        </form>
    )
}

export default Formulario