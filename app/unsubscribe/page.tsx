"use client";

import { useState } from "react";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
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
      <Input
        id="email-input"
        label="Email:"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={async () => await handleUnSub()}>Un-Subscribe</Button>
    </div>
  );
}
