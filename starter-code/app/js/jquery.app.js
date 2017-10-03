$(function() { //This is the document ready event statement in a shorthand notation.  

// Creating a variable called getCats. The action is get and it is used to pull the data from the server. 
// The server is basically just the URL for the API which I am getting.  
// .done is used to specify that the callback functions attached to it will be fired only after the .get succeeds and I receive the data.  
// Next the callback function is taking the data and creating a variable called catObject. This is then parsed JSON string.  
// Next is a for loop through the length of the objects in the array of cats.
// I then have a selector of the UL element with an ID of cats and an action of append. 
// I am appending it with a new li element for each cat name and cat note in the array.  
var getCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats').done(function(data){ 
      var catObject = JSON.parse(data);
      console.log(catObject);
   	  for (var i = 0; i < catObject.length; i++) {
	   	 $('#cats').append('<li>' + catObject[i].name + " " + catObject[i].note + '</li>');
	  }
   });

// Here I am selecting the ID of new-cat which is the ID of the form that contains the two input fields.
// I have an action of .on which attaches the event handler of submit.  i.e. submit the form.
// This is triggering a function for the event. The e in parenthesis represents an event function. 
// The preventDefault is just preventing the default submit if no data was entered. 
// Next I am creating variables for catName and catNote. They represent the values entered into the input fields.
// Lastly, I am selecting the ul with the id of cats. I then perform an action to append it with a new li that contains the name and note entered.
$('#new-cat').on("submit", function (e) {
	e.preventDefault();
	var catName = $('#cat-name').val();
	var catNote = $('#cat-note').val();
	$('#cats').append('<li>' + catName + " " + catNote + '</li>');
	
// I am creating an object called newCat. The object contains the name and note entered into the input fields.
    newCat = {
	name: catName, note: catNote};

// An ajax request to add (POST) the newCat object from above to the array of cats on the server via the API. 
//The data needs to be stringified from javascript format into JSON format in order for the API to read it.  
$.ajax({
	type: "POST",
	data: JSON.stringify(newCat),
	url: ("https://ga-cat-rescue.herokuapp.com/api/cats")
	
	
});
});
});




 
    














