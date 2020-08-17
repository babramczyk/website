import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ReadMe } from "./pages/README";
import { File1 } from "./pages/file1";
import { File2 } from "./pages/file2";

function App() {
  return (
    <Router>
      <div className="content">
        <div className="nav"></div>
        <div className="sidebar">
          <ul className="file-list">
            <li className="file">
              <Link to="/">README.md</Link>
            </li>
            <li className="file">
              <Link to="/file1.md">file1.md</Link>
            </li>
            <li className="file">
              <Link to="/file2.md">file2.md</Link>
            </li>
          </ul>
        </div>
        <main>
          <Switch>
            <Route path="/file1.md">
              <File1 />
            </Route>
            <Route path="/file2.md">
              <File2 />
            </Route>
            <Route path="/">
              <ReadMe />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
