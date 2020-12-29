import React from "react";
import MainComponent from "./src/MainComponent";
import { Provider } from "react-redux";
import Store from "./src/redux/Store";


export default function App() {
  return (
    <Provider store={Store}>
          <MainComponent/>
    </Provider>

  )
  
}

