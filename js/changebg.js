//copy from net

//实现在指定图片集中随机替换背景图片

var imgArr=[
    "images/background-cover-1.jpg",
    "images/background-cover-2.jpg",
	"images/background-cover-3.jpg",
	"images/background-cover-4.jpg",
    "images/background-cover-5.jpg",
	"images/background-cover-6.jpg",
	"images/background-cover-7.jpg",
	"images/SnowMountain.jpg"
]; 
 

var index =parseInt(Math.random()*(imgArr.length-1)); 

var currentImage=imgArr[index];

//document.getElementById("BackgroundArea").style.backgroundImage="url("+currentImage+")"; 
//document.getElementById("BackgroundArea").style.backgroundImage="url("+require(currentImage)+")";
document.getElementById("BackgroundArea").style.backgroundImage="url(\'/"+currentImage+"\')"; 
//document.getElementById("BackgroundArea").style.backgroundImage="url(/images/background-cover-2.jpg)"; 
