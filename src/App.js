import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Pageone from './Pageone';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<div>home</div>} />
          <Route path='/page-one' element={<Pageone />} />
          <Route path='/page-two' element={<div>page 2</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
