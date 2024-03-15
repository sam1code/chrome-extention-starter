import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";
import { Box, Button } from "@mui/material";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs);
      setData(tabs[0]);
    });
  }, []);

  return (
    <Box>
      {data.favIconUrl && (
        <img
          src={data.favIconUrl}
          alt="Favicon"
          style={{ width: "50px", height: "50px" }}
        />
      )}
      <h1>Hello, From Burger Beats!</h1>
      <p>
        You are currently on: <br />
        {(() => {
          switch (true) {
            case (data as { url?: string }).url?.includes(
              "bx=COO.1.2310.1.3236&venv_view=COO.1.1001.1.439101"
            ):
              return "Home Page";
            case (data as { url?: string }).url?.includes(
              "bx=COO.1.2310.1.3239&venv_view=COO.15.1001.1.204008"
            ):
              return "DMS";
            case (data as { url?: string }).url?.includes(
              "bx=COO.1.2310.1.3234&venv_view=COO.1.1.1.1693"
            ):
              return "Desktop";
            case (data as { url?: string }).url?.includes(
              "bx=COO.1.2310.1.3232&venv_view=COO.1.1.1.333"
            ):
              return "Schreibtisch";
            default:
              return (data as { url?: string }).url;
          }
        })()}
      </p>

      <Button
        variant="contained"
        color="info"
        onClick={() => window.open("https://t.me/BurgerBeat_bot")}
      >
        Click me to use telebot
      </Button>
    </Box>
  );
}

export default App;
