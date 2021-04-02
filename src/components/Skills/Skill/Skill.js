import React from 'react';
import styles from './Skill.module.scss';


const Skill = (props) => {
    return (
        <div className={`${styles.skillWrapper}`}>
            <div className={styles.skillImg}>
                <img src={props.skillIcon} alt=""/>
            </div>
            <div className={styles.skillName}>{props.skillName}</div>
            <div>{props.description}</div>
        </div>
    )
}

export default Skill;