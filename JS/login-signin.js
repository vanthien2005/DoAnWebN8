var userpeople = [];
var ava = [];
var admin = [];
// show();
// var ad = {
//     acc : "admin1",
//     user : "admin",
//     pass : "123",
//     tele : "0903332665",
//     status: true
// }
// userpeople.push(ad);
// localStorage.setItem("people", JSON.stringify(userpeople));
function createAdmin() {
  var ad = {
    acc: "admin1",
    user: "admin",
    pass: "123",
    tele: "0903332665",
    status: true,
  };
  admin.push(ad);
  localStorage.setItem("admin", JSON.stringify(userpeople));
}
var tmp = JSON.parse(localStorage.getItem("admin"));
if (tmp == null) createAdmin();
// console.log(userpeople.length);

// document.getElementById("P").addEventListener("click", login);
// document.getElementById("K").addEventListener("click", signin);

function signin() {
  event.preventDefault();
  var userpeople = JSON.parse(localStorage.getItem("people"));
  console.log(userpeople);
  var acc = document.getElementById("username").value;
  var user = document.getElementById("user1").value;
  var pass = document.getElementById("password1").value;
  var pass_again = document.getElementById("password_again").value;
  var tele = document.getElementById("telephone").value;
  while (true) {
    if (pass == pass_again) break;
    else {
      alert("Mat khau khong dung\nMoi nhap lai");
      return;
    }
  }
  if (tele.length < 10) {
    alert("Vui long nhap du 10 chu so dien thoai");
    return;
    // tele.select();
  }

  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();
  const p = d + "/" + m + "/" + y;
  if (userpeople != null) {
    for (var i = 0; i < userpeople.length; i++) {
      if (userpeople[i].tdn == user) {
        alert("Tên đăng nhập đã tồn tại!");
        user.select();
        return;
      }
    }
  }
  // let s;
  // let len;
  // len = userpeople.length + 1;
  // while (1) {
  //   s = len.toString();
  //   if (len < 100) s = `00${len}`;
  //   let tmp = userpeople.filter((value) => {
  //     return value.ms_kh.includes(s);
  //   });
  //   if (tmp.length === 0) break;
  //   len++;
  // }

  // let idKH = `KH_${s}`;
  var tmp;
  if (userpeople != null) {
    if (userpeople.length <= 9) tmp = "0" + (userpeople.length + 1).toString();
    else tmp = (userpeople.length + 1).toString();
  } else {
    userpeople = [];
    tmp = "01";
  }
  var mem = {
    ms_kh: "KH_0" + tmp,
    hvt: acc,
    tdn: user,
    password: pass,
    tele: tele,
    status: true,
    ndk: p,
  };
  userpeople.push(mem);
  var json = JSON.stringify(userpeople);
  localStorage.setItem("people", json);
  console.log(userpeople);
  alert("Dang ky thanh cong");
}

function login() {
  event.preventDefault();
  var username = document.getElementById("user").value;
  var pass = document.getElementById("password").value;
  var data = JSON.parse(localStorage.getItem("people"));
  if (JSON.parse(localStorage.getItem("people")) == null) data = [];
  var data1 = JSON.parse(localStorage.getItem("admin"));

  if (data1[0].user == username && data1[0].pass == pass) {
    alert("Chao mung admin");
    window.location.href = "./code_admin/admin.html";
    return true;
  }

  console.log(data1);

  var check = false;

  for (var i = 0; i < data.length; i++) {
    // console.log(data[i]);
    if (username == "") {
      alert("Vui long nhap tai khoan");
      return;
    } else if (pass == "") {
      alert("Vui long nhap mat khau");
      return;
    } else if (data[i].tdn == username && data[i].password == pass) {
      console.log("a");
      if (data[i].status == true) {
        ava.push(data[i]);
        localStorage.setItem("ava", JSON.stringify(ava));
        alert("Chao mung " + data[i].hvt + " den voi website");
        window.location.href = "../DoAnWebGroup8/index.html?";
        return true;
      } else {
        alert("Tài khoản của bạn đã bị khóa");

        window.location.href = "../DoAnWebGroup8/index.html?";
        return;
      }
    }
  }
  if (!check) {
    alert("Tài khoản hoặc mật khẩu của bạn bị sai!");
    return;
  }
}
function display() {
  var url = window.location.href;
  var a = url.split("?");
  if (a[1] == "login") {
    document.getElementsByTagName("main")[1].innerHTML = `
        <div id="login">
        <form id="contain">
            <h2>ĐĂNG NHẬP</h2>
            <input type="text" id="user" placeholder="Tên đăng nhâp">
            <input type="password" id="password" placeholder="Mật khẩu">
            <div id="signin">
                <span>Quên mật khẩu</span>
                <span>
                    <a href="/Bai tap/Login-logout/DoAnWebGroup8/index.html?signin">Đăng ký</a>
                </span>
            </div>
            <div>
                <button type="submit">Đăng ký</button>
            </div>
        </form>
    </div>
    <img class = "imgLogin" src="/DoAnWebGroup8/img_admin/anhtrangchu.jpg">`;
    for (var i = 2; i < 11; i++) {
      document.getElementsByTagName("main")[i].innerHTML = ``;
    }
  } else if (a[1] == "signin") {
    document.getElementsByTagName("main")[1].innerHTML = `
        <div id="login">
        <form id="contain">
            <h2>ĐĂNG NHẬP</h2>
            <input type="text" id="username" placeholder="Tên tài khoản">
            <input type="text" id="user" placeholder="Tên đăng nhâp">
            <div id="ps">
                <input type="password" id="password1" placeholder="Mật khẩu">
                <input type="password" id="password_again" placeholder="Nhập lại mật khẩu">
            </div>
            <input type="tel" id="telephone" placeholder="Số điện thoại">
            <div>
                <button type="submit">Đăng nhập</button>
            </div>
        </form>
    </div>
    <img class = "imgLogin" src="/DoAnWebGroup8/img_admin/anhtrangchu.jpg">`;
    for (var i = 2; i < 11; i++) {
      document.getElementsByTagName("main")[i].innerHTML = ``;
    }
  } else {
    var a = JSON.parse(localStorage.getItem("ava"));
    document.getElementsByClassName("user")[0].innerHTML = `<div id='hello'>
        <div id='a'>${a[0].hvt}</div>
        <button type='button' id='bye' onclick='logout()'>Dang suat</button>
        <button type='button' id='bye1' onclick='view()'>Xem thong tin</button>
        </div>`;
  }
}

function view() {
  document.getElementsByTagName("main")[1].innerHTML = `<div>
        <form>
            <label for="acc">Ten dang nhap</label>
            <input type="text" id="acc">
            <br>
            <label for="user">Ten</label>
            <input type="text" id="user">
            <br>
            <label for="telephone">Dien thoai</label>
            <input type="tel" id="telephone">
            <button type="button" onclick="exit()">Thoat</button>
        </form>
    </div>`;
  for (var i = 2; i < 11; i++) {
    document.getElementsByTagName("main")[i].innerHTML = ``;
  }
  show();
}

function show() {
  var a = JSON.parse(localStorage.getItem("ava"));
  document.getElementById("acc").value = a[0].user;
  document.getElementById("user").value = a[0].acc;
  document.getElementById("telephone").value = a[0].tele;
}

function logout() {
  localStorage.removeItem("ava");
  window.location.href = "../DoAnWebGroup8/index.html?";
}

function exit() {
  window.location.href = "/DoAnWebGroup8/index.html?";
}

function cart() {
  window.location.href = "./Cart/cart.html";
}

window.onload = function () {
  display();
};
