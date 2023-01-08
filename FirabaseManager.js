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

$("#setData").click(function () {
  setData();
  console.log("clicked");
});

// To Do 要存資料，然後送出給 DB
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
  console.log(contactInfo.company);
  // 要塞到亂數的 key 下，才不會被蓋過去
  set(ref(database, contactInfo.name + "-" + newKey), allItem);

  set(
    child(ref(database, contactInfo.name + "-" + newKey), "Info"),
    contactInfo
  );
}
