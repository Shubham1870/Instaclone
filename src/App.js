
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Postview from './Components/postview/postview';
import Landingpage from './Components/landing page/landingpage';
import Postcard from './Components/postcard/postcard';

function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Landingpage/>}/>
   <Route path='/postview' element={<Postview/>}/>
   <Route path='/postcard' element={<Postcard/>}/>
   </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
