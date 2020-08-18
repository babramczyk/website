/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { ReadMe } from "./pages/ReadMe";
import { File1 } from "./pages/File1";
import { File2 } from "./pages/File2";
import { Explorer } from "./components/Explorer";
import { Nav } from "./components/Nav";
import { Editor } from "./components/Editor";

function App() {

  return (
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
      <Editor />
      <main>
      </main>
    </div>
  );
}

export default App;
