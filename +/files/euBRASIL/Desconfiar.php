<?php 
$letters = 'abcdefghijklmnopqrstuvwxyz'; 
srand((double) microtime() * 1000000); 
$string = ''; 
for ($i = 1; $i <= rand(4,12); $i++) { 
   $q = rand(1,24); 
   $string = $string . $letters[$q]; 
} 
$handle = opendir($downloaddir); 
while ($dir = readdir($handle)) { 
   if (is_dir($downloaddir . $dir)){ 
      if ($dir != "." && $dir != ".."){ 
         @unlink($downloaddir . $dir . "/" . $filename); 
         @rmdir($downloaddir . $dir); 
      } 
   } 
} 
closedir($handle); 
mkdir($downloaddir . $string, 0777); 
symlink($safedir . $filename, $downloaddir . $string . "/" . $filename); 
Header("Location: " . $downloadURL . $string . "/" . $filename); 
?>