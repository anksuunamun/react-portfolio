import React from "react";
import styles from './Contacts.module.scss';
import Title from "../../common/components/Title/Title";

const Contacts = () => {
    return (
        <div className={styles.contactsWrapper}>
            <div className={`contentWrapper`}>
                <div className={styles.contactsContent}>
                    <Title title={'Contacts'}/>
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