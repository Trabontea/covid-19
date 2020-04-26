import React from "react";
import Directory from "./components/directory/directory";
import Footer from "./components/footer/footer";
import './App.scss';

const App = () =>  {
      return (
        <div className="App">
          <Directory />
          <Footer />
        </div>
      )
};
export default App;
