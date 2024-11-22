import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import CriarForm from "./Pages/CriarForm.jsx";


const App = () => {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/CriarForm' element={<CriarForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;