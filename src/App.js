import logo from './logo.svg';
import './App.css';
import { Add } from './component/Add';
import Search from './component/Search';
import ViewAll from './component/ViewAll';
import Delete from './component/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
