$(document).ready(function () {
    $("#addToTop").click(function () {
        var toDoItem = $('#toDoInput').val();
        $('#toDoInput').val('');
        $('#toDoList').prepend('<li class="item">' + toDoItem + '</li>');
        $('.item').click(function () {
            $(this).remove();
        });
    });

    $("#addToBottom").click(function () {
        var toDoItem = $('#toDoInput').val();
        $('#toDoInput').val('');
        $('#toDoList').append('<li class="item">' + toDoItem + '</li>');
    });

});