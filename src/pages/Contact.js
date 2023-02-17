import styles from './Pages.module.css';
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <div className={ styles.Page }>
            <h2>Contact Me</h2>
            <p> Please send all inquiries to my email:</p>
            <p>niklassolomon@gmail.com</p> 
            <p>I can also be contacted through my<a href='https://www.linkedin.com/in/niklas-solomon-391147142/' className={ styles.Link } target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            {/* <div className={ styles.Content }><ContactForm/></div> */}
        </div>
    )
};

export default Contact;