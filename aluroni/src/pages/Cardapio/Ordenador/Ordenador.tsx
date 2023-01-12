import { useState } from 'react'
import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import classNames from 'classnames'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

const Ordenador = ({ ordenador, setOrdenador }: Props) => {
    const [aberto, setAberto] = useState<boolean>(false)
    const nomeOrdenador = ordenador && opcoes.find(opcao =>
        opcao.value === ordenador
    )?.nome;
    
    return (
        <button
            className={
                classNames(
                    {
                        [styles.ordenador]: true,
                        [styles['ordenador--ativo']]: ordenador !== '',

                    }
                )
            }
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || "Ordenar por"}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={
                classNames(
                    {
                        [styles.ordenador__options]: true,
                        [styles['ordenador__options--ativo']]: aberto
                    }
                )
            }>


                {opcoes.map(opt => (
                    <div
                        key={opt.value}
                        className={styles.ordenador__option}
                        onClick={() => setOrdenador(opt.value)}
                    >
                        {opt.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Ordenador