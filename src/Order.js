import React, { useState } from 'react';
import './order.css'

function Order() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phno, setPhno] = useState("")
  const [order, setOrder] = useState("")

  async function Submit(event) {
    event.preventDefault()

    const res = await fetch(`http://localhost:7777/api/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        phno,
        email,
        order,
      }),
    })
    console.log(res)
  }


  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   description: '',
  // });
  //
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = () => {
  //   alert('Thank you for your submission! Your order has been received and is being processed.');
  //   // You can also submit the form data to a server or perform other actions here
  // };

  return (
    <div>
      <h1>Order Form</h1>
      <p>Please fill out the form below to place your order.</p>

      <form >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phno}
          onChange={(e) => setPhno(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="order">Your Orders:</label><br />
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          required
        ></textarea><br /><br />

        <input type="submit" value="Submit" onClick={Submit}/>
      </form>
    </div>
  );
}

export default Order;
