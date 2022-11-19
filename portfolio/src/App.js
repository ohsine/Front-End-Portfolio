import React from "react";
import {Routes, Route, Link} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
import Input from "./pages/Input"
import Input2 from "./pages/Input2"
import List from "./pages/List"
import Learning from "./pages/Learning"
import Words from "./pages/Words"
import Keys from "./pages/Keys"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        포트폴리오
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/input">Input</Link> |{" "}
          <Link to="/input2">Input2</Link> |{" "}
          <Link to="/list">List</Link> |{" "}
          <Link to="/learning">Learning</Link> |{" "}
          <Link to="/words">Words</Link> |{" "}
          <Link to="/keys">Keys</Link>
          {/*== <a href="/">Home</a> */}
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/Input" element={<Input />}/>
          <Route path="/Input2" element={<Input2 />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/learning" element={<Learning />}/>
          <Route path="/words/*" element={<Words />}/>
          <Route path="/keys" element={<Keys />}/>
        </Routes>
    </div>
  );
}

export default App;
