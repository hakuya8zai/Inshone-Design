// 載入此頁時，如果是新的 Plan 則預設勾選不動並建立一個 Object 儲存它，如果是載入特定 Data 則套用 Data 選項
// 變更選項時，同步更新資料到 Object 內，如果為購物車內資料則同步存入 LocalStorage，如果是新 Object 則是等到最終送出才決定
$('#add-items').click(addItem);

// 如果是新頁面，要儲存時，建立一個新物件並，獲取現在（html預設）的選項
const PageFrom = window.localStorage.getItem('PlanPageType');
console.log(window.localStorage.getItem('PlanPageType'));
var nowPlan;
if(PageFrom === 'new' || PageFrom == null){
    console.log("From New");
    newObjectGen();
}
else{
    console.log("From Old");
    var nowArray = JSON.parse(window.localStorage.getItem('cartItem'));
    nowPlan = nowArray[PageFrom];
    oldDataLoad(PageFrom);
    console.log('PageFrom='+PageFrom);

}

planCost(nowPlan);
// 來自新增，需要新建物件
function newObjectGen(){
    let instPlan = new StandardPlan({
        titlename : $('#standard-name').text(),
        timerange : $('input[name="time-range-options"]:checked').val(),
        definition : $('input[name="definition-options"]:checked').val(),
        cost : ($('input[name="time-range-options"]:checked').val())*($('input[name="definition-options"]:checked').val())
    });    
    console.log("instPlan id ="+ instPlan.id);
    nowPlan = instPlan;
    console.log(nowPlan.id);
}

// 來自購物車，不需要新建物件，只需載入舊的 value 值
function oldDataLoad(id){
    // 載入 localstorage 資料且用 json 方法從 string 轉回陣列
    let loadArray = JSON.parse(localStorage.getItem('cartItem'));
    let loadData;
    // 從陣列中找到某一物件
    for(let i =0;i<loadArray.length;i++){
        console.log(loadArray[i].id);
        if(loadArray[i].id == id){
            console.log("hi");
            loadData = loadArray[i];
        }
    }
    console.log(loadData);
    console.log(id);
    // 改標題
    $('#standard-name').text(loadData.titlename);
    // 改畫質選項
    let defCheck = $('input[name="definition-options"][value="'+ loadData.definition +'"]');
    $(defCheck).attr('checked','checked');
    // 改時間選項
    console.log(loadData.timerange);
    let timeCheck =  $('input[name="time-range-options"][value="'+ loadData.timerange +'"]');
    $(timeCheck).attr('checked','checked');
    // 改價格
    planCost(loadData);
}

function reGetItemInfo(){
    console.log("reGetItemInfo");
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
    console.log(nowPlan.id);
    let smItemTemp = ('<li><a class="sm-dropdown-item dropdown-item" href="#" data-plan-id="'+ nowPlan.id +'"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + nowPlan.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
    let bgItemTemp = ('<li><a class="bg-dropdown-item dropdown-item" href="#" data-plan-id="'+ nowPlan.id +'"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + nowPlan.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
    $('#big-cart-list').prepend(bgItemTemp);
    $('#small-cart-list').prepend(smItemTemp);
    $('.sm-dropdown-item[data-plan-id="'+ nowPlan.id +'"]').click(function(){
        console.log(nowPlan.id);
        window.localStorage.setItem('PlanPageType', nowPlan.id);
    });
    $('.bg-dropdown-item[data-plan-id="'+ nowPlan.id +'"]').click(function(){
        console.log(nowPlan.id);
        window.localStorage.setItem('PlanPageType', nowPlan.id);
    });

    putLocal();
    let TotalCost = 0;
    let allItemArray = JSON.parse(localStorage.getItem('cartItem'));
    for(let i=0;i<allItemArray.length;i++){
        TotalCost = parseInt(TotalCost) + parseInt(allItemArray[i].cost);
    }
    $('.cart-total-cost').text(TotalCost);
    // newObjectGen();
}


function putLocal(){
    console.log(localStorage.getItem('cartItem'));
    let addNewItem =[];

    if(localStorage.getItem('cartItem')!=null){
        let LocalCartPlan = JSON.parse(localStorage.getItem('cartItem'));
        LocalCartPlan.push(nowPlan);
        addNewItem = LocalCartPlan;
    }
    else{
        addNewItem.push(nowPlan);
    }
    localStorage.setItem('cartItem',JSON.stringify(addNewItem));
    console.log(localStorage.getItem('cartItem'));
}
