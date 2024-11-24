const menuListClothesProductMap = {
  allClothes: [],
  clubFootballClothing: [],
  nationalFootballClothing: [],
  childrenFootballClothing: [],
};
const detailClothesMap = {
  clubFootballClothing: [],
  nationalFootballClothing: [],
  childrenFootballClothing: [],
};
const productClubFootballClothing = LCS_SP.filter(
  (productClothes) => productClothes.chiTietLoai === "Quần áo các câu lạc bộ"
);
const productNationalFootballClothing = LCS_SP.filter(
  (productClothes) =>
    productClothes.chiTietLoai === "Quần áo các đội tuyển quốc gia"
);
const productChildrenFootballClothing = LCS_SP.filter(
  (productClothes) => productClothes.chiTietLoai === "Quần áo bóng đá trẻ em"
);
const detailProductClubFootballClothing = LCS_SP.filter(
  (productClothes) => productClothes.chiTietLoai === "Quần áo các câu lạc bộ"
);
const detailProductNationalFootballClothing = LCS_SP.filter(
  (productClothes) =>
    productClothes.chiTietLoai === "Quần áo các đội tuyển quốc gia"
);
const detailProductChildrenFootballClothing = LCS_SP.filter(
  (productClothes) => productClothes.chiTietLoai === "Quần áo bóng đá trẻ em"
);
productClubFootballClothing.forEach((product, index) => {
  menuListClothesProductMap.clubFootballClothing
    .push(`<article class = "productClothes" id = "${
    product.id
  }" data-type="clubFootballClothing" data-id = "${index}">
            <div class = "managerProductClothes">
              <header class = "headerImgClothes">
                <a href="#" class = "managerImgClothes">
                  <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                  <img src="${product.anh2}" alt="Hình ảnh thứ 2">
                </a>
              </header>
              <footer class = "footerContentClothes">
                <a href="#" class = "managerContentClothes">
                  <p>${product.ten}</p>
                  <p>${product.gia.toLocaleString("vi-VN")}</p>
                </a>
              </footer>
            </div>
          </article>`);
});
productNationalFootballClothing.forEach((product, index) => {
  menuListClothesProductMap.nationalFootballClothing
    .push(`<article class = "productClothes" id = "${
    product.id
  }" data-type="nationalFootballClothing" data-id = "${index}">
            <div class = "managerProductClothes">
              <header class = "headerImgClothes">
                <a href="#" class = "managerImgClothes">
                  <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                  <img src="${product.anh2}" alt="Hình ảnh thứ 2">
                </a>
              </header>
              <footer class = "footerContentClothes">
                <a href="#" class = "managerContentClothes">
                  <p>${product.ten}</p>
                  <p>${product.gia.toLocaleString("vi-VN")}</p>
                </a>
              </footer>
            </div>
          </article>`);
});
productChildrenFootballClothing.forEach((product, index) => {
  menuListClothesProductMap.childrenFootballClothing
    .push(`<article class = "productClothes" id = "${
    product.id
  }" data-type="childrenFootballClothing" data-id = "${index}">
            <div class = "managerProductClothes">
              <header class = "headerImgClothes">
                <a href="#" class = "managerImgClothes">
                  <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                  <img src="${product.anh2}" alt="Hình ảnh thứ 2">
                </a>
              </header>
              <footer class = "footerContentClothes">
                <a href="#" class = "managerContentClothes">
                  <p>${product.ten}</p>
                  <p>${product.gia.toLocaleString("vi-VN")}</p>
                </a>
              </footer>
            </div>
          </article>`);
});
detailProductClubFootballClothing.forEach((product, index) => {
  detailClothesMap.clubFootballClothing
    .push(`<article data-type = "clubFootballClothing" data-id = "${index}">
            <div class = "managerDetailClothes">
    <header class = "managerImgDetailClothes">
      <a href="#"><img src="${product.anh1}" alt="Hình ảnh giao diện"></a>
      <a href="#">
      <img src="${product.anh2}" alt="Hình ảnh thứ 1">
      <img src="${product.anh3}" alt="Hình ảnh thứ 2">
      <img src="${product.anh4}" alt="Hình ảnh thứ 3">
      <img src="${product.anh5}" alt="Hình ảnh thứ 4">
      </a>
    </header>
    <footer class = "managerContentDetailClothes">
       <p>${product.ten}</p>
      <p>${product.gia.toLocaleString("vi-VN")}</p>
      <ul>
        <li>Kiểu dáng: Thiết kế ôm, năng động, thoải mái di chuyển trên sân.</li>
        <li>Chất liệu: Vải polyester cao cấp, giúp giữ mát và thấm hút mồ hôi.</li>
        <li>Độ thoải mái: Mềm mại, nhẹ nhàng, cho cảm giác thoải mái tối đa.</li>
        <li>Độ bền: Đường may chắc chắn, chịu được hoạt động cường độ cao.</li>
        <li>Kích thước: Đủ size cho nam, nữ</li>
        <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
      </ul>
      <p>Size:</p>
      <button type = "submit">S</button>
      <button type = "submit">M</button>
      <button type = "submit">L</button>
      <button type = "submit">XL</button>
      <button type = "submit">XXL</button>
      <a href="#">Hướng dẫn chọn kích cỡ</a>
      <div> 
      <button type = "submit">Mua ngay</button>
      <button type = "submit">Thêm vào giỏ hàng</button>
     </div>
    </footer>
  </div>
          </article>`);
});
detailProductChildrenFootballClothing.forEach((product, index) => {
  detailClothesMap.childrenFootballClothing
    .push(`<article data-type = "childrenFootballClothing" data-id = "${index}">
            <div class = "managerDetailClothes">
    <header class = "managerImgDetailClothes">
      <a href="#"><img src="${product.anh1}" alt="Hình ảnh giao diện"></a>
      <a href="#">
      <img src="${product.anh2}" alt="Hình ảnh thứ 1">
      <img src="${product.anh3}" alt="Hình ảnh thứ 2">
      <img src="${product.anh4}" alt="Hình ảnh thứ 3">
      <img src="${product.anh5}" alt="Hình ảnh thứ 4">
      </a>
    </header>
    <footer class = "managerContentDetailClothes">
       <p>${product.ten}</p>
      <p>${product.gia.toLocaleString("vi-VN")}</p>
      <ul>
        <li>Kiểu dáng: Thiết kế ôm, năng động, thoải mái di chuyển trên sân.</li>
        <li>Chất liệu: Vải polyester cao cấp, giúp giữ mát và thấm hút mồ hôi.</li>
        <li>Độ thoải mái: Mềm mại, nhẹ nhàng, cho cảm giác thoải mái tối đa.</li>
        <li>Độ bền: Đường may chắc chắn, chịu được hoạt động cường độ cao.</li>
        <li>Kích thước: Đủ size cho nam, nữ</li>
        <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
      </ul>
      <p>Size:</p>
      <button type = "submit">S</button>
      <button type = "submit">M</button>
      <button type = "submit">L</button>
      <button type = "submit">XL</button>
      <button type = "submit">XXL</button>
      <a href="#">Hướng dẫn chọn kích cỡ</a>
      <div> 
      <button type = "submit">Mua ngay</button>
      <button type = "submit">Thêm vào giỏ hàng</button>
     </div>
    </footer>
  </div>
          </article>`);
});
detailProductNationalFootballClothing.forEach((product, index) => {
  detailClothesMap.nationalFootballClothing
    .push(`<article data-type = "nationalFootballClothing" data-id = "${index}">
            <div class = "managerDetailClothes">  
    <header class = "managerImgDetailClothes">
      <a href="#"><img src="${product.anh1}" alt="Hình ảnh giao diện"></a>
      <a href="#">
      <img src="${product.anh2}" alt="Hình ảnh thứ 1">
      <img src="${product.anh3}" alt="Hình ảnh thứ 2">
      <img src="${product.anh4}" alt="Hình ảnh thứ 3">
      <img src="${product.anh5}" alt="Hình ảnh thứ 4">
      </a>
    </header>
    <footer class = "managerContentDetailClothes">
       <p>${product.ten}</p>
      <p>${product.gia.toLocaleString("vi-VN")}</p>
      <ul>
        <li>Kiểu dáng: Thiết kế ôm, năng động, thoải mái di chuyển trên sân.</li>
        <li>Chất liệu: Vải polyester cao cấp, giúp giữ mát và thấm hút mồ hôi.</li>
        <li>Độ thoải mái: Mềm mại, nhẹ nhàng, cho cảm giác thoải mái tối đa.</li>
        <li>Độ bền: Đường may chắc chắn, chịu được hoạt động cường độ cao.</li>
        <li>Kích thước: Đủ size cho nam, nữ</li>
        <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
      </ul>
      <p>Size:</p>
      <button type = "submit">S</button>
      <button type = "submit">M</button>
      <button type = "submit">L</button>
      <button type = "submit">XL</button>
      <button type = "submit">XXL</button>
      <a href="#">Hướng dẫn chọn kích cỡ</a>
      <div> 
      <button type = "submit">Mua ngay</button>
      <button type = "submit">Thêm vào giỏ hàng</button>
     </div>
    </footer>
  </div>
          </article>`);
});
for (let product in menuListClothesProductMap) {
  if (product != "allClothes") {
    menuListClothesProductMap.allClothes.push(
      ...menuListClothesProductMap[product]
    );
  }
}
// console.log(menuListClothesProductMap);
// console.log(detailClothesMap);
const amountClothesPerPage = 8;
const clothesPerPageMap = [];
let pageClothes = 1;
// -------------- Truy cập vào các phần tử HTML DOM -------------
const beforePageClothes = document.querySelectorAll(".beforePageClothes");
const afterPageClothes = document.querySelectorAll(".afterPageClothes");
// console.log(beforePageClothes, afterPageClothes);
function eventBeforePageClothes(e) {
  e.preventDefault();
  console.log("successful");
  pageClothes--;
  if (pageClothes <= 1) {
    document.querySelector(".beforePageClothes").disabled;
    pageClothes = 1;
  }
  otherTypeClothes.innerHTML = clothesPerPageMap[pageClothes - 1];
  const articles = otherTypeClothes.querySelectorAll("article");
  showDetailProductClothes.style.display = "none";
  // Thêm CSS cho từng article
  articles.forEach((article) => {
    article.style.display = "inline-block";
    article.style.margin = "20px 0px 10px 59px";
  });
  articles.forEach((element) => {
    // Truy cập đến các sản phẩm có trong mục tất cả sản phẩm
    element.addEventListener("click", function (event) {
      // Tạo sự kiện click chọn sản phẩm
      console.log(element);
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ
      const getDataTypeProductClothes =
        event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
      const getDataIdProductClothes =
        event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
      console.log(getDataTypeProductClothes, getDataIdProductClothes);
      if (getDataTypeProductClothes && getDataIdProductClothes) {
        // Kiểm tra nó kh trả về null
        updateDetailClothes(getDataTypeProductClothes, getDataIdProductClothes); // Update nội dung chi tiết sản phẩm tương ứng
        const bigImgDetailClothes = document.querySelector(
          ".managerImgDetailClothes a:first-child img "
        ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
        console.log(bigImgDetailClothes);
        const smallImgDetailClothes = document.querySelectorAll(
          ".managerImgDetailClothes a:last-child img "
        ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
        let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
        // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
        // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
        smallImgDetailClothes.forEach(function (imgSmall, local) {
          // Duyệt qua tất cả các ảnh nhỏ imgSmall
          imgSmall.addEventListener("click", function (event) {
            // Thêm sự kiện click cho từng ảnh nhỏ
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            bigImgDetailClothes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
            localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
          });
        });
        bigImgDetailClothes.addEventListener("click", function (event) {
          // Thêm sự kiện cho ảnh lớn
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          localImg = (localImg + 1) % smallImgDetailClothes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
          // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
          bigImgDetailClothes.src = smallImgDetailClothes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
        });
      }
    });
  });
}
function eventAfterPageClothes(e) {
  e.preventDefault();
  pageClothes++;
  if (pageClothes >= clothesPerPageMap.length) {
    document.querySelector(".afterPageClothes").disabled;
    pageClothes = clothesPerPageMap.length;
  }
  otherTypeClothes.innerHTML = clothesPerPageMap[pageClothes - 1];
  const articles = otherTypeClothes.querySelectorAll("article");
  showDetailProductClothes.style.display = "none";
  // Thêm CSS cho từng article
  articles.forEach((article) => {
    article.style.display = "inline-block";
    article.style.margin = "20px 0px 10px 59px";
  });
  articles.forEach((element) => {
    // Truy cập đến các sản phẩm có trong mục tất cả sản phẩm
    element.addEventListener("click", function (event) {
      // Tạo sự kiện click chọn sản phẩm
      console.log(element);
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ
      const getDataTypeProductClothes =
        event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
      const getDataIdProductClothes =
        event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
      console.log(getDataTypeProductClothes, getDataIdProductClothes);
      if (getDataTypeProductClothes && getDataIdProductClothes) {
        // Kiểm tra nó kh trả về null
        updateDetailClothes(getDataTypeProductClothes, getDataIdProductClothes); // Update nội dung chi tiết sản phẩm tương ứng
        const bigImgDetailClothes = document.querySelector(
          ".managerImgDetailClothes a:first-child img "
        ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
        console.log(bigImgDetailClothes);
        const smallImgDetailClothes = document.querySelectorAll(
          ".managerImgDetailClothes a:last-child img "
        ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
        let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
        // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
        // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
        smallImgDetailClothes.forEach(function (imgSmall, local) {
          // Duyệt qua tất cả các ảnh nhỏ imgSmall
          imgSmall.addEventListener("click", function (event) {
            // Thêm sự kiện click cho từng ảnh nhỏ
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            bigImgDetailClothes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
            localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
          });
        });
        bigImgDetailClothes.addEventListener("click", function (event) {
          // Thêm sự kiện cho ảnh lớn
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          localImg = (localImg + 1) % smallImgDetailClothes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
          // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
          bigImgDetailClothes.src = smallImgDetailClothes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
        });
      }
    });
  });
}
function addButtonPageClothes() {
  beforePageClothes.forEach((button) => {
    button.addEventListener("click", eventBeforePageClothes);
  });
  afterPageClothes.forEach((button) => {
    button.addEventListener("click", eventAfterPageClothes);
  });
}
function removeButtonPageClothes() {
  pageClothes = 1;
  beforePageClothes.forEach((button) => {
    button.removeEventListener("click", eventBeforePageClothes);
  });
  afterPageClothes.forEach((button) => {
    button.removeEventListener("click", eventAfterPageClothes);
  });
}
const noneListShoesProduct = document.querySelector(".listShoesProduct");
const noneDetailProductShoes = document.querySelector(".detailProductShoes");
// console.log(noneListShoesProduct);
const navClothes = document.querySelector(".navClothes");
// console.log(navClothes);
navClothes.addEventListener("click", function (e) {
  e.preventDefault();
  const getAttributeNavClothes = e.target.getAttribute("data-type");
  // console.log(getAttributeNavClothes);
  if (getAttributeNavClothes) {
    updatePageProductClothes(getAttributeNavClothes);
    addButtonPageClothes();
    noneListShoesProduct.style.display = "none";
    noneDetailProductShoes.style.display = "none";
    noneListBrandProduct.style.display = "none";
    noneDetailProductBrand.style.display = "none";
    contentNavigation.style.display = "none";
    imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
    specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
    productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
    listClothesProduct.style.display = "block"; // Hiển thị danh sách sản phẩm
    listClothesProduct.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
    buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
    buttonBackListProductClothes.innerHTML = "";
    buttonBackHome.addEventListener("click", function (event) {
      // Thêm sự kiện click
      event.preventDefault(); // Ngăn chặn hành vi mặc định
      imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
      specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
      productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
      listClothesProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
      buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
    });
  }
});
const listClothesProduct = document.querySelector(".listClothesProduct"); // Truy cập vào phần tử chứa nội dung và danh sách List sản phẩm
listClothesProduct.style.display = "none"; // Ban đầu khi chưa truy cập sẽ ẩn List sản phẩm đi
const detailProductClothes = document.querySelector(".detailProductClothes"); // Truy cập vào phần tử chứa toàn bộ nội dung của chi tiết sản phẩm
detailProductClothes.style.display = "none"; // Khi chưa truy cập đến Chi tiết sản phẩm sẽ bị ẩn đi
const showDetailProductClothes = document.getElementById(
  "showDetailProductClothes"
); // Truy cập vào phần tử sẽ thể hiện chi tiết sản phẩm lên màn hình
showDetailProductClothes.style.display = "none"; // Khi chưa truy cập đến chi tiết sản phẩm sẽ bị ẩn đi
const otherTypeClothes = document.querySelector("#otherTypeClothes"); // Truy cập đến phần tử sẽ hiện thị danh sách sản phẩm tương ứng khi click chọn
const managerListTypeClothes = document.querySelectorAll(
  ".managerListTypeClothes a"
); // Truy cập vào phần tử managerListTypeShoes mang những điều hướng phụ trên danh sách

// -------------- Tạo các nút back về ---------------
// const buttonBackHome = document.createElement("button"); // Tạo button để quay về trang chủ
// buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
Object.assign(buttonBackHome.style, {
  // Thêm các thuộc tính CSS cho button
  marginLeft: "40px",
  fontSize: "35px",
  width: "70px",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
});
const buttonBackListProductClothes = document.createElement("button");
buttonBackListProductClothes.innerHTML =
  '<i class="fa-solid fa-arrow-left-long"></i>';
Object.assign(buttonBackListProductClothes.style, {
  marginLeft: "30px",
  fontSize: "35px",
  width: "70px",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
});

// -------------- Code điều hướng các tác vụ trên nav trang chủ ----------------
document.querySelectorAll(".clothes2 li a").forEach((element) => {
  // Duyệt các phần tử là các type của sản phẩm: Giày cỏ nhân tạo, giày cỏ tự nhiên, ...
  element.addEventListener("click", function (event) {
    // Tạo sự kiện click cho từng phần tử type sản phẩm
    // console.log("Successful");
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
    console.log("click successful");
    const getDataTypeClothes = event.target.getAttribute("data-type"); // Lấy giá trị attribute của type sản phẩm khi đang truy cập đến
    console.log(getDataTypeClothes);
    if (getDataTypeClothes) {
      clothesPerPageMap.length = 0;
      otherTypeClothes.innerHTML = "";
      removeButtonPageClothes();
      updatePageProductClothes(getDataTypeClothes);
      addButtonPageClothes();
      noneListShoesProduct.style.display = "none";
      noneDetailProductShoes.style.display = "none";
      noneListBrandProduct.style.display = "none";
      noneDetailProductBrand.style.display = "none";
      contentNavigation.style.display = "none";
      imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
      specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
      productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
      listClothesProduct.style.display = "block"; // Hiển thị danh sách sản phẩm
      listClothesProduct.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
      buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
      buttonBackListProductClothes.innerHTML = "";
      buttonBackHome.addEventListener("click", function (event) {
        // Thêm sự kiện click
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
        specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
        productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
        listClothesProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
        buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
      });
    }
  });
});

// ------------ Code điều hướng list sản phẩm trên nav phụ ở ngay trong danh sách
managerListTypeClothes.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Successful");
    const getAttributeManagerListTypeClothes =
      event.currentTarget.getAttribute("data-type");
    console.log(getAttributeManagerListTypeClothes);
    if (getAttributeManagerListTypeClothes) {
      clothesPerPageMap.length = 0;
      otherTypeClothes.innerHTML = "";
      removeButtonPageClothes();
      updatePageProductClothes(getAttributeManagerListTypeClothes);
      addButtonPageClothes();
      noneListShoesProduct.style.display = "none";
      noneDetailProductShoes.style.display = "none";
      noneListBrandProduct.style.display = "none";
      noneDetailProductBrand.style.display = "none";
      contentNavigation.style.display = "none";
    }
  });
});
// ------------- Hàm update danh sách sản phẩm --------------
function updateListProductClothes(getDataTypeProductClothes) {
  if (menuListClothesProductMap[getDataTypeProductClothes]) {
    otherTypeClothes.innerHTML =
      menuListClothesProductMap[getDataTypeProductClothes].join("");
    const articles = otherTypeClothes.querySelectorAll("article");
    console.log(articles);
    showDetailProductClothes.style.display = "none";
    // Thêm CSS cho từng article
    articles.forEach((article) => {
      article.style.display = "inline-block";
      article.style.margin = "20px 0px 10px 59px";
    });
    articles.forEach((element) => {
      // Truy cập đến các sản phẩm có trong mục tất cả sản phẩm
      element.addEventListener("click", function (event) {
        // Tạo sự kiện click chọn sản phẩm
        console.log(element);
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ
        const getDataTypeProductClothes =
          event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
        const getDataIdProductClothes =
          event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
        console.log(getDataTypeProductClothes, getDataIdProductClothes);
        if (getDataTypeProductClothes && getDataIdProductClothes) {
          // Kiểm tra nó kh trả về null
          updateDetailClothes(
            getDataTypeProductClothes,
            getDataIdProductClothes
          ); // Update nội dung chi tiết sản phẩm tương ứng
          const bigImgDetailClothes = document.querySelector(
            ".managerImgDetailClothes a:first-child img "
          ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
          console.log(bigImgDetailClothes);
          const smallImgDetailClothes = document.querySelectorAll(
            ".managerImgDetailClothes a:last-child img "
          ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
          let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
          // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
          // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
          smallImgDetailClothes.forEach(function (imgSmall, local) {
            // Duyệt qua tất cả các ảnh nhỏ imgSmall
            imgSmall.addEventListener("click", function (event) {
              // Thêm sự kiện click cho từng ảnh nhỏ
              event.preventDefault(); // Ngăn chặn hành vi mặc định
              // console.log("Successful");
              bigImgDetailClothes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
              localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
            });
          });
          bigImgDetailClothes.addEventListener("click", function (event) {
            // Thêm sự kiện cho ảnh lớn
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            localImg = (localImg + 1) % smallImgDetailClothes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
            // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
            bigImgDetailClothes.src = smallImgDetailClothes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
          });
        }
      });
    });
  }
}
function updatePageProductClothes(getDataTypeProductClothes) {
  if (menuListClothesProductMap[getDataTypeProductClothes]) {
    const allClothesPage = menuListClothesProductMap[getDataTypeProductClothes];
    const clothesPage = Math.ceil(allClothesPage.length / amountClothesPerPage);
    for (let i = 0; i < clothesPage; i++) {
      const start = i * amountClothesPerPage;
      const end = start + amountClothesPerPage;
      const clothesPerPage = allClothesPage.slice(start, end);
      clothesPerPageMap.push(clothesPerPage);
    }
    otherTypeClothes.innerHTML = clothesPerPageMap[pageClothes - 1];
    const articles = otherTypeClothes.querySelectorAll("article");
    showDetailProductClothes.style.display = "none";
    // Thêm CSS cho từng article
    articles.forEach((article) => {
      article.style.display = "inline-block";
      article.style.margin = "20px 0px 10px 59px";
    });
    articles.forEach((element) => {
      // Truy cập đến các sản phẩm có trong mục tất cả sản phẩm
      element.addEventListener("click", function (event) {
        // Tạo sự kiện click chọn sản phẩm
        console.log(element);
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ
        const getDataTypeProductClothes =
          event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
        const getDataIdProductClothes =
          event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
        console.log(getDataTypeProductClothes, getDataIdProductClothes);
        if (getDataTypeProductClothes && getDataIdProductClothes) {
          // Kiểm tra nó kh trả về null
          updateDetailClothes(
            getDataTypeProductClothes,
            getDataIdProductClothes
          ); // Update nội dung chi tiết sản phẩm tương ứng
          const bigImgDetailClothes = document.querySelector(
            ".managerImgDetailClothes a:first-child img "
          ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
          console.log(bigImgDetailClothes);
          const smallImgDetailClothes = document.querySelectorAll(
            ".managerImgDetailClothes a:last-child img "
          ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
          let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
          // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
          // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
          smallImgDetailClothes.forEach(function (imgSmall, local) {
            // Duyệt qua tất cả các ảnh nhỏ imgSmall
            imgSmall.addEventListener("click", function (event) {
              // Thêm sự kiện click cho từng ảnh nhỏ
              event.preventDefault(); // Ngăn chặn hành vi mặc định
              // console.log("Successful");
              bigImgDetailClothes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
              localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
            });
          });
          bigImgDetailClothes.addEventListener("click", function (event) {
            // Thêm sự kiện cho ảnh lớn
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            localImg = (localImg + 1) % smallImgDetailClothes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
            // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
            bigImgDetailClothes.src = smallImgDetailClothes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
          });
        }
      });
    });
  }
}
// -------------- Hàm update chi tiết sản phẩm -----------
function updateDetailClothes(
  getDataTypeProductClothes,
  getDataIdProductClothes
) {
  // Hàm hiện thị chi tiết sản phẩm gồm data-type và vị trí của phần tử khi click chọn trong mảng chi tiết sản phẩm
  if (detailClothesMap[getDataTypeProductClothes][getDataIdProductClothes]) {
    // Kiểm tra có nội dung chi tiết bên trong mảng chứa hay không
    showDetailProductClothes.style.display = "block"; // Hiển thị phần tử chứa toàn bộ nội dung chi tiết sản phẩm
    showDetailProductClothes.innerHTML =
      detailClothesMap[getDataTypeProductClothes][getDataIdProductClothes]; // Nội dung chi tiết của sản phẩm được click chọn
    window.scrollTo({ top: 0, behavior: "auto" });
    detailProductClothes.style.display = "block"; // Hiện thị nội dung chứa toàn bộ các nội dung chi tiết
    listClothesProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
    // allProductShoesAttribute.style.display = "none"; // Ẩn đi danh sản phẩm tương ứng
    buttonBackListProductClothes.innerHTML =
      '<i class="fa-solid fa-arrow-left-long"></i>';
    detailProductClothes.prepend(buttonBackListProductClothes);
    buttonBackListProductClothes.addEventListener("click", function (event) {
      event.preventDefault();
      buttonBackListProductClothes.innerHTML = "";
      detailProductClothes.style.display = "none";
      listClothesProduct.style.display = "block";
    });
  }
}
// -------------- Tất cả sản phẩm quần áo tại trang chủ ------------
const allProductClothesHome = document.querySelector(".allProductClothesHome");
// console.log(allProductClothesHome);
allProductClothesHome.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("successful");
  const getAttributeAllProductClothesHome =
    event.target.getAttribute("data-type");
  console.log(getAttributeAllProductClothesHome);
  if (getAttributeAllProductClothesHome) {
    updatePageProductClothes(getAttributeAllProductClothesHome);
    addButtonPageClothes();
    window.scrollTo({ top: 0, behavior: "auto" });
    noneListShoesProduct.style.display = "none";
    noneDetailProductShoes.style.display = "none";
    noneListBrandProduct.style.display = "none";
    noneDetailProductBrand.style.display = "none";
    imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
    specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
    productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
    listClothesProduct.style.display = "block"; // Hiển thị danh sách sản phẩm
    listClothesProduct.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
    buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
    buttonBackListProductClothes.innerHTML = "";
    buttonBackHome.addEventListener("click", function (event) {
      // Thêm sự kiện click
      event.preventDefault(); // Ngăn chặn hành vi mặc định
      imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
      specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
      productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
      listClothesProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
      buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
    });
  }
});
// -------------- Sản phẩm quần áo trưng bày trang chủ --------------
function getRandomClothes(arr, n) {
  if (n > arr.length) {
    return;
  }

  // Tạo bản sao của mảng và xáo trộn
  const productClothesHome = arr.slice(); // Copy mảng để không làm thay đổi mảng gốc
  for (let i = productClothesHome.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Vị trí ngẫu nhiên
    [productClothesHome[i], productClothesHome[randomIndex]] = [
      productClothesHome[randomIndex],
      productClothesHome[i],
    ]; // Hoán đổi
  }

  // Trả về n phần tử đầu tiên
  return productClothesHome.slice(0, n);
}
const productClothesHomeMap = getRandomClothes(
  menuListClothesProductMap.allClothes,
  9
);
console.log(productClothesHomeMap);
const productClothesDisplayHome2 = document.querySelector(
  ".productClothesDisplayHome"
);
productClothesDisplayHome2.innerHTML += productClothesHomeMap.join("");
const listProductClothesDisplayHome = document.querySelectorAll(
  ".productClothesDisplayHome article"
);
function updateDetailClothesDisplayHome(
  getAttributeElementProductClothesDisplayHome,
  getIDElementProductClothesDisplayHome
) {
  if (
    detailClothesMap[getAttributeElementProductClothesDisplayHome][
      getIDElementProductClothesDisplayHome
    ]
  ) {
    showDetailProductClothes.style.display = "block"; // Hiển thị phần tử chứa toàn bộ nội dung chi tiết sản phẩm
    showDetailProductClothes.innerHTML =
      detailClothesMap[getAttributeElementProductClothesDisplayHome][
        getIDElementProductClothesDisplayHome
      ]; // Nội dung chi tiết của sản phẩm được click chọn
    window.scrollTo({ top: 0, behavior: "auto" });
    detailProductClothes.style.display = "block"; // Hiện thị nội dung chứa toàn bộ các nội dung chi tiết
    detailProductClothes.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
    buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
    buttonBackListProductClothes.innerHTML = "";
    buttonBackHome.addEventListener("click", function (event) {
      // Thêm sự kiện click
      event.preventDefault(); // Ngăn chặn hành vi mặc định
      imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
      specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
      productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
      contentNavigation.style.display = "none";
      detailProductClothes.style.display = "none"; // Ẩn đi danh sách sản phẩm
      buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
      window.scrollTo({ top: 1860, behavior: "auto" });
    });
  }
}
// console.log(listProductClothesDisplayHome);
listProductClothesDisplayHome.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("successful");
    const getAttributeElementProductClothesDisplayHome =
      event.currentTarget.getAttribute("data-type");
    const getIDElementProductClothesDisplayHome =
      event.currentTarget.getAttribute("data-id");
    console.log(
      getAttributeElementProductClothesDisplayHome,
      getIDElementProductClothesDisplayHome
    );
    if (
      getAttributeElementProductClothesDisplayHome &&
      getIDElementProductClothesDisplayHome
    ) {
      // Kiểm tra nó kh trả về null
      removeButtonPageClothes();
      updateDetailClothesDisplayHome(
        getAttributeElementProductClothesDisplayHome,
        getIDElementProductClothesDisplayHome
      );
      noneListShoesProduct.style.display = "none";
      noneDetailProductShoes.style.display = "none";
      noneListBrandProduct.style.display = "none";
      noneDetailProductBrand.style.display = "none";
      contentNavigation.style.display = "none";
      imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
      specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
      productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
      // Update nội dung chi tiết sản phẩm tương ứng
      const bigImgDetailClothes = document.querySelector(
        ".managerImgDetailClothes a:first-child img "
      ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
      const smallImgDetailClothes = document.querySelectorAll(
        ".managerImgDetailClothes a:last-child img "
      ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
      let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
      // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
      // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
      smallImgDetailClothes.forEach(function (imgSmall, local) {
        // Duyệt qua tất cả các ảnh nhỏ imgSmall
        imgSmall.addEventListener("click", function (event) {
          // Thêm sự kiện click cho từng ảnh nhỏ
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          bigImgDetailClothes.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
          localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
        });
      });
      bigImgDetailClothes.addEventListener("click", function (event) {
        // Thêm sự kiện cho ảnh lớn
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        // console.log("Successful");
        localImg = (localImg + 1) % smallImgDetailClothes.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
        // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
        bigImgDetailClothes.src = smallImgDetailClothes[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
      });
    }
  });
});
