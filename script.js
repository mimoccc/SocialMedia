SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
    var i = 0;
  SC.get('/tracks', { genres: 'rock' }, function(tracks) {
    $(tracks).each( function(index, track) {
        i++;
      $('#results').append($('<li></li>').html(
          track.title + ' - ' + track.genre+ ' - ' + 
      track.favoritings_count + ' '+i ));
    } //  fun(index,track)
    ); //  get(tracks,genre, func)
  });
});
