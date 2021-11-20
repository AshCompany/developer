import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Pageone from './Pageone';
import Home from './Home';
import PageTwo from './PageTwo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/page-one' element={<Pageone />} />
          <Route path='/page-two' element={<PageTwo  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
