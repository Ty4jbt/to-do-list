function newItem() {

    let task = $('#input').val();
    let li = $('<li></li>');
    li.append(document.createTextNode(task));

    if (!task) {
        alert('You must write Something!');
    } else {
        $('#list').append(li);
    }

    li.on('dblclick', function(e) {
        li.toggleClass('strike');
    });

    let deleteButton = $('<crossOutButton>X</crossOutButton>');
    li.append(deleteButton);

    function deleteTask() {
        li.addClass('delete');
    }

    deleteButton.on('click', deleteTask);

}