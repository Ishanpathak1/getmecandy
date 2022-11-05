import './App.css';
import NavBar from './NavBar-gmc';
import Homegmc from './Homegmc';
import Create from './create';
import Dashboard from './dashboard';
import { BrowserRouter as Router,Route,Switch,Link,Redirect, Routes } from "react-router-dom";
function App(){
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Homegmc/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    
    
    </>
  );
};
export default App;