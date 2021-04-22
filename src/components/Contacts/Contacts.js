import React from "react";
import styles from './Contacts.module.scss';
import Title from "../../common/components/Title/Title";

const Contacts = () => {
    return (
        <div className={styles.contactsWrapper}>
            <div className={`contentWrapper`}>
                <div className={styles.contactsContent}>
                    <div>
                        <h6>You can write me here</h6>
                        <a id="contacts"><Title title={'Contacts'}/></a>
                    </div>
                    <form action={'/'} method={'post'} className={styles.formWrapper}>
                        <label htmlFor="name"/>
                        <input type="text"
                               id={'name'}
                               placeholder={'Name'}/>
                        <label htmlFor="{'surname'}"/>
                        <input type="text"
                               id={'surname'}
                               placeholder={'Email'}/>
                        <label htmlFor="message"/>
                        <textarea name=""
                                  id="message"
                                  cols="30"
                                  rows="5"
                                  placeholder={'Write your message here...'}/>
                        <button type={"submit"}><span>Send</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;