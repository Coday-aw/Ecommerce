import React, { useState } from "react";
import "../css/Contact.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [massageSend, setmassageSend] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }
    const SendMassage = async () => {
      try {
        const res = await fetch("/api/massages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
        const data = await res.json();
        console.log(res, data);
        if (res.status === 201) {
          setmassageSend(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    SendMassage();
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {massageSend ? (
        <p className="text-2xl">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
};

export default ContactPage;
