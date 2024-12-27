function loadColors() {
    document.head.removeChild(document.head.getElementsByTagName("link")[0]);
    console.log('load color', localStorage.getItem("theme"));
    if (localStorage.getItem("theme") == "dark") {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = "index-dark.css";
        document.head.appendChild(link);
    }
    else {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = "index.css";
        document.head.appendChild(link);
    }
}

function setColor() {
    if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "light");
    }
    else {
        localStorage.setItem("theme", "dark");
    }

    loadColors();
}


window.onload = () => {
    loadColors();
    
    fetch("https://api.bitbucket.org/2.0/repositories/ajackson2681/dmtools/pipelines_config/variables/")
        .then( (value) => value.json() )
        .then( (data) => {
            const version = data.values.filter( (value) => value.key === "LATEST_VERSION")[0]?.value;
            const versionNode = document.getElementById("version");
            versionNode.innerText += ` (v${version})`;
        });


}
