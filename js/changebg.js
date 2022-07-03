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
	"images/background-cover-8.jpg",
    "images/background-cover-9.jpg",
	"images/background-cover-10.jpg",
	"images/background-cover-11.jpg",
    "images/background-cover-12.jpg",
	"images/background-cover-13.jpg",
	"images/background-cover-14.jpg",
	"images/background-cover-15.jpg",
	"images/background-cover-16.jpg",
    "images/background-cover-17.jpg",
	"images/background-cover-18.jpg",
	"images/background-cover-19.jpg",
	"images/background-cover-20.jpg",
	"images/background-cover-21.jpg",
	"images/background-cover-22.jpg",
	"images/background-cover-23.jpg",
	"images/background-cover-24.jpg",
	"images/background-cover-25.jpg",
	"images/background-cover-26.jpg",
	"images/background-cover-27.jpg",
	"images/background-cover-28.jpg",
	"images/background-cover-29.jpg",
	"images/background-cover-30.jpg",
	"images/background-cover-31.jpg",
	"images/background-cover-32.jpg",
	"images/background-cover-33.jpg",
	"images/background-cover-34.jpg",
	"images/SnowMountain.jpg"
]; 
 

var index =parseInt(Math.random()*(imgArr.length-1)); 

var currentImage=imgArr[index];

//document.getElementById("BackgroundArea").style.backgroundImage="url("+currentImage+")"; 
//document.getElementById("BackgroundArea").style.backgroundImage="url("+require(currentImage)+")";
document.getElementById("BackgroundArea").style.backgroundImage="url(\'/"+currentImage+"\')"; 
//document.getElementById("BackgroundArea").style.backgroundImage="url(/images/background-cover-2.jpg)"; 
