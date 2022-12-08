$('#header').load('header.html', function(){
    $('#add-items').click(addItem);
    $('#add-items').click(putLocal);
});
$('#footer').load('footer.html');

class StandardPlan{
    constructor(data){
        this.insertUL = data.cart-dropdown;
        this.id = data.id;
        this.titlename = data.titlename;
        this.timerange = data.timerange;
        this.definition = data.definition;
        this.cost = data.cost;
    }
}
localStorage.clear();
// 如果是新頁面，獲取現在的 value 和 cart 項目
// 如果是新頁面
let newPlan = new StandardPlan({
    titlename : $('#standard-name').text(),
    timerange : $('input[name="time-range-options"]:checked').val(),
    definition : $('input[name="definition-options"]:checked').val(),
    cost : ($('input[name="time-range-options"]:checked').val())*($('input[name="definition-options"]:checked').val())
});
planCost(newPlan);
// To do : 如果是舊頁面; planCost(資料帶進來的StandardPlan) 載入選項 value 和 cart 項目
if(localStorage.getItem(window.localStorage[0])!=null){
    oldDataLoad();
}
function oldDataLoad(){
    var loadData = JSON.parse(localStorage.getItem(window.localStorage[0]));
    console.log(loadData.timerange);
    // 改標題
    $('#standard-name').text(loadData.titlename);
    // 改時間選項
    let toCheck =  $('input[name="time-range-options"]').eq(loadData.timerange);
    $(toCheck).attr('checked','checked');
    // 改價格
    planCost(loadData);
}




function reGetItemInfo(){
    newPlan.titlename = $('#standard-name').text(),
    newPlan.timerange = $('input[name="time-range-options"]:checked').val();
    newPlan.definition = $('input[name="definition-options"]:checked').val();
    newPlan.cost = ($('input[name="time-range-options"]:checked').val())*($('input[name="definition-options"]:checked').val());
}

$('input[name="definition-options"]').click(function(){
    reGetItemInfo();
    planCost(newPlan);
});
$('input[name="time-range-options"]').click(function(){
    reGetItemInfo();
    planCost(newPlan);
});


function planCost(variable){
    $('#plan-cost-int').text(variable.cost);
}



//To do : 好像可以把參數們包成物件丟過來
function addItem(){
    // let newCost = 
    let newItemTemp = ('<li><a class="dropdown-item" href="#"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + newPlan.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
    $('#big-cart-list').prepend(newItemTemp);
    $('#small-cart-list').prepend(newItemTemp);
    let newPC = parseInt($('#plan-cost-int').text());
    let oldSMTC = parseInt($('#SMCart-total-cost').text());
    // let oldBGTC = parseInt($('#BGcart-total-cost').text());
    let newSMTC = parseInt(newPC) + parseInt(oldSMTC);
    // let newBGTC = parseInt(newPC) + parseInt(oldBGTC);
    $('.cart-total-cost').text(newSMTC);

}

function putLocal(){
    localStorage.setItem(window.localStorage[0],JSON.stringify(newPlan));
    console.log(localStorage.getItem(window.localStorage[0]));
}

