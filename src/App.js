import './App.css';
import NavBar from './NavBar-gmc';
import Homegmc from './Homegmc';
import Create from './create';
import Dashboard from './dashboard';
import Support from './support';
import TableLog from './table';
import { BrowserRouter as Router,Route,Switch,Link,Redirect, Routes } from "react-router-dom";
function App(){
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Homegmc/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/support' element={<Support/>}/>
    </Routes>
    
    
    </>
  );
};
export default App;