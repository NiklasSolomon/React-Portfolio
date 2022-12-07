import styles from './Pages.module.css';

const Resume = () => {
    return (
        <div className={ styles.Page }>
            <h2>My Resume</h2>
            <a className={styles.Button} href="https://docs.google.com/document/d/1K84Kp10lwlTdTak-hOCq4UKmhrBvBpDWDNcicwWeM9c/edit?usp=sharing" >Download</a>
            <div className={styles.Content}>
                <h3>Proficiencies</h3>
                <div>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Bootstrap</p>
                    <p>JavaScript</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>MySQL</p>
                    <p>React</p>
                    <p>Mongoose</p>
                </div>
            </div>
        </div>
    )
};

export default Resume;