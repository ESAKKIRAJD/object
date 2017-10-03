var student ={
	address:{},
	education:{
		ug :{
			address:{},
		},
		pg :{
			address:{},
		},
	},
};



function myCollege() {
	student.name = document.getElementById('name').value;
	student.age = document.getElementById('age').value;
	student.address.city = document.getElementById('city').value;
	student.address.state = document.getElementById('state').value;
	student.address.country = document.getElementById('country').value;
	student.education.ug.degree1 = document.getElementById('degree1').value;
	student.education.ug.college1 = document.getElementById('college1').value;
	student.education.ug.marks1 = document.getElementById('marks1').value;
	student.education.ug.address.city1 = document.getElementById('city1').value;
	student.education.ug.address.state1 = document.getElementById('state1').value;
	student.education.ug.address.country1 = document.getElementById('country1').value;	
	student.education.pg.degree2 = document.getElementById('degree2').value;
	student.education.pg.college2 = document.getElementById('college2').value;
	student.education.pg.marks2 = document.getElementById('marks2').value;
	student.education.pg.address.city2 = document.getElementById('city2').value;
	student.education.pg.address.state2 = document.getElementById('state2').value;
	student.education.pg.address.country2 = document.getElementById('country2').value;


	document.getElementById('demo').innerHTML = student.name+"<br>"+student.age+"<br>"+
	student.address.city+"<br>"+student.address.state+"<br>"+student.address.country+"<br>"+
	student.education.ug.degree1+"<br>"+student.education.ug.college1+"<br>"+
	student.education.ug.marks1+"<br>"+	student.education.ug.address.city1+"<br>"+
	student.education.ug.address.state1+"<br>"+	student.education.ug.address.country1+"<br>"+
	student.education.pg.degree2+"<br>"+student.education.pg.college2+"<br>"+
	student.education.pg.marks2+"<br>"+	student.education.pg.address.city2+"<br>"+
	student.education.pg.address.state2+"<br>"+	student.education.pg.address.country2;

	console.log(student)
}
