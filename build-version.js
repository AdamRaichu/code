var fs = require("fs")
var tools = require('./tools.js')
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

tools.logAction("Built version.js with the following version: " + version, 1, "build-version.js")