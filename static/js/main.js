for (var i = 1; i <= 151; i++) {
  $('.pokemon-container').append(
    $('<img>').attr('src', 'http://pokeapi.co/media/img/' + i + '.png')
        .attr('alt', 'Pokemon ' + i)
  );
}
