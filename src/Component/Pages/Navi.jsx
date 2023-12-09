import React from 'react'
import { Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Navi = () => {
  return (
   <>
   <div class="wrapper fadeInDown">
  <div id="formContent">

   <Button><NavLink to="/user"> User</NavLink></Button>
   <Button><NavLink to="/owner">Owner</NavLink></Button>
   <Button><NavLink to="/partner">Partner</NavLink></Button>

  </div>
  </div>
   </>
  )
}

export default Navi