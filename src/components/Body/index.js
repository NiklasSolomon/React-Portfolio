import styles from './Body.module.css';

const Body = ({ renderPage }) => {
    return (
        <main className={styles.Body}>
            { renderPage() }
        </main>
    )
};

export default Body;