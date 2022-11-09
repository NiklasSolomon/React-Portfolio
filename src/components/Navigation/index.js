import styles from './Navigation.module.css';

const Navigation = ({ currentPage, changePage }) => {
    return (
        <nav className={styles.Navigation}>
            <button className={ currentPage === 'about' } onClick={() => changePage('about')}>About Me</button>
            <button className={ currentPage === 'portfolio' } onClick={() => changePage('portfolio')}>Portfolio</button>
            <button className={ currentPage === 'contact' } onClick={() => changePage('contact')}>Contact Me</button>
            <button className={ currentPage === 'resume' } onClick={() => changePage('resume')}>Resume</button>
        </nav>
    )
};

export default Navigation;