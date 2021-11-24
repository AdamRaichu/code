// github.com/AdamRaichu/code

var AdamRaichuJsLib = function() {
  this.authors = [
    "AdamRaichu"
    ]
  this.version = "1.1.2"
  this.lastUpdated = "11/24/21"
  
  this.local = {
    array: {
      store: function(key, array) {
        localStorage.setItem(key, JSON.stringify(array))
      },
      get: function(key) {
        return JSON.parse(localStorage.getItem(key))
      }
    }
  }
}

AdamRaichuJsLib.prototype.testCurrent = function() {
  var versionEdited = this.version[0] + this.version[1] + this.version[2]
  if (versionEdited < AdLibCurrentVersion) {
    console.warn("%cA newer version of AdLib.js by AdamRaichu is available @ GitHub/AdamRaichu/code/adlib.", "background-color: #ae6931, color: #0624b8")
  }
}

AdamRaichuJsLib.prototype.edit = function() {
  console.log("Redirecting to https://github.com/AdamRaichu/code/blob/main/adlib/latest.js...")
  window.open("https://github.com/AdamRaichu/code/blob/main/adlib/latest.js")
}

AdamRaichuJsLib.prototype.about = function() {
  console.log("Listing information about this library...")
  console.log("Authors: " + this.authors.join(", "))
  console.log("Version: " + this.version)
  console.log("Last Updated: " + this.lastUpdated)
  console.log("Available Functions: about(); help(); local.array.store(); local.array.get(); edit()")
}

AdamRaichuJsLib.prototype.help = function(helpWithWhat) {
  if (helpWithWhat === undefined || helpWithWhat === "help") {
    console.log('Use the function AR.help() to get information about commands. AR.help("about") will give information on using the AR.about() function in the console. Run AR.about() to get avaiable functions.')
  } else if (helpWithWhat === "about") {
    console.log("This function logs information about the library in the console. No arguments.")
  } else if (helpWithWhat === "local.array.store" || helpWithWhat === "local.array.get") {
    console.log("Use these functions to store arrays in localStorage.")
    console.log("AR.local.array.store requires 2 arguments. key: what key in localStorage you want to store the array under. array: which array you want to store under key.")
    console.log("AR.local.array.get requires 1 argument. key: what key in localStorage you stored an array under using AR.local.array.store.")
  } else if (helpWithWhat === "edit") {
    console.log("This function redirects you to the latest version of this file on GitHub.")
  } else {
      //if no matches were found
    console.error('The syntax you used wasn\'t recognized by AR.help(). Run AR.help("help") for more information.')
  }
}


var AR = new AdamRaichuJsLib();
console.log("%cAdamRaichu adlib.js is running. View at github.com/AdamRaichu/code/adlib.js", "color: #0624b8")
AR.testCurrent()
