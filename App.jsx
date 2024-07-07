import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Beauty from './Pages/Beauty'
import { Man, Woman } from '@mui/icons-material'
import Men from './Pages/Men'
import Womens from './Pages/Womens'
import Accessories from './Pages/Accessories'
import Sale from './Pages/Sale'
import Kids from './Pages/Kids'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Detailpage from './Components/Detailpage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/sale' element={<Sale/>}></Route>
  <Route path='/womens' element={<Womens/>}></Route>
  <Route path='/men' element={<Men/>}></Route>
  <Route path='/kids' element={<Kids/>}></Route>
  <Route path='/beauty' element={<Beauty/>}></Route>
  <Route path='/accessories' element={<Accessories/>}></Route>
  <Route path='/sale/:id ' element={<Detailpage/>}></Route>

</Routes>




    </>
  )
}

export default App
