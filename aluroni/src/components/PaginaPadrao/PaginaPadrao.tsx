import React from 'react';
import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet />
            </div>
        </>
    );
};

export default Header;