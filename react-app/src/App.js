
import './App.css';

import Home from './Component/Home';
import About from './Component/About';
import Projects from './Component/Project/Projects';
import Project from './Component/Project/Project';
import ProjectLists from './Component/Project/ProjectLists';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Layout/Header';

import Footer from './Layout/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="project" element={<Projects />}>
          <Route path="" element={<ProjectLists />} />
          <Route path=":slug" element={<Project />} />
        </Route>
      </Routes>


      <Footer />
    </Router>




  );
}







export default App;
