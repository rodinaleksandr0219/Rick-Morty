import React, { Fragment } from "react";

import Main from "./pages";
import Header from "./components/Header/Header";

import "./App.css";

const App: React.FC = (): JSX.Element => {
   return (
      <Fragment>
         <Header />
         <Main />
      </Fragment>
   )
};

export default App;
