import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    desc: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:3000/api/postContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        alert("Thanks for Contacting us!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          desc: "",
        });
      })
      .catch((err) => {
        alert("Some internal error try again later");
      });
  };

  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>
            Enter Name
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            aria-describedby="emailHelp"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>
            Email address
          </label>
          <input
            type="email"
            className={styles.input}
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formLabel}>
            Enter Phone
          </label>
          <input
            type="number"
            className={styles.input}
            id="phone"
            aria-describedby="emailHelp"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="floatingTextarea2" className={styles.formLabel}>
            Comments
          </label>
          <textarea
            className={styles.input}
            id="floatingTextarea2"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
