import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <a href="https://github.com/NiklasSolomon" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/niklas-solomon-391147142/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/niklas.solomon/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </footer>
    )
};

export default Footer;