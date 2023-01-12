import React from 'react'
import filtros from './filtros.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames';
type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

const Filtros = ({ filtro, setFiltro }: Props) => {
    const selecionarFiltro = (opt: IOpcao) => {
        if (opt.id == filtro) return setFiltro(null)
        return setFiltro(opt.id);
    }

    return (
        <div className={styles.filtros}>
            {filtros.map(opt => (
                <button
                    key={opt.id}
                    // className={`${styles.filtros__filtro} ${filtro === opt.id ? styles['filtros__filtro--ativo'] : ''}`}
                    className={classNames(
                        {
                            [styles.filtros__filtro]: true,
                            [styles['filtros__filtro--ativo']]: filtro === opt.id
                        }
                    )}
                    onClick={() => selecionarFiltro(opt)}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    )
}

export default Filtros