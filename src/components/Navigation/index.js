const Navigation = ({ currentPage, changePage }) => {
    return (
        <nav>
            <button className={ currentPage === 'about' } onClick={() => changePage('about')}>About Me</button>
            <button className={ currentPage === 'portfolio' } onClick={() => changePage('portfolio')}>Portfolio</button>
            <button className={ currentPage === 'contact' } onClick={() => changePage('contact')}>Contact Me</button>
            <button className={ currentPage === 'resume' } onClick={() => changePage('resume')}>Resume</button>
        </nav>
    )
};

export default Navigation;