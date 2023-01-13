import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import Buscador from './Buscador/Buscador'
import { useLayoutEffect, useState } from 'react'
import Filtros from './Filtros/Filtros'
import Ordenador, { OpcoesOrdenador } from './Ordenador/Ordenador'
import Itens from './Itens/Itens'
import ColorMode from './ColorMode/ColorMode'

const Cardapio = () => {

    const [busca, setBusca] = useState<string>('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('')

    const [darkMode, setDarkMode] = useState<boolean>(false)

    useLayoutEffect(() => {
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }, [])



    return (
        <main className={`${styles.Main} ${darkMode && styles['Main--darkMode']}`}>
            <nav className={`${styles.menu} ${darkMode && styles['menu--darkMode']}`}>
                <Logo />
                <ColorMode darkMode={darkMode} setDarkMode={setDarkMode} />

            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>

            <section className={styles.cardapio} >
                <h3 className={`${styles.cardapio__titulo} ${darkMode && styles['cardapio__titulo--darkMode']}`}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} darkMode={darkMode}></Buscador>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} darkMode={darkMode} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} darkMode={darkMode} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} darkMode={darkMode} />
            </section>
        </main>
    )
}

export default Cardapio