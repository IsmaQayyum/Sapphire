import React from 'react'
import Data from '../Data/Data.json'                                                                                           
import { Container } from 'react-bootstrap'

const Cards = () => {

  return (
    <div>
   
      
    <div className="row ">
    <div className="col-lg-2"><p className='cd'>What's <br></br>New</p></div>
      {
        Data.map((e)=>{
          return(
          
            <div className="col-lg-2">
              
              <img src={e.image} alt='' className='ef'/>
              <h5 className='az'>{e.name}</h5>
              <p className='txt'>{e.discription}</p>
              </div>
              
            
          )
        })
      }
      
 
  
   
    </div>
    <h3 className='fa'>Shop By Cetagory</h3><hr></hr>
  
    </div>
  )
}

export default Cards
