let LocalCartObject = JSON.parse(localStorage.getItem("cartItem"));
console.log(LocalCartObject);

// 以下是要執行的事情
window.onload = function () {
  console.log("loadOver");
  ChangeCheckOutButton(); //把結帳按鈕改為新增方案按鈕
  RemoveContactFooter(); //把聯絡我們 footer disabled 掉
  $("#GoContact").click(); //預設先打開聯絡我們區塊
};
AddToBagList(); //把購物車的東西列出來

function AddToBagList() {
  if (LocalCartObject != null) {
    let emptyArea = document.getElementById("empty-info");
    emptyArea.remove();
    for (i = 0; i < LocalCartObject.length; i++) {
      let loadingItem = LocalCartObject[i];
      let loadingTemp =
        '<section class="row Bag-items justify-content-center items mb-5" id="BagSection' +
        i +
        '"><div class="left-pic col-6 col-lg-2 mb-3 d-flex justify-content-lg-start justify-content-center align-self-start"><img src="./Image/standard-lgImage.jpg" class="img-fluid" alt="" /></div><div class="col-10 col-lg-6 ps-4"><div class="item-title mt-3 mt-lg-0"><h4><a class="link-dark text-decoration-none" id="BagToEdit' +
        i +
        '" href="./shopping-standard.html">形象影片標準方案</a></h4></div><div class="item-spec pt-md-3 mt-lg-3 mt-xl-4 mt-xxl-5 row d-flex align-self-end"><div class="col-8 ps-0"><button class="btn btn-link p-0 d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBagItem' +
        i +
        '" aria-expanded="false" aria-controls="collapseBagItem' +
        i +
        '">點擊展開詳細規格</button></div><div class="right-cal col-4 d-flex justify-content-end"><div class="item-cost h5 mb-0">NT' +
        loadingItem.cost +
        '</div></div><div class="collapse" id="collapseBagItem' +
        i +
        '"><div class="mt-3"><ul class="px-3"><li>' +
        loadingItem.definitionName +
        "</li><li>" +
        loadingItem.lightingName +
        "</li><li>" +
        loadingItem.soundName +
        "</li><li>" +
        loadingItem.actorName +
        "</li><li>" +
        loadingItem.indoorName +
        "</li><li>" +
        loadingItem.outdoorName +
        "</li><li>" +
        loadingItem.editName +
        "</li><li>" +
        loadingItem.effectName +
        "</li><li>" +
        loadingItem.timerangeName +
        "</li><li>" +
        loadingItem.reviseName +
        "</li><li>" +
        loadingItem.manageName +
        "</li><li>" +
        loadingItem.scriptName +
        '</li></ul></div></div></div></div><div class="col-10 col-lg-8 d-flex justify-content-end pe-4"><div><a class="text-decoration-none" id="BagRemove' +
        i +
        '" href="#">移除</a></div></div><div class="col-10 col-lg-8 d-flex justify-content-end"></div><div class="col-10 col-lg-8 border-bottom mt-4 border-2"></div></section>';
      $("#checkout-btn").before(loadingTemp);
      BindButton(i);
    }
  }
  BindRemoveButton();
  ReCalculate();
}

function BindButton(count) {
  //幫移除按鈕和要移除的 Section 綁定好
  let removeItemID = ("BagSection" + count).toString();
  const removeItem = document.getElementById(removeItemID);
  $("#BagRemove" + count).click(function () {
    console.log("removed");
    DeleteLocalItem(count);
    removeItem.classList.add("fade");
    // 因為 local 資料已刪，所以沒有真的移掉，重整後就會正常，所以先不做 status lock
    setTimeout(() => removeItem.remove(), 350);
  });

  $("#BagToEdit" + count).click(function () {
    window.localStorage.setItem("PlanPageType", LocalCartObject[count].id);
  });
}
function BindRemoveButton() {
  //確認方案後，綁定最後的按鈕要填聯絡資料＆提交
  $("#GoContact").click(function () {
    let ContactSectionTemp = '<div id="ContactSection"></div>';
    $("#checkout-btn").before(ContactSectionTemp);
    $("#ContactSection").load("./contactSection.html");
    $("#checkout-btn").remove();
  });
}

function DeleteLocalItem(count) {
  let localCartArray = JSON.parse(localStorage.getItem("cartItem"));
  let cutlocalCartArray = localCartArray.splice(count, 1);
  console.log(cutlocalCartArray);
  window.localStorage.setItem("cartItem", JSON.stringify(localCartArray));
  ReCalculate();
  loadAllCartItem(); //這 function 會先清空購物車，再全部重新載入一次
}

function ReCalculate() {
  LocalCartObject = JSON.parse(localStorage.getItem("cartItem"));
  let CostText = document.querySelector(".bag-total-cost");
  let CostCount = 0;
  for (let i = 0; i < LocalCartObject.length; i++) {
    CostCount = parseInt(CostCount) + parseInt(LocalCartObject[i].cost);
  }
  $(CostText).text("合計 NT " + CostCount);
}

function ChangeCheckOutButton() {
  let checkoutBtn = document.querySelectorAll(".checkoutBtn");
  for (let i = 0; i < checkoutBtn.length; i++) {
    $(checkoutBtn[i]).text("加入其他方案");
    checkoutBtn[i].href = "./index.html";
  }
}

function RemoveContactFooter() {
  $("#contactFooter").hide();
}
