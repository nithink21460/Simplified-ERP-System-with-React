// Dashboard.js

// Import React from React library
import React from 'react';

// Import Link component from 'react-router-dom'
import { Link } from 'react-router-dom';

// Import Dashboard component CSS
import './Dashboard.css';

// Define Dashboard component
function Dashboard({ products, orders }) {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-heading">Dashboard</h1>
            <div className="dashboard-links">
                <Link to="/products">Products Management</Link>
                <p>Total Products: 5</p>
                <Link to="/orders">Orders Management</Link>
                <p>Total Orders: 5</p>
            </div>
        </div>
    );
}

// Export Dashboard component
export default Dashboard;
