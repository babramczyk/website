/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReadMe } from "./pages/ReadMe";
import { File1 } from "./pages/File1";
import { File2 } from "./pages/File2";
import { Explorer } from "./components/Explorer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Router>
      <div
        css={{
          display: "flex",
          background: "rgb(33, 33, 33)",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Nav />
        <Explorer />
        <main css={{ background: "white", flex: '1 1 100ch', padding: "4rem" }}>
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
