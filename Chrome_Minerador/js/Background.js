var CatState;
var popupStatus;
var JumpBlock = "false";
var blockNumber

//Initial BitcoinCatJump Mode is the WaitingMode which waits for the user to click on the Chrome Extension Icon
chrome.runtime.onInstalled.addListener(function() {
    var CatState = "WaitingMode";

    //When user clicks on the BitcoinCatJump icon, the PopupRunningMode is activated
    chrome.browserAction.setPopup({
        popup: 'popup.html',
    });    

})

// A partir de qualquer PopupRunningMode, o usuário pode abrir a extensão do BitcoinCatJump Chrome.
chrome.browserAction.setPopup({
    popup: 'popup.html'
})

// No PopupRunningMode, o usuário torna a extensão inativa em um BackgroundInactiveMode.
chrome.runtime.onMessage.addListener(function(request) {
    CatState = request.CatState;

    //If in BackgroundInactiveMode, remain in a listening state only
    if (CatState == "BackgroundInactiveMode"){
        //This is purposefully left empty of executable code
    }
})

//Orchestration between Popup and Background
chrome.runtime.onConnect.addListener(function(port) {

    // Define o valor para o JumpBlock, que determina no caso de uma desconexão se o gato deve pular o bloco (verdadeiro)
    // no pop-up ou (false) prossiga para o modo Background
    port.onMessage.addListener(function(JumpBlockStatus) {
        JumpBlock = JumpBlockStatus.JumpBlock;    
    })

    //Orchestration of handling a disconnect based on various modes 
    port.onDisconnect.addListener(function() {
        
        //Set to BackgroundRunningMode if not inactive
        if (CatState != "BackgroundInactiveMode"){
            CatState = "BackgroundRunningMode";
        };
        
        //If JumpBlock is false and the mode is inactive, then the Popup is no longer running, proceed
        //with BackgroundRunningMode execution of the Cat Jump
        if ((JumpBlock === 'false') && (CatState !== "BackgroundInactiveMode")){
        
            //Set variable to store connection details with a block API
            var xhttp = new XMLHttpRequest(); 
            var i = 0;
            var currBlock = 0;
    
            document.addEventListener("DOMContentLoaded", function (event) {
                updateHTML()
            })
    
            var updateHTML = function () {
    
                xhttp.open("GET", "https://api.bitaps.com/btc/v1/blockchain/block/last", true)
                xhttp.send();
                xhttp.onload = function () {
                    let x = JSON.parse(this.responseText)
                    let y = x.data.block // let y = x.data.block.height
                    let z = parseInt(y)
                }
            }
    
            //Every 5 seconds, check if a new block has been mined
            var checkBlocks = setInterval(function () {
    
                //Location of the Bitcoin Cat jumping video ( substituido : let y = x.data.block.height )
                var HTMLString = '<iframe width="400" height="330" src="https://youtu.be/000al7ru3ms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    
                //Open connected with API to retrieve current block height
                xhttp.open("GET", "https://api.bitaps.com/btc/v1/blockchain/block/last", true)
                xhttp.send();
                xhttp.onload = function () {
                    let x = JSON.parse(this.responseText)
                    let y = x.data.block 
                    let z = parseInt(y)
                
                    //If the Popup has been opened by the user, exit the background check
                    if (CatState == "PopupRunningMode"){
                        clearInterval(checkBlocks);
                    }

                    //When the block height has updated, have the cat jump in a new window
                    if ((i != 0) && (currBlock != z)) {

                        //Open window to host the cat jump
                        openWindow()
                                               
                        //Close the window after sufficient time has elapsed for cat jumping
                        setTimeout(function () {
                            closeWindow()}, 10000)
                    }
                   
                    currBlock = z;
                    
                    i++;
                }   
            }, 5000);
    
            //Open a window for the cat to jump
            function openWindow() {
               catWindow = window.open("backgroundPopup.html", "+1 Bloco Válido foi encontrado ...");
            }
    
            //Close the window that hosts the cat jumping
            function closeWindow() {
                catWindow.close()
            }
        }
    })
})