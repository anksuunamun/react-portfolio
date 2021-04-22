import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="#about" className={`${styles.navLinks} ${styles.activeLinkStyle}`}>About</a>
            <a href="#skills" className={styles.navLinks}>Skills</a>
            <a href="#projects" className={styles.navLinks}>Projects</a>
            <a href="#contacts" className={styles.navLinks}>Contacts</a>
        </div>
    )
}

export default Nav;