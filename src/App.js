// React Imports
import React from 'react';
import "./app.scss";
// React-Router-Dom
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';

// Component Imports
import VendingMachineContainer from "./Components/VendingMachinePage/VendingMachineContainer";
import RefillPage from "./Components/RefillPage/RefillPage";
import Navbar from "./Components/Navbar/Navbar";

// export const ProductContext = React.createContext();

const App = () => {


  return (
    <HashRouter>
      <div className="App">
        <Route path="/" exact component={VendingMachineContainer} />
        <Route path="/refill" component={RefillPage} />
      </div>
    </HashRouter>

  );
}

export default App;
