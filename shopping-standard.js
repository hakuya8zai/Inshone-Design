// 載入此頁時，如果是新的 Plan 則預設勾選不動並建立一個 Object 儲存它，如果是載入特定 Data 則套用 Data 選項
// 變更選項時，同步更新資料到 Object 內，如果為購物車內資料則同步存入 LocalStorage，如果是新 Object 則是等到最終送出才決定
localStorage.clear();
StandardPlan.NextId = -1;

// 如果是新頁面，要儲存時，建立一個新物件並，獲取現在（html預設）的選項
const PageFrom = window.localStorage.getItem('PlanPageType');
console.log(window.localStorage.getItem('PlanPageType'));
var nowPlan;
if(PageFrom === 'new' || PageFrom == null){
    $('#add-items').click(addItem);
    console.log("From New");
    newObjectGen();
}
else{
    $('#add-items').click(saveItem);
    $('#add-items').text('儲存方案');
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
        definition : $('input[name="definition-options"]:checked').val(),
        lighting : $('input[name="lighting-options"]:checked').val(),
        timerange : $('input[name="time-range-options"]:checked').val(),
        cost : (parseInt($('input[name="definition-options"]:checked').val()) + parseInt($('input[name="lighting-options"]:checked').val()))*($('input[name="time-range-options"]:checked').val())
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
    // 改燈光選項 to do
    let lightCheck = $('input[name="lighting-options"][value="'+ loadData.lighting +'"]');
    $(lightCheck).attr('checked','checked');

    // 改時間選項
    console.log(loadData.timerange);
    let timeCheck =  $('input[name="time-range-options"][value="'+ loadData.timerange +'"]');
    $(timeCheck).attr('checked','checked');
    // 改價格
    planCost(loadData);
}

function reGetItemInfo(){
    console.log("reGetItemInfo");
    nowPlan.titlename = $('#standard-name').text();
    nowPlan.definition = $('input[name="definition-options"]:checked').val();
    nowPlan.lighting =$('input[name="lighting-options"]:checked').val(),
    nowPlan.timerange = $('input[name="time-range-options"]:checked').val();
    nowPlan.cost = (parseInt($('input[name="definition-options"]:checked').val())+parseInt($('input[name="lighting-options"]:checked').val()))*($('input[name="time-range-options"]:checked').val());
}


// 用戶重新選取各按鈕時會重新計算值＆價格
// To Do：選項的價格文字要隨著變化（顯示相對關係）
$('input[name="definition-options"]').click(function(){
    reGetItemInfo();
    planCost(nowPlan);
});
$('input[name="time-range-options"]').click(function(){
    reGetItemInfo();
    planCost(nowPlan);
});
$('input[name="lighting-options"]').click(function(){
    reGetItemInfo();
    planCost(nowPlan);
});



function planCost(variable){
    $('#plan-cost-int').text(variable.cost);
}

//加入購物車物件，同時寫入新的物件進 localstorage
function addItem(){
    console.log(nowPlan.id);
    let smItemTemp = ('<li><a class="sm-dropdown-item dropdown-item" href="./shopping-standard.html" data-plan-id="'+ nowPlan.id +'"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + nowPlan.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
    let bgItemTemp = ('<li><a class="bg-dropdown-item dropdown-item" href="./shopping-standard.html" data-plan-id="'+ nowPlan.id +'"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + nowPlan.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
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
// 儲存方案事件，一樣需更新進 localstorage
function saveItem(){
    console.log('save');
    changeLocal();
    let TotalCost = 0;
    let allItemArray = JSON.parse(localStorage.getItem('cartItem'));
    for(let i=0;i<allItemArray.length;i++){
        TotalCost = parseInt(TotalCost) + parseInt(allItemArray[i].cost);
    }
    $('.cart-total-cost').text(TotalCost);
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

function changeLocal(){
    if(localStorage.getItem('cartItem')!=null){
        let LocalCartPlan = JSON.parse(localStorage.getItem('cartItem'));
        for(let i=0;i<LocalCartPlan.length;i++){
            if(LocalCartPlan[i].id == nowPlan.id){
                LocalCartPlan[i] = nowPlan;
                console.log(LocalCartPlan[i]);
            }
        }
        window.localStorage.setItem('cartItem',JSON.stringify(LocalCartPlan));
    }

}