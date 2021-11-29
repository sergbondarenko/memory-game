import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from '../game';
import FirstPage from '../first-page';
import LastPage from '../last-page';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="//" element={<FirstPage />} />
          <Route path="/game/" element={<Game />} />
          <Route path="/end/" element={<LastPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
