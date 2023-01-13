import { useState } from 'react'
import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import classNames from 'classnames'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
    ordenador: OpcoesOrdenador,
    setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
    darkMode: boolean,
}

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';


const Ordenador = ({ ordenador, setOrdenador , darkMode}: Props) => {
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
                        [styles['ordenador--darkMode']]: darkMode ,
                        [styles['ordenador--darkMode--ativo']]: darkMode && ordenador !== '',

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
                        [styles['ordenador__options--ativo']]: aberto,
                        [styles['ordenador--darkMode']]: darkMode,
                    }
                )
            }>


                {opcoes.map(opt => (
                    <div
                        key={opt.value}
                        className={
                            classNames({
                                [styles.ordenador__option]: true,
                                [styles['ordenador__option--ativo']]: opt.value !== '' && opt.value === ordenador,
                                [styles['ordenador--darkMode__option']]: darkMode,
                                [styles['ordenador--darkMode__option--ativo']]: darkMode && opt.value !== '' && opt.value === ordenador,
                            })
                        }
                        onClick={() => setOrdenador(opt.value as OpcoesOrdenador)}
                    >
                        {opt.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Ordenador