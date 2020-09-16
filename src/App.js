import React from "react";
import "./App.css";
import {LandingPage} from "./components/landing/index";

function App() {
const [landing, setLanding] = React.useState(true)

  return (
    <>
      <h1>Hello world</h1>
      {landing ? <LandingPage landing={landing} setLanding={setLanding}></LandingPage> : null}
    </>
  );
}

export default App;
