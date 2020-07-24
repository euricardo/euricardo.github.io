var port = chrome.runtime.connect({ name: "popupconnected" });
var xhttp = new XMLHttpRequest();
var i = 0;
var currBlock = 0;
var CatState;
var JumpBlock = "false";

//Load Popup extension when clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.create({url: 'popup.html'})
})

document.addEventListener("DOMContentLoaded", function (event) {
	chrome.browserAction.setIcon({path: {'38':'BitcoinCatJumpLogo2.png'}});
	updateHTML()
})

var updateHTML = function () {
	xhttp.open("GET", "https://api.bitaps.com/btc/v1/blockchain/block/last", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
		let y = x.data.block // let y = x.data.block.height
		let z = parseInt(y)
		var currentBlockText = document.getElementById('currentBlock')
		currentBlockText.innerHTML = "Block Chain : " + z
	}
}
			
//Every 5 seconds, check if a new block has been mined
var checkBlocks = setInterval(function () {
  
	//Location of the Bitcoin Cat jumping video
	var HTMLString = '<iframe width="400" height="330" src="https://youtu.be/000al7ru3ms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	
	//Replacement of text after the video is played
	var resetHTMLString = 'Minerador da euBRASIL</br>Ganhe R$ 0,10 a cada 6 horas'
	
	xhttp.open("GET", "https://api.bitaps.com/btc/v1/blockchain/block/last", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
		let y = x.data.block.height
		let z = parseInt(y)
		var currentBlockText = document.getElementById('currentBlock')
		currentBlockText.innerHTML = "Bloco Atual : " + z
		
		//When the block height has updated, have the cat jump within the Chrome extension
		if ((i != 0) && (currBlock != z)) {

			port.postMessage({JumpBlock: "true"});
			JumpBlock = "false";
			document.getElementById("PlayVid").innerHTML = HTMLString;
			setTimeout(function () {
				document.getElementById("PlayVid").innerHTML = resetHTMLString
			}, 10000)
			port.postMessage({JumpBlock: "false"});
		}
		currBlock = z
		i++;
	}
}, 5000);

//Notify Background that the Popup is running in the current mode
chrome.runtime.sendMessage({CatState: "PopupRunningMode"});