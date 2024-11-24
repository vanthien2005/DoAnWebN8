function addToCart(productId) {
  console.log(productId);
  var size = document.querySelector("#sizeSP").value;
  console.log(size);
  // var quantity = document.getElementById("quantity").value;
  var quantity = 1;
  var productArray = JSON.parse(localStorage.getItem("product"));
  var productTemp;
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].id == productId) {
      productTemp = productArray[i];
    }
  }
  if (localStorage.getItem("cart") === null) {
    var cartArray = [];
    //productTemp.size = size;
    productTemp.quantity = quantity;
    productTemp.totalPrice = productTemp.quantity * productTemp.gia;
    productTemp.size = size;
    cartArray.unshift(productTemp);
    localStorage.setItem("cart", JSON.stringify(cartArray));
  } else {
    var cartArray = JSON.parse(localStorage.getItem("cart"));
    var check = false;
    for (var i = 0; i < cartArray.length; i++) {
      if (cartArray[i].id == productTemp.id) {
        cartArray[i].quantity += quantity;
        cartArray[i].totalPrice = cartArray[i].gia * cartArray[i].quantity;
        check = true;
      }
    }
    if (!check) {
      productTemp.quantity = quantity;
      productTemp.size = size;
      productTemp.totalPrice = quantity * productTemp.gia;
      cartArray.unshift(productTemp);
    }
    localStorage.setItem("cart", JSON.stringify(cartArray));
  }
  //closeProductInfo();
}
const imgSpecialProduct = document.querySelector(".imgSpecialProduct");
const specialProductMap = {
  specialProduct: [],
};
const detailSpecialProductMap = {
  specialProduct: [],
};
const productShoes = LCS_SP.filter((product) => product.loai === "Giày");
const productClothes = LCS_SP.filter((product) => product.loai === "Quần Áo");
// console.log(productShoes, productClothes);
productShoes.forEach((product, index) => {
  if (index < 3) {
    specialProductMap.specialProduct.push(
      `<article class = "specialProduct" data-type = "specialProduct" data-index = "${index}">
                  <div class = "managerProductSpecial">
                    <header class = "headerImgSpecialProduct">
                      <a href="#" class = "managerImgSpecialProduct">
                        <img src="${product.anh1}" alt="firstPic">
                        <img src="${product.anh2}" alt="secondPic">
                      </a>
                    </header>
                    <footer class = "footerContentSpecialProduct">
                      <a href="#" class = "managerContentSpecialProduct">
                        <p>${product.ten}</p>
                        <p>${product.gia.toLocaleString("vi-VN")}</p>
                      </a>
                    </footer>
                  </div>
                </article>`
    );
  }
});
productClothes.forEach((product, index) => {
  if (index < 3) {
    specialProductMap.specialProduct.push(
      `<article class = "specialProduct" data-type = "specialProduct" data-index = "${
        3 + index
      }">
                  <div class = "managerProductSpecial">
                    <header class = "headerImgSpecialProduct">
                      <a href="#" class = "managerImgSpecialProduct">
                        <img src="${product.anh1}" alt="firstPic">
                        <img src="${product.anh2}" alt="secondPic">
                      </a>
                    </header>
                    <footer class = "footerContentSpecialProduct">
                      <a href="#" class = "managerContentSpecialProduct">
                        <p>${product.ten}</p>
                        <p>${product.gia.toLocaleString("vi-VN")}</p>
                      </a>
                    </footer>
                  </div>
                </article>`
    );
  }
});
productShoes.forEach((product, index) => {
  if (index < 3) {
    detailSpecialProductMap.specialProduct.push(
      `<article data-type = "specialProduct" data-id = "${index}">
                    <div class = "managerDetailSpecial">
            <header class = "managerImgDetailSpecial">
              <a href="#"><img src="${product.anh1}" alt="Hình ảnh thứ 1"></a>
              <a href="#">
              <img src="${product.anh2}" alt="Hình ảnh thứ 1">
              <img src="${product.anh3}" alt="Hình ảnh thứ 2">
              <img src="${product.anh4}" alt="Hình ảnh thứ 3">
              <img src="${product.anh5}" alt="Hình ảnh thứ 4">
              </a>
            </header>
            <footer class = "managerContentDetailSpecial">
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
              <select id="sizeSP">
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                </select>
              <a href="#">Hướng dẫn chọn kích cỡ</a>
              <div> 
              <button>Mua ngay</button>
              <button onclick="addToCart('${
                product.id
              }')">Thêm vào giỏ hàng</button>
             </div>
            </footer>
          </div>
        </article>`
    );
  }
});
productClothes.forEach((product, index) => {
  if (index < 3) {
    detailSpecialProductMap.specialProduct.push(
      `<article data-type = "specialProduct" data-id = "${3 + index}"> 
                      <div class = "managerDetailSpecial">
              <header class = "managerImgDetailSpecial">
                <a href="#"><img src="${product.anh1}" alt="Hình ảnh thứ 1"></a>
                <a href="#">
                <img src="${product.anh2}" alt="Hình ảnh thứ 1">
                <img src="${product.anh3}" alt="Hình ảnh thứ 2">
                <img src="${product.anh4}" alt="Hình ảnh thứ 3">
                <img src="${product.anh5}" alt="Hình ảnh thứ 4">
                </a>
              </header>
              <footer class = "managerContentDetailSpecial">
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
                <select id="sizeSP">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
                <a href="#">Hướng dẫn chọn kích cỡ</a>
                <div> 
                <button>Mua ngay</button>
                <button onclick="addToCart('${
                  product.id
                }')">Thêm vào giỏ hàng</button>
               </div>
              </footer>
            </div>
          </article>`
    );
  }
});
console.log(specialProductMap, detailSpecialProductMap);
imgSpecialProduct.innerHTML = specialProductMap.specialProduct.join("");
const articles = imgSpecialProduct.querySelectorAll("article");
console.log(articles);
function updateDetailSpecialProduct(
  getAttributeElementSpecialProduct,
  getIDElementSpecialProduct
) {
  if (
    detailSpecialProductMap[getAttributeElementSpecialProduct][
      getIDElementSpecialProduct
    ]
  ) {
    showDetailProduct.style.display = "block"; // Hiển thị phần tử chứa toàn bộ nội dung chi tiết sản phẩm
    showDetailProduct.innerHTML =
      detailSpecialProductMap[getAttributeElementSpecialProduct][
        getIDElementSpecialProduct
      ]; // Nội dung chi tiết của sản phẩm được click chọn
    window.scrollTo({ top: 0, behavior: "auto" });
    detailProductShoes.style.display = "block"; // Hiện thị nội dung chứa toàn bộ các nội dung chi tiết
    detailProductShoes.prepend(buttonBackHome); // Thêm button vào đầu ListShoesProduct
    buttonBackHome.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; // Font awesome back arrow left
    buttonBackListProductShoes.innerHTML = "";
    buttonBackHome.addEventListener("click", function (event) {
      // Thêm sự kiện click
      event.preventDefault(); // Ngăn chặn hành vi mặc định
      imgHome.style.display = "block"; // Hiện ảnh nền trang chủ
      specialProduct.style.display = "block"; // Hiện các sản phẩm nổi bật
      productDisplayHome.style.display = "block"; // Hiện lại danh sách sản phẩm trưng bày trang chủ
      detailProductShoes.style.display = "none"; // Ẩn đi danh sách sản phẩm
      contentNavigation.style.display = "none";
      buttonBackHome.innerHTML = ""; // Xóa đi nút button trên HTML mỗi khi click vào lại sẽ kh bị trùng lặp
      window.scrollTo({ top: 660, behavior: "auto" });
    });
  }
}
articles.forEach((e) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("successful");
    const getAttributeElementSpecialProduct =
      event.currentTarget.getAttribute("data-type");
    const getIDElementSpecialProduct =
      event.currentTarget.getAttribute("data-index");
    console.log(getAttributeElementSpecialProduct, getIDElementSpecialProduct);
    if (getAttributeElementSpecialProduct && getIDElementSpecialProduct) {
      updateDetailSpecialProduct(
        getAttributeElementSpecialProduct,
        getIDElementSpecialProduct
      );
      noneListClothesProduct.style.display = "none";
      noneDetailProductClothes.style.display = "none";
      noneListBrandProduct.style.display = "none";
      contentNavigation.style.display = "none";
      noneDetailProductBrand.style.display = "none";
      imgHome.style.display = "none"; // Ẩn ảnh nền trang chủ
      specialProduct.style.display = "none"; // Ẩn các sản phẩm nổi bật
      productDisplayHome.style.display = "none"; // Ẩn đi phần sản phẩm trưng bày trang chủ
      // Update nội dung chi tiết sản phẩm tương ứng
      const bigImgDetailSpecial = document.querySelector(
        ".managerImgDetailSpecial a:first-child img "
      ); // Truy cập vào phần tử ảnh lớn trong chi tiết sản phẩm
      const smallImgDetailSpecial = document.querySelectorAll(
        ".managerImgDetailSpecial a:last-child img "
      ); // Truy cập đến các ảnh nhỏ trong chi tiết sản phẩm
      let localImg = 0; // Cho biết vị trí ảnh nhỏ khi click ảnh
      // Sẽ cập nhật localImg thành vị trí của ảnh nhỏ vừa được nhấp,  luôn theo dõi ảnh hiện tại đang hiển thị
      // localImg sẽ cho ta luôn biết ảnh nào đang hiển thị ở ảnh lớn
      smallImgDetailSpecial.forEach(function (imgSmall, local) {
        // Duyệt qua tất cả các ảnh nhỏ imgSmall
        imgSmall.addEventListener("click", function (event) {
          // Thêm sự kiện click cho từng ảnh nhỏ
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          // console.log("Successful");
          bigImgDetailSpecial.src = imgSmall.src; // Thay đổi ảnh lớn là những ảnh nhỏ khi click chọn
          localImg = local; // Cật nhật vị trí của ảnh nhỏ khi click chọn
        });
      });
      bigImgDetailSpecial.addEventListener("click", function (event) {
        // Thêm sự kiện cho ảnh lớn
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        // console.log("Successful");
        localImg = (localImg + 1) % smallImgDetailSpecial.length; // Khi click chọn ảnh lớn, chỉ số của localImg sẽ thay đổi + 1
        // Sử dụng (localImg + 1) % smallImgDetailShoes.length để quay lại hình đầu tiên khi hết danh sách
        bigImgDetailSpecial.src = smallImgDetailSpecial[localImg].src; // Cật nhật ảnh lớn khi là các ảnh nhỏ khi click lần lượt vào ảnh lớn
      });
    }
  });
});
