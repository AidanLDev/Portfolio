"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

export default function Unsubscribe() {
  const [email, setEmail] = useState("");

  const handleUnSub = async () => {
    await fetch("/api/unsub", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
  };
  return (
    <div className={styles.unsubscribeContainer}>
      <h1>Unsubscribe</h1>
      <p>
        Enter your email and press un-subscribe to be removed from the mailing
        list
      </p>
      <div className={styles.emailContainer}>
        <label htmlFor="email-input">Email:</label>
        <input
          id="email-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={async () => await handleUnSub()}>Un-Subscribe</button>
    </div>
  );
}
