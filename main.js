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
    $('#total-cost').text(FinalCost);
}



//To do : 好像可以把參數們包成物件丟過來
function addItem(){
    let newItem = '<li><a class="dropdown-item" href="#"><span><span><img src="./Image/One.svg" alt="" /></span><span>Item Name and Sth Else like great</span></span></a></li>';
    $('#big-cart-list').prepend(newItem);
    $('#small-cart-list').prepend(newItem);
    

}