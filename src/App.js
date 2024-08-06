import './App.css';
import Navbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'


function App() {


  return (
    <div >
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/cart' element={<Cart/>}>Cart</Route>
      </Routes>

    </div>
  );
}

export default App;
