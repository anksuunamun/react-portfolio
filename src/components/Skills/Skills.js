import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";
import reduxLogo from '../../assets/images/redux-cover-imgage-1024x768.jpg';
import reactLogo from '../../assets/images/react-logo.png';
import typescript from '../../assets/images/1_TpbxEQy4ckB-g31PwUQPlg.png';

const Skills = (props) => {
    const skills = [
        {
            name: 'React',
            icon: reactLogo,
            description: 'A JavaScript library for building user interfaces.',
        }, {
            name: 'Redux',
            icon: reduxLogo,
            description: 'A Predictable State Container for JS Apps',
        }, {
            name: 'Typescript',
            icon: typescript,
            description: 'TypeScript extends JavaScript by adding types.',
        },
    ]

    const skillItems = skills.map(skill => <Skill skillIcon={skill.icon} skillName={skill.name}
                                                  description={skill.description}/>)

    return (
        <div className={`${styles.skillsWrapper}`}>
            <div className={`contentWrapper ${styles.skillBlock}`}>
                <h2>My Skills</h2>
                <div className={styles.skills}>{skillItems}</div>
            </div>
        </div>
    )
}

export default Skills;