import styles from './Pages.module.css';
import Project from '../components/Project';

const Portfolio = () => {
    return (
        <div className={ styles.Page }>
            <h2>Portfolio</h2>
            <div>{ Project }</div>
        </div>
    )
};

export default Portfolio;