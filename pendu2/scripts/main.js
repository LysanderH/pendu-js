// cache les éléments
$('#winning').hide();
$('#losing').hide();

var gameData = {};
gameData.maxTrials = 8;
gameData.word = '';
// définir les valeurs initiales

gameData.lettersCount = 0;
gameData.replacementString = '';
gameData.alphabet = 'abcdefghijklmnopqrstuvwxyz';
gameData.state = '#losing';
gameData.state = '#winning';
render();

// tirer un mot

$.get('./API/index.php', function(word){
	// Faute à ce point
	// consolo.log(word);
	gameData.word = word;
	gameData.lettersCount = word.length;
	gameData.replacementString = word.replace(/./g, '*');
	render();
})

$('form').on('submit', function(e){
	e.preventDefault();
	// le code à exécuter quand on soumet une lettre
	render();
})

function render(){
	$('#max-trials').text(gameData.maxTrials);
	$('#letters-count').text(gameData.lettersCount);
	$('#replacement-string').text(gameData.replacementString);
	// créer les options (notre boulot)
	// indice on doit utiliser split et for each (de js pas php) + jquery append
	
	$.each(gameData.alphabet.split(), function (index, value) {
	  	$('#select-letter').append('<option>' + value + '</option>');
	  	return (value !== 'z');
	});
}