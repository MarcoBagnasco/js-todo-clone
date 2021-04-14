$(document).ready(function () {
    /*****************************
     * TODO LIST
     *****************************/

    // REFERENCES
    var input = $('.add');
    var list = $('.todo-list');
    var template = $('#template .todo-item');

    // Object's Array
    var items = [
        {
            text: 'Fare la spesa',
            completed: false,
        },
        {
            text: 'Fare la lavatrice',
            completed: false,
        },
        {
            text: 'Chiamare idraulico',
            completed: false,
        },
    ];

    // Insert Todo Items
    for(var i = 0; i < items.length; i++){
        // Template
        var item = template.clone();

        // Populate Template
        item.children('.text').text(items[i].text);

        // Print in HTML
        list.append(item);
    }
    // End Doc Ready
});