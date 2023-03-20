import React from 'react'
import Alert from './Alert/Alert'

const ItemContainer = (props) => {
  return (
    <Alert textAlert={props.greeting}/>
  )
}

export default ItemContainer