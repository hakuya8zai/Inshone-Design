// 載入此頁時，如果是新的 Plan 則預設勾選不動並建立一個 Object 儲存它，如果是載入特定 Data 則套用 Data 選項
// 變更選項時，同步更新資料到 Object 內，如果為購物車內資料則同步存入 LocalStorage，如果是新 Object 則是等到最終送出才決定
// localStorage.clear();
// StandardPlan.NextId = -1;

// 一進來立刻先動態載入選項
// 形象影片標準方案其中一個選擇 Section 的標題與描述
class SectionDescribe {
  constructor(SectionDes) {
    this.title = SectionDes.title; //演員
    this.moreWord = SectionDes.moreWord; //好的演員如何替內容加分？
    this.moreLink = SectionDes.moreLink; //#Not Done Popup
    this.sectionClass = SectionDes.sectionClass; //actor
  }
}
// 形象影片標準方案的一個選項
class SectionOption {
  constructor(SectionOpt) {
    this.OptCount = SectionOpt.OptCount; //1
    this.sectionClass = SectionOpt.sectionClass; //actor
    this.value = SectionOpt.value; //5000
    this.check = SectionOpt.check; //checked
    this.labelContent = SectionOpt.labelContent; //基本演員
    this.labelCal = SectionOpt.labelCal; //+
    this.labelCost = SectionOpt.labelCost; //5000
  }
}
// 加入燈光 Section
let LightingTitle = new SectionDescribe({
  title: "燈光與攝影設計",
  moreWord: "為什麼需要燈光？",
  moreLink: "#",
  sectionClass: "lighting",
});
newSectionDes(LightingTitle);
let LightingOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "lighting",
  value: "10000",
  check: "checked",
  labelContent: "清晰可見",
  labelCal: "+",
  labelCost: "10000",
});
newSectionOpt(LightingOpt1);
let LightingOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "lighting",
  value: "20000",
  check: "",
  labelContent: "精緻情境",
  labelCal: "+",
  labelCost: "20000",
});
newSectionOpt(LightingOpt2);
let LightingOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "lighting",
  value: "40000",
  check: "",
  labelContent: "電影質感",
  labelCal: "+",
  labelCost: "40000",
});
newSectionOpt(LightingOpt3);
OptionBind(LightingTitle.sectionClass);

// 加入收音 Section
let SoundTitle = new SectionDescribe({
  title: "聲音品質",
  moreWord: "聲音的品質重要嗎？",
  moreLink: "#",
  sectionClass: "sound",
});
newSectionDes(SoundTitle);
let SoundOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "sound",
  value: "0",
  check: "checked",
  labelContent: "專業音效庫素材",
  labelCal: "+",
  labelCost: "0",
});
newSectionOpt(SoundOpt1);
let SoundOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "sound",
  value: "5000",
  check: "",
  labelContent: "聲音清楚可用",
  labelCal: "+",
  labelCost: "5000",
});
newSectionOpt(SoundOpt2);
let SoundOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "sound",
  value: "15000",
  check: "",
  labelContent: "高規格錄音團隊",
  labelCal: "+",
  labelCost: "15000",
});
newSectionOpt(SoundOpt3);
OptionBind(SoundTitle.sectionClass);

// 加入演員 Section
let ActorTitle = new SectionDescribe({
  title: "演員",
  moreWord: "好的演員如何替內容加分？",
  moreLink: "#",
  sectionClass: "actor",
});
newSectionDes(ActorTitle);
let ActorOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "actor",
  value: "0",
  check: "checked",
  labelContent: "無需另聘演員",
  labelCal: "+",
  labelCost: "0",
});
newSectionOpt(ActorOpt1);
let ActorOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "actor",
  value: "15000",
  check: "",
  labelContent: "外型良好演員",
  labelCal: "+",
  labelCost: "15000",
});
newSectionOpt(ActorOpt2);
let ActorOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "actor",
  value: "40000",
  check: "",
  labelContent: "知名演員",
  labelCal: "+",
  labelCost: "40000",
});
newSectionOpt(ActorOpt3);
OptionBind(ActorTitle.sectionClass);

// 加入時間 Section
let TimeTitle = new SectionDescribe({
  title: "影片長度",
  moreWord: "如何判斷需要多長的影片？",
  moreLink: "#",
  sectionClass: "time-range",
});
newSectionDes(TimeTitle);
let TimeOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "time-range",
  value: "1",
  check: "checked",
  labelContent: "一分鐘以內",
  labelCal: "x",
  labelCost: "1",
});
newSectionOpt(TimeOpt1);
let TimeOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "time-range",
  value: "4",
  check: "",
  labelContent: "五分鐘以內",
  labelCal: "x",
  labelCost: "4",
});
newSectionOpt(TimeOpt2);
let TimeOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "time-range",
  value: "7",
  check: "",
  labelContent: "十分鐘以內",
  labelCal: "x",
  labelCost: "7",
});
newSectionOpt(TimeOpt3);
OptionBind(TimeTitle.sectionClass);

//輸入 Section 物件，會根據 Template 生成元件插入 Html
function newSectionDes(SectionDes) {
  let SectionDesTemp =
    '<div class="prject-' +
    SectionDes.sectionClass +
    ' pt-3 mb-3"><h5>' +
    SectionDes.title +
    '</h5><a href="' +
    SectionDes.moreLink +
    '" class="link-light">' +
    SectionDes.moreWord +
    '</a><div id="' +
    SectionDes.sectionClass +
    '-area" class="col-12 d-grid Product-checkout"></div>';
  $(".project-cost-total").before(SectionDesTemp);
}
function newSectionOpt(SectionOpt) {
  let SectionOptionTemp =
    '<input type="radio" class="btn-check" name="' +
    SectionOpt.sectionClass +
    '-options" id="' +
    SectionOpt.sectionClass +
    "-option" +
    SectionOpt.OptCount +
    '" autocomplete="off" value="' +
    SectionOpt.value +
    '" ' +
    SectionOpt.check +
    ' /><label class="btn btn-large btn-outline-light p-3 mt-2" for="' +
    SectionOpt.sectionClass +
    "-option" +
    SectionOpt.OptCount +
    '"><span class="row"><span class="col-6 text-start">' +
    SectionOpt.labelContent +
    '</span><span class="col-6 text-end"><span>' +
    SectionOpt.labelCal +
    '</span><span id="' +
    SectionOpt.sectionClass +
    SectionOpt.OptCount +
    '-cost">' +
    SectionOpt.value +
    "</span></span></span></label>";

  $("#" + SectionOpt.sectionClass + "-area").append(SectionOptionTemp);
}

// 建立完初始選項後，接下來要開始建立初始資料
// 如果是新頁面，要儲存時，建立一個新物件並，獲取現在（html預設）的選項
const PageFrom = window.localStorage.getItem("PlanPageType");
console.log(window.localStorage.getItem("PlanPageType"));
var nowPlan;
if (PageFrom === "new" || PageFrom == null) {
  $("#add-items").click(addItem);
  console.log("From New");
  newObjectGen();
} else {
  $("#add-items").click(saveItem);
  $("#add-items").text("儲存方案");
  console.log("From Old");
  var nowArray = JSON.parse(window.localStorage.getItem("cartItem"));
  nowPlan = nowArray[PageFrom];
  oldDataLoad(PageFrom);
  console.log("PageFrom=" + PageFrom);
}
console.log(nowPlan);
planCost(nowPlan);
// 來自新增，需要新建物件
function newObjectGen() {
  let instPlan = new StandardPlan({
    titlename: $("#standard-name").text(),
    definition: $('input[name="definition-options"]:checked').val(),
    lighting: $('input[name="lighting-options"]:checked').val(),
    sound: $('input[name="sound-options"]:checked').val(),
    actor: $('input[name="actor-options"]:checked').val(),
    timerange: $('input[name="time-range-options"]:checked').val(),
    cost:
      (parseInt($('input[name="definition-options"]:checked').val()) +
        parseInt($('input[name="sound-options"]:checked').val()) +
        parseInt($('input[name="actor-options"]:checked').val()) +
        parseInt($('input[name="lighting-options"]:checked').val())) *
      $('input[name="time-range-options"]:checked').val(),
  });
  console.log("instPlan id =" + instPlan.id);
  nowPlan = instPlan;
  console.log(nowPlan.id);
}

// 來自購物車，不需要新建物件，只需載入舊的 value 值
function oldDataLoad(id) {
  // 載入 localstorage 資料且用 json 方法從 string 轉回陣列
  let loadArray = JSON.parse(localStorage.getItem("cartItem"));
  let loadData;
  // 從陣列中找到某一物件
  for (let i = 0; i < loadArray.length; i++) {
    console.log(loadArray[i].id);
    if (loadArray[i].id == id) {
      console.log("hi");
      loadData = loadArray[i];
    }
  }

  // 載入時改選項
  // 改標題
  $("#standard-name").text(loadData.titlename);
  // 改畫質選項
  let defCheck = $(
    'input[name="definition-options"][value="' + loadData.definition + '"]'
  );
  $(defCheck).attr("checked", "checked");
  // 改燈光選項
  let lightCheck = $(
    'input[name="lighting-options"][value="' + loadData.lighting + '"]'
  );
  $(lightCheck).attr("checked", "checked");
  // 改聲音選項
  let soundCheck = $(
    'input[name="sound-options"][value="' + loadData.sound + '"]'
  );
  $(soundCheck).attr("checked", "checked");
  // 改演員選項
  let actorCheck = $(
    'input[name="actor-options"][value="' + loadData.actor + '"]'
  );
  $(actorCheck).attr("checked", "checked");
  // 改時間選項
  console.log(loadData.timerange);
  let timeCheck = $(
    'input[name="time-range-options"][value="' + loadData.timerange + '"]'
  );
  $(timeCheck).attr("checked", "checked");
  // 改價格
  nowPlan = loadData;
}

function reGetItemInfo() {
  console.log("reGetItemInfo");
  nowPlan.titlename = $("#standard-name").text();
  nowPlan.definition = $('input[name="definition-options"]:checked').val();
  nowPlan.lighting = $('input[name="lighting-options"]:checked').val();
  nowPlan.actor = $('input[name="actor-options"]:checked').val();
  nowPlan.sound = $('input[name="sound-options"]:checked').val();
  nowPlan.timerange = $('input[name="time-range-options"]:checked').val();
  nowPlan.cost =
    (parseInt($('input[name="definition-options"]:checked').val()) +
      parseInt($('input[name="sound-options"]:checked').val()) +
      parseInt($('input[name="actor-options"]:checked').val()) +
      parseInt($('input[name="lighting-options"]:checked').val())) *
    $('input[name="time-range-options"]:checked').val();
}

// 用戶重新選取各按鈕時會重新計算值＆價格
// To Do：選項的價格文字要隨著變化（顯示相對關係）
function OptionBind(opt) {
  $('input[name="' + opt + '-options"]').click(function () {
    reGetItemInfo();
    planCost(nowPlan);
  });
}
$('input[name="definition-options"]').click(function () {
  reGetItemInfo();
  planCost(nowPlan);
});
$('input[name="sound-options"]').click(function () {
  reGetItemInfo();
  planCost(nowPlan);
});
$('input[name="lighting-options"]').click(function () {
  reGetItemInfo();
  planCost(nowPlan);
});

function planCost(variable) {
  console.log(variable);
  $("#plan-cost-int").text(variable.cost);
}

//加入購物車物件，同時寫入新的物件進 localstorage
function addItem() {
  console.log(nowPlan.id);
  let smItemTemp =
    '<li><a class="sm-dropdown-item dropdown-item" href="./shopping-standard.html" data-plan-id="' +
    nowPlan.id +
    '"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' +
    nowPlan.titlename +
    '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>';
  let bgItemTemp =
    '<li><a class="bg-dropdown-item dropdown-item" href="./shopping-standard.html" data-plan-id="' +
    nowPlan.id +
    '"><div class="row"><div class="col-4"><img src="./Image/standard-smImage.jpeg" alt="" /></div><div class="col-8 m-auto"><div class="cartItem-title">' +
    nowPlan.titlename +
    '</div><div class="cartItem-subtitle">形象影片</div></div></div></a></li>';
  $("#big-cart-list").prepend(bgItemTemp);
  $("#small-cart-list").prepend(smItemTemp);
  $('.sm-dropdown-item[data-plan-id="' + nowPlan.id + '"]').click(function () {
    console.log(nowPlan.id);
    window.localStorage.setItem("PlanPageType", nowPlan.id);
  });
  $('.bg-dropdown-item[data-plan-id="' + nowPlan.id + '"]').click(function () {
    console.log(nowPlan.id);
    window.localStorage.setItem("PlanPageType", nowPlan.id);
  });

  putLocal();
  let TotalCost = 0;
  let allItemArray = JSON.parse(localStorage.getItem("cartItem"));
  for (let i = 0; i < allItemArray.length; i++) {
    TotalCost = parseInt(TotalCost) + parseInt(allItemArray[i].cost);
  }
  $(".cart-total-cost").text(TotalCost);
  // newObjectGen();
}
// 儲存方案事件，一樣需更新進 localstorage
function saveItem() {
  console.log("save");
  changeLocal();
  let TotalCost = 0;
  let allItemArray = JSON.parse(localStorage.getItem("cartItem"));
  for (let i = 0; i < allItemArray.length; i++) {
    TotalCost = parseInt(TotalCost) + parseInt(allItemArray[i].cost);
  }
  $(".cart-total-cost").text(TotalCost);
}

function putLocal() {
  console.log(localStorage.getItem("cartItem"));
  let addNewItem = [];

  if (localStorage.getItem("cartItem") != null) {
    let LocalCartPlan = JSON.parse(localStorage.getItem("cartItem"));
    LocalCartPlan.push(nowPlan);
    addNewItem = LocalCartPlan;
  } else {
    addNewItem.push(nowPlan);
  }
  localStorage.setItem("cartItem", JSON.stringify(addNewItem));
  console.log(localStorage.getItem("cartItem"));
}

function changeLocal() {
  if (localStorage.getItem("cartItem") != null) {
    let LocalCartPlan = JSON.parse(localStorage.getItem("cartItem"));
    for (let i = 0; i < LocalCartPlan.length; i++) {
      if (LocalCartPlan[i].id == nowPlan.id) {
        LocalCartPlan[i] = nowPlan;
        console.log(LocalCartPlan[i]);
      }
    }
    window.localStorage.setItem("cartItem", JSON.stringify(LocalCartPlan));
  }
}
