import { useState } from "react";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client side validation
    if (
      !formData.name.trim() ||
      !formData.email.includes("@") ||
      !formData.message.trim()
    ) {
      setFormStatus({
        error: true,
        message: "Please fill in all fields correctly.",
      });
      return;
    }

    setFormStatus(null);

    // Send data to your API route
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setFormStatus({ error: false, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus({
        error: true,
        message: error.message || "Failed to send message.",
      });
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.description}>
        Have questions or want to connect? Use the form below to send a message.
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here..."
        />

        {formStatus && (
          <p className={formStatus.error ? styles.errorMsg : styles.successMsg}>
            {formStatus.message}
          </p>
        )}

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </main>
  );
}
