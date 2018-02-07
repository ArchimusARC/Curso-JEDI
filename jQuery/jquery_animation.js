function wololo() {
	$("#holo").css({
		transform:"rotateY(180deg)",
		transition: "5s",
	});
	$("#holo").css("background-image", "url(salty.jpg)");
}

function expando() {
	$("#holo").animate({
		width: "634px",
		height:"634px"
	});
}

function shrinku() {
	$("#rotation2").animate({
		width: "20px",
		height:"20px"
	}, "slow");
}

function giru_giru(){
	
}


function fade_to_none(tag, num) {
	$(tag).fadeTo(num, 0.001);
}


$(window).on("load", function(){
 	wololo();
 	expando();
 	shrinku();
 	giru_giru();
 	fade_to_none("#holo", 20000);
 	fade_to_none("#rotation2", 40000);
});