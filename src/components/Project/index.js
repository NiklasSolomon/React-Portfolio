import styles from './Project.module.css';

const Project = ({ title, img, appLink, repoLink }) => {
    return (
        <div className={styles.Column}>
            <div className={styles.ProjectCard} style={ { backgroundImage: `url(${process.env.PUBLIC_URL + img })` } }>
                <h3>{title}</h3>
                <a href={appLink}>Link to Project</a>
                <a href={repoLink}>Link to Github Repository</a>
            </div>
        </div>
    )
};

export default Project;