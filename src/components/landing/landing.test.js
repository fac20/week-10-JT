import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import  App from "../../App"

test("Landing component renders", () => {
render(<App/>)

  //click button if it exists
  //look for next component to be rendered
  const startBtn = screen.getByText("START");
  fireEvent.click(startBtn);
  screen.getByText("Hello world") 
});


