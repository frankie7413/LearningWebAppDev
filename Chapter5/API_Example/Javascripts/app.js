var main = function () {
	"use strict";

	$.ajax({
		url: 'http://api.themoviedb.org/3/movie/68734?api_key=5760c5d7185a5ec3493b63d13e65394c',
		data: {
			format: 'json'
		},
		error: function() {
			$('main .result').append('<p>error in ajax</p>');
		},
		dataType: 'jsonp',
		success: function(data) {
			$('main .result').append('<p>'+ data.overview +'<p>');
		},
		type: 'Get'
	});

};
$(document).ready(main);

