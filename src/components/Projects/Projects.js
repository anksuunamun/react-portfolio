import React from 'react';
import styles from './Projects.module.scss';
import sonetLogo from '../../assets/images/sonetLogo.PNG';
import todoLogo from '../../assets/images/todo.PNG';
import quizLogo from '../../assets/images/hearMeRoar.PNG';
import Project from "./Project/Project";
import Title from "../../common/components/Title/Title";

const Projects = () => {

    const projects = [
        {
            projectLogo: sonetLogo,
            name: 'Social Network',
            projectUrl: 'https://github.com/anksuunamun/social-network-ts',
            description: 'Social Network is a single page application, which contains all base functionality of modern social networks.',
        },
        {
            projectLogo: todoLogo,
            name: 'Todo list',
            projectUrl: 'https://github.com/anksuunamun/todolist-ts',
            description: 'Todolist is a single page application. It is an analogue of popular project management system Trello.',
        },
        {
            projectLogo: quizLogo,
            name: 'Animal voices quiz',
            projectUrl: 'https://github.com/anksuunamun/animal-voices-quiz',
            description: 'SPA, recognizing animals by their voices quiz.',
        },
    ]

    const projectsForRender = projects.map(pr => <Project
        projectLogo={pr.projectLogo}
        name={pr.name}
        key={pr.name}
        description={pr.description}
        projectUrl={pr.projectUrl}/>)

    return (
        <div className={`${styles.projectsWrapper} contentWrapper`}>
            <div className={styles.headersWrapper}>
                <h6>featured works</h6>
                <a id="projects"><Title title={'My projects'}/></a>
            </div>
            <div className={styles.projectItems}>
                {projectsForRender}
            </div>
        </div>
    )
}

export default Projects;