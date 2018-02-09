$(window).on("load", function(){
	var texto = "";

	function insert_text(text) {
		this.texto = this.texto+text+"-";
		$("#texto").text(this.texto);
	}

	$("#inguion").keypress(function() {
		insert_text($("#inguion").val());
	});
})