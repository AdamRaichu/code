function logAction(message, logLevel) {
    fs.readFile("github-actions.log", (err, buff) => {
        // if any error
        if (err) {
            console.error("[!!! ----- logAction failed ----- !!!]")
            console.error(err);
            return;
        }

        // otherwise log contents
        var content = buff.toString();
        content += "\n"
        content += new Date()
        content += " ["
        if (logLevel === 3) {
            content += "ERROR] "
        } else if (logLevel === 2) {
            content += "WARN] "
        } else if (logLevel === 1) {
            content += "INFO] "
        } else {
            content += "INFO] "
            logAction("`logLevel` was eithere invalid or not provided. Source: build-version.js", 2)
        }
        content += message

        fs.writeFile('github-actions.log', content, err => {
            if (err) {
                console.error("[!!! ----- logAction failed ----- !!!]")
                console.error(err);
            }
            console.log("action logged")
            // file written successfully
        });
    });
}

var fs = require("fs")
var version = process.env['npm_package_version']

var content = 'var AdLibCurrentVersion = "2";\nvar AdamRaichuJsLibInfo = {\n  currentVersion: "' + version + '",\n  versionSplit: [' + version.replace(/\./g, ", ") + '],\n  urls: {\n    code: "https://github.com/AdamRaichu/code/tree/main/adlib",\n    newIssue: "https://github.com/AdamRaichu/code/issues/new",\n    readMe: "https://github.com/AdamRaichu/code/blob/main/adlib/README.md#supported-versions"\n  }\n};'

fs.writeFile('adlib/version.js', content, err => {
    if (err) {
        console.error(err);
    }
    // console.log("version.js file contents:")
    // console.log("==========")
    // console.log(content)
    // console.log("==========")
    // file written successfully
});

logAction("Built version.js with the following version: " + version, 1)