import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Title}>
                <h1>Niklas Solomon</h1>
            </div>
        </header>
    )
};

export default Header;