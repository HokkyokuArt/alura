import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import Buscador from './Buscador/Buscador'
import { useState } from 'react'
import Filtros from './Filtros/Filtros'
import Ordenador, { OpcoesOrdenador } from './Ordenador/Ordenador'
import Itens from './Itens/Itens'

const Cardapio = () => {

    const [busca, setBusca] = useState<string>('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('')

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>

            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}></Buscador>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
            </section>

        </main>
    )
}

export default Cardapio