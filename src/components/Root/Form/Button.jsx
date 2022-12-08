import React from 'react'
import { Orders } from './../../ui/orders/index';

export const Button = ({title,buttonClass,children}) => {

const child=children;
  return (
    <button className={buttonClass}>{title}  <span>{child}</span></button>
  )
}

