$('#header').load('header.html', function(){
    $('#add-items').click(addItem);
});
$('#footer').load('footer.html');


$('input[name="definition-options"]').click(function(){
    totalRecal(
        $(this).val(),
        $('input[name="time-range-options"]:checked').val()
        );
});
$('input[name="time-range-options"]').click(function(){
    totalRecal(
        $('input[name="definition-options"]:checked').val(),
        $(this).val()
        );
});


function totalRecal(newCost, newTimeRange){
    console.log(newCost);
    console.log(newTimeRange);
    let FinalCost = newCost*newTimeRange;
    console.log(FinalCost);
    $('#total-cost-number').text(FinalCost);
}



//To do : 好像可以把參數們包成物件丟過來
function addItem(){
    let newItemName = $('#standard-name').text();
    // To do 不知道怎麼 local 存裡面的錢
    // let newCost = 
    let newItem = ('<li><a class="dropdown-item" href="#"><span><span><img src="./Image/CartItem.svg" class="mb-1 me-3" alt="" height="48px" width="48px"/></span><span><span>'+ newItemName + '</span></span></span></a></li>');
    $('#big-cart-list').prepend(newItem);
    $('#small-cart-list').prepend(newItem);
    // $('.cart-total-cost').text(newCost);

}