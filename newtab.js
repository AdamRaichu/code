// newtab.js

var bgs = [
  "https://lh6.googleusercontent.com/proxy/Z0waqwSd3EH7Ot83HrSRk2FfIAM5Dy1oxGZKa8uu31fEL5NH_Jpv6nI8IHd0Y1lFq5xujIdvPRO4g6PXo-k2LFJSsB_YZBQz2A=w3840-h2160-p-k-no-nd-mv",
  "https://compass-ssl.xbox.com/assets/94/d0/94d0f456-a14c-4895-ad51-e631990442d9.jpg?n=Minecraft_Sneaky-Slider-1084_Nether_1600x675.jpg",
  "https://preview.redd.it/11zl4x2k2tr61.png?width=1920&format=png&auto=webp&s=91a718d1af1617baa146a534cec328befe2e0af8",
  "https://whatifgaming.com/wp-content/uploads/2021/08/Glowing-Ores-3-1024x576.png",
  "https://i.imgur.com/RAIgYUI.png",
  "https://pbs.twimg.com/media/DJKLxRAUMAAaiaV.jpg:large"
];

var randomBg = bgs[AR.randBetween(0, bgs.length - 1)]

document.body.style.backgroundImage = 'url("' + randomBg + '")'

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('extensions').addEventListener('click', function () {
    chrome.tabs.update({
      url: 'chrome://extensions'
    });
  });
});
