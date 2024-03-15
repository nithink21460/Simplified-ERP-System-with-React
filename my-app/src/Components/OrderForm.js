import React, { useState } from 'react';
import './OrderForm.css'; // Import OrderForm component CSS

function OrderForm({ onSubmit }) {
    // State to manage form data
    const [formData, setFormData] = useState({
        orderId: '',
        customerName: '',
        orderDate: '',
        status: 'Pending'
    });

    // Define options for order status
    const statusOptions = ["Pending", "Shipped", "Delivered"];

    // Function to handle changes in form inputs
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
        onSubmit(formData); // Pass form data to parent component for submission
        // Reset form data after submission
        setFormData({
            orderId: '',
            customerName: '',
            orderDate: '',
            status: ''
        });
    };

    // Render OrderForm component
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="form-input" type="text" name="orderId" placeholder="Order ID" value={formData.orderId} onChange={handleChange} required/>
            <input className="form-input" type="text" name="customerName" placeholder="Customer Name" value={formData.customerName} onChange={handleChange} required/>
            <input className="form-input" type="date" name="orderDate" placeholder="Order Date" value={formData.orderDate} onChange={handleChange} required/>
            <select className="form-input" name="status" value={formData.status} onChange={handleChange}>
                {statusOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <button className="form-submit" type="submit">Submit</button>
        </form>
    );
}

export default OrderForm;
