import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Lambda Eats</h1>
            <Link to="/order-pizza" id="order-pizza">
                Order Pizza
            </Link>
            </div>
    );
};

export default HomePage;