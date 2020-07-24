chrome.tabs.query({'active':true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}
,
	function(tabs){
		console.log(tabs[0].url);
	}
);
function getURLParameter(sParam){
	var sPageURL = window.location.search.substring(1);
	console.log(sPageURL);
	var sURLVariables = sPageURL.split('&');

	for (var i = 0; i < sURLVariables.length; i++){
			var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam) {
					return sParameterName[1];
				}
	}
}

var views = chrome.extension.getViews({ type: "popup" });
var popupStatus;

if (views && views.length){
	popupStatus = true
} else {
	popupStatus = false
}
console.log(popupStatus);

var isPopup;
isPopup = getURLParameter('popup') === 'true';
console.log(isPopup);
console.log(CatState);

if ((CatState == "RunningMode")&&(isPopup != true)) {
var xhttp = new XMLHttpRequest(); 
var i = 0;
var currBlock = 0;

document.addEventListener("DOMContentLoaded", function (event) {
	updateHTML()
})

var updateHTML = function () {

	xhttp.open("GET", "https://api.bitaps.com/ltc/v1/blockchain/block/last", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
//		let y = x.data.height
		let y = x.data.block.height
		let z = parseInt(y)
		console.log(z)
	}
}

var checkBlocks = setInterval(function () {

	var HTMLString = '<iframe width="400" height="330" src="https://youtu.be/000al7ru3ms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

	//xhttp.open("GET", "https://chain.api.btc.com/v3/block/latest", true)
	xhttp.open("GET", "https://api.bitaps.com/ltc/v1/blockchain/block/last", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
//		let y = x.data.height
		let y = x.data.block.height
		let z = parseInt(y)
		if ((i != 0) && (currBlock != z)) {
			console.log("Você Gamhou R$ 1")
			// window.open("backgroundPopup.html", "Bitcoin Cat Jumps Here");
			openWindow()
//			setInterval(function () {
	        setTimeout(function () {
				closeWindow()}, 10000)
		}
		currBlock = z
		i++;
	}
}, 5000);

function openWindow() {
	catWindow = window.open("backgroundPopup.html", "O Minerador está funcionando ...");
}

function closeWindow() {
	catWindow.close()
}
}