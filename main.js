$('#header').load('header.html', function(){
    loadAllCartItem();
});
$('#footer').load('footer.html');

class StandardPlan{
    static NextId = localStorage.getItem("NextId") || 0;
    constructor(data){
        this.insertUL = data.cartlist;
        this.id = StandardPlan.NextId++;
        localStorage.setItem('NextId',StandardPlan.NextId);
        this.lighting = data.lighting;
        this.titlename = data.titlename;
        this.timerange = data.timerange;
        this.definition = data.definition;
        this.cost = data.cost;
    }
}


//載入新頁面時，要把舊有資料都 load 一次到 header 的 cart 內
function loadAllCartItem(){
    const LocalCartObject = JSON.parse(window.localStorage.getItem('cartItem'));
    console.log(LocalCartObject);

    if(LocalCartObject!=null){
        console.log('LocalCart!=null');
        for(let i=0;i<LocalCartObject.length;i++){
            let loadingItem = LocalCartObject[i];
            console.log("loadingItem="+loadingItem.id);
    
            let smItemTemp = ('<li><a class="sm-dropdown-item dropdown-item" href="./shopping-standard.html" data-plan-id="'+ loadingItem.id +'"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + loadingItem.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
            let bgItemTemp = ('<li><a class="bg-dropdown-item dropdown-item" href="./shopping-standard.html" data-plan-id="'+ loadingItem.id +'"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + loadingItem.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
            $('#big-cart-list').prepend(bgItemTemp);
            $('#small-cart-list').prepend(smItemTemp);    
            $('.sm-dropdown-item[data-plan-id="'+ loadingItem.id +'"]').click(function(){
                console.log(loadingItem.id);
                window.localStorage.setItem('PlanPageType', loadingItem.id);
            });
            $('.bg-dropdown-item[data-plan-id="'+ loadingItem.id +'"]').click(function(){
                console.log(loadingItem.id);
                window.localStorage.setItem('PlanPageType', loadingItem.id);
            });
    
        }
        let TotalCost = 0;
        for(let i=0;i<LocalCartObject.length;i++){
            TotalCost = parseInt(TotalCost) + parseInt(LocalCartObject[i].cost);
        }
        $('.cart-total-cost').text(TotalCost);    
    }
}
//要搬到形象網站的那個 js 去
$('.new-standard-plan').click(function(){
    window.localStorage.setItem('PlanPageType', 'new');
});





