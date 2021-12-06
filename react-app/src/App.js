<<<<<<< HEAD
import logo from "./logo.svg"
import "./App.css"
=======

import './App.css';
>>>>>>> 467a593d62fefeb91940fa1b16d3e26b24461e6f

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
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
=======
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
>>>>>>> 467a593d62fefeb91940fa1b16d3e26b24461e6f
