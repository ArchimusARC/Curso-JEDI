$(window).on("load", function(){
	var texto = $("#inguion").val();

	function insert_text(text) {
		this.texto = this.texto+"-";
		$("#inguion").val(this.texto);
	}

	$("#inguion").keypress(function() {
		insert_text($("#inguion").val());
	});
})