const productShoesDisplayHome = document.querySelector(
  ".productShoesDisplayHome"
);
const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");
const productClothesDisplayHome = document.querySelector(
  ".productClothesDisplayHome"
);
const buttonLeftClothes = document.querySelector(".buttonLeftClothes");
const buttonRightClothes = document.querySelector(".buttonRightClothes");
// Định nghĩa lượng cuộn (có thể điều chỉnh dựa trên chiều rộng sản phẩm + khoảng cách)
const scrollAmount = 315; // Thay đổi giá trị này dựa trên chiều rộng sản phẩm của bạn

// Cuộn sang phải
buttonRight.addEventListener("click", () => {
  productShoesDisplayHome.scrollBy({
    // Phương thức cuộn hiển thị sản phẩm
    left: scrollAmount, // Sang trái
    behavior: "smooth",
  });
});

// Cuộn sang trái
buttonLeft.addEventListener("click", () => {
  productShoesDisplayHome.scrollBy({
    left: -scrollAmount, // Sang phải
    behavior: "smooth",
  });
});

buttonLeftClothes.addEventListener("click", () => {
  productClothesDisplayHome.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

buttonRightClothes.addEventListener("click", () => {
  productClothesDisplayHome.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});
