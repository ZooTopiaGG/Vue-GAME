/*适配移动设备 关键代码*/
var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 768) deviceWidth = 768;
document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";