import React from 'react';
import styles from './Skills.module.scss';
import Skill from "./Skill/Skill";
import reduxLogo from '../../assets/images/reduxLogo.png';
import typescript from '../../assets/images/tsLogo.webp';
import reactLogo from '../../assets/images/reactLogo.svg';
import jsLogo from '../../assets/images/javascript.svg';
import storyLogo from '../../assets/images/storybook_logo_icon_144839.png';
import axiosLogo from '../../assets/images/ClipartKey_1582958.png';
import Title from "../../common/components/Title/Title";


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
        {
            name: 'Javascript',
            icon: jsLogo,
            description: 'JS is a programming language that conforms to the ECMAScript specification.'
        },
        {
            name: 'Storybook',
            icon: storyLogo,
            description: 'Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more.'
        },
        {
            name: 'Axios',
            icon: axiosLogo,
            description: 'Axios is a promise based HTTP client for the browser and Node.js.'
        }
    ]

    const skillItems = skills.map(skill => <Skill skillIcon={skill.icon}
                                                  key={skill.name}
                                                  skillName={skill.name}
                                                  description={skill.description}/>)

    return (
        <div className={`${styles.skillsWrapper}`}>
            <div className={`contentWrapper ${styles.skillBlock}`}>
                <div className={styles.headersWrapper}>
                    <h6>libraries, programming languages & tools</h6>
                    <Title title={'My Skills'}/>
                </div>
                <div className={styles.skills}>{skillItems}</div>
            </div>
        </div>
    )
}

export default Skills;