import styles from './Pages.module.css';
import Project from '../components/Project';
import projects from '../data/projects.json'

const Portfolio = () => {
    const renderProjects = () => projects.map(project => <Project {...project} />)
    return (
        <div className={ styles.Page }>
            <h2>Portfolio</h2>
            <div className={ styles.Projects }>{ renderProjects() }</div>
        </div>
    )
};

export default Portfolio;