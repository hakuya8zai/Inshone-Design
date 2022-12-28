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
// 加入畫質 Section
let DefinitionTitle = new SectionDescribe({
  title: "需要的影片畫質",
  moreWord: "如何知道我需要的畫質？",
  moreLink: "#",
  sectionClass: "definition",
});
newSectionDes(DefinitionTitle);
let DefinitionOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "definition",
  value: "15000",
  check: "checked",
  labelContent: "標準畫質 1080P HD",
  labelCal: "+",
  labelCost: "15000",
});
newSectionOpt(DefinitionOpt1);
let DefinitionOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "definition",
  value: "25000",
  check: "",
  labelContent: "超高畫質 1440P 2K",
  labelCal: "+",
  labelCost: "20000",
});
newSectionOpt(DefinitionOpt2);
let DefinitionOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "definition",
  value: "40000",
  check: "",
  labelContent: "極限畫質 2160P 4K",
  labelCal: "+",
  labelCost: "40000",
});
newSectionOpt(DefinitionOpt3);
OptionBind(DefinitionTitle.sectionClass);

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
  labelContent: "光線明亮、清晰可見",
  labelCal: "+",
  labelCost: "10000",
});
newSectionOpt(LightingOpt1);
let LightingOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "lighting",
  value: "20000",
  check: "",
  labelContent: "光影設計，精緻情境",
  labelCal: "+",
  labelCost: "20000",
});
newSectionOpt(LightingOpt2);
let LightingOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "lighting",
  value: "40000",
  check: "",
  labelContent: "注重對比，電影質感",
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

// 加入室內 Section
let IndoorTitle = new SectionDescribe({
  title: "室內拍攝",
  moreWord: "如何判斷需要攝影棚？",
  moreLink: "#",
  sectionClass: "indoor",
});
newSectionDes(IndoorTitle);
let IndoorOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "indoor",
  value: "0",
  check: "checked",
  labelContent: "無須另租場地",
  labelCal: "+",
  labelCost: "0",
});
newSectionOpt(IndoorOpt1);
let IndoorOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "indoor",
  value: "5000",
  check: "",
  labelContent: "小攝影棚、室內空間",
  labelCal: "+",
  labelCost: "5000",
});
newSectionOpt(IndoorOpt2);
let IndoorOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "indoor",
  value: "30000",
  check: "",
  labelContent: "大攝影棚、表演、特殊場地",
  labelCal: "+",
  labelCost: "30000",
});
newSectionOpt(IndoorOpt3);
OptionBind(IndoorTitle.sectionClass);

// 加入室外 Section
let OutdoorTitle = new SectionDescribe({
  title: "室外拍攝",
  moreWord: "如何判斷需要外景拍攝？",
  moreLink: "#",
  sectionClass: "outdoor",
});
newSectionDes(OutdoorTitle);
let OutdoorOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "outdoor",
  value: "0",
  check: "checked",
  labelContent: "無須室外拍攝",
  labelCal: "+",
  labelCost: "0",
});
newSectionOpt(OutdoorOpt1);
let OutdoorOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "outdoor",
  value: "3000",
  check: "",
  labelContent: "都會區",
  labelCal: "+",
  labelCost: "3000",
});
newSectionOpt(OutdoorOpt2);
let OutdoorOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "outdoor",
  value: "10000",
  check: "",
  labelContent: "郊區、戶外",
  labelCal: "+",
  labelCost: "10000",
});
newSectionOpt(OutdoorOpt3);
OptionBind(OutdoorTitle.sectionClass);

// 加入後期 Section
let EditTitle = new SectionDescribe({
  title: "後期剪接製作",
  moreWord: "我需要幾版剪接？",
  moreLink: "#",
  sectionClass: "edit",
});
newSectionDes(EditTitle);
let EditOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "edit",
  value: "10000",
  check: "checked",
  labelContent: "兩版剪接、基礎音畫調整、上字幕",
  labelCal: "+",
  labelCost: "10000",
});
newSectionOpt(EditOpt1);
let EditOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "edit",
  value: "16000",
  check: "",
  labelContent: "三版剪接、音畫精細調整、上字幕",
  labelCal: "+",
  labelCost: "16000",
});
newSectionOpt(EditOpt2);
OptionBind(EditTitle.sectionClass);

// 加入特效 Section
let EffectTitle = new SectionDescribe({
  title: "特效製作",
  moreWord: "真的需要特效嗎？",
  moreLink: "#",
  sectionClass: "effect",
});
newSectionDes(EffectTitle);
let EffectOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "effect",
  value: "0",
  check: "checked",
  labelContent: "無須特效",
  labelCal: "+",
  labelCost: "0",
});
newSectionOpt(EffectOpt1);
let EffectOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "effect",
  value: "4000",
  check: "",
  labelContent: "字卡、轉場、模板設計",
  labelCal: "+",
  labelCost: "4000",
});
newSectionOpt(EffectOpt2);
let EffectOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "effect",
  value: "10000",
  check: "",
  labelContent: "字卡、轉場、模板設計、合成綠幕、粒子特效",
  labelCal: "+",
  labelCost: "10000",
});
newSectionOpt(EffectOpt3);
OptionBind(EffectTitle.sectionClass);

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

// 加入修改 Section
let ReviseTitle = new SectionDescribe({
  title: "定版後修改次數",
  moreWord: "為何修改次數有限制？",
  moreLink: "#",
  sectionClass: "revise",
});
newSectionDes(ReviseTitle);
let ReviseOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "revise",
  value: "0",
  check: "checked",
  labelContent: "免費兩次修改",
  labelCal: "+",
  labelCost: "0",
});
newSectionOpt(ReviseOpt1);
let ReviseOpt2 = new SectionOption({
  OptCount: "2",
  sectionClass: "revise",
  value: "3000",
  check: "",
  labelContent: "升級至三次修改",
  labelCal: "+",
  labelCost: "3000",
});
newSectionOpt(ReviseOpt2);
let ReviseOpt3 = new SectionOption({
  OptCount: "3",
  sectionClass: "revise",
  value: "10000",
  check: "",
  labelContent: "最高五次修改",
  labelCal: "+",
  labelCost: "10000",
});
newSectionOpt(ReviseOpt3);
OptionBind(ReviseTitle.sectionClass);

// 加入專案 Section
let ManageTitle = new SectionDescribe({
  title: "專案管理與溝通協調",
  moreWord: "為何需要管理與溝通人員？",
  moreLink: "#",
  sectionClass: "manage",
});
newSectionDes(ManageTitle);
let ManageOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "manage",
  value: "6000",
  check: "checked",
  labelContent: "專員一位",
  labelCal: "+",
  labelCost: "6000",
});
newSectionOpt(ManageOpt1);
OptionBind(ManageTitle.sectionClass);

// 加入劇本 Section
let ScriptTitle = new SectionDescribe({
  title: "專案管理與溝通協調",
  moreWord: "為何需要管理與溝通人員？",
  moreLink: "#",
  sectionClass: "script",
});
newSectionDes(ScriptTitle);
let ScriptOpt1 = new SectionOption({
  OptCount: "1",
  sectionClass: "script",
  value: "8000",
  check: "checked",
  labelContent: "執行劇本一份",
  labelCal: "+",
  labelCost: "8000",
});
newSectionOpt(ScriptOpt1);
OptionBind(ScriptTitle.sectionClass);

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
    '"><span class="row"><span class="col-8 text-start">' +
    SectionOpt.labelContent +
    '</span><span class="col-4 text-end"><span>' +
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
var nowPlan = new StandardPlan();
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
  reGetItemInfo(nowPlan);
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
  // 改室內選項
  let indoorCheck = $(
    'input[name="indoor-options"][value="' + loadData.indoor + '"]'
  );
  $(indoorCheck).attr("checked", "checked");
  // 改室外選項
  let outdoorCheck = $(
    'input[name="outdoor-options"][value="' + loadData.outdoor + '"]'
  );
  $(outdoorCheck).attr("checked", "checked");
  // 改後製選項
  let editCheck = $(
    'input[name="edit-options"][value="' + loadData.edit + '"]'
  );
  $(editCheck).attr("checked", "checked");
  // 改特效選項
  let effectCheck = $(
    'input[name="effect-options"][value="' + loadData.effect + '"]'
  );
  $(effectCheck).attr("checked", "checked");
  // 改時間選項
  let timeCheck = $(
    'input[name="time-range-options"][value="' + loadData.timerange + '"]'
  );
  $(timeCheck).attr("checked", "checked");
  // 改修改選項
  let reviseCheck = $(
    'input[name="revise-options"][value="' + loadData.revise + '"]'
  );
  $(reviseCheck).attr("checked", "checked");

  // 管理和劇本只有單選，故先不需改
  // 改價格
  nowPlan = loadData;
}

function reGetItemInfo(regetPlan) {
  console.log("reGetItemInfo");
  regetPlan.titlename = $("#standard-name").text();
  regetPlan.definition = $('input[name="definition-options"]:checked').val();
  regetPlan.lighting = $('input[name="lighting-options"]:checked').val();
  regetPlan.actor = $('input[name="actor-options"]:checked').val();
  regetPlan.sound = $('input[name="sound-options"]:checked').val();
  regetPlan.indoor = $('input[name="indoor-options"]:checked').val();
  regetPlan.outdoor = $('input[name="outdoor-options"]:checked').val();
  regetPlan.edit = $('input[name="edit-options"]:checked').val();
  regetPlan.effect = $('input[name="effect-options"]:checked').val();
  regetPlan.timerange = $('input[name="time-range-options"]:checked').val();
  regetPlan.revise = $('input[name="revise-options"]:checked').val();
  regetPlan.manage = $('input[name="manage-options"]:checked').val();
  regetPlan.script = $('input[name="script-options"]:checked').val();
  regetPlan.cost =
    (parseInt($('input[name="definition-options"]:checked').val()) +
      parseInt($('input[name="sound-options"]:checked').val()) +
      parseInt($('input[name="actor-options"]:checked').val()) +
      parseInt($('input[name="indoor-options"]:checked').val()) +
      parseInt($('input[name="outdoor-options"]:checked').val()) +
      parseInt($('input[name="edit-options"]:checked').val()) +
      parseInt($('input[name="effect-options"]:checked').val()) +
      parseInt($('input[name="lighting-options"]:checked').val())) *
      parseInt($('input[name="time-range-options"]:checked').val()) +
    parseInt($('input[name="revise-options"]:checked').val()) +
    parseInt($('input[name="manage-options"]:checked').val()) +
    parseInt($('input[name="script-options"]:checked').val());
  getName(regetPlan);
}

// 用戶重新選取各按鈕時會重新計算值＆價格
// To Do：選項的價格文字要隨著變化（顯示相對關係）
function OptionBind(opt) {
  $('input[name="' + opt + '-options"]').click(function () {
    reGetItemInfo(nowPlan);
    planCost(nowPlan);
  });
}

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
}

// 在要儲存進 localstorage 的時候再存選項的名稱進物件內
function getName(PlanName) {
  let defId = $('input[name="definition-options"]:checked').attr("id");
  PlanName.definitionName = eval(
    "DefinitionOpt" + defId.slice(-1)
  ).labelContent;
  let lightId = $('input[name="lighting-options"]:checked').attr("id");
  PlanName.lightingName = eval("LightingOpt" + lightId.slice(-1)).labelContent;
  let soundId = $('input[name="sound-options"]:checked').attr("id");
  PlanName.soundName = eval("SoundOpt" + soundId.slice(-1)).labelContent;
  let actorId = $('input[name="actor-options"]:checked').attr("id");
  PlanName.actorName = eval("ActorOpt" + actorId.slice(-1)).labelContent;
  let indoorId = $('input[name="indoor-options"]:checked').attr("id");
  PlanName.indoorName = eval("IndoorOpt" + indoorId.slice(-1)).labelContent;
  let outdoorId = $('input[name="outdoor-options"]:checked').attr("id");
  PlanName.outdoorName = eval("OutdoorOpt" + outdoorId.slice(-1)).labelContent;
  let editId = $('input[name="edit-options"]:checked').attr("id");
  PlanName.editName = eval("EditOpt" + editId.slice(-1)).labelContent;
  let effectId = $('input[name="effect-options"]:checked').attr("id");
  PlanName.effectName = eval("EffectOpt" + effectId.slice(-1)).labelContent;
  let reviseId = $('input[name="revise-options"]:checked').attr("id");
  PlanName.reviseName = eval("ReviseOpt" + reviseId.slice(-1)).labelContent;
  let manageId = $('input[name="manage-options"]:checked').attr("id");
  PlanName.manageName = eval("ManageOpt" + manageId.slice(-1)).labelContent;
  let scriptId = $('input[name="script-options"]:checked').attr("id");
  PlanName.scriptName = eval("ScriptOpt" + scriptId.slice(-1)).labelContent;
  let timerangeId = $('input[name="time-range-options"]:checked').attr("id");
  PlanName.timerangeName = eval("TimeOpt" + timerangeId.slice(-1)).labelContent;
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

var a = 0;
if (a == 0) {
  let a = 1;
  console.log("a2=" + a);
}
console.log("a3=" + a);
