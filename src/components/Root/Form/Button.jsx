import React from 'react'
import { Orders } from './../../ui/orders/index';

export const Button = ({title,buttonClass}) => {


  return (
    <button className={buttonClass}>{title}</button>
  )
}

