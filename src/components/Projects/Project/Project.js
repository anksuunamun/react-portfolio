import React from 'react';
import styles from './Project.module.css';


const Project = (props) => {
    return (
        <div className={styles.projectWrapper}>
            <div className={styles.projectLogo}>
                <img src={props.projectLogo} alt="projectLogo"/>
                <a href="#">Show</a>
            </div>
            <h3>{props.name}</h3>
            <div className={styles.projectDescription}>{props.description}</div>
        </div>
    )
}

export default Project;