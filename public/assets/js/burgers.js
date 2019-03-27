$(document).ready(function(){
    $('#addBurger').on('submit', function(e){
    event.preventDefault();
    var id = $(this).data('id');
    var newBurger = {
        burger_name: $('#newinput').val().trim(),
        devoured: 0
    }
    console.log(newBurger,'new@burger.js')
    });
    
    $.ajax('/api/burgers' + id ,{
        type: 'PUT',
        data:newBurger,
    } ).then(function(){
        console.log('adding a new burger', newBurger);
        location.reload();
    })
});