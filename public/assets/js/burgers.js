$(document).ready(function () {
    console.log('hello11');

    $('#addBurger').on('click', function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#newinput').val().trim(),
            devoured:false
        }

        $.post('/api/burgers', newBurger, function (data) {
            console.log('adding a new burger', data);
            location.reload();
        })

    });

    $('.devoured').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');
        console.log('id:', id);

        $.ajax({
          method: "PUT",
          url: '/api/burgers/' + id
        }).then(function(data) {
            console.log('updated devoured state', data);
            location.reload();
        });
    })
});