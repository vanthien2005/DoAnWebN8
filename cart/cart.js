createProduct();
createDonHang();
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
// localStorage.setItem("people", JSON.stringify(DS_KH));

let ava = JSON.parse(localStorage.getItem("ava"));
let user = ava[0];
// let user = DS_KH[2];
function test() {
  var productArray = JSON.parse(localStorage.getItem("product"));
  // console.log(productArray[0].id);
  addToCart(productArray[0].id);
  addToCart(productArray[1].id);
  addToCart(productArray[2].id);
  addToCart(productArray[29].id);
}
// test();
showCartTable();
//createAdmin();

function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
/* ------------------------------DON HANG--------------------------------*/
function createDonHang() {
  if (localStorage.getItem("donHang") === null) {
    // Data của đơn hàng
    let ds_sp = JSON.parse(localStorage.getItem("product"));
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
    localStorage.setItem("DS_DH", JSON.stringify(DS_DH));
  }
}
function addtoDonHang() {}
/* -------------------------------Product------------------------------- */

function createProduct() {
  if (localStorage.getItem("product") === null) {
    // Data của sản phẩm
    const LCS_SP = [
      {
        id: "SP_01",
        ten: "Nike Zoovapor 15 Academy Tf - Hồng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_01/giay1.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_01/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_01/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_01/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_01/anh5.png",
        gia: 1565000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Nike",
      },
      {
        id: "SP_02",
        ten: "Nike Zoom Mercurial Superfly 9 Academy Km Tf - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_02/giay2.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_02/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_02/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_02/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_02/anh5.png",
        gia: 1859000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Nike",
      },
      {
        id: "SP_03",
        ten: "Nike Phantom Gx Academy Tf - Xám",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_03/giay3.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_03/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_03/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_03/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_03/anh5.png",
        gia: 1565000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Nike",
      },
      {
        id: "SP_04",
        ten: "Nike Zoom Superfly 9 Academy Firmground Fg - Xanh Mint",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_04/giay4.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_04/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_04/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_04/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_04/anh5.png",
        gia: 1763000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ tự nhiên",
        thuonghieu: "Nike",
      },
      {
        id: "SP_05",
        ten: "Nike Zoom Superfly 10 Academy Tf - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_05/giay5.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_05/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_05/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_05/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_05/anh5.png",
        gia: 3059000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Nike",
      },
      {
        id: "SP_06",
        ten: "Unisex Adidas Copa Pure 2 League Tf - Đen",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_06/giay6.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_06/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_06/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_06/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_06/anh5.png",
        gia: 2100000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_07",
        ten: "Adidas X Crazyfast Elite Fg - Vàng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_07/giay7.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_07/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_07/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_07/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_07/anh5.png",
        gia: 3480000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ tự nhiên",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_08",
        ten: "Unisex Adidas Predator Elite Tf - Đen",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_08/giay8.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_08/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_08/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_08/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_08/anh5.png",
        gia: 2450000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_09",
        ten: "Unisex Adidas Copa Pure 2 Club Tf - Trắng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_09/giay9.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_09/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_09/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_09/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_09/anh5.png",
        gia: 1050000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_10",
        ten: "Unisex Adidas Predator League Tf - Hồng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_10/giay10.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_10/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_10/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_10/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_10/anh5.png",
        gia: 2400000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_11",
        ten: "Adidas Predator League Turf Tf - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_11/giay11.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_11/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_11/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_11/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_11/anh5.png",
        gia: 1222000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_12",
        ten: "Adidas Predator League Fg - Đen",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_12/giay12.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_12/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_12/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_12/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_12/anh5.png",
        gia: 1700000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_13",
        ten: "Nike Jr Legend 10 Club Fg - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_13/giay13.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_13/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_13/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_13/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_13/anh5.png",
        gia: 1289000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Nike",
      },
      {
        id: "SP_14",
        ten: "Nike Jr Zoom Mercurial Superfly 9 Academy Fg - Xám",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_14/giay14.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_14/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_14/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_14/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_14/anh5.png",
        gia: 1413000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Nike",
      },
      {
        id: "SP_15",
        ten: "Adidas X Crazyfast League Tf - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_15/giay15.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_15/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_15/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_15/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_15/anh5.png",
        gia: 1222000,
        loai: "Giày",
        chiTietLoai: "Giày bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_16",
        ten: "Puma Future Match TT Tf - Trắng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_16/giay16.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_16/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_16/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_16/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_16/anh5.png",
        gia: 799000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_17",
        ten: "Puma Future Ultimate Cage Tf - Vàng Xanh",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_17/giay17.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_17/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_17/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_17/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_17/anh5.png",
        gia: 1099000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_18",
        ten: "Puma Ultra Ultimate Energy Tf - Hồng Xanh",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_18/giay18.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_18/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_18/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_18/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_18/anh5.png",
        gia: 1099000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_19",
        ten: "Puma Ultra Ultimate Cage TT Tf - Vàng Gold",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_19/giay19.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_19/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_19/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_19/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_19/anh5.png",
        gia: 1099000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_20",
        ten: "Puma Ultra Ultimate Cage Tf - Tím đen",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_20/giay20.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_20/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_20/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_20/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_20/anh5.png",
        gia: 1099000,
        loai: "Giày",
        chiTietLoai: "Giày cỏ nhân tạo",
        thuonghieu: "Puma",
      },
      {
        id: "SP_21",
        ten: "Áo Adidas Arsenal - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_21/ao21.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_21/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_21/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_21/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_21/anh5.png",
        gia: 1980000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_22",
        ten: "Áo Adidas Real Madrid - Trắng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_22/ao22.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_22/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_22/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_22/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_22/anh5.png",
        gia: 3000000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_23",
        ten: "Áo Nike Liverpool FC - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_23/ao23.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_23/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_23/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_23/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_23/anh5.png",
        gia: 2276000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Nike",
      },
      {
        id: "SP_24",
        ten: "Áo Nike Paris Saint-Germain - Xanh Navy",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_24/ao24.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_24/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_24/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_24/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_24/anh5.png",
        gia: 3500000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Nike",
      },
      {
        id: "SP_25",
        ten: "Áo Adidas Manchester United - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_25/ao25.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_25/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_25/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_25/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_25/anh5.png",
        gia: 3000000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các câu lạc bộ",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_26",
        ten: "Áo Adidas Spain - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_26/ao26.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_26/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_26/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_26/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_26/anh5.png",
        gia: 1581000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_27",
        ten: "Áo Adidas Germany - Hồng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_27/ao27.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_27/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_27/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_27/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_27/anh5.png",
        gia: 1581000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_28",
        ten: "Áo Adidas Italy - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_28/ao28.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_28/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_28/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_28/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_28/anh5.png",
        gia: 1581000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_29",
        ten: "Áo Adidas Argentina - Xanh Dương",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_29/ao29.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_29/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_29/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_29/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_29/anh5.png",
        gia: 1581000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_30",
        ten: "Áo Nike England - Xám Than",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_30/ao30.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_30/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_30/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_30/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_30/anh5.png",
        gia: 1990000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo các đội tuyển quốc gia",
        thuonghieu: "Nike",
      },
      {
        id: "SP_31",
        ten: "Áo Adidas Manchester United - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_31/ao31.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_31/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_31/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_31/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_31/anh5.png",
        gia: 1500000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_32",
        ten: "Áo Adidas Real Madrid - Trắng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_32/ao32.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_32/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_32/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_32/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_32/anh5.png",
        gia: 1500000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_33",
        ten: "Áo Adidas Arsenal - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_33/ao33.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_33/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_33/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_33/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_33/anh5.png",
        gia: 1500000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
      {
        id: "SP_34",
        ten: "Áo Nike Fc Barcelona - Vàng",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_34/ao34.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_34/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_34/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_34/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_34/anh5.png",
        gia: 1370000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Nike",
      },
      {
        id: "SP_35",
        ten: "Áo Adidas Spain - Đỏ",
        anh1: "./img_admin/img_product/chiTietAnhSP/SP_35/ao35.png",
        anh2: "./img_admin/img_product/chiTietAnhSP/SP_35/anh2.png",
        anh3: "./img_admin/img_product/chiTietAnhSP/SP_35/anh3.png",
        anh4: "./img_admin/img_product/chiTietAnhSP/SP_35/anh4.png",
        anh5: "./img_admin/img_product/chiTietAnhSP/SP_35/anh5.png",
        gia: 1370000,
        loai: "Quần Áo",
        chiTietLoai: "Quần áo bóng đá trẻ em",
        thuonghieu: "Adidas",
      },
    ];
    localStorage.setItem("product", JSON.stringify(LCS_SP));
  }
}

/* -----------------------------------Cart------------------------------------- */

// function addToCart(productId) {
//   var size = document.querySelector("#sizeSP").value;
//   // var quantity = document.getElementById("quantity").value;
//   var quantity = 1;
//   var sizeAo = "L";
//   var sizeGiay = "38";
//   var productArray = JSON.parse(localStorage.getItem("product"));
//   var productTemp;
//   for (var i = 0; i < productArray.length; i++) {
//     if (productArray[i].id == productId) {
//       productTemp = productArray[i];
//     }
//   }
//   if (localStorage.getItem("cart") === null) {
//     var cartArray = [];
//     //productTemp.size = size;
//     productTemp.quantity = quantity;
//     productTemp.totalPrice = productTemp.quantity * productTemp.gia;
//     if (productTemp.loai == "Quần Áo") productTemp.size = sizeAo;
//     else if (productTemp.loai == "Giày") productTemp.size = sizeGiay;
//     cartArray.unshift(productTemp);
//     localStorage.setItem("cart", JSON.stringify(cartArray));
//   } else {
//     var cartArray = JSON.parse(localStorage.getItem("cart"));
//     var check = false;
//     for (var i = 0; i < cartArray.length; i++) {
//       if (cartArray[i].id == productTemp.id) {
//         cartArray[i].quantity += quantity;
//         check = true;
//       }
//     }
//     if (!check) {
//       productTemp.quantity = quantity;
//       // productTemp.size = size;
//       productTemp.totalPrice = quantity * productTemp.gia;
//       cartArray.unshift(productTemp);
//     }
//     localStorage.setItem("cart", JSON.stringify(cartArray));
//   }
//   //closeProductInfo();
// }
function deleteCartItem(productId) {
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].id == productId) {
      cartArray.splice(i, 1);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartArray));
  showCartTable();
}
function deleteCart() {
  localStorage.removeItem("cart");
  showCartTable();
}
function showCartTable() {
  if (
    localStorage.getItem("cart") === null ||
    localStorage.getItem("cart") == "[]"
  ) {
    var cartTableHtml = `<div id="empty-cart-items"><p class="empty-cart-message">Không có sản phẩm nào trong giỏ hàng</p></div>`;
    document.getElementById("cart-items").outerHTML = cartTableHtml;
    document.getElementById("total-payment").innerHTML = 0;
  } else {
    var cartArray = JSON.parse(localStorage.getItem("cart"));
    var totalPayment = 0;
    var cartTableHtml = ``;
    for (var i = 0; i < cartArray.length; i++) {
      console.log(cartArray[i].id);
      console.log("122312231232");
      console.log(cartArray[i].size);
      cartTableHtml += `
          <img src=".${cartArray[i].anh1}">
          <div>${cartArray[i].ten}</div>
          <div>${formatCash(cartArray[i].gia.toString())} VND</div>
          <input type="number" min="1" value="${
            cartArray[i].quantity
          }" onchange="updateCart(this.value, '${cartArray[i].id}')">
      `;
      if (cartArray[i].loai == "Quần Áo") {
        cartTableHtml += `
        <select id="sizeSP" onchange="updateSize(this.value,${
          cartArray[i].id
        })">
            <option value="S" ${
              cartArray[i].size === "S" ? "selected" : ""
            }>S</option>
            <option value="M" ${
              cartArray[i].size === "M" ? "selected" : ""
            }>M</option>
            <option value="L" ${
              cartArray[i].size === "L" ? "selected" : ""
            }>L</option>
            <option value="XL" ${
              cartArray[i].size === "XL" ? "selected" : ""
            }>XL</option>
            <option value="XXL" ${
              cartArray[i].size === "XXL" ? "selected" : ""
            }>XXL</option>
          </select>`;
      } else if (cartArray[i].loai == "Giày") {
        cartTableHtml += `
        <select id="sizeSP" onchange="updateSize(this.value,${
          cartArray[i].id
        })">
        <option value="37" ${
          cartArray[i].size === "37" ? "selected" : ""
        }>37</option>
            <option value="38" ${
              cartArray[i].size === "38" ? "selected" : ""
            }>38</option>
            <option value="39" ${
              cartArray[i].size === "39" ? "selected" : ""
            }>39</option>
            <option value="40" ${
              cartArray[i].size === "40" ? "selected" : ""
            }>40</option>
            <option value="41" ${
              cartArray[i].size === "41" ? "selected" : ""
            }>41</option>
            <option value="42" ${
              cartArray[i].size === "42" ? "selected" : ""
            }>42</option>
            <option value="43" ${
              cartArray[i].size === "43" ? "selected" : ""
            }>43</option>
            <option value="44" ${
              cartArray[i].size === "44" ? "selected" : ""
            }>44</option>
          </select>`;
      }
      cartTableHtml += `
      <div>${formatCash(cartArray[i].totalPrice.toString())} VND</div>
          <button onclick="deleteCartItem('${cartArray[i].id}')">Xóa</button>`;
      totalPayment += cartArray[i].totalPrice;
    }
    document.getElementById("cart-items").innerHTML = cartTableHtml;
    document.getElementById("total-payment").innerHTML = formatCash(
      totalPayment.toString()
    );
  }
}

function updateCart(quantity, id) {
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].id == id) {
      cartArray[i].quantity = quantity;
      cartArray[i].totalPrice = cartArray[i].quantity * cartArray[i].gia;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartArray));
  // showCartTable();
}

function updateSize(size, id) {
  console.log(size + " " + id);
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].id == id) {
      cartArray[i].size = size;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartArray));
  // showCartTable();
}

function buy1() {
  if (localStorage.getItem("people") === null) {
    customAlert("Bạn phải đăng nhập để mua sản phẩm", "warning");
    return false;
  }
  document.querySelector(".cart-container").style.display = "none";
  document.querySelector(".form-container").style.display = "block";
  return true;
}
function buy2() {
  // if (localStorage.getItem("people") === null) {
  //   customAlert("Bạn phải đăng nhập để mua sản phẩm", "warning");
  //   return false;
  // }
  document.querySelector(".form-container").style.display = "none";
  document.querySelector(".cart-container").style.display = "block";
  var info = "";
  var totalPayment = 0;
  if (
    localStorage.getItem("cart") === null ||
    localStorage.getItem("cart") == "[]"
  ) {
    return false;
  }
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  var chiTietSP_mua = []; //Mảng chứa các sản phẩm mua
  var dssp = JSON.parse(localStorage.getItem("product"));
  for (var i = 0; i < cartArray.length; i++) {
    info +=
      cartArray[i].quantity +
      " x " +
      cartArray[i].ten +
      " size " +
      cartArray[i].size +
      " <br/>";
    totalPayment += cartArray[i].quantity * cartArray[i].gia;
    var sp_tmp = dssp.find((value) => value.id == cartArray[i].id);
    chiTietSP_mua.push({
      sp: sp_tmp,
      soLuong: cartArray[i].quantity,
      size: cartArray[i].size,
    });
  }
  var customer = JSON.parse(localStorage.getItem("people"));
  var date = new Date();
  var d =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  if (localStorage.getItem("bill") === null) {
    var billArray = [];
    var bill = {
      id: billArray.length,
      info: info,
      totalPayment: totalPayment,
      customer: user,
      date: d,
      status: "Chưa xử lý",
    };
    billArray.unshift(bill);
    localStorage.setItem("bill", JSON.stringify(billArray));
  } else {
    var billArray = JSON.parse(localStorage.getItem("bill"));
    var bill = {
      id: billArray.length,
      info: info,
      totalPayment: totalPayment,
      customer: user,
      date: d,
      status: "Chưa xử lý",
    };
    billArray.unshift(bill);
    localStorage.setItem("bill", JSON.stringify(billArray));
  }

  let dsDH_tmp = JSON.parse(localStorage.getItem("DS_DH"));
  let s;
  let len;
  len = dsDH_tmp.length + 1;
  while (1) {
    s = len.toString();
    if (len < 10) s = `0${len}`;
    let tmp = dsDH_tmp.filter((value) => {
      return value.maDH.includes(s);
    });
    if (tmp.length === 0) break;
    len++;
  }
  let dh_tmp = {
    maDH: "DH_" + s,
    ngay: d,
    maKH: user.ms_kh,
    chiTiet: {
      listSP: chiTietSP_mua,
    },
    thanhToan: "Chưa thanh toán",
    trangThai: "Chưa xử lý",
  };

  dsDH_tmp.push(dh_tmp);
  localStorage.setItem("DS_DH", JSON.stringify(dsDH_tmp));
  localStorage.removeItem("cart");
  showCartTable();
  showbill();
}

function showbill() {
  if (localStorage.getItem("bill") === null) {
    document.getElementById("bill").style.display = "none";
  } else {
    var user = JSON.parse(localStorage.getItem("people"));
    var billArray = JSON.parse(localStorage.getItem("bill"));
    document.querySelector(".cart-container h1").innerHTML = "Đơn hàng đã đặt";
    document.querySelector(".cart-header").style.display = "none";
    var s = ``;
    for (var i = 0; i < billArray.length; i++) {
      if (user.username == billArray[i].customer.username) {
        document.getElementById("bill").style.display = "block";
        s += `
          <div class="billcontent">
          <div>${billArray[i].info}</div>
          <div>${formatCash(billArray[i].totalPayment.toString())} VND</div>
          <div>${billArray[i].date}</div>
          <div>${billArray[i].status}</div>
          </div>`;
      }
    }
    document.getElementById("bill").innerHTML = s;
  }
}

/*CUSTOM ALERT BOX*/
function customAlert(message, type) {
  if (type == "success") {
    document.getElementById("customalert").style.backgroundColor = "#4CAF50";
  }
  if (type == "warning") {
    document.getElementById("customalert").style.backgroundColor = "#f44336";
  }
  document.getElementById("customalert").innerHTML = message;
  var x = document.getElementById("customalert");
  x.className = "show";
  setTimeout(function () {
    x.className = x.classList.remove("show");
  }, 3500);
}
//Banner begin
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideShow");
  //var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
  slides[slideIndex - 1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}
/*-----------------------Địa Chỉ-----------------------*/
function submitForm() {
  const houseNumber = document.getElementById("houseNumber").value;
  const street = document.getElementById("street").value;
  const ward = document.getElementById("ward").value;
  const district = document.getElementById("district").value;
  const city = document.getElementById("city").value;
  if (houseNumber && street && ward && district && city) {
    alert(
      `Địa chỉ của bạn:\n${houseNumber}, đường ${street}, phường(xã) ${ward}, quận(huyện) ${district}, tỉnh(thành phố) ${city}`
    );
  } else {
    alert("Vui lòng điền đầy đủ thông tin.");
  }
}
function addDiaChi() {
  const houseNumber = document.getElementById("houseNumber").value;
  const street = document.getElementById("street").value;
  const ward = document.getElementById("ward").value;
  const district = document.getElementById("district").value;
  const city = document.getElementById("city").value;
  var addressArray = [];
  var address = {
    soNha: houseNumber,
    duong: street,
    phuong_xa: ward,
    quan_huyen: district,
    tp_tinh: city,
    maKH: user.ms_kh,
  };
  addressArray.push(address);
  localStorage.setItem("address", JSON.stringify(addressArray));
}
