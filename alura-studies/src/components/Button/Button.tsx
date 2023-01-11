import style from './Button.module.scss'
import React from 'react'

interface Props {
  children: React.ReactNode,
  type?: "button" | "submit" | "reset",
  onClick?: ()=> void

}

const Button = ({ children, type = 'button', onClick }: Props) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>

      {children}

    </button>
  )
}


export default Button;
