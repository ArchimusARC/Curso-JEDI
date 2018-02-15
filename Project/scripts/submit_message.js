$(window).on("load", function() {
	$("#enviar").on({
		click: function (){
			$("input.iform").val('');
			$("#pregunta").val('');
			alert("Tu mensaje ha sido enviado correctamente");
		}
	});
});

