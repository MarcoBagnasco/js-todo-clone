$(document).ready(function () {
    /*****************************
     * TODO LIST
     *****************************/

    // REFERENCES
    var input = $('.add');
    var list = $('.todo-list');
    var template = $('#template .todo-item');
    var modal = $('.modal');

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
                // First letter uppercase
                text = text[0].toUpperCase() + text.slice(1);

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
    $('body').on('click', '.todo-list .todo-item .delete', function(){
        var trash = $(this);
        // Check Completed
        if( trash.prevAll('.text').hasClass('completed')){
            trash.parent().remove();
        } else {
            // Show Modal
            modal.addClass('active');
            modal.find('.btn-yes').click(function(){
                trash.parent().remove();
                modal.removeClass('active');
            });
            modal.find('.btn-no').click(function(){
                modal.removeClass('active');
            });
        }
    });

    // Check Items and Remove Important
    $('body').on('click', '.todo-list .todo-item .text', function(){
        $(this).toggleClass('completed').removeClass('important');
        $(this).next('.important').removeClass('active');
    });

    // Important
    $('body').on('click', '.todo-list .todo-item .important', function(){
        if(! $(this).prev('.text').hasClass('completed')){
            $(this).toggleClass('active');
            $(this).prev('.text').toggleClass('important');
        }
    });

    // Remove all completed
    $('.btn-del').click(function(){
        var currentList = $('.todo-item');
   
        for(var i = 0; i < currentList.length; i++){
            if($(currentList[i]).children('.text').hasClass('completed')){
                currentList[i].remove();
            }
        }
    });

    // End Doc Ready
});