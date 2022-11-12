import styles from './Pages.module.css';
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <div className={ styles.Page }>
            <h2>Contact Me</h2>
            <div className={ styles.Content }><ContactForm/></div>
        </div>
    )
};

export default Contact;