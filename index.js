'use strict';

//set shoppinglist
function shoppingList(){
  //on submit event
  $('#js-shopping-list-form'.submit(function(event){
    event.preventDefault();

    //get value from input
    const newItem = $('.shopping-list-entry').val();

    //append new item into list
    $('.shopping-list').append(
      `<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        <li>`);
  }));
}

//on click event check button
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  //add class .shopping-item__checked
  $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
});

//on click event delete button
$('.shopping-list').on('click', '.shopping-item-delete', function(event){
  //delete li
  $(this).closest('li').remove();
});
