// Orders.js

// Import React and useState hook from React library
import React, { useState } from 'react';

// Import child components and data
import OrderForm from './OrderForm';
import OrderItem from './OrderItem';
import mockOrders from '../mockData/orders';

// Import Orders component CSS
import './Orders.css';

// Define Orders component
function Orders() {
    // State to manage orders, initialized with mock data
    const [orders, setOrders] = useState(mockOrders);

    // Function to handle addition of a new order
    const handleAddOrder = (formData) => {
        const newOrder = {
            id: orders.length + 1, // Generate unique ID for the new order
            ...formData
        };
        setOrders([...orders, newOrder]); // Update orders state with new order
    };

    // Function to handle deletion of an order
    const handleDeleteOrder = (orderId) => {
        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders); // Update orders state after deletion
    };

    // Function to handle editing of an order
    const handleEditOrder = (editedOrder) => {
        const updatedOrders = orders.map(order => 
            order.id === editedOrder.id ? editedOrder : order
        );
        setOrders(updatedOrders); // Update orders state after editing
    };

    // Render Orders component
    return (
        <div className="orders-container">
            {/* Heading */}
            <h1 className="orders-heading">Orders Management</h1>
            
            {/* Order form for adding new orders */}
            <OrderForm onSubmit={handleAddOrder} />
            
            {/* List of orders */}
            <ul className="order-list">
                {/* Mapping over orders and rendering each order */}
                {orders.map(order => 
                    <li key={order.id} className="order-item">
                        <OrderItem
                            order={order}
                            onEdit={handleEditOrder} // Pass onEdit function
                            onDelete={handleDeleteOrder} // Pass onDelete function
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}

// Export Orders component
export default Orders;
