import './App.css';
import { Route, Routes } from 'react-router-dom';
import ComingSoon from './components/timeline/ComingSoon';
import Homepages from './HomePages/Homepages';

function App() {
  return (
    <div className="App">
      <main>
          <Routes>
          <Route path='/' Component={Homepages} />
            <Route path='/coming' element={<ComingSoon />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
