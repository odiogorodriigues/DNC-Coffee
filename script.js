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


/// Modal

let button = document.getElementById('abrirModal');
let modal =  document.getElementById('janela-modal')
let buttonClose = document.getElementById('fechar')

button.onclick = function() {
    modal.showModal()
    modal.style.display = 'flex'
}

buttonClose.onclick = function closeModal() {
    modal.close()
    modal.style.display = ''
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.close()
        modal.style.display = ''
    }
});