const headerStr = `
    <header>
        <h1>Adam Jackson</h1>
        <nav>
            <a href="index.html">About Me</a>•
            <a href="projects.html">Projects</a>•
            <a href="https://github.com/ajackson2681">GitHub</a>
        </nav>
    </header>
`;

const footerStr = `
    <footer>
        <a onclick="setColor()" href="">Switch Theme</a>
    </footer>
`;

window.addEventListener('load', () => {
    document.body.insertAdjacentHTML("afterbegin", headerStr);
    document.body.insertAdjacentHTML("beforeend", footerStr);
});