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
            completed: true,
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

        // Check completed
        if(items[i].completed){
            item.children('.text').addClass('completed');
        }

        // Print in HTML
        list.append(item);
    }

    // Add Item by Input
    input.keyup(function(event){
        //Press Enter
        if( event.which === 13){
            var text = $(this).val().trim();

            // If is not empty
            if(text !== ''){
                // Template
                var item = template.clone();
    
                // Populate Template
                item.children('.text').text(text);
    
                // Print in HTML
                list.append(item);

                // Reset
                $(this).val('');
            }
        }
    });   

    // Remove Items
    $('body').on('click', '.todo-list .todo-item i', function(){
        $(this).parent().remove();
    });

    // Check Items 
    $('body').on('click', '.todo-list .todo-item .text', function(){
        $(this).toggleClass('completed');
    });

    // End Doc Ready
});