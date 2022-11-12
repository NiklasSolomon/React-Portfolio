import styles from './Project.module.css';

const Project = ({ title, img, appLink, repoLink, alt }) => {
    return (
        <div className={styles.Column}>
            <div className={styles.ProjectCard}>
                <h3 className={styles.Title}>{title}</h3>
                <img className={ styles.Image } src={ process.env.PUBLIC_URL + img } alt={alt}/>
                <div className={styles.Links}>
                    <a href={appLink}>Link to Project</a>
                    <a href={repoLink}>Link to Github Repository</a>
                </div>
            </div>
        </div>
    )
};

export default Project;