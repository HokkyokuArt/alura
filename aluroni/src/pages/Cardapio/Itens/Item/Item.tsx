import styles from './Item.module.scss'
import cardapio from '../itens.json'
import classNames from 'classnames'

type ICardapio = typeof cardapio[0]
interface Props extends ICardapio{
    darkMode: boolean;
}
const Item = ({
    title,
    description,
    photo,
    size,
    serving,
    price,
    category, 
    darkMode
}:Props) => {


    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={`${styles.item__titulo} ${darkMode && styles['item--darkMode__titulo']}`}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={
                        classNames(
                            {
                                [styles.item__tipo]: true,
                                [styles[`item__tipo__${category.label.toLowerCase()}`]]: !darkMode,
                                [styles['item--darkMode__tipo']]: darkMode,
                                [styles[`item--darkMode__tipo__${category.label.toLowerCase()}`]]: darkMode,

                            }
                        )
                    }
                    >{category.label}</div>
                    <div className={`${styles.item__porcao} ${darkMode && styles['item--darkMode__porcao']}`}>{size}g</div>
                    <div className={`${styles.item__qtdpessoas} ${darkMode && styles['item--darkMode__qtdpessoas']}`}>Serve {serving} pessoa{serving !== 1 && 's'}</div>
                    <div className={styles.item__valor}>R$ {price.toFixed(2).replace('.', ',')}</div>
                </div>
            </div>
        </div>
    )
}

export default Item