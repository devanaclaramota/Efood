import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Global } from "./Styles";
import { Home } from "./pages/Home";
import { Cardapio } from './pages/cardapio/cardapio';
function App() {
  return (
    
    <>
    <Global />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cardapio/:id' element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
