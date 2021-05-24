import React from 'react';
import photo from '../../assets/images/photo.jpg';
import styles from './About.module.scss';
import linkedinLogo from '../../assets/images/linkedin.svg'
import gitLogo from '../../assets/images/github.svg';
import telegram from '../../assets/images/telegram.svg';
import codewars from '../../assets/images/codewars-svgrepo-com.svg';
import Title from "../../common/components/Title/Title";

const About = () => {
    return (
            <div className={`${styles.aboutWrapper} contentWrapper`}>
                <div className={styles.photoWrapper}>
                    <img className={styles.profilePhoto} src={photo} alt="profilePhoto"/>
                </div>
                <div className={styles.aboutInfo}>
                    <a id="about"> <Title title={'Hello! I\'m Veronika Gorelova, a frontend developer.'}/></a>
                    <p>I'm a frontend developer with experience in creating SPA using React, Redux, Typescript.</p>
                    <p>I'm planning to study Vue.js and Angular, beacause I have a strong passion for frontend and for
                        programming at all.
                        I enjoy spending free time with programming tutorials or on Codewars.</p>
                    <div className={styles.followWrapper}>
                        <h3>Follow me</h3>
                        <div className={styles.links}>
                            <a href="https://www.linkedin.com/in/vvgorelova">
                                <img src={linkedinLogo} alt="" className={styles.icon}/>
                            </a>
                            <a href="https://github.com/anksuunamun">
                                <img src={gitLogo} alt="" className={styles.icon}/>
                            </a>
                            <a href="https://t.me/anksuunamun">
                                <img src={telegram} alt="" className={styles.icon}/>
                            </a>
                            <a href="https://www.codewars.com/users/veronika-g">
                                <img src={codewars} alt="" className={styles.icon}/>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default About;

