import React from "react";
import "./App.css";
import {LandingPage} from "./components/landing/index";
import {QuizPage} from "./components/quiz/index"


function App() {
const [landing, setLanding] = React.useState(true)

  return (
    <>
      <h1>You have been served!</h1>
      {landing ? <LandingPage landing={landing} setLanding={setLanding}></LandingPage> : <QuizPage/>}
    </>
  );
}

export default App;
