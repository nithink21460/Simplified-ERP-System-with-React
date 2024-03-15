// OrdersCalendar.js

// Import React and useState hook from React library
import React, { useState } from 'react';

// Import Calendar component from 'react-calendar'
import Calendar from 'react-calendar';

// Import Calendar component CSS
import './Calendar.css';

// Define OrdersCalendar component
function OrdersCalendar({ orders }) {
    // State to manage selected date, initialized with current date
    const [date, setDate] = useState(new Date());

    // Function to handle date change
    const handleDateChange = date => {
        setDate(date); // Update selected date
    };

    // Filter orders based on the selected date and specific statuses
    const ordersForSelectedDate = orders.filter(order => {
        const orderDate = new Date(order.orderDate);
        return (
            orderDate.toDateString() === date.toDateString() && // Compare order date with selected date
            ['Pending', 'Shipped', 'Delivered'].includes(order.status) // Filter orders with specific statuses
        );
    });

    // Render OrdersCalendar component
    return (
        <div className="calendar-container">
            {/* Calendar header */}
            <div className="calendar-header">
                <h2>Orders Calendar View</h2>
            </div>
            {/* Calendar component */}
            <Calendar className='calendar'
                onChange={handleDateChange} // Handle date change
                value={date} // Selected date
            />
            {/* Orders for selected date */}
            <div className="orders-for-date">
                <h3>Orders for {date.toDateString()}</h3>
                <ul>
                    {/* Mapping over orders for selected date and rendering each order */}
                    {ordersForSelectedDate.map(order => (
                        <li key={order.orderId}>
                            <div>Order ID: {order.orderId}</div>
                            <div>Customer Name: {order.customerName}</div>
                            <div>Order Date: {order.orderDate}</div>
                            <div>Status: {order.status}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// Export OrdersCalendar component
export default OrdersCalendar;
