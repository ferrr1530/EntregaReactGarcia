import React from 'react'

const Alert = (props) => {
  return (
    <div class="alert alert-primary" role="alert">
      {props.textAlert}
    </div>
  )
}

export default Alert