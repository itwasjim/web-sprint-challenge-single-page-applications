import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPizzaForm from './components/OrderPizzaForm';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/order-pizza" component={OrderPizzaForm} />
      </Routes>
    </div>
  );
};

export default App;
