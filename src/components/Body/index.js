const Body = ({ renderPage }) => {
    return (
        <main>
            <h3>Main Page</h3>
            { renderPage() }
        </main>
    )
};

export default Body;