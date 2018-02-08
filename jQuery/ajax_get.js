$(window).on("load", function(){

	
	function get_data(pkmn_id) {
		$.get("https://www.pokeapi.co/api/v2/pokemon/"+pkmn_id+"/",
			function(data) {
				console.log(data.name);
				console.log(data.id);
				console.log(data.types[0].type.name);

				$("#ID").text = data.id;
				$("#nsprite").attr("src", data.sprites.front_default);
				$("#ssprite").attr("src", data.sprites.front_shiny);
				$("#name").text = data.name;
				$("#type").text = data.types[0].type.name;
				alert("Todo cargado");
			}, "json");
	}


	var current_pkmn = 549;
	get_data(current_pkmn);
	
	$("#next_btn").on({
		click: function (){
			current_pkmn+=1;
			get_data(current_pkmn);
			console.log(current_pkmn);
		}
	});

	$("#last_btn").on({
		click: function (){
			current_pkmn-=1;
			get_data(current_pkmn);
			console.log(current_pkmn);
		}
	});
})