var content = 'var AdLibCurrentVersion = "2";\nvar AdamRaichuJsLibInfo = {\n  currentVersion: "' + process.env['npm_package_version'] + '",\n  versionSplit: [2, 3, 0],\n  urls: {\n    code: "https://github.com/AdamRaichu/code/tree/main/adlib",\n    newIssue: "https://github.com/AdamRaichu/code/issues/new",\n    readMe: "https://github.com/AdamRaichu/code/blob/main/adlib/README.md#supported-versions"\n  }\n}'

fs.writeFile('adlib/version-test.txt', content, err => {
    if (err) {
        console.error(err);
    }
    console.log("text.txt file contents:")
    console.log("==========")
    console.log(content)
    console.log("==========")
    // file written successfully
});