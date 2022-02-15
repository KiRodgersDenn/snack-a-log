import {BrowserRouter as Router, Routes , Route} from "react-router-dom"

import Home from "./pages/Home";
import AllSnacks from './pages/AllSnacks.js';
import NewSnack from './pages/NewSnack.js';
import ShowSnack from './pages/ShowSnack.js';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/snacks' element={<AllSnacks/>}/>
          <Route path='/snacks/new' element={<NewSnack/>}/>
          <Route path='/snacks/:index' element={<ShowSnack/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
