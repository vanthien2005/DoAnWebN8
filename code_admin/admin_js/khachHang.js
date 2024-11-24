let DS_KH = [
  {
    ms_kh: "KH_001",
    hvt: "Nguyễn Văn A",
    tdn: "nva123",
    ndk: "22-08-2024",
    password: "123456789",
    status: true,
  },
  {
    ms_kh: "KH_002",
    hvt: "Nguyễn Văn B",
    tdn: "nvb123",
    ndk: "23-08-2024",
    status: true,
    password: "12345678",
  },
  {
    ms_kh: "KH_003",
    hvt: "Nguyễn Văn C",
    tdn: "nvc123",
    ndk: "24-08-2024",
    status: true,
    password: "123456788",
  },
  {
    ms_kh: "KH_004",
    hvt: "Trần Văn A",
    tdn: "tva123",
    ndk: "26-08-2024",
    status: true,
    password: "123456767",
  },
  {
    ms_kh: "KH_005",
    hvt: "Trần Văn B",
    tdn: "tvb123",
    ndk: "27-08-2024",
    status: true,
    password: "023456789",
  },
  {
    ms_kh: "KH_006",
    hvt: "Trương Văn A",
    tdn: "tva1234",
    ndk: "30-08-2024",
    status: true,
    password: "0123456789",
  },
];

const DS_DC = [
  {
    soNha: "212",
    duong: "Nguyễn Thông",
    phuong_xa: "phường Cô Giang",
    quan_huyen: "Quận Phú Nhuận",
    tp_tinh: "TP HCM",
    maKH: "KH_001",
  },
  {
    soNha: "214",
    duong: "Nguyễn Biểu",
    phuong_xa: "phường Cô Giang",
    quan_huyen: "Quận Bình Thạnh",
    tp_tinh: "TP HCM",
    maKH: "KH_002",
  },
  {
    soNha: "345",
    duong: "Nguyễn Thị Minh Khai",
    phuong_xa: "phường Cô Giang",
    quan_huyen: "Quận 1",
    tp_tinh: "TP HCM",
    maKH: "KH_006",
  },
  {
    soNha: "213",
    duong: "Nguyễn Văn Cừ",
    phuong_xa: "phường Cô Giang",
    quan_huyen: "Quận Tân Bình",
    tp_tinh: "TP HCM",
    maKH: "KH_004",
  },
  {
    soNha: "112",
    duong: "Ngô Quyền",
    phuong_xa: "phường Cô Giang",
    quan_huyen: "Quận 7",
    tp_tinh: "TP HCM",
    maKH: "KH_005",
  },
  {
    soNha: "351",
    duong: "Nguyễn Trãi",
    phuong_xa: "phường Cô Giang",
    quan_huyen: "Quận 11",
    tp_tinh: "TP HCM",
    maKH: "KH_003",
  },
  {
    soNha: "342",
    duong: "An Dương Vương",
    phuong_xa: "phường Cô Giang",
    quan_huyen: "Quận 5",
    tp_tinh: "TP HCM",
    maKH: "KH_006",
  },
  {
    soNha: "201",
    duong: "Hưng Phú",
    phuong_xa: "phường Cô Giang",
    quan_huyen: "Quận 8",
    tp_tinh: "TP HCM",
    maKH: "KH_003",
  },
];
// localStorage.setItem("DS_DC", JSON.stringify(DS_DC));
let ds_dc1 = JSON.parse(localStorage.getItem("address"));
// localStorage.setItem("people", JSON.stringify(DS_KH));
//const ds_KH = JSON.parse(localStorage.getItem("DS_KH"));
// const ds_KH = JSON.parse(localStorage.getItem("people"));
// const KH = JSON.parse(localStorage.getItem("people"));
let ds_kh1 = JSON.parse(localStorage.getItem("people"));
if (JSON.parse(localStorage.getItem("people")) == null) ds_kh1 = [];

let currentPage3 = 1; //Thứ tự của trang
let perPage3 = 5; //Số khách hàng trên trang
let totalPage3; //Tổng số trang
let perKH = [];

function xuatDS_KH() {
  renderPage3();
  handlePage3(1);
}
function renderPage3() {
  //ds_kh1 = JSON.parse(localStorage.getItem("people"));
  totalPage3 = Math.ceil(ds_kh1.length / perPage3);
  let page1 = document.querySelector("#pagination3");
  page1.innerHTML = "";
  for (let i = 1; i <= totalPage3; i++) {
    page1.innerHTML += `<li id="kh_Page_${i}" style="cursor: pointer" onclick="handlePage3(${i})">${i}</li>`;
    console.log();
  }
}
function handlePage3(num) {
  currentPage3 = num;
  //Cắt KH từ mảng ds_kh1
  perKH = ds_kh1.slice(
    (currentPage3 - 1) * perPage3,
    (currentPage3 - 1) * perPage3 + perPage3
  );
  xuatKH();

  //Thực hiện để lúc chọn trang nào thì số trang của nó in đậm nổi bật
  for (let i = 1; i <= totalPage3; i++) {
    let Page_id = "kh_Page_" + i;
    let e = document.getElementById(Page_id);
    console.log(e);
    if (i == num) {
      e.style.color = "#ffff";
      e.style.backgroundColor = "#0f1b07";
    } else {
      e.style.color = "#0f1b07";
      e.style.backgroundColor = "#ffff";
    }
  }
}

function xuatKH() {
  document.querySelector("#h1_kh").innerHTML = "Danh Sách Khách Hàng";
  let s1 = "";
  s1 = `<tr>
    <th align="center">ID</th>
    <th align="center">Họ Và Tên</th>
    <th align="center">Tên Đăng Nhập</th>
    <th align="center">Mật khẩu</th>
    <th align="center">Ngày Đăng Kí</th>
    <th align="center">Trạng thái</th>
    <th align="center" >Tùy chỉnh</th>
    </tr>`;
  if (perKH.length === 0) {
    s1 += `
        <td colspan="7" align="center" style = "width: 60vw">Không có khách hàng nào</td>
        `;
    let e = document.querySelector("#table3");
    e.innerHTML = s1;
  }
  perKH.forEach((i) => {
    s1 += `<tr>
    <td align="center">${i.ms_kh}</td>
    <td align="center">${i.hvt}</td>
    <td align="center">${i.tdn}</td>
    <td align="center">${i.password}</td>
    <td align="center">${i.ndk}</td>
    <td align="center">${i.status ? "mở khóa" : "bị khóa"}</td>
    <td align="center">
    <button id="xoa" class="button1" onclick="xoaKH(${ds_kh1.indexOf(
      i
    )})" >Xoá</button>
    <button id="khoa" class="button1" onclick="khoaNguoiDung(${ds_kh1.indexOf(
      i
    )})">
    ${i.status ? " khóa" : "mở khóa"}</button>
    <button id="sua" class="button1" onclick="suaKH(${ds_kh1.indexOf(
      i
    )})">Sửa</button>
    </tr>`;
  });
  let e1 = document.querySelector("#table3");
  console.log(e1);
  e1.innerHTML = s1;

  //Để display của các content khác là none

  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
  content4.style.display = "none";

  timkiem_KH();
  form_them_kh();
}
function khoaNguoiDung(num) {
  let dskh = JSON.parse(localStorage.getItem("people"));
  let kh = ds_kh1[num];
  let index = dskh.findIndex((tmp) => tmp.ms_kh === kh.ms_kh);
  //let khoa = document.getElementById("khoa");
  if (kh) {
    kh.status = !kh.status;
  }
  xuatKH();
  dskh[index] = kh;
  localStorage.setItem("people", JSON.stringify(dskh));
}
function timkiem_KH() {
  let a = document.querySelector("#timkiemkh");
  a.innerHTML = "";
  a.innerHTML += ` <form action="" id="from_tk">
            <h1 id="head">Tìm kiếm khách hàng</h1>
            
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
               
                id="input"
                placeholder="Nhập tên khách hàng"
              />
            
            <input type="text" id="input1"  placeholder="Nhập tên đăng nhập" />
            <div id="buttom">
              <button type="reset" class="sub">Xóa</button>
              <button type="button" class="sub" onclick="tim()">Tìm</button>
            </div>
          </form>`;
}

//    code tìm kiếm khách hàng ///////////////////////////////////////
function tim() {
  ds_kh1 = JSON.parse(localStorage.getItem("people"));
  let a = document.querySelector("#input").value;
  let b = document.querySelector("#input1").value;
  if (a !== "") {
    ds_kh1 = ds_kh1.filter((value) => {
      return value.hvt.toUpperCase().includes(a.toUpperCase());
    });
  }
  if (b !== "") {
    ds_kh1 = ds_kh1.filter((value) => {
      return value.tdn.toUpperCase().includes(b.toUpperCase());
    });
  }
  xuatDS_KH();
}

////////                   xóa khách hàng                  //////////////////////////////
function xoaKH(num) {
  // let dssp = JSON.parse(localStorage.getItem("product"));
  // let sp = ds_sp[num];
  // let index = dssp.findIndex((tmp) => sp.id === tmp.id);
  let k1 = num;
  let dskh = JSON.parse(localStorage.getItem("people"));
  let khach = ds_kh1[num];
  let index = dskh.findIndex((tmp) => tmp.ms_kh === khach.ms_kh);
  console.log(index);
  if (k1 % perPage3 == 0) k1 += perPage3 / 10;
  if (confirm("Bạn có muốn xoá khách hàng không ?")) {
    dskh.splice(index, 1); //Xoá trên localStorage
    ds_kh1.splice(num, 1); //Xoá trên màn hình hiển thị
  }
  localStorage.setItem("people", JSON.stringify(dskh));
  renderPage3();
  handlePage3(Math.ceil(k1 / perPage3));
}
function form_them_kh() {
  let elm = document.querySelector("#themKH");
  elm.style.backgroundColor = "rgb(179, 178, 178)";
  elm.innerHTML = "";
  elm.innerHTML += `
    <h2 align="center">Thêm Khách hàng</h2>
    <div id="ten_khach_hang">
      <label for="tenkh_them">Tên khách hàng</label> <br>
      <input id="tenkh_them" name="tenkh_them" type="text" placeholder="Nhập tên khách hàng">
    </div>
    <div id="ten_dang_nhap">
      <label for="ten_them">Tên đăng nhập</label> <br>
      <input id="ten_them" name="ten_them" type="text" placeholder="Nhập tên đăng nhập">
    </div>
    <div id="mk">
      <label for="mat_khau">Mật khẩu</label> <br>
      <input id="mat_khau" name="mat_khau" type="password" placeholder="Nhập mật khẩu">
    </div>
    <input type="submit" name="submit" value="Thêm" style="margin-left: 110px; font-size: 16px;border-radius:8px;  cursor: pointer; " onclick="themKH()">
    `;
}

function themKH() {
  let dskh = JSON.parse(localStorage.getItem("people"));
  let tenKH = document.querySelector("#tenkh_them");
  let tenDN = document.querySelector("#ten_them");
  // let ngayDK = document.getElementById("ngay_dang_ki").value;
  let matKhau = document.querySelector("#mat_khau");
  let index = dskh.findIndex((tmp) => tmp.tdn === tenDN.value);
  console.log(index);
  if (tenKH.value == "") {
    alert("Bạn chưa nhập tên khách hàng!");
    tenKH.focus();
    return;
  }
  if (tenDN.value == "") {
    alert("Bạn chưa nhập tên đăng nhập!");
    tenDN.focus();
    return;
  }
  if (matKhau.value == "") {
    alert("Bạn chưa nhập mật khẩu");
    matKhau.focus();
    return;
  }
  if (index !== -1) {
    alert("Tên đăng nhập đã tồn tại. Vui lòng nhập lại!");
    tenDN.select(); //Trùng tên đăng nhập sẽ select() cho nhập lại
    return;
  }

  // if (ngayDK == "") {
  //   alert("Bạn chưa nhập ngày đăng kí!");
  //   ngayDK.focus();
  //}

  let s;
  let len;
  len = ds_kh1.length + 1;
  while (1) {
    s = len.toString();
    if (len < 100) s = `00${len}`;
    let tmp = ds_kh1.filter((value) => {
      return value.ms_kh.includes(s);
    });
    if (tmp.length === 0) break;
    len++;
  }

  idKH = `KH_${s}`;
  const d = new Date();
  const nam = d.getFullYear();
  const thang = d.getMonth() + 1;
  const ngay = d.getDate();
  const ngayDK = `${ngay}-${thang}-${nam}`;
  let kh = {
    ms_kh: idKH,
    hvt: tenKH.value,
    tdn: tenDN.value,
    ndk: ngayDK,
    password: matKhau.value,
    status: true,
  };
  ds_kh1.push(kh);
  dskh.push(kh);

  xuatDS_KH();
  localStorage.setItem("people", JSON.stringify(dskh));
  // console.log(ds_sp);
}

function suaKH(num) {
  let kh = ds_kh1[num];
  let e = document.getElementById("suaKH");
  e.parentElement.style.display = "block";
  e.innerHTML = ``;
  e.innerHTML += `
    <div style="text-align: right">    
      <button id="close_form_sua" onclick="dong_form_sua1()" style="font-size: 30px; border:none; margin: 8px; background-color: rgb(245, 244, 244); cursor: pointer">x</button>
    </div>
    <form id="form_sua" style="font-size:18px; ">
        <label for=""><b>Tên Đăng nhập</b></label>
        <input type="text" id="ten_kh_sua" value="${kh.tdn}"/> <br />
        <label for=""><b>Mật khẩu</b></label>
        <input type="text" id="mk_sua" value="${kh.password}"/> <br />
        <input id="save" type="button" value="Lưu chỉnh sửa" onclick="cap_nhat_kh(${num})"/>
      </form>
    
    `;
}
function cap_nhat_kh(num) {
  let dskh = JSON.parse(localStorage.getItem("people"));
  let kh = ds_kh1[num];
  let index = dskh.findIndex((tmp) => tmp.ms_kh === kh.ms_kh);
  let ten = document.getElementById("ten_kh_sua");
  let mk = document.getElementById("mk_sua");
  if (ten.value === "") {
    alert("Bạn chưa nhập tên đăng nhập!");
    return;
  }
  if (mk.value === "") {
    alert("Bạn chưa nhập mật khẩu!");
    return;
  }

  kh.tdn = ten.value;
  kh.password = mk.value;

  dskh[index] = kh;
  localStorage.setItem("people", JSON.stringify(dskh));
  dong_form_sua1();
  let k = num;
  if (k % perPage == 0) k += perPage / 10;
  handlePage3(Math.ceil(k / perPage));
  renderPage3();
}
function dong_form_sua1() {
  let e = document.getElementById("fake_background5");
  e.style.display = "none";
}
