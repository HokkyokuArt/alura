import ColorMode from 'pages/Cardapio/ColorMode/ColorMode';
import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const rotas = [
  {
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  },
  {
    label: 'Sobre',
    to: '/sobre'
  },

];


const Menu = (/* {darkMode , setDarkMode}: Props */) => {



  return (
    <nav className={`${styles.menu} `/* ${darkMode && styles['menu--darkMode']} */}>
      <Logo />
      <ul className={styles.menu__list}>
        {
          rotas.map((rota, index) => (
            <li key={index} className={styles.menu__link}>
              <Link to={rota.to}>{rota.label}</Link>
            </li>
          ))
        }
      </ul>

      {/* <ColorMode darkMode={darkMode} setDarkMode={setDarkMode} /> */}

    </nav>
  );
};

export default Menu;