import classNames from 'classnames';
import { TPrato } from 'types/TPrato';
import styles from './TagsPrato.module.scss'

const TagsPrato = ({category,size,serving,price}:TPrato) => {
    return (
        <>
            <div className={styles.tags}>
                <div className={
                    classNames(
                        {
                            [styles.tags__tipo]: true,
                            [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
                            // [styles['tags__darkMode__tipo']]: darkMode,
                            // [styles[`tags__darkMode__tipo__${category.label.toLowerCase()}`]]: darkMode,

                        }
                    )
                }
                >{category.label}</div>
                <div className={`${styles.tags__porcao} `/* ${darkMode && styles['tags__darkMode__porcao']}` */}>{size}g</div>
                <div className={`${styles.tags__qtdpessoas} `/* ${darkMode && styles['tags__darkMode__qtdpessoas']}` */}>Serve {serving} pessoa{serving !== 1 && 's'}</div>
                <div className={styles.tags__valor}>R$ {price.toFixed(2).replace('.', ',')}</div>
            </div>
        </>
    );
};

export default TagsPrato;