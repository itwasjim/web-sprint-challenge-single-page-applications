import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OrderPizzaForm.css'; // import CSS file

const OrderPizzaForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [nameError, setNameError] = useState('');
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [selectedCrust, setSelectedCrust] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedSauce, setSelectedSauce] = useState('');
    const [selectedCheese, setSelectedCheese] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');

    const navigate = useNavigate(); 

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setCustomerName(newName);

        // Validate name (at least 2 characters)
        if (newName.length < 2) {
            setNameError('Name must be at least 2 characters');
        } else {
            setNameError('');
        }
    };

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

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
      };

    const handleSauceChange = (sauce) => {
        setSelectedSauce(sauce);
    };

    const handleCheeseChange = (cheese) => {
        setSelectedCheese(cheese);
    };

    const handleSpecialInstructionsChange = (event) => {
        setSpecialInstructions(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Validate name before placing order
        if (customerName.length < 2) {
            setNameError('Name must be at least 2 characters');
            return;
        }

        // Construct the order data
        const orderData = {
            name: customerName,
            size: selectedSize,
            toppings: selectedToppings,
            crust: selectedCrust,
            sauce: selectedSauce,
            cheese: selectedCheese,
            special: specialInstructions,
        };

        /* console.log('Order Data:', orderData); */
    
        navigate('/thank-you');
    };

    return (
        <div className="container">

            <Link to="/" id="back-button">
                Back to Homepage
            </Link>

            <h2>Build Your Own Pizza</h2>
            <form id="pizza-form" onSubmit={handleSubmit}>
                <label htmlFor="name-input">
                    Name:
                    <input
                        id="name-input"
                        type="text"
                        value={customerName}
                        onChange={handleNameChange}
                    />
                </label>

                {nameError && (
                    <p className="error-message" htmlFor="name-input">
                        Name must be at least 2 characters
                    </p>
                )}

                {/* Size Dropdown */}
                <label htmlFor="size-dropdown" className="size-label">
                    Size:
                    <select
                        id="size-dropdown"
                        value={selectedSize}
                        onChange={handleSizeChange}
                    >
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
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

                    {/* Special Instructions */}
                    <label htmlFor="special-text">
                        Special Instructions:
                        <input
                            type="text"
                            id="special-text"
                            value={specialInstructions}
                            onChange={handleSpecialInstructionsChange}
                        />
                    </label>

                {/* Order Button */}
                <button type="submit" id="order-button">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default OrderPizzaForm;