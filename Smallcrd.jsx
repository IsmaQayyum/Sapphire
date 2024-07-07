import React from 'react'
import { NavLink } from 'react-bootstrap'

const Smallcrd = () => {
  return (
    <div>
    <div className='container'>
        <div className="row">
            <div className="col-lg"><p className='ts'>READY TO<br></br> WEAR</p><p className='ew'>Flat 50% OFF</p></div>
            <div className="col-lg"><img src='/festive_II.avif' alt='' className='we'/>
            <p className='sa'>festiveII</p></div>

            <div className="col-lg"><img src='/festive2.avif' alt='' className='we'/>
            <p className='sa'>Winter's 23</p></div>
            <div className="col-lg"><img src='/festive3.avif' alt='' className='we'/>
            <p className='sa'>Solids</p></div>
            <div className="col-lg"><img src='/festive4.avif' alt='' className='we'/>
            <p className='sa' >Embroidered</p></div>
            <div className="col-lg"><img src='/festive5.avif' alt='' className='we'/>
            <p className='sa'>Printed</p></div>
            <div className="col-lg"><img src='/festive6.avif' alt='' className='we'/>
            <p className='sa'>Silk</p></div>
            <div className="col-lg"><img src='/festive8.avif' alt='' className='we'/>
            <p className='sa'>Outfits</p></div>
        </div>
        </div>
        <NavLink to="/"><h4>Home >Embroidered </h4></NavLink>
       
      
    </div>
  )
}

export default Smallcrd
