$(document).ready(onReady);

let count = 0;

function onReady() {
    console.log('jQuery works');
    $('#generateButton').on('click', clickHandler);
    
}

function clickHandler() {
    console.log('Generate Button was clicked');
    coloredRow();
    
}

function coloredRow() {
    $('body').append('<div class="colorRow"></div>');
    $('.colorRow').append('<button id="swapButton">Swap</button>', '<button id="deleteButton">Delete</button>');
    $('.colorRow').append('<p>' + ++count + '</p>');
    $('#swapButton').on('click', swapColor);
    $('body').on('click','.deleteButton', deleteDiv);

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
    console.log('delete button clicked');
    const rowToDelete = $(this).closest('.colorRow'); 
    rowToDelete.remove();
}

    





    



