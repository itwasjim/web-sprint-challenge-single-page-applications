import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderPizzaForm.css'; // import CSS file

const OrderPizzaForm = () => {
    const [customerName, setCustomerName] = useState('')
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [selectedCrust, setSelectedCrust] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedSauce, setSelectedSauce] = useState([]);
    const [selectedCheese, setSelectedCheese] = useState([]);

    const handleNameChange = (event) => {
        setCustomerName(event.target.value);
    }

    const handleToppingChange = (topping) => {
        const isSelected = selectedToppings.includes(topping);
        setSelectedToppings ((prevToppings) =>
            isSelected
            ? prevToppings.filter((prevTopping) => prevTopping !== topping)
            : [...prevToppings, topping]
        );
    };

    const handleCrustChange = (crust) => {
        setSelectedCrust(crust);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
      };

    const handleSauceChange = (sauce) => {
        setSelectedSauce(sauce);
    };

    const handleCheeseChange = (cheese) => {
        setSelectedCheese(cheese);
    };

    return (
        <div className="container">
            <h2>Build Your Own Pizza</h2>
            <form id="pizza-form">
                <label htmlFor="name-input">
                    Name:
                    <input
                        type="text"
                        id="name-input"
                        value={customerName}
                        onChange={handleNameChange}
                    />
                </label>

                {/* Size Options */}
                <div>
                    <h3>Size</h3>
                </div>
                    <label>
                        <input
                            type="radio"
                            value="small"
                            checked={selectedSize === ('small')}
                            onChange={() => handleSizeChange('small')}
                        />
                        Small
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="medium"
                            checked={selectedSize === ('medium')}
                            onChange={() => handleSizeChange('medium')}
                        />
                        Medium
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="large"
                            checked={selectedSize === ('large')}
                            onChange={() => handleSizeChange('large')}
                        />
                        Large
                    </label>

                {/* Crust Options */}
                <div>
                    <h3>Crust</h3>
                </div>
                    <label>
                        <input
                            type="radio"
                            value="original"
                            checked={selectedCrust === ('original')}
                            onChange={() => handleCrustChange('original')}
                        />
                        Original
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="thin"
                            checked={selectedCrust === ('thin')}
                            onChange={() => handleCrustChange('thin')}
                        />
                        Thin
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="handTossed"
                            checked={selectedCrust === ('handTossed')}
                            onChange={() => handleCrustChange('handTossed')}
                        />
                        Hand Tossed
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="stuffed"
                            checked={selectedCrust === ('stuffed')}
                            onChange={() => handleCrustChange('stuffed')}
                        />
                        Stuffed
                    </label>

                <div className="topping-container">
                    <h3>Toppings</h3>
                    {/* Category: Meats */}
                    <div className="topping-category">
                        <h4>Meats</h4>
                        {['Italian Sausage', 'Pepperoni', 'Bacon', 'Meatball', 'Ham', 'Grilled Chicken', 'Beef', 'Pork' /* Add more meat toppings as needed */].map((topping) => (
                            <div key = {topping}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={topping}
                                        checked={selectedToppings.includes(topping)}
                                        onChange={() => handleToppingChange(topping)}
                                    />
                                    {topping.charAt(0).toUpperCase() + topping.slice(1)}
                                </label>
                            </div>
                         ))}
                    </div>
                    {/* Category: Veggies */}
                    <div className="topping-category">
                        <h4>Veggies</h4>
                        {['Mushrooms', 'Onions', 'Pineapple', 'Black Olives', 'Green Peppers', 'Banana Peppers', 'Jalapeno Peppers', 'Tomatoes' /* Add more veggie toppings as needed */].map((topping) => (
                            <div key = {topping}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={topping}
                                        checked={selectedToppings.includes(topping)}
                                        onChange={() => handleToppingChange(topping)}
                                    />
                                    {topping.charAt(0).toUpperCase() + topping.slice(1)}
                                </label>
                            </div>
                         ))}
                    </div>
                </div>
                
                {/* Sauce Options */}
                <div>
                    <h3>Sauce</h3>
                </div>
                    <label>
                        <input
                            type="radio"
                            value="marinara"
                            checked={selectedSauce === ('marinara')}
                            onChange={() => handleSauceChange('marinara')}
                        />
                        Marinara
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="garlicParmesan"
                            checked={selectedSauce === ('garlicParmesan')}
                            onChange={() => handleSauceChange('garlicParmesan')}
                        />
                        Garlic Parmesan
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="barbeque"
                            checked={selectedSauce === ('barbeque')}
                            onChange={() => handleSauceChange('barbeque')}
                        />
                        Barbeque
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="buffalo"
                            checked={selectedSauce === ('buffalo')}
                            onChange={() => handleSauceChange('buffalo')}
                        />
                        Buffalo
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="pesto"
                            checked={selectedSauce === ('pesto')}
                            onChange={() => handleSauceChange('pesto')}
                        />
                        Pesto
                    </label>

                {/* Cheese Options */}
                <div>
                    <h3>Cheese</h3>
                </div>
                    <label>
                        <input
                            type="radio"
                            value="none"
                            checked={selectedCheese === ('none')}
                            onChange={() => handleCheeseChange('none')}
                        />
                        None
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="light"
                            checked={selectedCheese === ('light')}
                            onChange={() => handleCheeseChange('light')}
                        />
                        Light
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="regular"
                            checked={selectedCheese === ('regular')}
                            onChange={() => handleCheeseChange('regular')}
                        />
                        Regular
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="extra"
                            checked={selectedCheese === ('extra')}
                            onChange={() => handleCheeseChange('extra')}
                        />
                        Extra
                    </label>
            </form>

            <button type="submit">Place Order</button>

            <Link to="/" id="back-button">
            Back to Homepage
            </Link>

        </div>
    );
};

export default OrderPizzaForm;