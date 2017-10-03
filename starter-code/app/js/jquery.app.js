$(document).ready(function() {

var getCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats').done(function(data){
      var catObject = JSON.parse(data);
      console.log(catObject);
   	  for (var i = 0; i < catObject.length; i++) {
	   	 $('#cats').append('<li>' + catObject[i].name + " " + catObject[i].note + '</li>');
	  }
   });

$('#new-cat').on("submit", function (e) {
	e.preventDefault();
	var catName = $('#cat-name').val();
	var catNote = $('#cat-note').val();
	$('#new-cat').append('<li>' + catName + " " + catNote + '</li>');
	

    newCat = {
	name: catName, note: catNote};


$.ajax({
	type: "POST",
	data: JSON.stringify(newCat),
	url: ("https://ga-cat-rescue.herokuapp.com/api/cats")
	
	
});
});
});




 
    














