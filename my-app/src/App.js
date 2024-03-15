// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import components
import Dashboard from './Components/Dashboard';
import Products from './Components/Product';
import Orders from './Components/Order';
import OrdersCalendar from './Components/Calendar';
// Import App component CSS
import './App.css'; 
// Import mock orders data
import mockOrders from './mockData/orders';

// Define App component
function App() {
    // Render App component
    return (
        <Router>
            <div className="container">
                <header className="header">
                    <h1>ERP System With React</h1>
                </header>
                <nav className="navbar">
                    <a href="/">Dashboard</a>
                    <a href="/products">Products</a>
                    <a href="/orders">Orders</a>
                    <a href="/calendars">Calendar</a>
                </nav>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/products" component={Products} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/calendars">
                        <OrdersCalendar orders={mockOrders} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// Export App component
export default App;
