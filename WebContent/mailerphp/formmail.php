<html>
   <head>
       <title></title>
       <style type="text/css">
           #Text1
           {
               width: 287px;
           }
           #Text2
           {
               width: 287px;
           }
           #Text3
           {
               width: 287px;
           }
           #Text4
           {
               width: 287px;
           }
           #btEnviar
           {
               width: 100px;
           }
           #btLimpar
           {
               width: 100px;
           }
           #TextArea1
           {
               width: 287px;
           }
       </style>
   </head>
   <body>
       <!-- NÃO ALTERE ESTE ENDEREÇO -->
       <form method='post' action='http://www18.locaweb.com.br/scripts/FormMail.pl'>
           <!-- AQUI VOCÊ IRÁ INSERIR O E-MAIL DO REMETENTE-->
           <input type='HIDDEN' name='email' value='diagnosticando@gmail.com'>
           <!-- INFORME NO CAMPO [ VALUE ] O ASSUNTO DA MENSAGEM -->
           <!-- EXEMPLO: [ VALUE='FORMULARIO DE CONTATO' ]-->
           <input type='HIDDEN' name='subject' value='Teste de Envio Formmail'>
           <!-- INFORME NO CAMPO [ VALUE ] O ENDEREÇO DA PAGINA DE AGRADECIMENTO/CONFIRMAÇÃO DO ENVIO -->
           <!-- EXEMPLO: [ VALUE='http://www.locaweb.com.br' ]-->
           <input type='HIDDEN' name='redirect' value='http://gmail.com'></td>
       <h2 align="center" style="text-decoration: underline"> Formulário de Contato (Formmail)</h2>"
       <table width="450px" align="center" border="1" cellpadding="5" cellspacing="5">
           <tr>
               <td align="right">
                   Email Destinatário:</td>
               <td>
                   <input id="recipient" name="recipient" type="text" /></td>
           </tr>
           <tr>
               <td align="center" colspan="2">
                   <table style="width:100%;" cellspacing="10">
                       <tr>
                           <td align="right">
                               <input id="btEnviar" type="submit" value="Enviar" /></td>
                           <td>
                               <input id="btLimpar" type="reset" value="Limpar" align="left" /></td>
                       </tr>
                   </table>
               </td>
           </tr>
       </table>
       </form>
   </body>
</html>