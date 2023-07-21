import './App.css';
import LoginPage from './Components/loginPage';
import RegPage from './Components/regPage';
import MessPage from './Components/messPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ='/' element={<LoginPage />}></Route>
          <Route path ='/reg' element={<RegPage  />}></Route>
          <Route path ='/chat' element={<MessPage  />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
