import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5IsR7ZhgDbEn0Pjm_LBoiPEkwB_zy_l8",
  authDomain: "inshonedesign.firebaseapp.com",
  projectId: "inshonedesign",
  storageBucket: "inshonedesign.appspot.com",
  appId: "1:396640959287:web:ef52118c622deb8267f8b2",
  databaseURL:
    "https://inshonedesign-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

//綁定最終送出按鈕行為
$("#setData").click(function () {
  let requiredInput = document.querySelectorAll("[required]");
  for (let i = 0; i < requiredInput.length; i++) {
    let checkEmpty = requiredInput[i].value;
    if (checkEmpty != "") {
      if (i == requiredInput.length - 1) {
        let checkEmail = document
          .querySelector("#EmailInputFloat")
          .value.toString();
        if (
          checkEmail.includes("@") == true &&
          checkEmail.includes(".com") == true
        ) {
          setData();
          clearContact();
          console.log("clicked");
        } else {
          console.log("emailFail");
          break;
        }
      }
    } else {
      console.log("emptyFail");
      break;
    }
  }
});

// 存資料，然後 set 給 firebase
function setData() {
  // Push api 會自動產生一個 childlocation 和 unique Key，只取它的 unique key assign 給 newKey
  const newKey = push(child(ref(database), "test")).key;
  const allItem = JSON.parse(localStorage.getItem("cartItem"));
  let contactInfo = {
    company: document.querySelector("#CompanyInputFloat").value.toString(),
    name: document.querySelector("#AccountInputFloat").value.toString(),
    email: document.querySelector("#EmailInputFloat").value.toString(),
    phone: document.querySelector("#PhoneInputFloat").value.toString(),
    contactWay:
      document.querySelector("#contactWay").options[
        document.querySelector("#contactWay").value
      ].text,
    startDate: document.querySelector("#startDate").value.toString(),
    endDate: document.querySelector("#endDate").value.toString(),
    comment: document.querySelector("#commentArea").value.toString(),
  };
  // 要塞到亂數的 key 下，才不會被蓋過去
  set(ref(database, contactInfo.name + "-" + newKey), allItem);
  set(
    child(ref(database, contactInfo.name + "-" + newKey), "Info"),
    contactInfo
  );
}

function clearContact() {
  // 再告訴使用者被送出了 ＆ 刷新結帳的前台 & 移除 localstorage
  // 先把後面需要用的名稱和 email 文字存下來
  let userEmail = document.querySelector("#EmailInputFloat").value.toString();
  let user = document.querySelector("#AccountInputFloat").value.toString();
  // 移除標題
  let clearTitle = document.querySelector(".Bag-title");
  clearTitle.remove();
  // 移除方案
  let clearItems = document.querySelectorAll(".Bag-items");
  for (let i = 0; i < clearItems.length; i++) {
    clearItems[i].remove();
  }
  //移除聯絡我們
  let clearContact = document.querySelector("#ContactSection");
  clearContact.remove();
  //新增已送出 hint 和選購更多方案 cta
  let hintTemp =
    '<section class="Empty-info row justify-content-center" id="empty-info"><div class="col-8 p-0 d-flex justify-content-center row"><h3 class="col-12 p-0 d-flex justify-content-center">' +
    user +
    ' 的訂單已成功送出</h3><div class="col-12 p-0 d-flex justify-content-center"><span>可以到' +
    userEmail +
    '查看您的方案明細，我們會盡快和您聯絡</span></div></div><div class="col-10 col-lg-6 d-grid m-1 mt-5 mb-2"><a type="btn" class="btn btn-primary btn-large" href="./service.html">挑選其他方案</a></div></section>';
  $("content").append(hintTemp);
  // 移除 localstorage
  window.localStorage.removeItem("cartItem");
  window.localStorage.setItem("cartItem", JSON.stringify([]));
  ReCalculate();
  //移除 nav 購物車物件
  loadAllCartItem();
}
