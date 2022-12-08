$('#add-items').click(addItem);


// 如果是新頁面，獲取現在（html預設）的選項
let nowPlan = new StandardPlan({
    titlename : $('#standard-name').text(),
    timerange : $('input[name="time-range-options"]:checked').val(),
    definition : $('input[name="definition-options"]:checked').val(),
    cost : ($('input[name="time-range-options"]:checked').val())*($('input[name="definition-options"]:checked').val())
});
planCost(nowPlan);
// 如果是舊頁面，要載入舊的 value 值
if(localStorage.getItem(window.localStorage[0])!=null){
    oldDataLoad();
}
function oldDataLoad(){
    // 載入 localstorage 資料且用 json 方法從 string 轉回物件
    var loadData = JSON.parse(localStorage.getItem(window.localStorage[0]));
    // 改標題
    $('#standard-name').text(loadData.titlename);
    // 改畫質選項
    let defCheck = $('input[name="definition-options"]').eq(loadData.definition);
    $(defCheck).attr('checked','checked');
    // 改時間選項
    let timeCheck =  $('input[name="time-range-options"]').eq(loadData.timerange);
    $(timeCheck).attr('checked','checked');
    // 改價格
    planCost(loadData);
}

function reGetItemInfo(){
    nowPlan.titlename = $('#standard-name').text(),
    nowPlan.timerange = $('input[name="time-range-options"]:checked').val();
    nowPlan.definition = $('input[name="definition-options"]:checked').val();
    nowPlan.cost = ($('input[name="time-range-options"]:checked').val())*($('input[name="definition-options"]:checked').val());
}

$('input[name="definition-options"]').click(function(){
    reGetItemInfo();
    planCost(nowPlan);
});
$('input[name="time-range-options"]').click(function(){
    reGetItemInfo();
    planCost(nowPlan);
});


function planCost(variable){
    $('#plan-cost-int').text(variable.cost);
}

//加入購物車物件，同時寫入新的物件進 localstorage
function addItem(){
    // let newCost = 
    let newItemTemp = ('<li><a class="dropdown-item" href="#"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + nowPlan.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
    $('#big-cart-list').prepend(newItemTemp);
    $('#small-cart-list').prepend(newItemTemp);
    putLocal();
    let TotalCost = 0;
    for(let i=0;i<window.localStorage.length;i++){
        TotalCost = parseInt(TotalCost) + parseInt(JSON.parse(window.localStorage[i]).cost);
    }

    $('.cart-total-cost').text(TotalCost);
}

function putLocal(){
    localStorage.setItem(window.localStorage.length,JSON.stringify(nowPlan));
    console.log(JSON.parse(window.localStorage[window.localStorage.length-1]));
}
