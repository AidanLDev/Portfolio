"use client";

import { useState } from "react";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import styles from "./styles.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <Input
        label="Name"
        id="contact-name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        id="contact-email"
        type="email"
        placeholder="your.email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className={styles.textareaWrapper}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          placeholder="Your message..."
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit">
        <span className={styles.buttonContent}>✈ Send Message</span>
      </Button>
    </form>
  );
}
