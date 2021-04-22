import React from 'react';
import photo from '../../assets/images/photo.jpg';
import styles from './About.module.scss';
import linkedinLogo from '../../assets/images/linkedin.svg'
import gitLogo from '../../assets/images/github.svg';
import telegram from '../../assets/images/telegram.svg';
import Title from "../../common/components/Title/Title";

const About = () => {
    return (
        <div className={`${styles.aboutWrapper} contentWrapper`}>
            <div className={styles.photoWrapper}>
                <img className={styles.profilePhoto} src={photo} alt="profilePhoto"/>
            </div>
            <div className={styles.aboutInfo}>
                <a id="about"> <Title title={'Hello! I\'m Veronika Gorelova, a frontend developer.'}/></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus ea incidunt itaque
                    laborum
                    recusandae rerum tempora vel velit vitae! Aliquam animi autem dignissimos eligendi eveniet
                    laborum
                    neque pariatur ratione.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus ea incidunt itaque
                    laborum
                    recusandae rerum tempora vel velit vitae! Aliquam animi autem dignissimos eligendi eveniet
                    laborum
                    neque pariatur ratione.</p>
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;

