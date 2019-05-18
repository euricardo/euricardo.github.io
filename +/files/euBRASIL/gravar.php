<html>

<script LANGUAGE="JAVASCRIPT">

document.write(navigator.appName + "<br>")
document.write(navigator.appVersion + "<br>")
document.write(screen.width+"x"+screen.height + "<br>")

</script>
<head>

<?php

$name = date("h:i");

$file = $name; 

$texto = $_POST['texto'];

$file = fopen($name, 'a');

echo "Arquivo: " . $name;

fwrite($file, $texto);

fclose($file);
?>

</head>
</html>