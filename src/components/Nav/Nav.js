import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="/" className={`${styles.navLinks} ${styles.activeLinkStyle}`}>About</a>
            <a href="/" className={styles.navLinks}>Skills</a>
            <a href="/" className={styles.navLinks}>Projects</a>
            <a href="/" className={styles.navLinks}>Contacts</a>
        </div>
    )
}

export default Nav;