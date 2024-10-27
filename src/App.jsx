
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Add from './pages/Add'
import Update from './components/Update'

function App() {

  return (
    <>
    
      <Header/>
      
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/update/:id' element={<Update/>}/>

      </Routes>
    </>
  )
}

export default App
