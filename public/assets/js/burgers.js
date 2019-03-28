$(document).ready(function(){
    console.log('hello11');

    $('#addBurger').on('click', function(event){
    event.preventDefault();
    var id = $(this).data('id');
    var newBurger = {
        burger_name: $('#newinput').val().trim(),
        devoured: false
    }
    console.log(newBurger,'new@burger.js');


    $.post('/api/burgers', newBurger, function(data){
            console.log('adding a new burger', data);
            location.reload();
        })

    });
    
    
});