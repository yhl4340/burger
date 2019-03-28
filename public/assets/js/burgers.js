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

    $('.eat').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');
        var newcondition = $(this).data('devoured');
        var newconditionState = {
            devoured: newcondition
        };
        console.log('id:', id);

        $.put('/api/burgers/' + id, {
            type: 'PUT',
            data:newconditionState
        }).then(function (dataToo) {
            console.log(dataToo, 'updated devoured state');
            location.reload();

        })
    })

});