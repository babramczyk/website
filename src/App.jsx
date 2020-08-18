/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";
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
    </div>
  );
}

export default App;
