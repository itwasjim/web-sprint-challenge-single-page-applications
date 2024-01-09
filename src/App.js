import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPizzaForm from './components/OrderPizzaForm';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<OrderPizzaForm />} />
      </Routes>
    </div>
  );
};

export default App;
