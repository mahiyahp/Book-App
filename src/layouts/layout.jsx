import React from "react";
import styles from "./layout.module.css";
import logo from "../assets/logo.png";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Library</h1>
        <img className={styles.logo} src={logo} alt="logo" />
        <p>
          <a href="https://github.com/mahiyahp">Github</a> | Follow for more
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed with 🤍</p>
      </footer>
    </>
  );
}

export default Layout;
