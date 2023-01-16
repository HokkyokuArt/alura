import styles from './Cardapio.module.scss';
import Buscador from './Buscador/Buscador';
import { useLayoutEffect, useState } from 'react';
import Filtros from './Filtros/Filtros';
import Ordenador, { OpcoesOrdenador } from './Ordenador/Ordenador';
import Itens from './Itens/Itens';
import stylesTema from 'styles/Tema.module.scss'

const Cardapio = () => {

    const [busca, setBusca] = useState<string>('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');

    const [darkMode, setDarkMode] = useState<boolean>(false);

    useLayoutEffect(() => {
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, []);


    return (
        <section>
            <h3 className={`${stylesTema.titulo} ${darkMode && styles['cardapio__titulo--darkMode']}`}>Cardápio</h3>
            <Buscador busca={busca} setBusca={setBusca} darkMode={darkMode}></Buscador>
            <div className={styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} darkMode={darkMode} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} darkMode={darkMode} />
            </div>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador} darkMode={darkMode} />
        </section>
    );
};

export default Cardapio;