
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Moviedetails from './Components/Moviedetails';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Moviedetails/>}/>
        <Route path="*" element={<Error/>}/>
       </Routes>
       
    </div>
  );
}

export default App;
