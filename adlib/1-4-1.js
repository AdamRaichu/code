// github.com/AdamRaichu/code
// To be included with version.js on GitHub @ AdamRaichu/code/adlib/version.js

var AdamRaichuJsLib = function() {
  this.authors = [
    "AdamRaichu"
    ]
  this.version = "1.4.1"
  this.lastUpdated = "11/27/21"
  this.availableFunctions = [
  //about(); help(); local.array.store(); local.array.get(); edit(); id()
    "about()",
    "help()",
    "local.array.store()",
    "local.array.get()",
    "edit()",
    "id()",
    "class()"
  ]
  
  this.local = {
    array: {
      store: function(key, array) {
        localStorage.setItem(key, JSON.stringify(array))
      },
      get: function(key) {
        return JSON.parse(localStorage.getItem(key))
      }
    }
  } //end this.local
  
}

AdamRaichuJsLib.prototype.onLoad = function() {
  
  //Check if a newer version is available.
  this.versionEdited = this.version[0] + this.version[1] + this.version[2]
  if (this.versionEdited < AdLibCurrentVersion) {
    console.warn("%cA newer version of AdLib.js by AdamRaichu is available on GitHub @ AdamRaichu/code/adlib. Run AR.edit() to see current version.", "color: #0624b8")
  }
  
}

AdamRaichuJsLib.prototype.class = function (classNames) {
  return document.getElementsByClassName(classNames)
}

AdamRaichuJsLib.prototype.id = function (elementId) {
  return document.getElementById(elementId)
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
  console.log("Available Functions: " + this.availableFunctions.join("; "))
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
  } else if (helpWithWhat === "onLoad") {
    console.log("This function is performed on the AR object when it is created. It logs version and checks for updates.")
  } else if (helpWithWhat === "id") {
    console.log("This function is a shortened version of document.getElementById(). It does the same thing, with no added functionality.")
  } else if (helpWithWhat === "class") {
    console.log("This function is a shortened version of document.getElementsByClassName(). It does the same thing, with no added functionality.")
  } else {
      //if no matches were found
    console.error('The syntax you used wasn\'t recognized by AR.help(). Run AR.help("help") for more information.')
  }
}


var AR = new AdamRaichuJsLib();
console.log("%cAdamRaichu adlib.js is running. View at github.com/AdamRaichu/code/adlib.js", "color: #0624b8; background-color: #d8ae0d;")
AR.onLoad()
