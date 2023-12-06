import Componentetarjetas from "./Componentes/Componentetarjetas";
import '../src/App.css'
import Footer from "./Componentes/Footer";
import Login from "./Componentes/Login";
import Navegacion from "./Componentes/Navegacion";
import {Route, Routes} from 'react-router-dom'; 
import Detalletarjeta from "./Componentes/Detalletarjeta";

function App() {
  return <>
    <Navegacion/>
    <Routes>
      <Route path="/" element={<Login></Login>}/>
      <Route path="/tarjetas" element={<Componentetarjetas></Componentetarjetas>}/>
      <Route path="/tarjetas/:id" element={<Detalletarjeta></Detalletarjeta>}/>
    </Routes>
    <Footer></Footer>
  </>
}

export default App;