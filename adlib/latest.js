// github.com/AdamRaichu/code
// To be included with version.js on GitHub @ AdamRaichu/code/adlib/version.js

var AdamRaichuJsLib = function() {
  this.authors = [
    "AdamRaichu"
    ]
  this.version = "1.10.0"
  this.lastUpdated = "4/15/22"
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
    "sessionStorage.getVar()",
    "CanvasRenderingContext2D.drawGrid()"
  ]
  
  this.onLoad()
  
}

AdamRaichuJsLib.prototype.onLoad = function() {
  
  console.log("%cAdamRaichu adlib.js is running. View at github.com/AdamRaichu/code", "color: #0624b8; background-color: #d8ae0d;")
  
  //Check if a newer version is available.
  this.versionEdited = this.version.split(".")
  try {
    for (s = 0; s < this.versionEdited.length; s++) {
      if (this.versionEdited[s] < AdLibCurrentVersion.split(".")[s]) {
        console.warn("%cA newer version of AdLib.js by AdamRaichu is available on GitHub @ AdamRaichu/code/adlib. Run AR.edit() to see current version.", "color: #0624b8");
        break
      }
    }
  } catch (ERR) {
    if (ERR) {
      console.warn("%cAdLib.js has a self-checking function using version.js (under the same folder). If you already include version.js, make sure it loads BEFORE this file does. (i.e. version.js is before adlib.js in the <head> element.)", "color: #0624b8")
    }
  }
}

CanvasRenderingContext2D.prototype.drawGrid = function(increment) {
  for (z = increment; z < this.canvas.width || z < this.canvas.height; z += increment) {
    this.beginPath();
    this.moveTo(z, 0);
    this.lineTo(z, this.canvas.height);
    this.moveTo(0, z);
    this.lineTo(this.canvas.width, z);
    this.stroke()
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

var AR = new AdamRaichuJsLib()
