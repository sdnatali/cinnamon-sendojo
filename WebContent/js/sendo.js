var emailContato = "lhojinakamura@yahoo.com.br";

function sendFaleConosco(nome, sexo, email, fone, motivo, comentarios) {
	
	var html = "";
	html = html + "<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>";
	html = html + "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">";
	html = html + "<html xmlns=\"http://www.w3.org/1999/xhtml\">";
	html = html + "<head>";
	html = html + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" />";
	html = html + "<title>Email</title>";
	html = html + "<style>";
	html = html + "	body {";
	html = html + "		font-family: tahoma;";
	html = html + "		font-size: 10;";
	html = html + "	}";
	html = html + "</style>";
	html = html + "</head>";
	html = html + "<body>";
	
	if( sexo == "M"){
		html = html + "<p>O Sr. " + nome + " entrou em contato pelo site sendojo.org.br e ";
		
	} else {
		html = html + "<p>A Sra. " + nome + " entrou em contato pelo site sendojo.org.br e ";
		
	}
	
	if( motivo == "" || motivo == undefined){
		html = html + "não informou seus interesses.</p>";
		
	} else if( Object.prototype.toString.call( motivo ) === '[object Array]'){
		html = html + "tem os seguintes interesses:</p>";
		html = html + "<ul>";
		
		for( i = 0; i < motivo.length; i++){
			html = html + "<li>" + motivo[i] + "</li>";
		}
		html = html + "</ul>";

	} else {
		html = html + "tem os seguintes interesses:</p>";
		html = html + "<ul>";
		html = html + "<li>" + motivo + "</li>";
		html = html + "</ul>";
	}
	
	html = html + "		<p>Suas informações de contato são:</p>";
	html = html + "		<ul>";
	html = html + "			<li><b>Fone: </b>" + fone + "</li>";
	html = html + "			<li><b>Email: </b>" + email + "</li>";
	html = html + "			<li><b>Comentários: </b>" + comentarios + "</li>";
	html = html + "		</ul>";
	html = html + "	</body>";
	html = html + "	</html>";
	
	$.ajax({
		  type: "POST",
		  url: "https://mandrillapp.com/api/1.0/messages/send.json",
		  data: {
		    'key': 'vFfDqq0glKQpQpZfVNHIaw',
		    'message': {
		      'headers': {
		    	  'Content-Type' : 'text/html;charset=ISO-8859-1',
		    	  'Content-Transfer-Encoding' : 'quoted-printable'
		      },
		      'from_email': email,
     	      'from_name': 'Contato Sendo Dojo',
		      'to': [
		          {
		            'email': emailContato,
		            'name': 'Lhoji San',
		            'type': 'to'
		          }
		      ],
		      'subject': 'Contato Site Sendo Dojo: ' + nome,
		      'html': html
		    }
		  }
		 }).done(function(response) {
		   console.log(response); // if you're into that sorta thing
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
