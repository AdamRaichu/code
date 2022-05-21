var fs = require("fs")
var version = process.env['npm_package_version']

var content = 'var AdLibCurrentVersion = "2";\nvar AdamRaichuJsLibInfo = {\n  currentVersion: "' + version + '",\n  versionSplit: [' + version.split(".") + '],\n  urls: {\n    code: "https://github.com/AdamRaichu/code/tree/main/adlib",\n    newIssue: "https://github.com/AdamRaichu/code/issues/new",\n    readMe: "https://github.com/AdamRaichu/code/blob/main/adlib/README.md#supported-versions"\n  }\n}'

fs.writeFile('adlib/version.js', content, err => {
    if (err) {
        console.error(err);
    }
    console.log("text.txt file contents:")
    console.log("==========")
    console.log(content)
    console.log("==========")
    // file written successfully
});