import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPizzaForm from "./components/OrderPizzaForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/order-pizza" component={OrderPizzaForm} />
      </Routes>
    </Router>
  );
};

export default App;
