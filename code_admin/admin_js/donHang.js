var ds_kh = JSON.parse(localStorage.getItem("people"));
var ds_dc = JSON.parse(localStorage.getItem("DS_DC"));
const DS_DH = [
  {
    maDH: "DH_01",
    ngay: "23/9/2023",
    maKH: "KH_004",
    chiTiet: {
      listSP: [
        {
          sp: ds_sp[1],
          soLuong: 1,
          size: "40",
        },
        {
          sp: ds_sp[30],
          soLuong: 2,
          size: "XL",
        },
      ],
    },
    thanhToan: "Chưa thanh toán",
    trangThai: "Đã hủy",
  },
  {
    maDH: "DH_02",
    ngay: "1/10/2023",
    maKH: "KH_003",
    chiTiet: {
      listSP: [
        {
          sp: ds_sp[10],
          soLuong: 1,
          size: "39",
        },
        {
          sp: ds_sp[25],
          soLuong: 3,
          size: "L",
        },
      ],
    },
    thanhToan: "Chưa thanh toán",
    trangThai: "Đã giao hàng",
  },
  {
    maDH: "DH_03",
    ngay: "5/10/2023",
    maKH: "KH_006",
    chiTiet: {
      listSP: [
        {
          sp: ds_sp[6],
          soLuong: 2,
          size: "41",
        },
        {
          sp: ds_sp[20],
          soLuong: 1,
          size: "XL",
        },
      ],
    },
    thanhToan: "Đã thanh toán",
    trangThai: "Đã xác nhận",
  },
  {
    maDH: "DH_04",
    ngay: "10/10/2023",
    maKH: "KH_002",
    chiTiet: {
      listSP: [
        {
          sp: ds_sp[10],
          soLuong: 1,
          size: "40",
        },
        {
          sp: ds_sp[33],
          soLuong: 2,
          size: "M",
        },
      ],
    },
    thanhToan: "Chưa thanh toán",
    trangThai: "Chưa xử lí",
  },
  {
    maDH: "DH_05",
    ngay: "13/10/2023",
    maKH: "KH_005",
    chiTiet: {
      listSP: [
        {
          sp: ds_sp[19],
          soLuong: 1,
          size: "43",
        },
        {
          sp: ds_sp[31],
          soLuong: 1,
          size: "XXL",
        },
      ],
    },
    thanhToan: "Đã thanh toán",
    trangThai: "Đã hủy",
  },
  {
    maDH: "DH_06",
    ngay: "18/10/2023",
    maKH: "KH_006",
    chiTiet: {
      listSP: [
        {
          sp: ds_sp[16],
          soLuong: 1,
          size: "40",
        },
        {
          sp: ds_sp[22],
          soLuong: 2,
          size: "M",
        },
      ],
    },
    thanhToan: "Đã thanh toán",
    trangThai: "Đã giao hàng",
  },
  {
    maDH: "DH_07",
    ngay: "20/10/2023",
    maKH: "KH_006",
    chiTiet: {
      listSP: [
        {
          sp: ds_sp[14],
          soLuong: 1,
          size: "38",
        },
        {
          sp: ds_sp[28],
          soLuong: 2,
          size: "M",
        },
      ],
    },
    thanhToan: "Đã thanh toán",
    trangThai: "Đã xác nhận",
  },
  {
    maDH: "DH_08",
    ngay: "25/10/2023",
    maKH: "KH_002",
    chiTiet: {
      listSP: [
        {
          sp: ds_sp[0],
          soLuong: 1,
          size: "40",
        },
        {
          sp: ds_sp[11],
          soLuong: 2,
          size: "43",
        },
      ],
    },
    thanhToan: "Đã thanh toán",
    trangThai: "Chưa xử lí",
  },
];
// localStorage.setItem("DS_DH", JSON.stringify(DS_DH));

var ds_dh = JSON.parse(localStorage.getItem("DS_DH"));
if (JSON.parse(localStorage.getItem("DS_DH")) == null) ds_dh = [];
perDH = [];
function xuatDS_DH() {
  renderPage2();
  handlePage2(1);
}

//Danh sách trang
function renderPage2() {
  //Cho số lượng phần tử trên 1 trang
  perPage = 5;
  totalPage = Math.ceil(ds_dh.length / perPage);
  let page = document.querySelector("#pagination2");
  page.innerHTML = "";
  for (let i = 1; i <= totalPage; i++) {
    page.innerHTML += `<li id="dh_Page_${i}" onclick="handlePage2(${i})">${i}</li>`;
  }
}

function handlePage2(num) {
  currentPage = num;
  //Cắt SP từ mảng ds_sp
  perDH = ds_dh.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  xuatDH();

  //Thực hiện để lúc chọn trang nào thì số trang của nó in đậm nổi bật
  for (let i = 1; i <= totalPage; i++) {
    let Page_id = "dh_Page_" + i;
    let e = document.getElementById(Page_id);
    if (i == num) {
      e.style.color = "#ffff";
      e.style.backgroundColor = "#0f1b07";
    } else {
      e.style.color = "#0f1b07";
      e.style.backgroundColor = "#ffff";
    }
  }
}
function hienThiChiTietLoai_them() {
  // console.log("helooooo");
  let loaiSP = document.getElementById("loai_them");
  let chiTietLoaiSP = document.getElementById("chiTietLoai_SP_them");
  let s = ``;
  console.log(loaiSP.value);
  if (loaiSP.value === "Giày") {
    // console.log("helooooo1");     <input type="radio" name="chiTietLoaiSP_them" checked/> Tất cả loại giày <br/>
    s = `
      <input id="ct_loai_them1" type="radio" name="chiTietLoaiSP_them" value="Giày cỏ nhân tạo" checked/> Giày cỏ nhân tạo <br/>
      <input id="ct_loai_them2" type="radio" name="chiTietLoaiSP_them" value="Giày cỏ tự nhiên"/> Giày cỏ tự nhiên <br/>
      <input id="ct_loai_them3" type="radio" name="chiTietLoaiSP_them" value="Giày bóng đá trẻ em"/> Giày bóng đá trẻ em <br/> <br/>
      `;
  } else if (loaiSP.value === "Quần áo") {
    // console.log("helooooo2");    <input type="radio" name="chiTietLoaiSP_them" checked/> Tất cả loại quần áo <br/>
    s = `
      <input id="ct_loai_them1" type="radio" name="chiTietLoaiSP_them" value="Quần áo các câu lạc bộ" checked/> Quần áo các câu lạc bộ <br/>
      <input id="ct_loai_them2" type="radio" name="chiTietLoaiSP_them" value="Quần áo các đội tuyển quốc gia"/> Quần áo các đội tuyển quốc gia <br/>
      <input id="ct_loai_them3" type="radio" name="chiTietLoaiSP_them" value="Quần áo bóng đá trẻ em"/> Quần áo bóng đá trẻ em <br/> <br/>
      `;
  }
  chiTietLoaiSP.innerHTML = s;
}
function hienThiChiTietLoai() {
  // console.log("helooooo");
  let loaiSP = document.getElementById("phan_loai");
  let chiTietLoaiSP = document.getElementById("chiTietLoaiSP");
  let s = ``;
  console.log(loaiSP.value);
  if (loaiSP.value === "Giày") {
    // console.log("helooooo1");
    s = `
      <input type="radio" name="chiTietLoai_SP" value="Tất cả loại giày" checked/> Tất cả loại giày <br/>
      <input id="ct_loai1" type="radio" name="chiTietLoai_SP" value="Giày cỏ nhân tạo"/> Giày cỏ nhân tạo <br/>
      <input id="ct_loai2" type="radio" name="chiTietLoai_SP" value="Giày cỏ tự nhiên"/> Giày cỏ tự nhiên <br/>
      <input id="ct_loai3" type="radio" name="chiTietLoai_SP" value="Giày bóng đá trẻ em"/> Giày bóng đá trẻ em <br/> <br/>
      `;
  } else if (loaiSP.value === "Quần áo") {
    // console.log("helooooo2");
    s = `
      <input type="radio" name="chiTietLoai_SP" value="Tất cả loại quần áo" checked/> Tất cả loại quần áo <br/>
      <input id="ct_loai1" type="radio" name="chiTietLoai_SP" value="Quần áo các câu lạc bộ"/> Quần áo các câu lạc bộ <br/>
      <input id="ct_loai2" type="radio" name="chiTietLoai_SP" value="Quần áo các đội tuyển quốc gia"/> Quần áo các đội tuyển quốc gia <br/>
      <input id="ct_loai3" type="radio" name="chiTietLoai_SP" value="Quần áo bóng đá trẻ em"/> Quần áo bóng đá trẻ em <br/> <br/>
      `;
  }
  chiTietLoaiSP.innerHTML = s;
}
function timKhachHang(ma) {
  let khachHang = ds_kh.find((kh) => kh.ms_kh === ma);
  console.log(ma);
  // console.log(khachHang.ms_kh);
  if (khachHang) return khachHang;
  return null;
}
function xuatDH() {
  let s1 = `Danh sách đơn hàng`;
  document.querySelector("#h1_dh").innerHTML = s1;
  let s = `<tr>
      <th align="center">Mã hóa đơn</th>
      <th align="center">Mã khách hàng</th>
      <th align="center">Ngày</th>
      <th align="center">Tình trạng</th>
      <th align="center">Thanh toán</th>
      <th align="center">Chi tiết</th>
      <th align="center">Tuỳ chỉnh</th>
      </tr>`;
  if (perDH.length === 0) {
    s += `
      <td colspan="7" align="center" style = "width: 100vw">Không có hóa đơn nào</td>
      `;
    let e = document.querySelector("#table2");
    e.innerHTML = s;
  } else {
    perDH.forEach((i) => {
      //Tìm khách hàng theo maKH
      let kh_tmp = timKhachHang(i.maKH);
      //Chuỗi chứ thông tin chi tiết của sản phẩm
      let listSP = ``;
      let sum = 0;
      i.chiTiet.listSP.forEach((j) => {
        console.log(j);
        listSP += `
          * ${j.sp.ten} 
          &nbsp;&nbsp;x${j.soLuong}  <br/>
          Giá: <u>${formatCash(j.sp.gia.toString()) + "đ"}</u> <br/> <br/>
          `;
        // &nbsp giống /t nhưng dùng trong innerHTML
        sum += Number.parseInt(j.sp.gia) * Number.parseInt(j.soLuong);
      });

      //Tính giá tiền
      console.log(sum);
      let tien = formatCash(sum.toString()) + "đ";
      listSP += `<b>Tổng tiền: ${tien}</b>`;

      //Lấy địa chỉ của khách hàng
      let dc_tmp = ds_dc.find((dc) => dc.maKH === i.maKH);
      console.log(dc_tmp);
      let sDiaChi =
        dc_tmp.soNha +
        " " +
        dc_tmp.duong +
        ", " +
        dc_tmp.phuong_xa +
        ", " +
        dc_tmp.quan_huyen +
        ", " +
        dc_tmp.tp_tinh +
        "\n";

      //Đưa thông tin đơn hàng vào chuỗi s để innerHTML ra
      s += `<tr>
      <td align="center">${i.maDH}</td>
      <td align="center">${i.maKH}</td>
      <td align="center">${i.ngay}</td>
      <td align="center">${i.trangThai}</td>
      <td align="center">${i.thanhToan}</td>
      <td align="center">
        <button type="button" onclick="hienThiChiTietDH('${
          i.maDH
        }')">Xem</button>
      </td>
      <td align="center">
      <button id="xoa" onclick="xoaDH(${ds_dh.indexOf(
        i
      )})" style = "cursor: pointer">Xoá</button>
      <button id="chinh_sua" onclick="form_sua_dh(${ds_dh.indexOf(
        i
      )})" style = "cursor: pointer">Sửa</button>
      </tr>`;
      // console.log(ds_sp.indexOf(i) + "hello");
    });

    let e = document.querySelector("#table2");
    e.innerHTML = s;
  }

  //Để display của các content khác là none
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  content4.style.display = "none";

  form_tim_kiem_dh();
}
function hienThiChiTietDH(maDH) {
  let e = document.getElementById("chitietDH");
  e.parentElement.style.display = "block"; //Fake_background_3
  let dh = ds_dh.find((tmp) => tmp.maDH === maDH);
  let chitietSP = dh.chiTiet.listSP;
  let diaChi = ds_dc.find((kh) => kh.maKH === dh.maKH);
  let sDiaChi =
    diaChi.soNha +
    " " +
    diaChi.duong +
    ", " +
    dc_tmp.phuong_xa +
    ", " +
    diaChi.quan_huyen +
    ", " +
    diaChi.tp_tinh;
  let s = `
    <div>
      <div style="display:flex; flex-direction: row; justify-content: right"><button id="closeChiTietDH" onclick="dong_hienThiChiTietDH()" style="font-size: 30px; border:none; margin: 8px; background-color: rgb(245, 244, 244); cursor: pointer">x</button></div>
      <h2 align="center">CHI TIẾT HÓA ĐƠN</h2>
    </div>
   
    <table id="table_chiTietDH">
      <tr>
      <th>Mã sản phẩm</th>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Size</th>
      </tr>
    `;
  let sum = 0;
  chitietSP.forEach((i) => {
    s += `
      <tr>
        <td>${i.sp.id}</td>
        <td>${i.sp.ten}</td>
        <td>${formatCash(i.sp.gia.toString()) + "đ"}</td>
        <td>${i.soLuong}</td>
        <td>${i.size}</td>
      </tr>
      `;
    sum += i.sp.gia * i.soLuong;
  });
  s += `
    </table>
    <div style="text-align: left; margin: auto auto 30px 20px">
        <div style="margin-top: 5px; margin-bottom: 5px"><b>Tổng tiền:</b> ${
          formatCash(sum.toString()) + "đ"
        }</div>
        <div><b>Địa chỉ giao hàng:</b> ${sDiaChi}</div>
    </div>
    `;
  e.innerHTML = s;
}

function dong_hienThiChiTietDH() {
  let e = document.getElementById("fake_background3");
  e.style.display = "none";
}

//////////////////////////////////////////////////////////////HÀM ĐỂ XOÁ SẢN PHẨM///////////////////////////////////////////////////

function xoaDH(num) {
  let dsDH = JSON.parse(localStorage.getItem("DS_DH"));
  let index = dsDH.findIndex((tmp) => tmp.maDH === ds_dh[num].maDH);
  let k = num;
  if (k % perPage == 0) k += perPage / 10;

  if (confirm("Bạn có muốn xoá đơn hàng không ?")) {
    dsDH.splice(index, 1); //Xoá trên màn hình hiển thị
    ds_dh.splice(num, 1); //Xoá trên màn hình hiển thị
  }

  //Cập nhập trên localStorage
  localStorage.setItem("DS_DH", JSON.stringify(dsDH));

  //Xóa xong xuất lại tại trang chứa phần tử mới xóa
  handlePage2(Math.ceil(k / perPage));
  renderPage2();
}

///////////////////////////////////////////////////////////////CODE ĐỂ TÌM KIẾM/////////////////////////////////////////////////////

function form_tim_kiem_dh() {
  let elm = document.querySelector("#timkiemDH");
  elm.style.backgroundColor = "rgb(179, 178, 178)";
  elm.style.width = "320px";
  // elm.style.height = "400px";
  elm.style.marginBottom = "300px";

  elm.innerHTML = "";
  elm.innerHTML += `
    <h2 align="center">Tìm kiếm đơn hàng</h2>
    <div id="maKH_formDH">
      <label for="ma_KH_formDH">Mã khách hàng</label> <br>
      <input id="ma_KH_formDH" name="ma_KH_formDH" type="text" placeholder="Nhập vào mã khách hàng">
    </div>
    
    <div id="ngayDH">
      <label for="ngay_DH_formDH">Lọc theo ngày</label> <br>
      <input name = "ngay_DH_formDH" id = "ngay_DH_formDH" type = "date" />
      <label for="ngay2_DH_formDH">-</label>
      <input name = "ngay2_DH_formDH" id = "ngay2_DH_formDH" type = "date" />
    </div>
  
    <div id="trangThaiDH_formDH">
      <label for="trangThai_DH_formDH">Lọc theo tình trạng</label> <br>
      <select id="trangThai_DH_formDH" name="trangThai_DH_formDH">
        <option value="Chọn">Chọn</option>
        <option value="Chưa xử lí">Chưa xử lí</option>
        <option value="Đã xác nhận">Đã xác nhận</option>
        <option value="Đã giao hàng">Đã giao hàng</option>
        <option value="Đã hủy">Đã hủy</option>
      </select>
    </div>
  
    <div id="thanhToanDH_formDH">
      <label for="thanhToan_DH_formDH">Lọc theo thanh toán</label> <br>
      <select id="thanhToan_DH_formDH" name="thanhToan_DH_formDH">
        <option value="Chọn">Chọn</option>
        <option value="Chưa thanh toán">Chưa thanh toán</option>
        <option value="Đã thanh toán">Đã thanh toán</option>
      </select>
    </div>
  
    <div style="display: flex; flex-direction: row; justify-content: center;">
      <input type="submit" name="submit" value="Tìm kiếm" style="margin: 20px 10px; font-size: 16px; cursor: pointer" onclick="timKiemDH()">
      <input type="button" name="sort" value="Sắp xếp theo quận" style="margin: 20px 10px ; font-size: 16px; cursor: pointer" onclick="sapXepDH()">
    </div>
    `;
}

function timKiemDH() {
  // ds_sp = SP;
  ds_dh = JSON.parse(localStorage.getItem("DS_DH"));
  let maKH = document.querySelector("#ma_KH_formDH").value;
  let ngay = document.getElementById("ngay_DH_formDH").value;
  let ngay2 = document.getElementById("ngay2_DH_formDH").value;
  let trangThai = document.getElementById("trangThai_DH_formDH").value;
  let thanhToan = document.getElementById("thanhToan_DH_formDH").value;

  if (maKH !== "") {
    ds_dh = ds_dh.filter((value) => {
      return value.maKH.toLowerCase().includes(maKH.toLowerCase());
    });
  }
  //Kiểm tra ngày
  if (ngay !== "" && ngay2 !== "") {
    let date1 = new Date(ngay);
    let date2 = new Date(ngay2);
    date1.setHours(0, 0, 0, 0); // Đặt giờ phút giây của ngày bắt đầu về 0
    date2.setHours(23, 59, 59, 999); // Đặt giờ phút giây của ngày kết thúc về cuối ngày
    console.log(date1);
    console.log(date2);
    let ds_dh_tmp = [];
    ds_dh.forEach((i) => {
      let arr = i.ngay.split("/");
      let date = Number.parseInt(arr[0]);
      let month = Number.parseInt(arr[1]);
      let year = Number.parseInt(arr[2]);
      let tmp = new Date(year, month - 1, date);
      console.log(tmp);
      if (date1.getTime() <= tmp.getTime() && tmp.getTime() <= date2.getTime())
        ds_dh_tmp.push(i);
    });
    ds_dh = ds_dh_tmp;
  } else if ((ngay !== "" && ngay2 === "") || (ngay === "" && ngay2 !== "")) {
    alert("Bạn nhập sai ngày!");
    return;
  }

  if (trangThai !== "Chọn") {
    ds_dh = ds_dh.filter((value) => {
      return value.trangThai.toLowerCase().includes(trangThai.toLowerCase());
    });
  }

  if (thanhToan !== "Chọn") {
    ds_dh = ds_dh.filter((value) => {
      return value.thanhToan.toLowerCase().includes(thanhToan.toLowerCase());
    });
  }
  //Tìm xong sẽ xuất danh sách pử trang đầu
  xuatDS_DH();
}
function form_sua_dh(num) {
  let dh = ds_dh[num];
  let e = document.getElementById("suaDH");
  e.parentElement.style.display = "block";
  e.innerHTML = ``;
  e.innerHTML += `
    <div style="text-align: right">    
      <button id="close_form_sua" onclick="dong_form_sua_dh()" style="font-size: 30px; border:none; margin: 8px; background-color: rgb(245, 244, 244)">x</button>
    </div>
    <form id="form_sua" style="font-size:18px; text-align: left">
        <label for=""><b>Địa chỉ giao hàng</b></label> <br/>
        <textarea id="diaChi_sua_hd" style="width: 90%; padding: 5px; resize: none;"></textarea>
   <br />
        <label for="trangThai_dh_sua"><b>Trạng thái</b></label>
        <select id="trangThai_dh_sua" name="trangThai_dh_sua">
          <option id="tt1" value="Chưa xử lí">Chưa xử lí</option>
          <option id="tt2" value="Đã xác nhận">Đã xác nhận</option>
          <option id="tt3" value="Đã giao hàng">Đã giao hàng</option>
          <option id="tt4" value="Đã hủy">Đã hủy</option>
        </select> <br/> <br/>
        <label for=""><b>Thanh toán</b></label>
        <select id="thanhToan_dh_sua">
          <option id="thToan1" value="Chưa thanh toán">Chưa thanh toán</option>
          <option id="thToan2" value="Đã thanh toán">Đã thanh toán</option>
        </select> <br/>
        <input id="save_dh" type="button" value="Lưu chỉnh sửa" onclick="cap_nhat_dh(${num})"/>
      </form>  
    `;
  //Để ngày hiện đúng trên hóa đơn
  // let arr = dh.ngay.split("/");
  // console.log(arr);
  // let date = Number.parseInt(arr[0]);
  // let month = Number.parseInt(arr[1]);
  // let year = Number.parseInt(arr[2]);
  // let tmp = `${year}-${month.toString().padStart(2, "0")}-${date
  //   .toString()
  //   .padStart(2, "0")}`;
  // let setNgay = document.getElementById("ngay_sua_hd");
  // setNgay.value = tmp;
  //Để cho trạng thái hiện đúng trên hóa đơn
  let tt1 = document.getElementById("tt1");
  let tt2 = document.getElementById("tt2");
  let tt3 = document.getElementById("tt3");
  let tt4 = document.getElementById("tt4");
  console.log(tt1.value);
  console.log(dh.trangThai);
  if (dh.trangThai === tt1.value) {
    tt1.outerHTML = `
        <option id="tt1" value="Chưa xử lí" selected>Chưa xử lí</option>
      `;
  } else if (dh.trangThai === tt2.value) {
    tt2.outerHTML = `
        <option id="tt2" value="Đã xác nhận" selected>Đã xác nhận</option>
      `;
  } else if (dh.trangThai === tt3.value) {
    tt3.outerHTML = `
        <option id="tt3" value="Đã giao hàng" selected>Đã giao hàng</option>
      `;
  } else if (dh.trangThai === tt4.value) {
    tt4.outerHTML = `
        <option id="tt4" value="Đã hủy" selected>Đã hủy</option>
      `;
  }

  console.log(dh.thanhToan);
  let thToan1 = document.getElementById("thToan1");
  let thToan2 = document.getElementById("thToan2");
  if (dh.thanhToan === thToan1.value) {
    thToan1.outerHTML = `
        <option id="thToan1" value="Chưa thanh toán" selected>Chưa thanh toán</option>
      `;
  } else if (dh.thanhToan === thToan2.value) {
    thToan2.outerHTML = `
        <option id="thToan2" value="Đã thanh toán" selected>Đã thanh toán</option>
      `;
  }

  ///Để hiển thị đúng địa chỉ giao hàng
  let realDiaChi = ds_dc.find((tmp) => tmp.maKH === dh.maKH);
  let sRealDC =
    realDiaChi.soNha +
    ", " +
    realDiaChi.duong +
    ", " +
    realDiaChi.phuong_xa +
    ", " +
    realDiaChi.quan_huyen +
    ", " +
    realDiaChi.tp_tinh;
  let suaDiaChi = document.getElementById("diaChi_sua_hd");
  suaDiaChi.value = sRealDC;
}

function dong_form_sua_dh() {
  let e = document.getElementById("fake_background2");
  e.style.display = "none";
}

function cap_nhat_dh(num) {
  let dsDH = JSON.parse(localStorage.getItem("DS_DH"));
  let index = dsDH.findIndex((tmp) => tmp.maDH === ds_dh[num].maDH);
  let dh = ds_dh[num];
  // let tenKH = document.getElementById("ten_kh_sua_dh");
  let thanhToan = document.getElementById("thanhToan_dh_sua");
  let trangThai = document.getElementById("trangThai_dh_sua");
  let diaChi = document.getElementById("diaChi_sua_hd");
  let arr = diaChi.value.split(", ");
  console.log("bài 1");
  console.log(diaChi.value);
  console.log(arr);
  let diaChi_DS = ds_dc.find((tmp) => tmp.maKH === dh.maKH);
  diaChi_DS.soNha = arr[0];
  diaChi_DS.duong = arr[1];
  diaChi_DS.phuong_xa = arr[2];
  diaChi_DS.quan_huyen = arr[3];
  diaChi_DS.tp_tinh = arr[4];
  localStorage.setItem("DS_DC", JSON.stringify(ds_dc));
  // console.log(tenKH.value);
  // console.log(ngay.value);
  // console.log(trangThai.value);

  // let tmp = new Date(ngay.value);
  // let day = tmp.getDate();
  // let month = tmp.getMonth() + 1;
  // let year = tmp.getFullYear();
  // let sNgay = `${day}/${month}/${year}`;
  // dh.ngay = sNgay;
  dh.trangThai = trangThai.value;
  dh.thanhToan = thanhToan.value;
  // dh.tenKH = tenKH.value;

  //Đưa ds mới cập nhật lên localStorage
  dsDH[index] = dh;
  localStorage.setItem("DS_DH", JSON.stringify(dsDH));
  // console.log(anh.files);
  dong_form_sua_dh();
  let k = num;
  if (k % perPage == 0) k += perPage / 10;
  handlePage2(Math.ceil(k / perPage));
  renderPage2();
}

//////////////////////////////////////////////////////////Sắp xếp theo quận//////////////////////////////////////////////
function sapXepDH() {
  for (let i = 0; i < ds_dh.length - 1; i++) {
    for (let j = i + 1; j < ds_dh.length; j++) {
      let dc1 = ds_dc.find((dc) => dc.maKH === ds_dh[i].maKH).quan_huyen;
      let dc2 = ds_dc.find((dc) => dc.maKH === ds_dh[j].maKH).quan_huyen;
      if (dc1 > dc2) {
        let tmp = ds_dh[i];
        ds_dh[i] = ds_dh[j];
        ds_dh[j] = tmp;
      }
    }
  }
  xuatDS_DH();
}
