import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Reads from './pages/Reads';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/miranda-law' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="reads" element={<Reads />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;