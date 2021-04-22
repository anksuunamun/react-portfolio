import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={'contentWrapper'}>
                <div className={styles.footerContent}>
                    <h2>Veronika Gorelova</h2>
                    <div className={styles.footerContacts}>
                        <div><a href={'https://www.linkedin.com/in/vvgorelova/'}>Linkedin</a></div>
                        <div><a href={'https://github.com/anksuunamun'}>Github</a></div>
                        <div><a href={'https://t.me/anksuunamun'}>Telegram</a></div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.footerBottom}>
                        <div className={styles.toTopBlock}>
                            Back to top
                        </div>
                        <div className={styles.copyright}>
                            © 2021 All Rights Reserved.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;