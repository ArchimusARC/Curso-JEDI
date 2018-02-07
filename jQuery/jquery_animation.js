function wololo() {
	$("#holo").animate({
		transform: "rotate(180deg)"
	}, 1500);
}


$(window).on("load", function(){
    wololo();
});