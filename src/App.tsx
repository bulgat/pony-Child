import './App.css';
import { Outlet } from 'react-router';
import Navbar from './pages/navbar/Navbar';
          //<Navbar />
function App() {
  return (
      <div>
          <Navbar />
          <br/>
          <Outlet/>
    </div>
  );
}

export default App;
