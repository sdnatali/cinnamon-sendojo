//var emailContato = ["contato@sendojo.org.br", "Lhoji san"];
var emailContato = ["lhojinakamura@yahoo.com.br", "Lhoji san"];
//var emailContato = ["cidaoehnois@gmail.com", "Sido san"];

function sendFaleConosco(nome, sexo, email, fone, motivo, comentarios) {
	
	var html = "";
	var head = "";
	var body = "";
	var content = "";
	
	content = content + "<div style=\"font-family: tahoma;font-size: 10;\">";
	
	if( sexo == "M"){
		content = content + "<p>O Sr. " + nome + " entrou em contato pelo site sendojo.org.br e ";
		
	} else {
		content = content + "<p>A Sra. " + nome + " entrou em contato pelo site sendojo.org.br e ";
		
	}
	
	if( motivo == "" || motivo == undefined){
		content = content + "nn&atilde;oo informou seus interesses.</p>";
		
	} else if( Object.prototype.toString.call( motivo ) === '[object Array]'){
		content = content + "tem os seguintes interesses:</p>";
		content = content + "<ul>";
		
		for( i = 0; i < motivo.length; i++){
			content = content + "<li>" + motivo[i] + "</li>";
		}
		content = content + "</ul>";

	} else {
		content = content + "tem os seguintes interesses:</p>";
		content = content + "<ul>";
		content = content + "<li>" + motivo + "</li>";
		content = content + "</ul>";
	}
	
	content = content + "		<p>Suas informa&ccedil;&otilde;es de contato sn&atilde;oo:</p>";
	content = content + "		<ul>";
	content = content + "			<li><b>Fone: </b>" + fone + "</li>";
	content = content + "			<li><b>Email: </b>" + email + "</li>";
	content = content + "			<li><b>Coment&aacute;rios: </b>" + comentarios + "</li>";
	content = content + "		</ul>";
	
	body = body + "<body>";
	body = body + content;
	body = body + "	</body>";
	
	head = head + "<head>";
	head = head + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" />";
	head = head + "<title>Email</title>";
	head = head + "</head>";
	
	html = html + "<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>";
	html = html + "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">";
	html = html + "<html xmlns=\"http://www.w3.org/1999/xhtml\">";
	html = html + head;
	html = html + body;
	html = html + "	</html>";
	
	$.ajax(
			{
				type: "POST",
				url: "http://www18.locaweb.com.br/scripts/FormMail.pl",
				data: {
					'email': 'contato@sendojo.org.br',
				    'recipient': emailContato[0],
				    'subject': 'Contato Site Sendo Dojo: ' + nome,
				    'mensagem': content
				}
				
			}
		 ).done(function(response) {
			 console.log(response);
		 });

}

function configurarFaleConosco(){
 	$(document)
		.ready(
			function() {
	
  		$('#form-contato')
  			.bootstrapValidator()
  			.on('success.form.bv', function(e, data) 
  				{
  				var mensagem = "";
				var values = {};
				var formArray = $(this).serializeArray();
				
				$.each(formArray, function(i, field) {

					if( Object.prototype.toString.call( values[field.name] ) === '[object Array]' ){
						values[field.name].push(field.value);
						
					} else if( values[field.name] == undefined){
						values[field.name] = field.value;
					
					} else {
						values[field.name] = [values[field.name], field.value];

					}
				    mensagem = mensagem + field.name + "=" + field.value + ", "; 
				});

				sendFaleConosco(
					values["seuNome"], 
					values["seuSexo"], 
					values["seuEmail"], 
					values["seuFone"], 
					values["seuMotivo"], 
					values["seusComentarios"] );

				$('#contatoModal').modal('hide');
				$(this).data('bootstrapValidator').resetForm(true);
				$('#contatoSucessoModal').modal('show');
			
        		}
        	);
	
			}
		);

	$('#contato-enviar').click(function() 
		{
		
			$('#form-contato')
				.data('bootstrapValidator')
					.validate();
	
		}
	);
}
