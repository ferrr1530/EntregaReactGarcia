import React from 'react'
import Alert from './Alert/Alert'

const ItemListContainer = (props) => {
  return (
    <Alert textAlert={props.greeting}/>
  )
}

export default ItemListContainer