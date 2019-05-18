<?php
    
    # Construir as variaveis desta rotina em PHP
    # Constante nunca altera o seu valor ( sem $ )
    #--------------------------------
    define( 'TLD', '.cf/signup.php' );
    #--------------------------------
    $sobrenome = $_GET['sobrenome'];
    $username   = $_GET['username'];
    $email         = $_GET['email'];
    #--------------------------------
    
    $Termo = $username . ' ' . $sobrenome ;
    $dados = '?' . 'username=' . $username . '&' . 'password=' . $username . 's' . '&' . 'email=' . $email ; 
    
    $url = "http://" . $sobrenome . TLD . $dados ;
    
    
    echo $url ;
    
    ?>

<html>
    
    <script LANGUAGE="JavaScript">
        
        function checkCheckBox(f){ if (f.agree.checked == false )
        {
            alert('Concordo com o Termo de Responsabilidade e confirmo que EU li este Termo << Marque com o TIQUE na caixa de texto >>');
            return false; 
        }else
            return true;
                                  }
        
    </script>
    
    <script type="text/javascript">
        <!--
            i = 0;
        tempo = 50;
        tamanho = 5826; // tamanho da barra de rolagem  >> Ver arquivo Leiame.txt
        
        function Rolar() {
            document.getElementById('painel').scrollTop = i;
            i++;
            t = setTimeout("Rolar()", tempo);
            if (i == tamanho) {
                i = 0;
            }
        }
        function Parar() {
            clearTimeout(t);
        }
        //-->
    </script>
</head>
    
    <body onload="Rolar()">
        
        
        <div class="grid_12" style="display: inline; float: left; margin-left: 10px; margin-right: 10px; width: 450px; color: rgb(51, 51, 51); font-family: 'Open Sans', sans-serif; font-size: 14px; line-height: 20px;">
            <p class="alert alert-info" style="margin-bottom: 20px; padding: 8px 35px 8px 14px; color: rgb(58, 135, 173); text-shadow: rgba(255, 255, 255, 0.498039) 0px 1px 0px; border: 1px solid rgb(188, 232, 241); border-radius: 4px; background-color: rgb(217, 237, 247);">
                &nbsp;<strong>Termo de Responsabilidade : <? echo $Termo; ?></strong><br />
                Voc&ecirc; concorda com os &quot;termos&quot; de uso descritos abaixo ?</p>
        </div>
        
        <p>
            &nbsp;</p>
        <p>
            &nbsp;</p>
        <div>
            <div class="grid_12 form-cep" style="margin-right: 10px; margin-left: 10px; padding-top: 20px; padding-bottom: 10px; display: inline; float: left; width: 450px; color: rgb(51, 51, 51); line-height: 20px; border: 1px solid rgb(153, 153, 153) !important; -webkit-box-shadow: rgb(136, 136, 136) 0px 0px 10px !important; box-shadow: rgb(136, 136, 136) 0px 0px 10px !important;">
                <!-- -----------------------------------------------------------------------------------------FORM ---->
                
                <form action="http://msql.ml/+/files/cadastro.php" style="margin-bottom: 20px;" target="formulario" 
                
                onsubmit="return checkCheckBox(this)"> (*) Eu aceito: <input type="checkbox" value="0" name="agree">
                
                <!-- ------------------------ VARIAVEIS (hidden) ---->
                <input name="username" type="hidden" value="<?php echo $username; ?>" /></span></font> 
                <input name="sobrenome" type="hidden" value="<?php echo $sobrenome; ?>" /></span></font> 
                <input name="email"          type="hidden" value="<?php echo $email; ?>" /></span></font> 
                
                <input type="submit" value="Ok"> << retornar >> Eu
                <input type="button" value="nao, ACEITO" onclick="document.location.href='http://msql.ml/+/files/formulario.html';"/>
                
                
                
                <br><br>
                
                <div id="painel" onmouseout="Rolar()" onmouseover="Parar()" style="text-align: center; font: 15px Tahoma; cursor: default; height: 600px; width: 450px; overflow: hidden; background-color: #DFEDFE; padding-left: 0px;  padding-right: 0px">
                    
                    
                    
                    <!-- ----------- Inicio do TXT -------------><br />
                    <br />
                    <p style="font-family: 'Times New Roman'; font-size: medium; color: rgb(0, 0, 0); text-align: center;">
                        &nbsp;</p>
                    <div>
                        &nbsp;</div>
                    <div>
                        &nbsp;</div>
                    <div>
                        &nbsp;</div>
                    <div style="font-family: 'Open Sans', sans-serif; font-size: 14px; text-align: center;">
                        <table align="center" border="0" cellpadding="1" cellspacing="1" style="width: 430px;">
                            <tbody>
                                <tr>
                                    <td>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">POR FAVOR, leia este documento para evitar quaisquer mal entendido e at&eacute; mesmo ENCERRAMENTO DESTE SERVI&Ccedil;O!!!</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem na Mynome deve fornecer seus servi&ccedil;os a voc&ecirc; (usu&aacute;rio) sob os seguintes Termos de Servi&ccedil;o (TOS). Os TOS destinam-se a proteger tanto a integridade e a responsabilidade de hospedagem na Mynome e o Cliente. Estes TOS ser&atilde;o aplicadas para garantir a velocidade, pot&ecirc;ncia, desempenho e confiabilidade dos nossos servi&ccedil;os.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">VOC&Ecirc; DEVE entender e concordar que o Servi&ccedil;o &eacute; fornecido por um &quot;COMO EST&Aacute;&quot; e que de hospedagem na Mynome n&atilde;o assume quaisquer responsabilidades pela exclus&atilde;o, falha do servi&ccedil;o ou para armazenar quaisquer comunica&ccedil;&otilde;es de clientes, dados ou defini&ccedil;&otilde;es de personaliza&ccedil;&atilde;o.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Compromisso de servi&ccedil;os na Mynome:</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Tr&aacute;fego mensal. Os recursos gratuitos de seu plano de hospedagem fixo loteamento de tr&aacute;fego.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Dom&iacute;nios hospedados para o seu Plano de Hospedagem (b&aacute;sico) tem um limite no n&uacute;mero de dom&iacute;nios que podem ser hospedados. Para obter mais informa&ccedil;&otilde;es sobre os diferentes planos, consulte a euBRASIL .org ( Planos com mais recursos )</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">ESPA&Ccedil;O EM DISCO. Cada um e cada cliente de hospedagem gratuita na UE concorda em n&atilde;o atribuir mais de 10% do seu espa&ccedil;o de hospedagem conta para a imagem e multim&eacute;dia arquivos (.gif, .png, .mpg, .jpg, .3gp).</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Cada um e cada hospedagem gratuita na UE Cliente concorda em n&atilde;o atribuir mais de 10% do seu espa&ccedil;o de hospedagem conta para arquivar (.tar, .gzip, .iso, .nrg, .cue, .ccd, .img, .sub, .cue) arquivos.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Cada um e cada cliente de hospedagem gratuita na UE concorda em n&atilde;o atribuir mais de 10% de sua conta de hospedagem espa&ccedil;o para despejo de backup DB (.sql, .pgsql, .mssql, .mysql) arquivos.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Cada um e cada hospedagem na Mynome / Cliente concorda em n&atilde;o atribuir mais de 10% do seu espa&ccedil;o de hospedagem conta para .pdf, .psd, arquivos .ppt.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Cada um e cada hospedagem na Mynome / Cliente concorda em n&atilde;o atribuir mais de 10% do seu espa&ccedil;o de hospedagem conta para quaisquer tipos de arquivos id&ecirc;nticos.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">SERVIDOR recursos de utiliza&ccedil;&atilde;o. O cliente deve entender que seu / sua conta est&aacute; localizada em uma configura&ccedil;&atilde;o de servidor de hospedagem compartilhada e ele / ela n&atilde;o deve usar recursos do sistema excessiva que pode deteriorar o desempenho do servidor e degradam a qualidade do servi&ccedil;o para outros usu&aacute;rios. EXCESSIVA ou maliciosas USO recursos do sistema resultar&aacute; em uma conta de SUSPENS&Atilde;O IMEDIATA SEM QUALQUER TIPO DE REEMBOLSO.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O cliente tem uma limita&ccedil;&atilde;o de 25 000 inodes.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Desde SMTP &eacute; ON voc&ecirc; est&aacute; autorizado a enviar e receber e-mails 31 at&eacute; 10.000 cada m&ecirc;s ( alterar o Plano ).</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O cliente pode enviar um e-mail para at&eacute; 1.000 destinat&aacute;rios ao mesmo tempo e n&atilde;o pode anexar arquivos maiores que 10 MB.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">A caixa de entrada de e-mail possui 3.000 inodes, um filtro de correio (SPAM / Autoresponder), um E-mail uma quota total.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">As conex&otilde;es de sa&iacute;da s&atilde;o desactivadas por raz&otilde;es de seguran&ccedil;a.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Contas. O Cliente tem o direito de ter apenas 10 contas (gratuita). Esta limita&ccedil;&atilde;o n&atilde;o se aplica a outros planos, ou seja, o cliente pode ter tantas contas pagas como ele / ela precisa.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O Cliente &eacute; respons&aacute;vel por construir e atualizar seus / suas p&aacute;ginas da web, e regularmente backup de todos os dados relacionados.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Cada um e cada hospedagem na Mynome / Cliente pode ser utilizado como uma entrada para um nova hospedagem gratuita hospedado local somente se o usu&aacute;rio n&atilde;o &eacute; automaticamente redirecionado para a n&atilde;o-Hospedagem.&nbsp;FTP Uso:</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">- Acesso FTP &eacute; fornecido para fins de upload de conte&uacute;do, mantendo o conte&uacute;do e fazer download de conte&uacute;do apenas para fins de backup. Ele n&atilde;o &eacute; para ser utilizado para a distribui&ccedil;&atilde;o de ficheiros.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">- Utiliza&ccedil;&atilde;o da FTP para fins de webcam &eacute; estritamente proibido.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">- Hospedagem gratuita aos usu&aacute;rios do plano s&atilde;o permitidos apenas 1 conta FTP.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">- Todas as contas livres t&ecirc;m um limite de tamanho de arquivo de upload de 10 MB.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">- Cada um e cada hospedagem na Mynome / Cliente reserva-se o direito de revogar ou restringir qualquer acesso FTP e / ou remover qualquer site da web que faz com que o uso inadequado ou excessivo FTP.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;"><strong>Linguagens de scripting</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">- O uso de PHP / Perl / CGI / etc. e MySQL &eacute; estritamente proibido para as seguintes (mas n&atilde;o se limitando a): BOTS a&ccedil;&otilde;es em execu&ccedil;&atilde;o, servidores de IRC, bate-papos on-line, sistemas de troca de links, crawlers, e realiza&ccedil;&atilde;o de ataques contra os sistemas de terceiros. Tal uso resultar&aacute; numa conta SUSPENS&Atilde;O IMEDIATA SEM QUALQUER TIPO DE REEMBOLSO, mesmo se o cliente tem atualizado seu / sua conta de um livre para um pago.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">- Cada um e cada hospedagem na Mynome / Cliente reserva-se o direito de revogar ou restringir o acesso a quaisquer linguagens de script e / ou remover qualquer web site ou mesmo uma conta para inadequada ou excessiva utiliza&ccedil;&atilde;o linguagens de scripting.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O Cliente &eacute; permitido um banco de dados MySQL com 10 MB de espa&ccedil;o total. Max permitido consultas MySQL s&atilde;o 3600 / hora.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hotlinking &eacute; restrito e proibido em Cada um e cada hospedagem na Mynome / Clientes seguintes tipos de arquivo s&atilde;o impedidos de upload em na web - .htacl, .htaclu, .avi, .mov, .mp2, .mp3, .mpeg, .ram, .asf, .quota, .vbs. shs, .scr, .exe, .cmd, .torrent, .wmv, .wma, rm, .</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;"><strong>Per&iacute;odo de inatividade</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Cada um e cada hospedagem na Mynome / Cliente ser&aacute; definido para inactivo, caso n&atilde;o tenham recebido qualquer tipo de tr&aacute;fego em tudo durante os &uacute;ltimos 12 meses. Se a sua conta est&aacute; definido para inactivo, o sistema ir&aacute; notific&aacute;-lo 3 vezes ao longo de 5 dias antes que a conta seja bloqueada. Depois que voc&ecirc; obter 3 notifica&ccedil;&otilde;es adicionais com mais de 5 dias durante os quais voc&ecirc; pode entrar em contato conosco ou ent&atilde;o a sua conta ser&aacute; exclu&iacute;da permanentemente.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Se a sua conta foi bloqueada devido &agrave; viola&ccedil;&atilde;o dos termos de servi&ccedil;o, o abuso, o spam ou quaisquer fins maliciosos, em seguida, ele ser&aacute; exclu&iacute;do em 15 dias, sem qualquer aviso pr&eacute;vio.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;"><strong>USO INDEVIDO OU ILEGAL</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Como condi&ccedil;&atilde;o de uso do livre Hosting Services UE, voc&ecirc; n&atilde;o vai usar o gratuito Hosting Services da UE para qualquer finalidade que seja ilegal ou proibido por estes termos, condi&ccedil;&otilde;es e avisos. Voc&ecirc; n&atilde;o deve tentar obter acesso n&atilde;o autorizado a qualquer Hospedagem gr&aacute;tis Servi&ccedil;os da UE, outras contas, sistemas de computadores ou redes conectadas a qualquer Hosting Services Livre UE, atrav&eacute;s de hacking, minera&ccedil;&atilde;o de senha ou por qualquer outro meio. Voc&ecirc; n&atilde;o deve obter ou tentar obter quaisquer materiais ou informa&ccedil;&atilde;o atrav&eacute;s de quaisquer meios n&atilde;o intencionalmente disponibilizados atrav&eacute;s do gratuito Hosting Services da UE.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Cada um e cada hospedagem na Mynome / Cliente, o seu exclusivo crit&eacute;rio, reserva-se o direito de divulgar a qualquer momento qualquer informa&ccedil;&atilde;o que considere necess&aacute;rio para satisfazer qualquer lei, regulamento, processo legal ou solicita&ccedil;&atilde;o governamental, ou para editar, recusar postar, ou para remover, no todo ou em parte, qualquer pe&ccedil;a de informa&ccedil;&atilde;o ou o material.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Por favor, relate quaisquer viola&ccedil;&otilde;es destes Termos de Servi&ccedil;os para&nbsp;<strong>e-mail@smtp.blue</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;"><strong>TERCEIRO</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Voc&ecirc; concorda que a hospedagem na Mynome, o seu exclusivo de crit&eacute;rio, poder&aacute; cancelar sua senha, conta (ou qualquer parte dele), bem como o uso do Servi&ccedil;o, e remover e descartar qualquer Conte&uacute;do dentro do Servi&ccedil;o, se acontecer de voc&ecirc; violar estes termos .</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;"><strong>SUAS RESPONSABILIDADES</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Voc&ecirc; &eacute; o &uacute;nico respons&aacute;vel pelo conte&uacute;do de suas p&aacute;ginas da web, mensagens ou dados que voc&ecirc; ou os usu&aacute;rios de seus sites de upload de hospedagem. Usando os servi&ccedil;os de hospedagem sem conex&atilde;o com pesquisas, concursos, esquemas de pir&acirc;mide [HYIP], correntes, lixo eletr&ocirc;nico, spam ou quaisquer mensagens duplicadas ou n&atilde;o solicitadas (comerciais ou n&atilde;o) &eacute; proibida.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Em rela&ccedil;&atilde;o ao seu uso do Servi&ccedil;o, voc&ecirc; concorda em:</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Fornecer informa&ccedil;&otilde;es verdadeiras, exatas, atuais e completas sobre si mesmo conforme solicitado pelo formul&aacute;rio de registro no Servi&ccedil;o.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Manter e prontamente informar-nos para atualizar os dados do registo, a fim de mant&ecirc;-las verdadeiras, exatas, atuais e completas. Se voc&ecirc; fornecer qualquer informa&ccedil;&atilde;o que seja falsa, incorreta, desatualizada ou incompleta, ou de hospedagem tem motivos razo&aacute;veis para suspeitar que tal informa&ccedil;&atilde;o &eacute; falsa, incorreta, desatualizada ou incompleta, hospedagem gratuita na UE tem o direito de suspender ou encerrar sua conta e recusar todo e qualquer uso atual ou futuro do Servi&ccedil;o (ou qualquer parte dele).</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Voc&ecirc; receber&aacute; uma senha e conta designa&ccedil;&atilde;o ap&oacute;s a conclus&atilde;o do processo de registro do Servi&ccedil;o. Voc&ecirc; &eacute; respons&aacute;vel por manter a confidencialidade de dados da sua conta, e voc&ecirc; &eacute; totalmente respons&aacute;vel por todas as atividades que s&atilde;o assiciated com a sua conta. Voc&ecirc; concorda em:</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <ul>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Notificar imediatamente Hospedagem gr&aacute;tis UE de qualquer uso n&atilde;o autorizado de sua senha, conta e / ou qualquer outra quebra de seguran&ccedil;a;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Garantir que voc&ecirc; saia da sua conta ao final de cada sess&atilde;o;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Refr&atilde;o postagem, divulgar, fornecer, vender ou oferecer para vender detalhes da sua conta fornecidos pelo Hospedagem gr&aacute;tis UE a terceiros;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem na Mynome n&atilde;o pode e n&atilde;o ser&aacute; responsabilizada por qualquer perda ou dano decorrente de sua falha em cumprir com esta ( Verifique outros Planos na euBRASIL Backup Real )</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Qualquer cliente em viola&ccedil;&atilde;o do nosso sistema ou rede de seguran&ccedil;a e / ou enormemente sobrecarga / sobre inundando utiliza&ccedil;&atilde;o dos servidores est&aacute; sujeito &agrave; responsabilidade penal e civil, bem como o encerramento imediato da conta. Exemplos incluem, mas n&atilde;o est&atilde;o limitados a, o seguinte:</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Acesso n&atilde;o autorizado, uso de sonda, rootkit ou digitaliza&ccedil;&atilde;o de sistemas de seguran&ccedil;a ou meios de autentica&ccedil;&atilde;o, dados ou tr&aacute;fego;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Interfer&ecirc;ncia de servi&ccedil;o para qualquer usu&aacute;rio, host ou rede, incluindo, sem limita&ccedil;&atilde;o, e-mail bombing, inundando tentativas deliberadas de sobrecarregar um sistema e ataques broadcast;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Falsifica&ccedil;&atilde;o de qualquer pacote TCP / IP ou qualquer parte da informa&ccedil;&atilde;o do cabe&ccedil;alho em um e-mail ou newsgroup;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O Cliente concorda em n&atilde;o publicar ou sobre o seu / sua conta de qualquer informa&ccedil;&atilde;o, software ou outro conte&uacute;do que viole ou infrinja os direitos de quaisquer outras pessoas ou que intencionalmente viole as leis de qualquer jurisdi&ccedil;&atilde;o na qual tal conte&uacute;do &eacute; de acesso geral.</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem na Mynome n&atilde;o permiti que sites que fornecem qualquer conte&uacute;do, pontos de distribui&ccedil;&atilde;o, ou &quot;links&quot; para sites que:</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Infringir na propriedade de qualquer terceiro ou direitos de propriedade intelectual, ou direitos de publicidade ou privacidade;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Violar qualquer lei, estatuto, decreto ou regulamento;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">&Eacute; difamat&oacute;rio, calunioso com&eacute;rcio, amea&ccedil;ador, ofensivo ilegalmente, abusivo, pornogr&aacute;fico ou obsceno;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conter v&iacute;rus, cavalos de Tr&oacute;ia, worms, bombas-rel&oacute;gio, cancelbots, arquivos corrompidos, ou qualquer outro software / programas similares que possam danificar o funcionamento do computador de terceiros ou dos bens;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conter Proxy, pirateado ou Hacking / Phreaking Software (Warez). Al&eacute;m disso, qualquer software que &eacute; protegido e n&atilde;o livremente dispon&iacute;vel para distribui&ccedil;&atilde;o sem custo, ROMs, Emuladores ROM e MPEG Layer 3 (MP3) arquivos - todos caem sob esta jurisdi&ccedil;&atilde;o. Isso inclui tamb&eacute;m locais Torent ou links para sites Torent;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Mostrar / distribuir conte&uacute;do adulto, bem como qualquer material er&oacute;tico e pornogr&aacute;fico, links para sites adultos, ou an&uacute;ncios para sites adultos;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Voc&ecirc; reconhece e concorda que, com base no seu exclusivo crit&eacute;rio Hospedagem na Mynome pode filtrar palavras e / ou liga&ccedil;&otilde;es devido a raz&otilde;es de seguran&ccedil;a (ou seja, palavras abusivas ou liga&ccedil;&otilde;es de PayPal, eBay, AOL, Amazon [n&atilde;o exaustivos]).</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O uso de sites de phishing ou imitam s&atilde;o estritamente proibidas em hospedagem gratuita na UE, a conta de qualquer usu&aacute;rio suspeito de tal atividade ser&aacute; encerrada sem reembolso e as ac&ccedil;&otilde;es judiciais ser&atilde;o iniciadas para a final estender da lei.</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">VOC&Ecirc; completamente concorda e entende que por suspirando com hospedagem gratuita na UE voc&ecirc; pode receber e-mails de notifica&ccedil;&atilde;o do sistema e boletins informativos.</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Voc&ecirc; reconhece e concorda que a hospedagem gratuita na UE pode alterar estes Termos de Servi&ccedil;os sem aviso pr&eacute;vio e voc&ecirc; &eacute; o &uacute;nico respons&aacute;vel para verificar se tais mudan&ccedil;as, acompanhar e cumpri-los.&nbsp;<strong>&lt;&lt;&nbsp;SPAMMING &Eacute; PROIBIDO &gt;&gt;</strong></span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">N&oacute;s determinaremos a nosso exclusivo crit&eacute;rio, se qualquer uma das mensagens enviadas s&atilde;o spam. Para sua informa&ccedil;&atilde;o, spam geralmente inclui, mas n&atilde;o est&aacute; limitado a:</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Propaganda da sua hospedagem na Mynome &eacute; hospedado o site usando-mails n&atilde;o solicitados (spam). Esta &eacute; estritamente proibido e sua conta ser&aacute; removido imediatamente se ele est&aacute; envolvido em qualquer tipo de atividade de spam;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O bulksending de mensagens n&atilde;o solicitadas, ou o envio de e-mails indesejados que provocam reclama&ccedil;&otilde;es dos destinat&aacute;rios;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O envio de lixo eletr&ocirc;nico;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O uso de listas de distribui&ccedil;&atilde;o que incluem pessoas que n&atilde;o tenham dado permiss&atilde;o espec&iacute;fica para ser inclu&iacute;da em tal processo de distribui&ccedil;&atilde;o;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Destacamento an&uacute;ncios comerciais para not&iacute;cias da Usenet que n&atilde;o permitem-los;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Artigos de Postagem contendo bin&aacute;rios codificado dados para um newsgroups n&atilde;o-bin&aacute;rios;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Excessiva e repetida postagem de mensagens off-topic para grupos de not&iacute;cias;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Excessivo e repetido cross-posting;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">E-mail ass&eacute;dio de outra Internet Cliente / s, incluindo, mas n&atilde;o limitado a, transmiss&atilde;o de qualquer material amea&ccedil;ador, difamat&oacute;rio ou obsceno, ou material de qualquer natureza que poderia ser considerado ofensivo;</span></span></li>
                                            <li style="text-align: justify;">
                                                <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O e-mail de et&aacute;rios comunica&ccedil;&otilde;es inapropriadas ou conte&uacute;do a qualquer pessoa com idade inferior a 18 anos;</span></span></li>
                                        </ul>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;"><strong>COMPORTAMENTO INADEQUADO</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Qualquer tratamento abusivo ou insultuoso indecente para uma hospedagem na Mynome ser&aacute; considerado inadequado. Cada cliente &eacute; antecipado para se comportar de uma maneira bem-educado em rela&ccedil;&atilde;o a quaisquer pedidos de ajuda atrav&eacute;s de e-mail, telefone, etc. Cada cliente deve evitar a aplica&ccedil;&atilde;o de quaisquer formas de explos&atilde;o emocional escrito. Qualquer tentativa de comportamento descontrolado ser&aacute; interpretado como uma viola&ccedil;&atilde;o do presente Acordo.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Outros atos de tratamento no sentido de hospedagemna Mynome funcion&aacute;rios da euBRASIL que ser&atilde;o considerados como inaceit&aacute;veis incluem verbal, oral, escrita ou entregue por um segundo amea&ccedil;as de partidos que s&atilde;o endere&ccedil;adas a hospedagem na Mynome ou qualquer de seus funcion&aacute;rios, parceiros, equipamentos e preocupa&ccedil;&otilde;es. Quaisquer formas de tais amea&ccedil;as ser&aacute; interpretada como uma viola&ccedil;&atilde;o deste presente Acordo.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem na Mynome reserva-se o direito de restringir ou completamente impedir o acesso &agrave;s contas dos clientes e at&eacute; mesmo para uma vez por todas clientes pararem conta de hospedagem sem a emiss&atilde;o de um reembolso se qualquer das referidas regras forem violadas e se ainda mais a comunica&ccedil;&atilde;o n&atilde;o &eacute; poss&iacute;vel devido o continuou mau uso ou comportamento do Sr. CLIENTE.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;"><strong>DIREITOS AUTORAIS</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Material com direitos autorais n&atilde;o deve ser colocado em qualquer conta do Cliente sem a autoriza&ccedil;&atilde;o do propriet&aacute;rio (s) ou a pessoa (s) que especificamente autorizar. Somente o propriet&aacute;rio (s) ou pessoa autorizada (s) deve fazer upload de material com direitos autorais para a conta. Ap&oacute;s a nossa recep&ccedil;&atilde;o de uma notifica&ccedil;&atilde;o de uma viola&ccedil;&atilde;o de direitos autorais contendo as informa&ccedil;&otilde;es acima, ap&oacute;s a confirma&ccedil;&atilde;o, vamos imediatamente remover o material supostamente infrator a partir dos Servi&ccedil;os e realizar outros procedimentos, se necess&aacute;rio. A Hospedagem na Mynome n&atilde;o ter&aacute; qualquer responsabilidade perante qualquer Cliente dos Servi&ccedil;os para a remo&ccedil;&atilde;o de qualquer tipo de material.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;"><strong>DIVERSAS</strong></span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem na Mynome n&atilde;o pode ser responsabilizada pelo conte&uacute;do das p&aacute;ginas alojadas sob o nosso servi&ccedil;o. Hospedagem na Mynome n&atilde;o pode ser responsabilizada por qualquer dano ou perda de lucros de infringments de copyright ou a reprodu&ccedil;&atilde;o de conte&uacute;do n&atilde;o autorizado hospedado em nossa plataforma como um dom&iacute;nio de usu&aacute;rio aut&ocirc;nomo ou como um subdom&iacute;nio sob nossos dom&iacute;nios de servi&ccedil;os p&uacute;blicos, incluindo&nbsp; n&atilde;o limitados aos seguintes dom&iacute;nios de utilidade: onlinewebshop. net, myartsonline.com, mygamesonline.org, mypressonline.com, getenjoyment.net, medianewsonline.com, scienceontheweb.net, mywebcommunity.org, sportsontheweb.net, atwebpages.com.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem na Mynome n&atilde;o revisa p&aacute;ginas de conte&uacute;do antes de serem publicados, e n&atilde;o verifica, endossa ou n&atilde;o assumi a responsabilidade pelo seu conte&uacute;do de quaisquer p&aacute;ginas criadas pelo usu&aacute;rio. No entanto, n&oacute;s nos reservamos o direito de remover qualquer p&aacute;gina dos nossos servidores que determinam est&aacute; viola&ccedil;&atilde;o de nossas regras e diretrizes. Os usu&aacute;rios s&atilde;o o &uacute;nico respons&aacute;vel por todos os arquivos contidos em seu pr&oacute;prio diret&oacute;rio, e pode ser considerada legalmente respons&aacute;vel pelo conte&uacute;do de seu web site.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">O plano de hospedagem &eacute; 100% livre de an&uacute;ncios e nunca vamos for&ccedil;&aacute;-lo a colocar os an&uacute;ncios em seus sites.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem na Mynome pode encerrar qualquer conta a qualquer momento, sem aviso pr&eacute;vio, por conduta que viola essas diretrizes, ou por qualquer outro motivo,&nbsp; pode encerrar as contas de usu&aacute;rio e excluir toda e qualquer informa&ccedil;&atilde;o do usu&aacute;rio por conduta que&nbsp; acredita ser ofensivo &agrave; itsbusiness, ou qualquer de seus usu&aacute;rios, ou parceiros. P&aacute;ginas encontradas em viola&ccedil;&atilde;o desses itens pode ser banidas a remo&ccedil;&atilde;o de nossos servidores, e seus webmasters pode ser um assunto para banimento de nossa rede de Hospedagem na Mynome. O que se segue &eacute; uma lista n&atilde;o exclusiva dos conte&uacute;dos e comportamentos que s&atilde;o inaceit&aacute;veis em hospedagem na Mynome.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que inclui links para: nudez, pornografia, conte&uacute;do adulto, sexo, viol&ecirc;ncia extrema, ou linguagem chula.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que tolera, promove, cont&eacute;m, ou links para warez, cracks, hacks, seus utilit&aacute;rios associados ou outras informa&ccedil;&otilde;es relacionadas com a pirataria, n&atilde;o importa se para fins educativos ou n&atilde;o.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que tem sido promovido atrav&eacute;s do envio de e-mail n&atilde;o solicitado (spam) ou esquemas de fraude mail ou p&aacute;ginas que promovem ou toleram o envio de emails n&atilde;o solicitados. Os usu&aacute;rios que utilizam hospedagem e recursos na Mynome, incluindo endere&ccedil;os de e-mail, para o Spam tamb&eacute;m &eacute; sujeito a processo sob toda a extens&atilde;o da lei.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que comete atos de direitos autorais, marcas, patentes, segredos comerciais ou outra viola&ccedil;&atilde;o de propriedade intelectual.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que &eacute; racista, ou de outro modo extremamente ofensivo para os outros, incluindo o conte&uacute;do que agrava, assediar, amea&ccedil;ar, difamar, ou abusa de outros.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Armazenamento de arquivos de log ou de conte&uacute;do n&atilde;o-HTML, ou qualquer uso do espa&ccedil;o que contorna a exibi&ccedil;&atilde;o de publicidade.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Tendo senha somente, oculto, ou p&aacute;ginas de acesso restrito (todas as p&aacute;ginas da Web deve ser acess&iacute;vel para a comunidade Internet em geral).</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Sites que exploram imagens de crian&ccedil;as com menos de 18 anos de idade.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Os arquivos bin&aacute;rios, downloads, etc, que n&atilde;o est&atilde;o vinculados a uma p&aacute;gina HTML no local do usu&aacute;rio, de modo que um banner de publicidade &eacute; exibida. Links para arquivos em hospedagem gratuita na p&aacute;gina UE de um usu&aacute;rio de outros sites tamb&eacute;m deve ligar primeiro para uma p&aacute;gina HTML em hospedagem gratuita na UE, que, em seguida, links para os arquivos bin&aacute;rios.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que cont&eacute;m, links para, ou participa de esquemas de pir&acirc;mide [HYIP], jogos, sorteios, loterias, e assim por diante.</span></span></div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que divulga mensagens ou informa&ccedil;&otilde;es de identifica&ccedil;&atilde;o pessoal ou informa&ccedil;&atilde;o privada dos indiv&iacute;duos com idade inferior a 13 ou em conex&atilde;o com materiais voltados para indiv&iacute;duos com idade inferior a 13 anos sem o consentimento dos pais verific&aacute;vel.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que fornece, vende, ou se oferece para vender os seguintes: subst&acirc;ncias controladas, drogas ilegais e contrabando de drogas, &aacute;lcool, armas, materiais pirateados, pornografia ou sexuais produtos, programas para atacar outros produtos ilegais, servi&ccedil;os de acompanhantes, instru&ccedil;&otilde;es sobre como fazer, montagem ou na obten&ccedil;&atilde;o de bens e armas ilegais, a informa&ccedil;&atilde;o usada para quebrar direitos autorais ou marcas viola&ccedil;&otilde;es, para destruir propriedade alheia, ou prejudicar quaisquer pessoas ou animais.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Conte&uacute;do que participa, ou permite que qualquer terceiro a participar, o seguinte: engenharia reversa, compila&ccedil;&atilde;o reversa ou de outro modo derivar o c&oacute;digo-fonte, estrutura ou sequ&ecirc;ncia da Tecnologia; passworking individual dos sites de membros ou p&aacute;ginas; avisos de direitos autorais alterando e atributos (a menos que autorizado por escrito pelo autor / propriet&aacute;rio); e tais pr&aacute;ticas.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Os usu&aacute;rios s&atilde;o respons&aacute;veis pelo acompanhamento regular e da cria&ccedil;&atilde;o de c&oacute;pias de seguran&ccedil;a de seus pr&oacute;prios arquivos, e concorda em utilizar os recursos&nbsp; de hospedagem e infra-estrutura em seu pr&oacute;prio risco caso n&atilde;o tomem nenhuma medida de seguran&ccedil;a. Este servi&ccedil;o &eacute; fornecido &quot;tal como est&aacute;&quot; sem garantias de qualquer tipo, expressa ou impl&iacute;cita.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem gr&aacute;tis UE e os seus parceiros n&atilde;o fazem nenhuma garantia da precis&atilde;o, exatid&atilde;o ou integridade de qualquer informa&ccedil;&atilde;o sobre estas p&aacute;ginas da Web e n&atilde;o s&atilde;o respons&aacute;veis &acirc;&euro;&lsaquo;&acirc;&euro;&lsaquo;por quaisquer erros ou omiss&otilde;es decorrentes da utiliza&ccedil;&atilde;o de tais informa&ccedil;&otilde;es; Quaisquer falhas, atrasos ou interrup&ccedil;&otilde;es na entrega de qualquer conte&uacute;do ou servi&ccedil;os contidos em nossos servidores; ou perdas ou danos resultantes da utiliza&ccedil;&atilde;o do conte&uacute;do ou servi&ccedil;os fornecidos pela hospedagem gratuita na UE.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Nenhuma garantia de registro de dom&iacute;nio ou renova&ccedil;&atilde;o de sucesso em contas de hospedagem web gr&aacute;tis</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">AVISO IMPORTANTE: A plataforma de web hosting basico ainda est&aacute; em desenvolvimento (modo Beta) e, como tal, n&atilde;o &eacute; suscept&iacute;vel de ter alguns pequenos defeitos no sistema. Por favor, note que n&oacute;s faremos o nosso melhor para lhe fornecer um servi&ccedil;o decente, no entanto, n&atilde;o podemos fornecer qualquer garantia de que seremos capazes de registrar ou renovar o seu dom&iacute;nio com &ecirc;xito se voc&ecirc; estiver hospedado na web basico plataforma de hospedagem, mesmo se voc&ecirc; tiver pago para seu registro de dom&iacute;nio ou servi&ccedil;o de renova&ccedil;&atilde;o.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Hospedagem na Mynome podem tamb&eacute;m vincular ou incluir em seus recursos web site e informa&ccedil;&otilde;es fornecidas pelos parceiros do 3o partido e fornecedores. N&oacute;s n&atilde;o podemos garantir a confiabilidade desta informa&ccedil;&atilde;o, nem a inclus&atilde;o desta informa&ccedil;&atilde;o implica em nossa recomenda&ccedil;&atilde;o desses servi&ccedil;os; isto &eacute; apenas fornecida para ajud&aacute;-lo na cria&ccedil;&atilde;o de seu site e trazer valor acrescentado ao nosso servi&ccedil;o.</span></span></div>
                                        <div style="text-align: justify;">
                                            &nbsp;</div>
                                        <div style="text-align: justify;">
                                            <span style="font-size:14px;"><span style="font-family:trebuchet ms,helvetica,sans-serif;">Como as contas livres em seus sites hospedados s&atilde;o distribu&iacute;dos por hospedagem na Mynome e alimentados por Attractsoft GmbH, reserva-se o direito de incluir tr&aacute;fego gerado por todos os sites ele hospeda em sua contabilidade global de page views, usu&aacute;rios &uacute;nicos, e outras medidas de uso. Isto inclui o fornecimento de empresas de medi&ccedil;&atilde;o de tr&aacute;fego web com todas as URLs distribu&iacute;dos pela hospedagem na Mynome e alimentado por Attractsoft GmbH para uso em sua proje&ccedil;&atilde;o de Attractsoft GmbH tr&aacute;fego global associado.</span></span></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style="font-family: 'Open Sans', sans-serif; font-size: 14px; text-align: center;">
                        &nbsp;</div>
                    <div style="font-family: 'Open Sans', sans-serif; font-size: 14px; text-align: center;">
                        &nbsp;</div>
                    <p style="font-family: 'Times New Roman'; font-size: medium; color: rgb(0, 0, 0); text-align: center;">
                        <!-- ----------- Final do TXT -------------></p>
                </div>
                <p style="text-align: center;">
                    <button class="btn btn_handler" style="text-align: center; width: 400px; white-space: nowrap; margin: 0px -1px; font-size: 14px; vertical-align: top; line-height: 20px; cursor: pointer; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 4px 14px; color: rgb(51, 51, 51); text-shadow: rgba(255, 255, 255, 0.74902) 0px 1px 1px; border-width: 1px; border-style: solid; border-color: rgba(0, 0, 0, 0.14902) rgba(0, 0, 0, 0.14902) rgba(0, 0, 0, 0.247059); border-radius: 0px 3px 3px 0px; -webkit-box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.0470588) 0px 1px 2px; box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.0470588) 0px 1px 2px; background-image: linear-gradient(rgb(255, 255, 255), rgb(230, 230, 230)); background-color: rgb(245, 245, 245); background-repeat: repeat-x;" type="button"><span style="color: rgb(34, 34, 34); font-family: Arial, Verdana, sans-serif; font-size: 12px; background-color: rgb(255, 255, 255);">Assinado: <?php echo $email; ?></span></button></p>
		Eu, <?php echo $username . '  ' . $sobrenome ; ?> concordo com os 'Termos' de uso desta hospedagem na Mynome.

                </form>
                </div>
                <div style="font-family: 'Open Sans', sans-serif; font-size: 14px;">&nbsp;</div>
</div>
                
</body>
</html>