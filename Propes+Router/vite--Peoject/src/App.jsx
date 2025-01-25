
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import FullscreenImage from './components/FullscreenImage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/image/:id" element={<FullscreenImage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
