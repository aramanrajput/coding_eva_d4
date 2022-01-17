import logo from './logo.svg';
import './App.css';
import  Navbar  from './components/navbar';
import { Route,Routes } from 'react-router-dom';
import { Login } from './components/login';
import Form from "./components/home.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path ="/" element={ <Form/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
