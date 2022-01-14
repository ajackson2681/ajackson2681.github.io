window.onload = () => {

    fetch("https://api.bitbucket.org/2.0/repositories/ajackson2681/dmtools/pipelines_config/variables/")
        .then( (value) => value.json() )
        .then( (data) => {
            const version = data.values.filter( (value) => value.key === "LATEST_VERSION")[0]?.value;
            const versionNode = document.getElementById("version");
            versionNode.innerText += ` (v${version})`;
        });
}