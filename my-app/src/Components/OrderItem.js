// OrderItem.js
import React, { useState } from 'react';
import './OrderItem.css'; // Import OrderItem component CSS

// Define OrderItem component
function OrderItem({ order, onEdit, onDelete }) {
    // State to manage editing mode and edited order
    const [isEditing, setIsEditing] = useState(false);
    const [editedOrder, setEditedOrder] = useState(order);
    // Define status options
    const statusOptions = ["pending", "shipped", "delivered"];

    // Function to enter edit mode
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Function to handle changes in edited order
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedOrder(prevOrder => ({
            ...prevOrder,
            [name]: value
        }));
    };

    // Function to save edited order
    const handleSave = () => {
        onEdit(editedOrder); // Pass edited order to parent component for saving
        setIsEditing(false); // Disable editing mode
    };

    // Function to cancel editing
    const handleCancel = () => {
        setIsEditing(false); // Disable editing mode
        setEditedOrder(order); // Reset edited order to original order
    };

    // Render OrderItem component
    return (
        <>
            {isEditing ? (
                <div className="order-details">
                    <input type="text" name="orderId" value={editedOrder.orderId} onChange={handleChange} />
                    <input type="text" name="customerName" value={editedOrder.customerName} onChange={handleChange} />
                    <input type="date" name="orderDate" value={editedOrder.orderDate} onChange={handleChange} />
                    <select name="status" value={editedOrder.status} onChange={handleChange}>
                        {statusOptions.map(options => (
                            <option key={options} value={options}>{options}</option>
                        ))}
                    </select>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <li className="order-item">
                    <div className="order-details">
                        <div>Order ID: {order.orderId}</div>
                        <div>Name: {order.customerName}</div>
                        <div>Order Date: {order.orderDate}</div>
                        <div>Status: {order.status}</div>
                    </div>
                    <div className="order-buttons">
                        <button className="edit" onClick={handleEdit}>Edit</button>
                        <button className="delete" onClick={() => onDelete(order.id)}>Delete</button>
                    </div>
                </li>
            )}
        </>
    );
}

// Export OrderItem component
export default OrderItem;
