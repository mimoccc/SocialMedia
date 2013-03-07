SC.initialize({
			  client_id: '86c849221acbcb295a5e6d8c8fb194d8'
			  });

$(document).ready(function() {
				  SC.get('/tracks/293', function(track) {
						 $('#player').html(track.title);
						 });
				  });