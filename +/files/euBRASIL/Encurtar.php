<?php

 # Exemplo de utilização
 # $api = new prala;
 # echo $api->getShortUrl(" ");
 # url a ser encurtada atraves do API

 $url=  $_GET['url'];echo 'url : ' . $url  .'<br>' ;


   class prala{
        
        public function getShortUrl($url){
            try{
                $api= fopen("http://pra.la/api?url=$url",'r');
                return fgets($api);
            }catch(Exception $e){
                return $e;
            }
        }     
        public function getLongUrl($url){
            try{
                $head = get_headers($url);
                $url = explode(": ",$head[5],2);
                return $url[1];
            }catch(Exception $e){
 		echo 'encurtar : ' . $e . '<br>' ; 
                return $e;
            }
        }
    }
?>