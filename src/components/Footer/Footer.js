import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={'contentWrapper'}>
                <div className={styles.footerContent}>
                    <h2>Veronika Gorelova</h2>
                    <div className={styles.footerContacts}>
                        <div>Linkedin</div>
                        <div>Github</div>
                        <div>Facebook</div>
                    </div>
                    <div className={styles.copyright}>
                        © 2021 All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;