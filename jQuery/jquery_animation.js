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
	}, 5000);
}

function shrinku() {
	$("#holo").animate({
		width: "317px",
		height:"317px"
	}, 5000);
}

function giru_giru(){
	
}


function fade_to_none() {
	$("#holo").fadeTo(15000, 0.001);
}


$(window).on("load", function(){
 	wololo();
 	expando();
 	shrinku();
 	//giru_giru();
 	fade_to_none();
});