import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <NavBar />
        </div>
        <section className="content">
          <Routes>
            <Route path="/" exact element={<Books />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
