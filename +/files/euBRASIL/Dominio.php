<?php

function eswhois($dom,$domt,&$regdet)
{
  $regdet="";
  if (!($fh=@fopen("http://who.is/whois?list=Dominios&key=".$dom.$domt."&tipo=procesar","r")))
    return(5);
  $buf="";
	$buf=fread($fh,100000);
  fclose($fh);
  $buf=eregi_replace("</tr>","n",$buf);
  $buf=strip_tags($buf);
  $buf2=explode("n",$buf);
	$blankflag=0;
  for ($k=0;$k<count($buf2);$k++)
  {
    $buf2[$k]=trim($buf2[$k]);
    if (($buf2[$k]!="") && (strlen($buf2[$k])>1))
    {
    	$blankflag=0;
      $regdet[]=$buf2[$k];
    }
    if (($buf2[$k]=="") && ($blankflag==0))
    {
    	$blankflag=1;
      $regdet[]=$buf2[$k];
    }
  }
  $available=0;
  for($index=0;$index<count($regdet);$index++)
  {
    $lne=strtolower($regdet[$index]);
    $pos=strpos($lne,"encontrado");
    if (is_integer($pos))
    {
      $available=1;
    }
  }
  if ($available==1)
    return(0); // Domain is not registered
  return(1);
}

?>