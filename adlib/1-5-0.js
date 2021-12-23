// github.com/AdamRaichu/code
// To be included with version.js on GitHub @ AdamRaichu/code/adlib/version.js

var AdamRaichuJsLib = function() {
  this.authors = [
    "AdamRaichu"
    ]
  this.version = "1.5.0"
  this.lastUpdated = "12/23/21"
  this.availableFunctions = [
  //about(); help(); local.array.store(); local.array.get(); edit(); id()
    "about()",
    "help()",
    "edit()",
    "id()",
    "class()",
    "localStorage.setVar()",
    "localStorage.getVar()"
  ]
  
}

AdamRaichuJsLib.prototype.onLoad = function() {
  
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


var AR = new AdamRaichuJsLib();
console.log("%cAdamRaichu adlib.js is running. View at github.com/AdamRaichu/code/adlib.js", "color: #0624b8; background-color: #d8ae0d;")
AR.onLoad()
