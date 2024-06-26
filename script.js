/// Botões
var cards =  document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++){

    cards[i].addEventListener('mouseover', function() {
        var button = this.querySelector('.button-invisible');
        button.style.display = 'block';
    })

    cards[i].addEventListener('mouseout', function() {
        var button = this.querySelector('.button-invisible');
        button.style.display = 'none';
    })
}
