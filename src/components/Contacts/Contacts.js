import React, {useState} from "react";
import styles from './Contacts.module.scss';
import Title from "../../common/components/Title/Title";
import Fade from 'react-reveal/Fade';
import axios from 'axios';


const Contacts = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        axios.post('https://react-portfolio-nodejs-server.herokuapp.com/sendMessage', {
            // axios.post('http://localhost:3010/sendMessage', {
            name, email, message
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,OPTIONS',
                "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
            }
        })
            .then(() => {
                alert("Thank you! Your message has been sent.");
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => alert('Sorry, message not sent.'))
    }

    return (
        <div className={styles.contactsWrapper}>
            <div className={`contentWrapper`}>
                <div className={styles.contactsContent}>
                    <Fade left>
                        <div>
                            <h6>You can write me here</h6>
                            <a id="contacts"><Title title={'Contacts'}/></a>
                        </div>
                    </Fade>
                    <Fade left>
                        <form action={'/'} method={'post'} className={styles.formWrapper} onSubmit={onFormSubmit}>
                            <label htmlFor="name"/>
                            <input type="text"
                                   id={'name'}
                                   placeholder={'Name'}
                                   value={name}
                                   onChange={(event) => setName(event.currentTarget.value)}/>
                            <label htmlFor="{'surname'}"/>
                            <input type="text"
                                   id={'surname'}
                                   placeholder={'Email'}
                                   value={email}
                                   onChange={(event) => setEmail(event.currentTarget.value)}/>
                            <label htmlFor="message"/>
                            <textarea name=""
                                      id="message"
                                      cols="30"
                                      rows="5"
                                      placeholder={'Write your message here...'}
                                      value={message}
                                      onChange={(event) => setMessage(event.currentTarget.value)}/>
                            <button type={"submit"}><span>Send</span></button>
                        </form>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Contacts;