import React from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import styles from './ColorMode.module.scss'

interface Props {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ColorMode = ({ darkMode, setDarkMode }: Props) => {


    return (
        <button
            className={`${styles.btn} ${darkMode && styles['btn--darkMode']}`}
            onClick={() => {
                setDarkMode(!darkMode);
            }}
        >
            {!darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
        </button>
    )
}

export default ColorMode