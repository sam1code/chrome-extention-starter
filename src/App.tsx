import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  const [documentTitle, setDocumentTitle] = useState("React App");

  useEffect(() => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      (tabs: chrome.tabs.Tab[]) => {
        chrome.tabs.sendMessage(tabs[0]?.id as number, {
          action: "changeTitle",
          title: "New Title",
        });
      }
    );
  }, [documentTitle]);

  return (
    <>
      <img src={logo} alt="React logo" style={{ width: "100px" }} />
      <h1>Counter</h1>
      <p>{count}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <button onClick={() => setDocumentTitle("New Title")}>
        Change Document Title
      </button>
    </>
  );
}

export default App;
