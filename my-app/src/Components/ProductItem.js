// ProductItem.js
import React, { useState } from 'react';
import './ProductItem.css'; // Import ProductItem component CSS

// Define ProductItem component
function ProductItem({ product, onDelete, onEdit }) {
    // State to manage editing mode and edited product
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    // Function to handle deletion of product
    const handleDelete = () => {
        onDelete(product.id);
    };

    // Function to enter edit mode
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Function to handle changes in edited product
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value
        });
    };

    // Function to save edited product
    const handleSave = () => {
        onEdit(editedProduct);
        setIsEditing(false);
    };

    // Render ProductItem component
    return (
        <>
            {isEditing ? (
                <>
                    <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
                    <input type="text" name="category" value={editedProduct.category} onChange={handleChange} />
                    <input type="text" name="price" value={editedProduct.price} onChange={handleChange} />
                    <input type="text" name="stock" value={editedProduct.stock} onChange={handleChange} />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : 
            (
                <li className="product-item">
                    <div className="product-details">
                        <div>Name: {product.name}</div>
                        <div>Category: {product.category}</div>
                        <div>Price: {product.price}</div>
                        <div>Stock Quantity: {product.stock}</div>
                    </div>
                    <div className="product-buttons">
                        <button className="edit" onClick={handleEdit}>Edit</button>
                        <button className="delete" onClick={handleDelete}>Delete</button>
                    </div>
                </li>
            )}
        </>
    );
}

export default ProductItem;
