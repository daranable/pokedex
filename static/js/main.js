let $ = window.$;

$('.pokemon-container').on('click', 'img', function () {
  $.get('http://pokeapi.co/api/v1/pokemon/' + $(this).attr('id'), function (data) {
    window.scrollTo(0,0);
    $('.pokedex img').attr('src', $('#' + data.national_id).attr('src'));
    $('.pokedex h2').text(data.name);

    let container = $('<div>');
    let types = $('<ul>');
    for (let id in data.types) {
      let type = data.types[id];
      types.append($('<li>').text(type.name));
    }

    container.append($('<h3>').text('Types'));
    container.append(types);

    container.append($('<h3>').text('Height'));
    container.append($('<p>').text(data.height));

    container.append($('<h3>').text('Weight'));
    container.append($('<p>').text(data.weight));

    $('.pokedex .content').empty().append(container);
  }, 'json');
});

for (var i = 1; i <= 251; i++) {
  $('.pokemon-container').append(
    $('<img>').attr('src', 'http://pokeapi.co/media/img/' + i + '.png')
        .attr('alt', 'Pokemon ' + i).attr('id', i)
  );
}
