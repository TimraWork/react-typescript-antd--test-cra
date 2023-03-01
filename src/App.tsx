import copy from "copy-to-clipboard";
import { useClipboard } from "use-clipboard-copy";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const clipboard = useClipboard({ copiedTimeout: 750 });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button
          onClick={() => {
            copy("Text", {
              message: "Press #{key} to copy",
              onCopy: () => {
                alert("Copy");
              },
            });
          }}
        >
          СКОПИРОВАТЬ
        </button>
        <br />

        <button onClick={() => clipboard.copy(new Date().toString())}>
          {clipboard.copied ? "Copied" : "Copy Current Date"}
        </button>
      </header>
    </div>
  );
}

export default App;
