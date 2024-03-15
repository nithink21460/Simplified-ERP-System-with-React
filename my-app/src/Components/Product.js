// Products.js

// Import React and useState hook from React library
import React, { useState } from 'react';

// Import child components and data
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';
import mockProducts from '../mockData/products';

// Import Products component CSS
import './Products.css';

// Define Products component
function Products() {
    // State to manage products, initialized with mock data
    const [products, setProducts] = useState(mockProducts);

    // Function to handle addition of a new product
    const handleAddProduct = (formData) => {
        const newProduct = {
            id: products.length + 1, // Generate unique ID for the new product
            ...formData
        };
        setProducts([...products, newProduct]); // Update products state with new product
    };

    // Function to handle deletion of a product
    const handleDeleteProduct = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts); // Update products state after deletion
    };

    // Function to handle editing of a product
    const handleEditProduct = (editedProduct) => {
        const updatedProducts = products.map(product =>
            product.id === editedProduct.id ? editedProduct : product
        );
        setProducts(updatedProducts); // Update products state after editing
    };

    // Render Products component
    return (
        <div className="products-container">
            {/* Heading */}
            <h1 className="products-heading">Products Management</h1>
            
            {/* Product form for adding new products */}
            <ProductForm onSubmit={handleAddProduct} />
            
            {/* List of products */}
            <ul className="product-list">
                {/* Mapping over products and rendering each product */}
                {products.map(product => 
                    <li key={product.id} className="product-item">
                        <ProductItem 
                            product={product} 
                            onDelete={handleDeleteProduct} // Pass onDelete function
                            onEdit={handleEditProduct} // Pass onEdit function
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}

// Export Products component
export default Products;
