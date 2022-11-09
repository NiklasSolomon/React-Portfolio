import styles from './Navigation.module.css';

const Navigation = ({ currentPage, changePage }) => {
    return (
        <nav className={styles.Navigation}>
            <button className={ currentPage === 'about' ? styles.Selected : styles.Button } onClick={() => changePage('about')}>About Me</button>
            <button className={ currentPage === 'portfolio' ? styles.Selected : styles.Button } onClick={() => changePage('portfolio')}>Portfolio</button>
            <button className={ currentPage === 'contact' ? styles.Selected : styles.Button } onClick={() => changePage('contact')}>Contact Me</button>
            <button className={ currentPage === 'resume'? styles.Selected : styles.Button } onClick={() => changePage('resume')}>Resume</button>
        </nav>
    )
};

export default Navigation;