import style from'./Button.module.scss'
import React from 'react'


const Button = ({children}: React.PropsWithChildren) => {
  return (
      <button className={style.botao} >

      {children}

      </button>
  )
}


export default Button;
