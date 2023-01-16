import styles from './Item.module.scss';
import { TPrato } from 'types/TPrato';
import TagsPrato from 'components/TagsPrato/TagsPrato';
import { useNavigate } from 'react-router-dom';

interface Props extends TPrato {
    darkMode: boolean;
}
const Item = (props: Props) => {
    const { id, title, description, photo, darkMode } = props;
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={()=>navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={`${styles.item__titulo} ${darkMode && styles['item--darkMode__titulo']}`}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <TagsPrato {...props} />
            </div>
        </div>
    );
};

export default Item;