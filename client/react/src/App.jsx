import Home from './components/Home'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from "./components/Form"
import UpdateForm from './components/UpdateForm'

function App() {

  return (
    <>     
    <BrowserRouter> 
      
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/update/:id" element={<UpdateForm/>}/>

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
