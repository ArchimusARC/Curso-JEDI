var alumno = {
	 nombre : "Adrián",
	 apellidos : "Ruiz Cordón",
	 email : "ruiza3e@gmail.com",
	 edad : 21,
	 cursos : ["JEDI HTML", "JEDI CSS", "JEDI JS"],
	 contraseña : "banana",
	 nombrecompleto : function() {
	 	return this.nombre +" "+ this.apellidos;
	 }
};

var profesor = {
	 nombre : "Hank",
	 apellidos : "McCoy",
	 email : "bestia_azul@mutante.com",
	 edad : 21,
	 cursos : ["Historia Mutante", "Control de Poderes", "Humanidad y Mutantes"],
	 especialidad : "Genética Mutante",
	 contraseña : "genX10",
	 nombrecompleto : function() {
	 	return this.nombre +" "+ this.apellidos;
	 }
};
