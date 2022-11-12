import styles from './Pages.module.css';

const About = () => {
    return (
        <div className={ styles.Page }>
            <h2>About Me</h2>
            <img className={ styles.Image }src={process.env.PUBLIC_URL + '/images/me2.jpg'} alt='Niklas Solomon'/>
            <p>My name is Niklas Solomon. I am 28 years old. I was born in Utah and lived there most of my life. I moved to the Seattle area in the Spring of 2021 thanks to an opportunity to relocate through my company at the time. Since then, I have established myself and decided to pursue a career in web and software development.<br/>

            Some of my hobbies include travel, snowboarding, video games, and trying new coffee shops. I am engaged to my partner Kennedy, who I have been with since 2018.<br/>

            I aim to become fully fluent in full stack development, and hope to eventually work in the gaming industry.<br/>
            </p>
        </div>
    )
};

export default About;