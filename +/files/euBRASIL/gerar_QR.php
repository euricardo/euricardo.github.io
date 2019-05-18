<?php
$url = $_GET["url"];
    function qrcode($url, $size){
        if($url && $size = "250"){
        return "http://chart.apis.google.com/chart?cht=qr&chl=".$url."&chs=".$size."x".$size."";
        }
        }
?>    
 
<html>
<body style="margin: 0px;">
    <img style="-webkit-user-select: none" src="<?php echo qrcode($url,$size); ?>">
</body>
</html>