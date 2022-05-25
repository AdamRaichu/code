module.exports = {
  logAction: function (message, logLevel) {
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
        this.logAction("`logLevel` was eithere invalid or not provided. Source: build-version.js", 2)
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
}