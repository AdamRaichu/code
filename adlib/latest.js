// github.com/AdamRaichu/code
// To be included with version.js on GitHub @ AdamRaichu/code/adlib/version.js

var AdamRaichuJsLib = function() {
  this.authors = [
    "AdamRaichu"
    ]
  this.version = "1.8.0"
  this.lastUpdated = "1/26/22"
  this.availableFunctions = [
    "about()",
    "help()",
    "edit()",
    "id()",
    "class()",
    "localStorage.setVar()",
    "localStorage.getVar()",
    "randBetween()",
    "sessionStorage.setVar()",
    "sessionStorage.getVar()"
  ]
  
  this.onLoad()
  
}

AdamRaichuJsLib.prototype.onLoad = function() {
  
  console.log("%cAdamRaichu adlib.js is running. View at github.com/AdamRaichu/code", "color: #0624b8; background-color: #d8ae0d;")
  
  //Check if a newer version is available.
  this.versionEdited = this.version[0] + this.version[1] + this.version[2]
  try {
    if (this.versionEdited < AdLibCurrentVersion) {
      console.warn("%cA newer version of AdLib.js by AdamRaichu is available on GitHub @ AdamRaichu/code/adlib. Run AR.edit() to see current version.", "color: #0624b8")
    }
  } catch (ERR) {
    if (ERR) {
      console.warn("%cAdLib.js has a self-checking function using version.js (under the same folder). If you already include version.js, make sure it loads BEFORE this file does. (i.e. version.js is before adlib.js in the <head> element.)", "color: #0624b8")
    }
  }
}

AdamRaichuJsLib.prototype.randBetween = function (low, high) {
  if (low < high) {
    low = Math.ceil(low);
    high = Math.floor(high)
    return Math.floor(Math.random() * (high - low + 1)) + low;
  } else {
    console.error("Error: low must be less than high in randBetween.")
    return 0
  }
}

sessionStorage.__proto__.setVar = function (key, variable) {
  sessionStorage.setItem(key, JSON.stringify(variable))
}

sessionStorage.__proto__.getVar = function (key) {
  return JSON.parse(sessionStorage.getItem(key))
}

localStorage.__proto__.setVar = function (key, variable) {
  localStorage.setItem(key, JSON.stringify(variable))
}

localStorage.__proto__.getVar = function (key) {
  return JSON.parse(localStorage.getItem(key))
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

AdamRaichuJsLib.prototype.help = function() {
  window.open("https://github.com/AdamRaichu/code/wiki/AdLib.js")
}


if (!AR) {
  var AR = new AdamRaichuJsLib();
} else if (!AdLib) {
  var AdLib = new AdamRaichuJsLib();
} else if (!AdamRaichu) {
  var AdamRaichu = new AdamRaichuJsLib();
} else {
  console.error("The default prefixes for AdLib.js are already taken. If this is unintentional (or if this script is embedded via src attribute) you should free up one of those variables. However, if you know this (and you could edit the script), remove these automatic-creation lines from your code.")
}
