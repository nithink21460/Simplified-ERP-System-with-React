// ProductForm.js

// Import React and useState hook from React library
import React, { useState } from 'react';

// Import ProductForm component CSS
import './ProductForm.css';

// Define ProductForm component
function ProductForm({ onSubmit }) {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    });

    // Function to handle form input changes
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(formData); // Pass form data to parent component
        // Reset form data after submission
        setFormData({
            name: '',
            category: '',
            price: '',
            stock: ''
        });
    };

    // Render ProductForm component
    return (
        <form>
            {/* Input fields for product details */}
            <input className='input' type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input className='input' type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
            <input className='input' type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
            <input className='input' type="text" name="stock" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} />
            {/* Button to submit the form */}
            <button className='thisButton' onClick={handleSubmit} type="submit">Add</button>
        </form>
    );
}

// Export ProductForm component
export default ProductForm;
