$('#header').load('header.html', function(){
    $('#add-items').click(addItem);
});
$('#footer').load('footer.html');



let itemInfo = {
    TimeRange : $('input[name="time-range-options"]:checked').val(),
    Definition : $('input[name="definition-options"]:checked').val(),
};
planCost(itemInfo);

$('input[name="definition-options"]').click(function(){
    reGetItemInfo();
    planCost(itemInfo);
});
$('input[name="time-range-options"]').click(function(){
    reGetItemInfo();
    planCost(itemInfo);
});

function reGetItemInfo(){
    itemInfo = {
        TimeRange : $('input[name="time-range-options"]:checked').val(),
        Definition : $('input[name="definition-options"]:checked').val(),
    };
}

function planCost(itemInfo){
    let FinalCost = itemInfo.TimeRange*itemInfo.Definition;
    $('#plan-cost-int').text(FinalCost);
}



//To do : 好像可以把參數們包成物件丟過來
function addItem(){
    let newItemName = $('#standard-name').text();
    // To do 不知道怎麼 local 存裡面的錢
    // let newCost = 
    let newItem = ('<li><a class="dropdown-item" href="#"><span><span><img src="./Image/CartItem.svg" class="mb-1 me-3" alt="" height="48px" width="48px"/></span><span><span>'+ newItemName + '</span></span></span></a></li>');
    $('#big-cart-list').prepend(newItem);
    $('#small-cart-list').prepend(newItem);
    let newPC = parseInt($('#plan-cost-int').text());
    console.log(newPC);
    // To do 這個有兩個
    let oldTC = parseInt($('#smCart-total-cost').text());
    console.log(oldTC);
    let newTC = parseInt(newPC) + parseInt(oldTC);
    console.log(newTC);
    $('.cart-total-cost').text(newTC);

}
