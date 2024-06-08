import logo from './logo.svg';
import './App.css';
import Viewall from './Components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add ';
import Search from './Components/Search';
import Delete from './Components/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/viewall' element={<Viewall/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
