import React from 'react'
import Products from '../Data/Products.json'
import { Container } from '@mui/material'

const Addcards = () => {
  return (
    <div>
    
  
        
        
      <div className="row img">
    
    {Products.map((x)=>{
        return(
            <div className="col-lg-3 img1 ">

            <div className="card">
                <img src={x.image} alt='' className='img2'/>
            </div>
                
            <div className="seperate">
                <div className="left">
                    <h5>{x.name}</h5>
                    <p>{x.description}</p>
                    <p>{x.price}</p>
                    <button className='butn'>click me</button>
                </div>
            </div>
            </div>

        )})
    }
    </div>
    


<h3 className='as'>Sales Favourite</h3><hr></hr>

      </div>
 
    
  )
}

export default Addcards
