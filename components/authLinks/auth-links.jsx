"use client";

import Link from "next/link";
import styles from "./auth-links.module.css";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link className={styles.link} href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.menu} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      {open && (
        <div className={styles.dropdown}>
          <Link href="/login">Homepage</Link>
          <Link href="/login">About</Link>
          <Link href="/login">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
