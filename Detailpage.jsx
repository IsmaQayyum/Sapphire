import React from 'react'
import { useParams } from 'react-router-dom'
import Sale from '../Data/Sale.json'
 
const Detailpage = () => {
  const {id}= useParams();
  const detail = Sale.find((g)=>g.id==id)
  return (
    <>
    <img src={detail.image} alt=''/>

    </>
  )
}

export default Detailpage
