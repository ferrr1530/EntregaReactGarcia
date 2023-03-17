import React from 'react'
import Navbar from '../Navbar/Navbar'


const ContactView = () => {
  return (
<>
    < Navbar />

    <form style={{backgroundColor:'orange', padding: 60}}>
  <div className='form-row'>
    <div className='form-group col-md-6'>
      <label for="inputEmail4">Email</label>
      <input type="email" className='form-control' id="inputEmail4" placeholder="Email"/>
    </div>
    <div className='form-group col-md-6'>
      <label for="inputPassword4">Contraseña</label>
      <input type="password" className='form-control' id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className='form-group'>
    <label for="inputAddress">Direccion Particular</label>
    <input type="text" className='form-control' id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className='form-row'>
    <div className='form-group col-md-6'>
      <label for="inputCity">Ciudad</label>
      <input type="text" className='form-control' id="inputCity"/>
    </div>
  </div>
  <div className='form-group'>
    <div className='form-check'>
      <input className='form-check-input' type="checkbox" id="gridCheck"/>
      <label className='form-check-label' for="gridCheck">
        Estoy de acuerdo
      </label>
    </div>
  </div>
  <button type="submit" className='btn btn-primary'>Enviar</button>
</form>
</>
  )
  
}

export default ContactView