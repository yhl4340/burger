$(document).ready(function () {
    console.log('hello11');

    $('#addBurger').on('click', function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#newinput').val().trim(),
            devoured:false  
        }
        console.log(newBurger, 'new@burger.js');


        $.post('/api/burgers', newBurger, function (data) {
            console.log('adding a new burger', data);
            location.reload();
        })

    });

    $('.devoured').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');
        var newcondition = $(this).data('newcondition');
        var newconditionState = {
            devoured: newcondition
        };
        console.log('id:', id);

        // $.ajax('/api/burgers/' + id, {
        //     type: 'DELETE',
        //     data:newconditionState
    
        // }).then(function () {
            $.ajax({
                method: "PUT",
                url: '/api/burgers/' + id
              }).then(function(data) {
                  console.log('updated devoured state', data);
                  location.reload();

        })
    })

});