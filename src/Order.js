import React, { useState } from 'react';
import './order.css'

function Order() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your submission! Your order has been received and is being processed.');
    // You can also submit the form data to a server or perform other actions here
  };

  return (
    <div>
      <h1>Order Form</h1>
      <p>Please fill out the form below to place your order.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="description">Your Orders:</label><br />
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Order;
