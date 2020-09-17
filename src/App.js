import React from "react";
import "./App.css";
import {LandingPage} from "./components/landing/index";
import {QuizPage} from "./components/quiz/index"


function App() {
const [landing, setLanding] = React.useState(true)
const [goAgain, setGoAgain]= React.useState(false);

  return (
    <>
      {landing ? <LandingPage landing={landing} setLanding={setLanding}></LandingPage> : <QuizPage goAgain={goAgain} setGoAgain={setGoAgain} />}
    </>
  );
}

export default App;
