$(document).ready(onReady);

let count = 0;

function onReady() {
    console.log('jQuery works');
    $('#generateButton').on('click', clickHandler);
    
}

function clickHandler() {
    console.log('Generate Button was clicked');
    coloredRow();
    buttonCounter();
    
}

function coloredRow() {
    $('body').append('<div class="colorRow"></div>');
    $('.colorRow').append('<button id="swapButton">Swap</button>', '<button id="deleteButton">Delete</button>');
    $('.colorRow').append('<p class="counter"></p>');
    $('#swapButton').on('click', swapColor);
    $('#deleteButton').on('click', deleteDiv);

}

function buttonCounter() {
    $('.counter').text(++count);

}

function swapColor() {
    console.log('Swap Button was clicked');
    if($('.colorRow').css('background-color') == 'red')
        $('.colorRow').css('background-color', 'yellow');
    else {
        $('.colorRow').css('background-color', 'red');
    }
}

function deleteDiv() {
    const rowToDelete = $(this).closest('.colorRow'); 
    rowToDelete.remove();
}

    



