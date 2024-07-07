import { Description } from '@mui/icons-material'
import React from 'react'
import Sale from '../Data/Sale.json'
import { Link } from 'react-router-dom'

const Cards2 = () => {
  return (
    <div>
         <div className="row img">
        
        {
            Sale.map((f)=>{
                return(
                    <div className="col-lg-3 img1 ">

            <div className="card">
              <Link to={`/Sale/${f.id}`}><img src={f.image} alt='' className='img2'/></Link>
            </div>
                
            <div className="seperate">
                <div className="left">
                    <h5>{f.name}</h5>
                    <p>{f.description}</p>
                    <p>{f.price}</p>
                    
            <button className='butn'>Add to Bag</button>
                
               
                </div>
            </div>
            </div>
                )
            })
        }
     
      
    
      </div>
    </div>
  )
}

export default Cards2
