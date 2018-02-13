$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/boboy.json',
    dataType: 'jsonp',
    success: function(response) {
		var elt;
      for(i in response.courses.completed) {
		elt = response.courses.completed[i];
		$('<div>').addClass('course').appendTo($('#badges')).append('<h3>'+elt.title+'</h3><img src="'+elt.badge+'" /><a href="'+elt.url+'" target="_blank" class="btn btn-primary">See Course</a>');
	  }
    }
  });
	
});
