import React from 'react';
import styles from './Skill.module.scss';



const Skill = (props) => {
    return (
        <div className={`${styles.skillWrapper}`}>
            <img src={props.skillIcon} alt=""/>
            <div className={styles.skill}>
                <h4>{props.skillName}</h4>
                <div className={styles.skillDescription}>{props.description}</div>
            </div>
        </div>
    )
}

export default Skill;