$(window).on("load", function(){

	
	function get_data(pkmn_id) {
		var poke = $.get("https://www.pokeapi.co/api/v2/pokemon/"+pkmn_id+"/",
			function(data) {
				
			});
	}

	function show_result(pkmn) {

	}

	var current_pkmn = 549;
	var pkmn_data = get_data(549);
}