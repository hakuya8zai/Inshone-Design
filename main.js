$('#header').load('header.html', function(){
    loadAllCartItem();
});
$('#footer').load('footer.html');

class StandardPlan{
    constructor(data){
        this.insertUL = data.cartlist;
        this.id = data.id;
        this.titlename = data.titlename;
        this.timerange = data.timerange;
        this.definition = data.definition;
        this.cost = data.cost;
    }
}


//載入新頁面時，要把舊有資料都 load 一次到 header 的 cart 內
function loadAllCartItem(){
    for(let i=0;i<window.localStorage.length;i++){
        let loadingItem = JSON.parse(window.localStorage[i]);
        let newItemTemp = ('<li><a class="dropdown-item" href="#"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' + loadingItem.titlename + '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>');
        $('#big-cart-list').prepend(newItemTemp);
        $('#small-cart-list').prepend(newItemTemp);    
    }
    let TotalCost = 0;
    for(let i=0;i<window.localStorage.length;i++){
        TotalCost = parseInt(TotalCost) + parseInt(JSON.parse(window.localStorage[i]).cost);
    }
    $('.cart-total-cost').text(TotalCost);
}




