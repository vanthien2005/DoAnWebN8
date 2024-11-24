let ds_dh1 = JSON.parse(localStorage.getItem("DS_DH"));
if (JSON.parse(localStorage.getItem("DS_DH")) == null) ds_dh1 = [];

let ds_kh2 = JSON.parse(localStorage.getItem("people"));
if (JSON.parse(localStorage.getItem("people")) == null) ds_kh2 = [];

let ds_dc2 = JSON.parse(localStorage.getItem("address"));
if (JSON.parse(localStorage.getItem("address")) == null) ds_dc2 = [];

const SanPham = JSON.parse(localStorage.getItem("product"));
let ds_sp1 = JSON.parse(localStorage.getItem("product"));

function kt_date() {
  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  if (!date1.value) {
    alert("vui lòng nhập đầy đủ cả 2 ngày ");
    date1.focus();
    return;
    // date2.focus();
  }
  if (!date2.value) {
    alert("vui lòng nhập đầy đủ cả 2 ngày ");
    // date1.focus();
    date2.focus();
    return;
  }
}
function xuatDS_DT() {
  //             các biến để lấy dữ liệu ngày  //
  ds_dh1 = JSON.parse(localStorage.getItem("DS_DH"));
  if (JSON.parse(localStorage.getItem("DS_DH")) == null) ds_dh1 = [];
  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  // if (!date1.value || !date2.value) {
  //   alert("vui lòng nhập đầy đủ cả 2 ngày ");
  // }
  //////////         chuyển kiểu dữ liệu chuỗi sang dữ liệu ngày         //////////
  let date1obj = new Date(date1.value);
  let date2obj = new Date(date2.value);
  console.log(date1obj);

  if (date1obj > date2obj) {
    alert("bạn nhập không đúng khoảng ngày");
    date1.select();
    // date2.select();
  }
  // console.log(arr);

  // mảng để tìm mặt hàng bán chạy bán ế ////
  let banchaybane = [];

  //  mảng để lọc các đơn hàng đã giao để thống kê doanh thu
  let tk_matHang = [];
  // mảng chi tiết các loại giày ///
  let chitiet_arr = [
    {
      ct: "Giày cỏ nhân tạo",
    },
    {
      ct: "Giày cỏ tự nhiên",
    },
    {
      ct: "Giày bóng đá trẻ em",
    },
    {
      ct: "Quần áo các câu lạc bộ",
    },
    {
      ct: "Quần áo các đội tuyển quốc gia",
    },
    {
      ct: "Quần áo bóng đá trẻ em",
    },
  ];
  let tt = "đã giao hàng";

  for (let i = 0; i < ds_dh1.length; i++) {
    //  tạo mảng cắt chuỗi dữ liệu ngày từ đơn hàng //
    // console.log(ds_dh1[i].ngay);
    if (ds_dh1[i].ngay && typeof ds_dh1[i].ngay === "string") {
      let arr = ds_dh1[i].ngay.split("/");
      // đổi kiểu chuỗi sang kiêu số //
      let date = Number.parseInt(arr[0]);
      let month = Number.parseInt(arr[1]);
      let year = Number.parseInt(arr[2]);
      var tmp = `${year}-${month.toString().padStart(2, "0")}-${date
        .toString()
        .padStart(2, "0")}`;
      //  tạo đối tượng Date //
    }
    let newdate = new Date(tmp);
    //  kiểm tra đơn hàng đã được giao và nằm trong khoảng thời gian thống kê //
    if (
      ds_dh1[i].trangThai.toLowerCase() == tt.toLocaleLowerCase() &&
      newdate.getTime() >= date1obj.getTime() &&
      newdate.getTime() <= date2obj.getTime()
    ) {
      console.log(ds_dh[i]);
      ds_dh1[i].chiTiet.listSP.forEach((j) => {
        // tạo phần tử điều kiện là đã giao hàng
        let tam = {
          ten: j.sp.ten,
          chitietloai: j.sp.chiTietLoai,
          soluonbanra: j.soLuong,
          gia: j.sp.gia,
        };
        // thêm phần tử vào mảng
        tk_matHang.push(tam);
      });
    }
  }

  localStorage.setItem("TKMH", JSON.stringify(tk_matHang)); // đưa mảng lên localstorage
  let tkmh = JSON.parse(localStorage.getItem("TKMH"));
  let h = document.getElementById("h1_dt");
  h.innerHTML = "Thống kê Mặt hàng";
  let b = ` <tr>
              <th>Mặt hàng</th>
              <th>Số lượng bán</th>
              <th>Tổng tiền thu</th>
              <th>Hoá đơn</th>
            </tr>`;

  let sumgiay = 0; // biến tính tổng số lượng mỗi loại
  let sum = 0; // biến tính tổng doanh thu tất cả mặt hàng
  let tongtiengiay = 0; // biến tính tổng doanh thu từng mặt hàng
  chitiet_arr.forEach((k) => {
    tkmh.forEach((i) => {
      if (i.chitietloai == k.ct) {
        sumgiay += i.soluonbanra;
        tongtiengiay += i.soluonbanra * i.gia;
      }
    });
    let bcbe = { ten: k.ct, tien: tongtiengiay };
    banchaybane.push(bcbe);
    let tiengiay = formatCash(tongtiengiay.toString()) + "đ";
    b += ` <tr>
      <td>${k.ct}</td>
      <td>${sumgiay}</td>
      <td>${tiengiay}</td>
      <td>
      <button id="chitiet" class="button1" type="button" onclick="xemHoaDon('${k.ct}')">xem hóa đơn</button>
      </td>
    </tr>`;
    sum += tongtiengiay;
    sumgiay = 0;
    tongtiengiay = 0;
  });

  banchaybane.sort((a, b) => a.tien - b.tien);
  let sumtien = formatCash(sum.toString()) + "đ";

  document.getElementById("table4").innerHTML = b;
  document.getElementById(
    "tongthu"
  ).innerHTML = `<b>Tổng doanh thu tất cả mặt hàng:</b> ${sumtien}`;

  let s1 = `<b>Sản Phẩm bán chạy nhất:</b>`;
  let s2 = `<b>Sản phẩm bán chậm nhất:</b>`;
  if (banchaybane[banchaybane.length - 1].tien > 0) {
    s1 += ` ${banchaybane[banchaybane.length - 1].ten}`;
  }

  document.getElementById("banchay").innerHTML = s1;

  if (banchaybane[banchaybane.length - 1].tien > 0) {
    s2 += `${banchaybane[0].ten}`;
  }

  document.getElementById("bancham").innerHTML = s2;

  let tk_khachHang = [];
  for (let i = 0; i < ds_dh1.length; i++) {
    let arr1 = ds_dh1[i].ngay.split("/");
    let date = Number.parseInt(arr1[0]);
    let month = Number.parseInt(arr1[1]);
    let year = Number.parseInt(arr1[2]);
    let tmp = `${year}-${month.toString().padStart(2, "0")}-${date
      .toString()
      .padStart(2, "0")}`;
    let newdate = new Date(tmp);
    if (
      ds_dh1[i].trangThai.toLowerCase() == tt.toLocaleLowerCase() &&
      newdate.getTime() >= date1obj.getTime() &&
      newdate.getTime() <= date2obj.getTime()
    ) {
      let tkh = timKhachHang(ds_dh1[i].maKH);
      ds_dh1[i].chiTiet.listSP.forEach((j) => {
        let tam1 = { tenKH: tkh.hvt, soluonbanra: j.soLuong, gia: j.sp.gia };
        console.log(tam1);
        tk_khachHang.push(tam1);
      });
    }
  }
  localStorage.setItem("TKKH", JSON.stringify(tk_khachHang));
  let tkkh = JSON.parse(localStorage.getItem("TKKH"));
  //   mảng để sắp xếp khách hàng có doanh thu cao  //////////
  ds_kh2 = JSON.parse(localStorage.getItem("people"));
  if (JSON.parse(localStorage.getItem("people")) == null) ds_kh2 = [];

  let sxkh = [];
  let tongtienqa = 0;
  document.getElementById("h1_dt1").innerHTML = "Thống kê khách hàng";
  let c = `  <tr>
                <th>Khách hàng</th>
                <th>Doanh thu</th>
                <th>Hoá đơn</th>
              </tr>`;
  if (ds_kh2.length === 0) {
    c += `
      <td colspan="3" align="center" style = "width: 100vw">Không có khách hàng  nào</td>
      `;
    let e = document.querySelector("#table5");
    e.innerHTML = c;
  }
  ds_kh2.forEach((i) => {
    tkkh.forEach((j) => {
      if (i.hvt == j.tenKH) {
        tongtienqa += j.soluonbanra * j.gia;
      }
    });
    let kh = { ten: i.hvt, tien: tongtienqa };
    sxkh.push(kh);
    let sumtien1 = formatCash(tongtienqa.toString()) + "đ";
    c += ` <tr>
                <td>${i.hvt}</td>
                <td>${sumtien1}</td>
                <td>
                <button type="button" id="chitiet1" class="button1"  onclick="xemHoaDonKH('${i.ms_kh}')" >xem hóa đơn</button>
                </td>
              </tr>`;
    tongtienqa = 0;
  });
  sxkh.sort((a, b) => b.tien - a.tien);
  document.getElementById("table5").innerHTML = c;
  let s = `Top 5 khách hàng phát sinh doanh thu nhiều nhất:<br/> <br/> `;
  if (sxkh.length < 5) {
    sxkh.forEach((i) => {
      if (i.tien > 0) s += `${i.ten}: ${i.tien} <br/> <br/>`;
    });
  } else {
    for (let i = 0; i < 5; i++) {
      if (sxkh[i].tien > 0) {
        let dd = formatCash(sxkh[i].tien.toString()) + "đ";
        s += `${sxkh[i].ten}: ${dd} <br/> <br/>`;
      }
    }
  }

  document.getElementById("topkh").innerHTML = `<b>${s}</b>`;
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "block";
}
///////////////////////////////////  cho phép xem hóa đơn   /////////////////////////////////
function xemHoaDon(k) {
  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  // if (!date1.value || !date2.value) {
  //   alert("vui lòng nhập đầy đủ cả 2 ngày ");
  // }
  //////////         chuyển kiểu dữ liệu chuỗi sang dữ liệu ngày         //////////
  let date1obj = new Date(date1.value);
  let date2obj = new Date(date2.value);
  console.log(k);
  let array = [];
  let tt = "đã giao hàng";
  console.log();
  ds_dh1.forEach((i) => {
    let arr = i.ngay.split("/");
    // đổi kiểu chuỗi sang kiêu số //
    let date = Number.parseInt(arr[0]);
    let month = Number.parseInt(arr[1]);
    let year = Number.parseInt(arr[2]);
    let tmp = `${year}-${month.toString().padStart(2, "0")}-${date
      .toString()
      .padStart(2, "0")}`;
    //  tạo đối tượng Date //
    let newdate = new Date(tmp);
    if (
      i.trangThai.toLowerCase() == tt.toLowerCase() &&
      newdate >= date1obj &&
      newdate <= date2obj
    ) {
      console.log(i);
      i.chiTiet.listSP.forEach((j) => {
        if (k == j.sp.chiTietLoai) {
          array.push(i);
        }
      });
    }
  });
  console.log(array);
  let fake = document.getElementById("fake_background4");
  let e = document.querySelector("#xemhoadon");
  e.innerHTML = " ";
  e.parentElement.style.display = "block";
  fake.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  console.log(e.parentElement);

  let s = `
    <div style="display: flex; flex-direction: row; justify-content: right">
    <button type="button" onclick="dongHoaDon()">x</button>
    </div>
    <table id="bangphu">
    <tr>
      <th align="center">Mã hóa đơn</th>
      <th align="center">Mã khách hàng</th>
      <th align="center">Ngày</th>
      <th align="center">Tình trạng</th>
      <th align="center">Thanh toán</th>
      <th align="center">Chi tiết</th>
      </tr>`;
  if (array.length === 0) {
    s += `
      <td colspan="6" align="center" style = "width: 100vw">Không có hóa đơn nào</td>
      </table>
      `;
    e.innerHTML = s;
  } else {
    array.forEach((i) => {
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
      let dc_tmp = ds_dc2.find((dc) => dc.maKH === i.maKH);
      console.log(dc_tmp);
      let sDiaChi =
        dc_tmp.soNha +
        " " +
        dc_tmp.duong +
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
        <button type="button" onclick="hienThiChiTietDH_DT('${i.maDH}')">Xem</button>
      </td> 
      </tr>`;
      // console.log(ds_sp.indexOf(i) + "hello");
    });
    s += `</table>`;
    e.innerHTML = s;
  }
}
function dongHoaDon() {
  let e = document.querySelector("#xemhoadon");
  e.parentElement.style.display = "none";
  e.innerHTML = ""; // Xóa nội dung
}
function hienThiChiTietDH_DT(maDH) {
  let e = document.getElementById("xemChiTiet");
  e.parentElement.style.display = "block"; //Fake_background_3
  let dh = ds_dh1.find((tmp) => tmp.maDH === maDH);
  let chitietSP = dh.chiTiet.listSP;
  let diaChi = ds_dc2.find((kh) => kh.maKH === dh.maKH);
  let sDiaChi =
    diaChi.soNha +
    " " +
    diaChi.duong +
    ", " +
    diaChi.quan_huyen +
    ", " +
    diaChi.tp_tinh;
  let s = `
    <div>
      <div style="display:flex; flex-direction: row; justify-content: right"><button id="closeChiTietDH_DT" class="button1" onclick="dong_hienThiChiTietDH_DT()" style="cursor: pointer">x</button></div>
      <h2 align="center">CHI TIẾT HÓA ĐƠN</h2>
    </div>
   
    <table id="table_chiTietDH_DT">
      <tr>
      <th>Mã sản phẩm</th>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
      <th>Số lượng</th>
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

function dong_hienThiChiTietDH_DT() {
  let e = document.getElementById("fake_background6");
  e.style.display = "none";
}
function xemHoaDonKH(k) {
  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  // if (!date1.value || !date2.value) {
  //   alert("vui lòng nhập đầy đủ cả 2 ngày ");
  // }
  //////////         chuyển kiểu dữ liệu chuỗi sang dữ liệu ngày         //////////
  let date1obj = new Date(date1.value);
  let date2obj = new Date(date2.value);
  console.log(k);
  let array = [];
  let tt = "đã giao hàng";
  console.log();
  ds_dh1.forEach((i) => {
    let arr = i.ngay.split("/");
    // đổi kiểu chuỗi sang kiêu số //
    let date = Number.parseInt(arr[0]);
    let month = Number.parseInt(arr[1]);
    let year = Number.parseInt(arr[2]);
    let tmp = `${year}-${month.toString().padStart(2, "0")}-${date
      .toString()
      .padStart(2, "0")}`;
    //  tạo đối tượng Date //
    let newdate = new Date(tmp);
    if (
      i.trangThai.toLowerCase() == tt.toLowerCase() &&
      newdate >= date1obj &&
      newdate <= date2obj &&
      i.maKH == k
    ) {
      array.push(i);
    }
  });
  console.log(array);
  let fake = document.getElementById("fake_background4");
  let e = document.querySelector("#xemhoadon");
  e.innerHTML = " ";
  e.parentElement.style.display = "block";
  fake.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

  let s = `
    <div style="display: flex; flex-direction: row; justify-content: right">
    <button type="button" class="button1" onclick="dongHoaDon()">x</button>
    </div>
    <table id="bangphu">
    <tr>
      <th align="center">Mã hóa đơn</th>
      <th align="center">Mã khách hàng</th>
      <th align="center">Ngày</th>
      <th align="center">Tình trạng</th>
      <th align="center">Thanh toán</th>
      <th align="center">Chi tiết</th>
      </tr>`;
  if (array.length === 0) {
    s += `
      <td colspan="6" align="center" style = "width: 100vw">Không có hóa đơn nào</td>
      </table>
      `;
    e.innerHTML = s;
  } else {
    array.forEach((i) => {
      //Tìm khách hàng theo maKH
      let kh_tmp = timKhachHang(i.maKH);
      //Chuỗi chứa thông tin chi tiết của sản phẩm
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
      let dc_tmp = ds_dc2.find((dc) => dc.maKH === i.maKH);
      console.log(dc_tmp);
      let sDiaChi =
        dc_tmp.soNha +
        " " +
        dc_tmp.duong +
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
        <button type="button" class="button1" onclick="hienThiChiTietDH_DT('${i.maDH}')">Xem</button>
      </td> 
      </tr>`;
      // console.log(ds_sp.indexOf(i) + "hello");
    });
    s += `</table>`;
    e.innerHTML = s;
  }
}
