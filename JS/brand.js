const menuBrandProductMap = {
  allBrand: [],
  Adidas: [],
  Nike: [],
  Puma: [],
};
const detailBrandProductMap = {
  Adidas: [],
  Nike: [],
  Puma: [],
};

const productBrandAdidas = LCS_SP.filter(
  (product) => product.thuonghieu == "Adidas"
);
const productBrandNike = LCS_SP.filter(
  (product) => product.thuonghieu === "Nike"
);
const productBrandPuma = LCS_SP.filter(
  (product) => product.thuonghieu === "Puma"
);
const detailProductAdidas = LCS_SP.filter(
  (product) => product.thuonghieu === "Adidas"
);
const detailProductNike = LCS_SP.filter(
  (product) => product.thuonghieu === "Nike"
);
const detailProductPuma = LCS_SP.filter(
  (product) => product.thuonghieu === "Puma"
);

productBrandAdidas.forEach((product, index) => {
  menuBrandProductMap.Adidas.push(`<article class = "productBrand" id = "${
    product.id
  }" data-type="${product.thuonghieu}" data-id = "${index}">
          <div class = "managerProductBrand">
            <header class = "headerImgBrand">
              <a href="#" class = "managerImgBrand">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentBrand">
              <a href="#" class = "managerContentBrand">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}</p>
              </a>
            </footer>
          </div>
        </article>`);
});
productBrandNike.forEach((product, index) => {
  menuBrandProductMap.Nike.push(`<article class = "productBrand" id = "${
    product.id
  }" data-type="${product.thuonghieu}" data-id = "${index}">
          <div class = "managerProductBrand">
            <header class = "headerImgBrand">
              <a href="#" class = "managerImgShoes">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentBrand">
              <a href="#" class = "managerContentBrand">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}</p>
              </a>
            </footer>
          </div>
        </article>`);
});
productBrandPuma.forEach((product, index) => {
  menuBrandProductMap.Puma.push(`<article class = "productBrand" id = "${
    product.id
  }" data-type="${product.thuonghieu}" data-id = "${index}">
          <div class = "managerProductBrand">
            <header class = "headerImgBrand">
              <a href="#" class = "managerImgBrand">
                <img src="${product.anh1}" alt="Hình ảnh thứ 1">
                <img src="${product.anh2}" alt="Hình ảnh thứ 2">
              </a>
            </header>
            <footer class = "footerContentBrand">
              <a href="#" class = "managerContentBrand">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}</p>
              </a>
            </footer>
          </div>
        </article>`);
});
detailProductAdidas.forEach((product, index) => {
  if (product.loai === "Giày") {
    detailBrandProductMap.Adidas.push(`<article data-type = "${
      product.thuonghieu
    }" data-id = "${index}">
                    <div class = "managerDetailBrand">
            <header class = "managerImgDetailBrand">
              <a href="#"><img src="${product.anh1}" alt="Hình ảnh thứ 1"></a>
              <a href="#">
              <img src="${product.anh2}" alt="Hình ảnh thứ 1">
              <img src="${product.anh3}" alt="Hình ảnh thứ 2">
              <img src="${product.anh4}" alt="Hình ảnh thứ 3">
              <img src="${product.anh5}" alt="Hình ảnh thứ 4">
              </a>
            </header>
            <footer class = "managerContentDetailBrand">
              <p>${product.ten}</p>
              <p>${product.gia.toLocaleString("vi-VN")}</p>
              <ul>
                <li>Kiểu dáng: Thiết kế năng động, hỗ trợ di chuyển nhanh.</li>
                <li>Chất liệu: Da tổng hợp, vải lưới, tăng độ bền.</li>
                <li>Độ thoải mái: Đệm êm ái, ôm chân, giảm chấn.</li>
                <li>Đế giày: Đế cao su, chống trượt, bám tốt trên sân.</li>
                <li>Kích thước: Đủ size cho nam, nữ</li>
                <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
              </ul>
              <p>Size:</p>
              <button type = "submit">37</button>
              <button type = "submit">38</button>
              <button type = "submit">39</button>
              <button type = "submit">40</button>
              <button type = "submit">41</button>
              <button type = "submit">42</button>
              <button type = "submit">43</button>
              <button type = "submit">44</button>
              <a href="#">Hướng dẫn chọn kích cỡ</a>
              <div> 
              <button type = "submit">Mua ngay</button>
              <button type = "submit">Thêm vào giỏ hàng</button>
             </div>
            </footer>
          </div>
        </article>`);
  }
  if (product.loai == "Quần Áo") {
    detailBrandProductMap.Adidas.push(`<article data-type = "${
      product.thuonghieu
    }" data-id = "${index}">
            <div class = "managerDetailBrand">
    <header class = "managerImgDetailBrand">
      <a href="#"><img src="${product.anh1}" alt="Hình ảnh giao diện"></a>
      <a href="#">
      <img src="${product.anh2}" alt="Hình ảnh thứ 1">
      <img src="${product.anh3}" alt="Hình ảnh thứ 2">
      <img src="${product.anh4}" alt="Hình ảnh thứ 3">
      <img src="${product.anh5}" alt="Hình ảnh thứ 4">
      </a>
    </header>
    <footer class = "managerContentDetailBrand">
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
  }
});
detailProductNike.forEach((product, index) => {
  if (product.loai === "Giày") {
    detailBrandProductMap.Nike.push(`<article data-type = "${
      product.thuonghieu
    }" data-id = "${index}">
                      <div class = "managerDetailBrand">
              <header class = "managerImgDetailBrand">
                <a href="#"><img src="${product.anh1}" alt="Hình ảnh thứ 1"></a>
                <a href="#">
                <img src="${product.anh2}" alt="Hình ảnh thứ 1">
                <img src="${product.anh3}" alt="Hình ảnh thứ 2">
                <img src="${product.anh4}" alt="Hình ảnh thứ 3">
                <img src="${product.anh5}" alt="Hình ảnh thứ 4">
                </a>
              </header>
              <footer class = "managerContentDetailBrand">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}</p>
                <ul>
                  <li>Kiểu dáng: Thiết kế năng động, hỗ trợ di chuyển nhanh.</li>
                  <li>Chất liệu: Da tổng hợp, vải lưới, tăng độ bền.</li>
                  <li>Độ thoải mái: Đệm êm ái, ôm chân, giảm chấn.</li>
                  <li>Đế giày: Đế cao su, chống trượt, bám tốt trên sân.</li>
                  <li>Kích thước: Đủ size cho nam, nữ</li>
                  <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
                </ul>
                <p>Size:</p>
                <button type = "submit">37</button>
                <button type = "submit">38</button>
                <button type = "submit">39</button>
                <button type = "submit">40</button>
                <button type = "submit">41</button>
                <button type = "submit">42</button>
                <button type = "submit">43</button>
                <button type = "submit">44</button>
                <a href="#">Hướng dẫn chọn kích cỡ</a>
                <div> 
                <button type = "submit">Mua ngay</button>
                <button type = "submit">Thêm vào giỏ hàng</button>
               </div>
              </footer>
            </div>
          </article>`);
  }
  if (product.loai == "Quần Áo") {
    detailBrandProductMap.Nike.push(`<article data-type = "${
      product.thuonghieu
    }" data-id = "${index}">
              <div class = "managerDetailBrand">
      <header class = "managerImgDetailBrand">
        <a href="#"><img src="${product.anh1}" alt="Hình ảnh giao diện"></a>
        <a href="#">
        <img src="${product.anh2}" alt="Hình ảnh thứ 1">
        <img src="${product.anh3}" alt="Hình ảnh thứ 2">
        <img src="${product.anh4}" alt="Hình ảnh thứ 3">
        <img src="${product.anh5}" alt="Hình ảnh thứ 4">
        </a>
      </header>
      <footer class = "managerContentDetailBrand">
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
  }
});
detailProductPuma.forEach((product, index) => {
  if (product.loai === "Giày") {
    detailBrandProductMap.Puma.push(`<article data-type = "${
      product.thuonghieu
    }" data-id = "${index}">
                      <div class = "managerDetailBrand">
              <header class = "managerImgDetailBrand">
                <a href="#"><img src="${product.anh1}" alt="Hình ảnh thứ 1"></a>
                <a href="#">
                <img src="${product.anh2}" alt="Hình ảnh thứ 1">
                <img src="${product.anh3}" alt="Hình ảnh thứ 2">
                <img src="${product.anh4}" alt="Hình ảnh thứ 3">
                <img src="${product.anh5}" alt="Hình ảnh thứ 4">
                </a>
              </header>
              <footer class = "managerContentDetailBrand">
                <p>${product.ten}</p>
                <p>${product.gia.toLocaleString("vi-VN")}</p>
                <ul>
                  <li>Kiểu dáng: Thiết kế năng động, hỗ trợ di chuyển nhanh.</li>
                  <li>Chất liệu: Da tổng hợp, vải lưới, tăng độ bền.</li>
                  <li>Độ thoải mái: Đệm êm ái, ôm chân, giảm chấn.</li>
                  <li>Đế giày: Đế cao su, chống trượt, bám tốt trên sân.</li>
                  <li>Kích thước: Đủ size cho nam, nữ</li>
                  <li>Màu sắc: Đa dạng, phong cách thể thao, thời thượng.</li>
                </ul>
                <p>Size:</p>
                <button type = "submit">37</button>
                <button type = "submit">38</button>
                <button type = "submit">39</button>
                <button type = "submit">40</button>
                <button type = "submit">41</button>
                <button type = "submit">42</button>
                <button type = "submit">43</button>
                <button type = "submit">44</button>
                <a href="#">Hướng dẫn chọn kích cỡ</a>
                <div> 
                <button type = "submit">Mua ngay</button>
                <button type = "submit">Thêm vào giỏ hàng</button>
               </div>
              </footer>
            </div>
          </article>`);
  }
  if (product.loai == "Quần Áo") {
    detailBrandProductMap.Puma.push(`<article data-type = "${
      product.thuonghieu
    }" data-id = "${index}">
              <div class = "managerDetailBrand">
      <header class = "managerImgDetailBrand">
        <a href="#"><img src="${product.anh1}" alt="Hình ảnh giao diện"></a>
        <a href="#">
        <img src="${product.anh2}" alt="Hình ảnh thứ 1">
        <img src="${product.anh3}" alt="Hình ảnh thứ 2">
        <img src="${product.anh4}" alt="Hình ảnh thứ 3">
        <img src="${product.anh5}" alt="Hình ảnh thứ 4">
        </a>
      </header>
      <footer class = "managerContentDetailBrand">
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
  }
});
for (let product in menuBrandProductMap) {
  if (product != "allBrand") {
    menuBrandProductMap.allBrand.push(...menuBrandProductMap[product]);
  }
}
// console.log(menuBrandProductMap);
// console.log(detailBrandProductMap);
const beforePageBrand = document.querySelectorAll(".beforePageBrand");
const afterPageBrand = document.querySelectorAll(".afterPageBrand");
const navBrand = document.querySelector(".navBrand");
const listBrandProduct = document.querySelector(".listBrandProduct");
listBrandProduct.style.display = "none";
const detailProductBrand = document.querySelector(".detailProductBrand");
detailProductBrand.style.display = "none";
const showDetailProductBrand = document.getElementById(
  "showDetailProductBrand"
);
showDetailProductBrand.style.display = "none";
const otherTypeBrand = document.querySelector("#otherTypeBrand");
const managerListTypeBrand = document.querySelectorAll(
  ".managerListTypeBrand a"
);
const noneListBrandProduct = document.querySelector(".listBrandProduct");
const noneDetailProductBrand = document.querySelector(".detailProductBrand");
// console.log(noneDetailProductBrand, noneListBrandProduct);
Object.assign(buttonBackHome.style, {
  // Thêm các thuộc tính CSS cho button
  marginLeft: "40px",
  fontSize: "35px",
  width: "70px",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
});
const buttonBackListProductBrand = document.createElement("button");
buttonBackListProductBrand.innerHTML =
  '<i class="fa-solid fa-arrow-left-long"></i>';
Object.assign(buttonBackListProductBrand.style, {
  marginLeft: "30px",
  fontSize: "35px",
  width: "70px",
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
});
// -------------- Hàm update chi tiết sản phẩm -----------
function updateDetailBrand(getDataTypeProductBrand, getDataIdProductBrand) {
  // Hàm hiện thị chi tiết sản phẩm gồm data-type và vị trí của phần tử khi click chọn trong mảng chi tiết sản phẩm
  if (detailBrandProductMap[getDataTypeProductBrand][getDataIdProductBrand]) {
    // Kiểm tra có nội dung chi tiết bên trong mảng chứa hay không
    showDetailProductBrand.style.display = "block"; // Hiển thị phần tử chứa toàn bộ nội dung chi tiết sản phẩm
    showDetailProductBrand.innerHTML =
      detailBrandProductMap[getDataTypeProductBrand][getDataIdProductBrand]; // Nội dung chi tiết của sản phẩm được click chọn
    window.scrollTo({ top: 0, behavior: "auto" });
    detailProductBrand.style.display = "block"; // Hiện thị nội dung chứa toàn bộ các nội dung chi tiết
    listBrandProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
    // allProductShoesAttribute.style.display = "none"; // Ẩn đi danh sản phẩm tương ứng
    buttonBackListProductBrand.innerHTML =
      '<i class="fa-solid fa-arrow-left-long"></i>';
    detailProductBrand.prepend(buttonBackListProductBrand);
    buttonBackListProductBrand.addEventListener("click", function (event) {
      event.preventDefault();
      buttonBackListProductBrand.innerHTML = "";
      detailProductBrand.style.display = "none";
      listBrandProduct.style.display = "block";
    });
  }
}
// ------------- Hàm update danh sách sản phẩm --------------
function updateListProductBrand(getDataTypeProductBrand) {
  if (menuBrandProductMap[getDataTypeProductBrand]) {
    otherTypeBrand.innerHTML =
      menuBrandProductMap[getDataTypeProductBrand].join("");
    const articles = otherTypeBrand.querySelectorAll("article");
    console.log(articles);
    showDetailProductBrand.style.display = "none";
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
        const getDataTypeProductBrand =
          event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
        const getDataIdProductBrand =
          event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
        console.log(getDataTypeProductBrand, getDataIdProductBrand);
        if (getDataTypeProductBrand && getDataIdProductBrand) {
          // Kiểm tra nó kh trả về null
          updateDetailBrand(getDataTypeProductBrand, getDataIdProductBrand); // Update nội dung chi tiết sản phẩm tương ứng
          const bigImgDetailBrand = document.querySelector(
            ".managerImgDetailBrand a:first-child img "
          ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
          console.log(bigImgDetailBrand);
          const smallImgDetailBrand = document.querySelectorAll(
            ".managerImgDetailBrand a:last-child img "
          ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
          let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
          // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
          // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
          smallImgDetailBrand.forEach(function (imgSmall, local) {
            // Duyệt qua tất cả các ảnh nhỏ imgSmall
            imgSmall.addEventListener("click", function (event) {
              // Thêm sự kiện click cho từng ảnh nhỏ
              event.preventDefault(); // Ngăn chặn hành vi mặc định
              // console.log("Successful");
              bigImgDetailBrand.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
              localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
            });
          });
          bigImgDetailBrand.addEventListener("click", function (event) {
            // Thêm sự kiện cho ảnh lớn
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            localImg = (localImg + 1) % smallImgDetailBrand.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
            // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
            bigImgDetailBrand.src = smallImgDetailBrand[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
          });
        }
      });
    });
  }
}
// ------------- Hàm phân trang sản phẩm -----------
// console.log(beforePageBrand, afterPageBrand);
const amountBrandPerPage = 8;
const brandPerPageMap = [];
let pageBrand = 1;
function eventBeforePageBrand(e) {
  e.preventDefault();
  console.log("successful");
  pageBrand--;
  if (pageBrand <= 1) {
    document.querySelector(".beforePageBrand").disabled;
    pageBrand = 1;
  }
  otherTypeBrand.innerHTML = brandPerPageMap[pageBrand - 1];
  const articles = otherTypeBrand.querySelectorAll("article");
  console.log(articles);
  showDetailProductBrand.style.display = "none";
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
      const getDataTypeProductBrand =
        event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
      const getDataIdProductBrand = event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
      console.log(getDataTypeProductBrand, getDataIdProductBrand);
      if (getDataTypeProductBrand && getDataIdProductBrand) {
        // Kiểm tra nó kh trả về null
        updateDetailBrand(getDataTypeProductBrand, getDataIdProductBrand); // Update nội dung chi tiết sản phẩm tương ứng
        const bigImgDetailBrand = document.querySelector(
          ".managerImgDetailBrand a:first-child img "
        ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
        console.log(bigImgDetailBrand);
        const smallImgDetailBrand = document.querySelectorAll(
          ".managerImgDetailBrand a:last-child img "
        ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
        let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
        // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
        // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
        smallImgDetailBrand.forEach(function (imgSmall, local) {
          // Duyệt qua tất cả các ảnh nhỏ imgSmall
          imgSmall.addEventListener("click", function (event) {
            // Thêm sự kiện click cho từng ảnh nhỏ
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            bigImgDetailBrand.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
            localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
          });
        });
        bigImgDetailBrand.addEventListener("click", function (event) {
          // Thêm sự kiện cho ảnh lớn
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          localImg = (localImg + 1) % smallImgDetailBrand.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
          // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
          bigImgDetailBrand.src = smallImgDetailBrand[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
        });
      }
    });
  });
}
function eventAfterPageBrand(e) {
  e.preventDefault();
  pageBrand++;
  if (pageBrand >= brandPerPageMap.length) {
    document.querySelector(".afterPageBrand").disabled;
    pageBrand = brandPerPageMap.length;
  }
  otherTypeBrand.innerHTML = brandPerPageMap[pageBrand - 1];
  const articles = otherTypeBrand.querySelectorAll("article");
  console.log(articles);
  showDetailProductBrand.style.display = "none";
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
      const getDataTypeProductBrand =
        event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
      const getDataIdProductBrand = event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
      console.log(getDataTypeProductBrand, getDataIdProductBrand);
      if (getDataTypeProductBrand && getDataIdProductBrand) {
        // Kiểm tra nó kh trả về null
        updateDetailBrand(getDataTypeProductBrand, getDataIdProductBrand); // Update nội dung chi tiết sản phẩm tương ứng
        const bigImgDetailBrand = document.querySelector(
          ".managerImgDetailBrand a:first-child img "
        ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
        console.log(bigImgDetailBrand);
        const smallImgDetailBrand = document.querySelectorAll(
          ".managerImgDetailBrand a:last-child img "
        ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
        let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
        // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
        // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
        smallImgDetailBrand.forEach(function (imgSmall, local) {
          // Duyệt qua tất cả các ảnh nhỏ imgSmall
          imgSmall.addEventListener("click", function (event) {
            // Thêm sự kiện click cho từng ảnh nhỏ
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            bigImgDetailBrand.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
            localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
          });
        });
        bigImgDetailBrand.addEventListener("click", function (event) {
          // Thêm sự kiện cho ảnh lớn
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          localImg = (localImg + 1) % smallImgDetailBrand.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
          // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
          bigImgDetailBrand.src = smallImgDetailBrand[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
        });
      }
    });
  });
}
function addButtonPageBrand() {
  beforePageBrand.forEach((button) => {
    button.addEventListener("click", eventBeforePageBrand);
  });
  afterPageBrand.forEach((button) => {
    button.addEventListener("click", eventAfterPageBrand);
  });
}
function removeButtonPageBrand() {
  pageBrand = 1;
  beforePageBrand.forEach((button) => {
    button.removeEventListener("click", eventBeforePageBrand);
  });
  afterPageBrand.forEach((button) => {
    button.removeEventListener("click", eventAfterPageBrand);
  });
}
function updatePageProductBrand(getDataTypeProductBrand) {
  if (menuBrandProductMap[getDataTypeProductBrand]) {
    const allBrandPage = menuBrandProductMap[getDataTypeProductBrand];
    const brandPage = Math.ceil(allBrandPage.length / amountBrandPerPage);
    for (let i = 0; i < brandPage; i++) {
      const start = i * amountBrandPerPage;
      const end = start + amountBrandPerPage;
      const brandPerPage = allBrandPage.slice(start, end);
      brandPerPageMap.push(brandPerPage);
    }
    otherTypeBrand.innerHTML = brandPerPageMap[pageClothes - 1];
    const articles = otherTypeBrand.querySelectorAll("article");
    console.log(articles);
    showDetailProductBrand.style.display = "none";
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
        const getDataTypeProductBrand =
          event.currentTarget.getAttribute("data-type"); // Lấy ra data-type của sản phẩm khi click chọn
        const getDataIdProductBrand =
          event.currentTarget.getAttribute("data-id"); // Lấy ra data-id của sản phẩm khi click chọn
        console.log(getDataTypeProductBrand, getDataIdProductBrand);
        if (getDataTypeProductBrand && getDataIdProductBrand) {
          // Kiểm tra nó kh trả về null
          updateDetailBrand(getDataTypeProductBrand, getDataIdProductBrand); // Update nội dung chi tiết sản phẩm tương ứng
          const bigImgDetailBrand = document.querySelector(
            ".managerImgDetailBrand a:first-child img "
          ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
          console.log(bigImgDetailBrand);
          const smallImgDetailBrand = document.querySelectorAll(
            ".managerImgDetailBrand a:last-child img "
          ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
          let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
          // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
          // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
          smallImgDetailBrand.forEach(function (imgSmall, local) {
            // Duyệt qua tất cả các ảnh nhỏ imgSmall
            imgSmall.addEventListener("click", function (event) {
              // Thêm sự kiện click cho từng ảnh nhỏ
              event.preventDefault(); // Ngăn chặn hành vi mặc định
              // console.log("Successful");
              bigImgDetailBrand.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
              localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
            });
          });
          bigImgDetailBrand.addEventListener("click", function (event) {
            // Thêm sự kiện cho ảnh lớn
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // console.log("Successful");
            localImg = (localImg + 1) % smallImgDetailBrand.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
            // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
            bigImgDetailBrand.src = smallImgDetailBrand[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
          });
        }
      });
    });
  }
}
// ------------- Điều hướng trực tiếp thanh trang chủ ------------
// console.log(navBrand);
navBrand.addEventListener("click", function (e) {
  e.preventDefault();
  const getAttributeNavBrand = e.target.getAttribute("data-type");
  //   console.log(getAttributeNavBrand);
  if (getAttributeNavBrand) {
    updatePageProductBrand(getAttributeNavBrand);
    addButtonPageBrand();
    noneListShoesProduct.style.display = "none";
    noneDetailProductShoes.style.display = "none";
    noneListClothesProduct.style.display = "none";
    noneDetailProductClothes.style.display = "none";
    contentNavigation.style.display = "none";
    imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
    specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
    productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
    listBrandProduct.style.display = "block"; // Hiển thị danh sách sản phẩm
    listBrandProduct.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
    buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
    buttonBackListProductBrand.innerHTML = "";
    buttonBackHome.addEventListener("click", function (event) {
      // Thêm sự kiện click
      event.preventDefault(); // Ngăn chặn hành vi mặc định
      imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
      specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
      productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
      listBrandProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
      buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
    });
  }
});
// -------------- Điều hướng trên thanh trang chủ -------------
document.querySelectorAll(".brand2 li a").forEach((element) => {
  // Duyệt các phần tử là các type của sản phẩm: Giày cỏ nhân tạo, giày cỏ tự nhiên, ...
  element.addEventListener("click", function (event) {
    // Tạo sự kiện click cho từng phần tử type sản phẩm
    // console.log("Successful");
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
    console.log("click successful");
    const getDataTypeBrand = event.target.getAttribute("data-type"); // Lấy giá trị attribute của type sản phẩm khi đang truy cập đến
    console.log(getDataTypeBrand);
    if (getDataTypeBrand) {
      brandPerPageMap.length = 0;
      otherTypeBrand.innerHTML = "";
      removeButtonPageBrand();
      updatePageProductBrand(getDataTypeBrand);
      addButtonPageBrand();
      noneListShoesProduct.style.display = "none";
      noneDetailProductShoes.style.display = "none";
      noneListClothesProduct.style.display = "none";
      noneDetailProductClothes.style.display = "none";
      contentNavigation.style.display = "none";
      imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
      specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
      productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
      listBrandProduct.style.display = "block"; // Hiển thị danh sách sản phẩm
      listBrandProduct.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
      buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
      buttonBackListProductBrand.innerHTML = "";
      buttonBackHome.addEventListener("click", function (event) {
        // Thêm sự kiện click
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
        specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
        productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
        listBrandProduct.style.display = "none"; // Ẩn đi danh sách sản phẩm
        buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
      });
    }
  });
});
// ------------ Code điều hướng list sản phẩm trên nav phụ ở ngay trong danh sách
managerListTypeBrand.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Successful");
    const getAttributeManagerListTypeBrand =
      event.currentTarget.getAttribute("data-type");
    console.log(getAttributeManagerListTypeBrand);
    if (getAttributeManagerListTypeBrand) {
      brandPerPageMap.length = 0;
      otherTypeBrand.innerHTML = "";
      removeButtonPageBrand();
      updatePageProductBrand(getAttributeManagerListTypeBrand);
      addButtonPageBrand();
      noneListShoesProduct.style.display = "none";
      noneDetailProductShoes.style.display = "none";
      noneListClothesProduct.style.display = "none";
      noneDetailProductClothes.style.display = "none";
      contentNavigation.style.display = "none";
    }
  });
});
