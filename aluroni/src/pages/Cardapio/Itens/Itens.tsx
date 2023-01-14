import { useEffect, useState } from 'react'
import Item from './Item/Item'
import cardapio from 'data/cardapio.json'
import styles from './Itens.module.scss'

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string,
    darkMode: boolean
}

export default function Itens({ busca, filtro, ordenador, darkMode }: Props) {
    const [lista, setLista] = useState(cardapio)

    const testaBusca = (title: string) => {
        const regex = new RegExp(busca, 'i')
        return regex.test(title);
    }

    const testaFiltro = (id: number) => {
        if (filtro !== null) return filtro === id;
        return true;
    }

    const ordenar = (lista: typeof cardapio): typeof cardapio => {
        switch (ordenador) {
            case 'porcao':
                return lista.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return lista.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case 'preco':
                return lista.sort((a, b) => a.price > b.price ? 1 : -1);
            default:
                return lista;
        }
    }


    useEffect(() => {
        const listaFiltrada =
            cardapio
                .filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        const listaOrdenada = ordenar(listaFiltrada);
        setLista(listaOrdenada)
    }, [busca, filtro, ordenador])


    return (
        <div className={styles.itens}>
            {lista.length > 0 ? lista.map(item => (
                <Item key={item.id} {...item} darkMode={darkMode} />
            )) : <div className={styles.naoEncontrado}>
                <p>Desculpa... prato não encontrado</p>
            </div>}
        </div >
    )
}
