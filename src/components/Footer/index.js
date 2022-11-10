import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <a href="https://github.com/NiklasSolomon">Github</a>
            <a href="https://www.linkedin.com/in/niklas-solomon-391147142/">LinkedIn</a>
            <a href="https://www.facebook.com/niklas.solomon/">Facebook</a>
        </footer>
    )
};

export default Footer;