import styles from './Pages.module.css';

const About = () => {
    return (
        <div className={ styles.Page }>
            <h2>About Me</h2>
            <p className={ styles.Content }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eum doloremque, quibusdam mollitia unde aspernatur et neque accusantium labore nostrum omnis similique nobis debitis perferendis odit dolorum atque ducimus inventore?</p>
        </div>
    )
};

export default About;