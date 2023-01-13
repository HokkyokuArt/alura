import React from "react"
import styles from "./Buscador.module.scss"
import { CgSearch } from 'react-icons/cg'


interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>,
    darkMode: boolean,
}

const Buscador = ({ busca, setBusca, darkMode}: Props) => {
    return (
        <div className={`${styles.buscador} ${darkMode && styles['buscador--darkMode']}`}>
            <input
                value={busca}
                onChange={e => setBusca(e.target.value)}
                placeholder="Buscar"
            />
            <CgSearch size={20}/>
        </div>
    )
}

export default Buscador