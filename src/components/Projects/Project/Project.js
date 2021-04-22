import React from 'react';
import styles from './Project.module.scss';


const Project = (props) => {
    return (
        <div className={styles.projectWrapper}>
            <div className={styles.projectLogo}>
                <a href={props.projectUrl}>
                    <img src={props.projectLogo} alt="projectLogo"/>
                </a>
            </div>
            <h4>{props.name}</h4>
            <div className={styles.projectDescription}>{props.description}</div>
        </div>
    )
}

export default Project;