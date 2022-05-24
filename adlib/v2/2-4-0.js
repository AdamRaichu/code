// github.com/AdamRaichu/code
// To be included with version.js on GitHub @ AdamRaichu/code/adlib/version.js

var AdamRaichuJsLib = function () {
    this.authors = [
        "AdamRaichu"
    ]
    this.version = "2.4.0",
        this.versionSplit = [2, 4, 0]
    this.lastUpdated = "5/24/22"
    this.availableFunctions = [
        "about",
        "help",
        "id",
        "class",
        "localStorage.setVar",
        "localStorage.getVar",
        "sessionStorage.setVar",
        "sessionStorage.getVar",
        "randBetween",
        "CanvasRenderingContext2D.drawGrid",
        "newEl",
        "$",
        "$$"
    ]

    this.onLoad()

}

AdamRaichuJsLib.prototype.onLoad = function () {

    console.info("%cAdamRaichu adlib.js is running. View at github.com/AdamRaichu/code", "color: #0624b8; background-color: #d8ae0d;")

    //Check if a newer version is available.
    try {
        for (l = 0; l < AdamRaichuJsLibInfo.versionSplit.length; l++) {
            if (this.versionSplit[l] < AdamRaichuJsLibInfo.versionSplit[l]) {
                console.warn("You are not using the latest version of AdLib.js. See supported versions @")
                console.warn("https://github.com/AdamRaichu/code/blob/main/adlib/README.md#supported-versions")
            }
        }
    } catch (ERR) {
        if (ERR) {
            console.warn("%cAdLib.js has a self-checking function using version.js (under the same folder). If you already include version.js, make sure it loads BEFORE this file does. (i.e. version.js is before adlib.js in the <head> element.)", "color: #0624b8")
        }
    }
}

AdamRaichuJsLib.prototype.$$ = function (selectors) {
    return document.querySelectorAll(selectors)
}

AdamRaichuJsLib.prototype.$ = function (selectors) {
    return document.querySelector(selectors)
}

AdamRaichuJsLib.prototype.newEl = function (tagName) {
    return document.createElement(tagName)
}

CanvasRenderingContext2D.prototype.drawGrid = function (increment) {
    if (increment <= 0) {
        console.error("Increment must be greater than 0.")
        return
    }
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
    if (!(low > high)) {
        low = Math.ceil(low);
        high = Math.floor(high)
        return Math.floor(Math.random() * (high - low + 1)) + low;
    } else {
        console.error("Error: low must be less than high in randBetween.")
        return 0
    }
}

Storage.prototype.setVar = function (key, variable) {
    this.setItem(key, JSON.stringify(variable))
}

Storage.prototype.getVar = function (key) {
    return JSON.parse(this.getItem(key))
}

AdamRaichuJsLib.prototype.class = function (classNames) {
    return document.getElementsByClassName(classNames)
}

AdamRaichuJsLib.prototype.id = function (elementId) {
    return document.getElementById(elementId)
}

AdamRaichuJsLib.prototype.about = function () {
    console.log("Listing information about this library...")
    console.log("Authors: " + this.authors.join(", "))
    console.log("Version: " + this.version)
    console.log("Last Updated: " + this.lastUpdated)
    console.log("Available Functions: " + this.availableFunctions.join("; "))
}

AdamRaichuJsLib.prototype.help = function () {
    window.open("https://github.com/AdamRaichu/code/wiki/AdLib.js")
}

var AR = new AdamRaichuJsLib()
