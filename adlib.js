// github.com/AdamRaichu/code

var AdamRaichuJsLib = function() {
  this.contributors = [
    "AdamRaichu"
    ]
  this.version = "0.1 BETA"
  this.lastUpdated = "11/23/21"
}

AdamRaichuJsLib.prototype.about = function() {
  console.log("Listing information about this library...")
  console.log("Contributors: " + this.contributors.join(", "))
  console.log("Version: " + this.version)
  console.log("Last Updated: " + this.lastUpdated)
  console.log("Available Functions: about(); help()")
}

AdamRaichuJsLib.prototype.help = function(helpWithWhat) {
  if (helpWithWhat === undefined || helpWithWhat === "help") {
    console.log('Use the function AR.help() to get information about commands. AR.help("about") will give information on using the AR.about() function in the console.')
  } else if (helpWithWhat === "about") {
    console.log("This function logs information about the library in the console. No arguments.")
  } else {
    console.error('The syntax you used wasn\'t recognized by AR.help(). Run AR.help("help") for more information.')
  }
}


var AR = new AdamRaichuJsLib();
console.log("AdamRaichu adlib.js is running. View at github.com/AdamRaichu/code/adlib.js")
