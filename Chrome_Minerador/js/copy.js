document.addEventListener("DOMContentLoaded", function (event) {
    
    //Copies Lightning connection code
    var copy = document.getElementById('copy')

    copy.addEventListener('click', function (event) {
        copyTextToClipboard('03a8355790b89f4d96963019eb9413b9a2c884691837ac976bacfe25a5212892d7@eeyyz3xtzhb4mvnwztykw3gqjrbvtkturddbxfkbs6lstpcn5imgxtyd.onion:9735')
        document.getElementById('footer').innerHTML = 'O Minerador está funcionando ...'
        setTimeout(function () {
            document.getElementById('footer').innerHTML = ''
        }, 4000)
    })

    //Checkbox to make the cat go dormant
    var input = document.querySelector('input[type="checkbox"]');
    
    input.addEventListener('click', function (event) {
        event.preventDefault()
        
        //If checked, then set to inactive mode)
        if (input.checked) {  
            CatState = "BackgroundInactiveMode";

            //Update icon to inactive icon
            chrome.browserAction.setIcon({ path: { '38': 'botao_verde.png' } });

            //Close the Chrome extension
            setTimeout(function () {
                window.close()
            }, 500)
            
            //Notify the background that the cat is now inactive
            chrome.runtime.sendMessage({CatState: "BackgroundInactiveMode"});
        } 
    })
});

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(
        function () {
            console.log('Lightning connection code copied')
        })
}