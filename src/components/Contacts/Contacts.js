import React from "react";
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.contactsWrapper}>
            <div className={`contentWrapper`}>
                <div className={styles.contactsContent}>
                    <h2>Contacts</h2>
                    <form action={'/'} method={'post'} className={styles.formWrapper}>
                        <label htmlFor="name"/>
                        <input type="text" id={'name'}/>
                        <label htmlFor="{'surname'}"/>
                        <input type="text" id={'surname'}/>
                        <label htmlFor="message"/>
                        <textarea name="" id="message" cols="30" rows="5"/>
                        <button type={"submit"}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;