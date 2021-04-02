import React from 'react';
import styles from './Header.module.scss';
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={`${styles.header} contentWrapper`}>
            <Nav/>
        </div>
    )
}

export default Header;