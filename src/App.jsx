
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Doctor from './pages/doctor/Doctor'
import UploadFile from './pages/doctor/UploadFile'

function App() {


  return (
     <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        {/* <Route path='/doctors' element={<Doctor/>}/> */}
        <Route path='/doctors' element={<UploadFile/>}/>

        </Route>
      </Routes>
     </Router>
    
  )
}

export default App

export const baseUrl = 'http://localhost:8080/api/v1'