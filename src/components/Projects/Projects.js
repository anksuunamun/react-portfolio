import React from 'react';
import styles from './Projects.module.scss';
import sonetLogo from '../../assets/images/sonetLogo.PNG';
import todoLogo from '../../assets/images/todo.PNG';
import Project from "./Project/Project";
import Title from "../../common/components/Title/Title";

const Projects = () => {

    const projects = [
        {
            projectLogo: sonetLogo,
            name: 'Social Network',
            description: 'Social Network is a single page application, which contains all base functionality of modern social networks. It works with server API to provide user all data about him and other users. You can interact with other users (for example, you can follow/unfollow somebody) and you can change information about yourself in your profile.',
        },
        {
            projectLogo: todoLogo,
            name: 'Todo list',
            description: 'Todolist is a single page application. It is an analogue of popular project management system Trello. You can create, delete and edit your todo lists here.',
        },
    ]

    const projectsForRender = projects.map(pr => <Project
        projectLogo={pr.projectLogo}
        name={pr.name}
        key={pr.name}
        description={pr.description}/>)

    return (
        <div className={`${styles.projectsWrapper} contentWrapper`}>
            <Title title={'My projects'}/>
            <div className={styles.projectItems}>
                {projectsForRender}
            </div>
        </div>
    )
}

export default Projects;